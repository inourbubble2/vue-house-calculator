<template lang="">
    <div>
        <Banner />
        <div v-if="submitted">
            <Result 
                :result="result"
                :targetHouse="targetHouse"
                @resubmit="resubmit"/>
        </div>
        <div v-else>
            <Intro />
            <QuestionGroup 
                :userInput="userInput"
                :targetHouse="targetHouse"
                :house="house"
                @submit="submit"/>
        </div>
        <Developer />
    </div>
</template>
<script>
import Banner from '@/components/Banner.vue'
import Developer from '@/components/Developer.vue'
import Intro from '@/components/Intro.vue'
import QuestionGroup from '@/components/QuestionGroup.vue'
import Result from '@/components/Result.vue'
import axios from 'axios'

export default {
    name: "Test",
    components: {
        Banner,
        Intro,
        QuestionGroup,
        Result,
        Developer,
    },
    mounted() {
        axios.get("https://inourbubble2.github.io/house-calculator/static/house.json").then(response => (this.house = response.data))
    },
    methods: {
        getDistricts(city) {
            return Object.keys(this.house[city])
        },
        submit() {
            this.submitted = false
            this.calculate()
            this.getLottoResult()
            this.getInvestResult()
            this.submitted = true
        },
        resubmit() {
            this.submitted = false
        },
        calculate() {
            const UNIT_OF_MONEY = 10000

            let yearlyIncomeWithIncrease = this.userInput["yearlyIncome"] * UNIT_OF_MONEY
            let cash = this.userInput["cash"] * UNIT_OF_MONEY
            let investment = this.userInput["investment"] * UNIT_OF_MONEY
            let year = 0
            let month = 1
            let gotResult = false
            
            while (year < 100) {
                let monthlyIncome = yearlyIncomeWithIncrease / 12.0

                let yearlyInvestment = this.userInput["monthlyInvestment"] * UNIT_OF_MONEY * 12.0
                let yearlyInvestmentWithReturn = yearlyInvestment * (1 + this.userInput["yearlyReturnRate"] * 0.01)
                let monthlyInvestmentWithReturn = yearlyInvestmentWithReturn / 12.0

                for (month = 1; month < 13; month++) {
                    cash += monthlyIncome
                    cash -= this.userInput["monthlySpending"] * UNIT_OF_MONEY
                    cash -= this.userInput["monthlyInvestment"] * UNIT_OF_MONEY
                    investment += monthlyInvestmentWithReturn

                    if (cash + investment > this.targetHouse["price"] * UNIT_OF_MONEY * UNIT_OF_MONEY) {
                        gotResult = true
                        break
                    }
                }

                if (gotResult) {
                    if (month > 12) {
                        month = 1
                        year += 1
                    }
                    break
                }

                year += 1
                yearlyIncomeWithIncrease += yearlyIncomeWithIncrease * (this.userInput["yearlyIncomeIncreaseRate"] / 100)
                
            }

            if (year == 100) {
                console.log("주택 구입에 100년이 더 넘게 소요됨.")
                month = 0
                this.result["canBuyHouse"] = false
            } else {
                this.result["canBuyHouse"] = true
            }

            this.result["year"] = year
            this.result["month"] = month
        },
        getLottoResult() {
            if (this.userInput["lottoSelect"] > 0) {
                this.result["buyLotto"] = true
                this.result["lottoCount"] = parseInt((this.result["year"] * 365 + this.result["month"] * 30) / this.userInput["lottoSelect"] * this.userInput["lottoCount"])
                let lottoPercent = (1 / 8145060) * this.result['lottoCount']

                if (this.userInput["lottoHope"]) {
                    lottoPercent += 0.01
                }
                var x = Math.random()
                if (lottoPercent > x) {
                    this.result["winLotto"] = true
                } else {
                    this.result["winLotto"] = false
                }
            } else {
                this.result["buyLotto"] = false
            }
        },
        getInvestResult() {
            if (this.userInput["investHope"]) {
                this.result["doInvest"] = true

                if  (Math.floor(Math.random() * 100) == 1) {
                    this.result["winInvest"] = true
                } else {
                    this.result["winInvest"] = false
                }
            } else {
                this.result["doInvest"] = false
            }
        },
    },
    data() {
        return {
            house: {},
            userInput: {
                cash: 0,
                investment: 0,
                yearlyIncome: 0,
                yearlyIncomeIncreaseRate: 0,
                monthlySpending: 0,
                monthlyInvestment: 0,
                yearlyReturnRate: 0,
                lottoSelect: 0,
                lottoCount: 0,
                lottoHope: false,
                investHope: false,
            },
            targetHouse: {
                city: '서울',
                district: '강남구',
                size: 25,
                price: 0,
            },
            result: {
                year: 0,
                month: 0,
                buyLotto: false,
                winLotto: false,
                lottoCount: 0,
                doInvest: false,
                winInvest: false,
                canBuyHouse: false,
            },
            submitted: false,
            
        }
    }
}
</script>
<style lang="">
    
</style>