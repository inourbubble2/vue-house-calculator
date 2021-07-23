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
            this.getHousePrice()
            this.calculate()
            this.getLottoResult()
            this.getInvestResult()
            this.submitted = true
        },
        resubmit() {
            console.log('here')
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

                    if (!gotResult && cash + investment > this.targetHouse["price"]) {
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
                this.result["canBuyHouse"] = false
            }

            this.result["year"] = year
            this.result["month"] = month
        },
        getLottoResult() {
            if (this.userInput["lottoSelect"] > 0) {
                // Calculate the percentage of the lotto winning
                this.result["buyLotto"] = true

                if (this.userInput["lottoHope"] == true) {
                    // Add some luck
                }
            } else {
                this.result["buyLotto"] = false
            }
            // buyLotto: false,
            // winLotto: false,
        },
        getInvestResult() {
            if (this.userInput["investHope"] == true) {
                this.result["doInvest"] = true

                if  (Math.floor(Math.random() * 100) == 1) {
                    this.result["winInvest"] = true
                } else {
                    this.result["winInvest"] = false
                }
            } else {
                this.result["doInvest"] = false
            }
            // doInvest: false,
            // winInvest: false,
        },
        async getHousePrice() {
            // var requestURL = "https://house-calculator.netlify.app/static/house.json"
            // const res = await this.apiRequest('GET', requestURL)
            // console.log(res)
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