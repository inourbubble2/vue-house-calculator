<template lang="">
    <div>
        <Banner />
        <div v-if="submitted">
            <Result 
                :result="result"
                :targetHouse="targetHouse"/>
        </div>
        <div v-else>
            <Intro />
            <QuestionGroup 
                :userInput="userInput"
                :targetHouse="targetHouse"
                @submit="submit"/>
        </div>
    </div>
</template>
<script>
import Banner from '@/components/Banner.vue'
import Intro from '@/components/Intro.vue'
import QuestionGroup from '@/components/QuestionGroup.vue'
import Result from '@/components/Result.vue'

export default {
    methods: {
        submit() {
            console.log(this.userInput, this.targetHouse)
            this.submitted = true

            // const targetHousePrice = this.getTargetHousePrice(userInput["city"], userInput["district"])
            // const targetHousePrice = this.getTargetHousePrice()
            this.calculate()
        },
        calculate() {
            const UNIT_OF_MONEY = 10000

            let yearlyIncomeWithIncrease = this.userInput["yearlyIncome"] * UNIT_OF_MONEY
            let cash = this.userInput["cash"] * UNIT_OF_MONEY
            let investment = this.userInput["investment"] * UNIT_OF_MONEY
            let year = 0
            let month = 1
            let gotResult = false
            
            while (year < 10) {
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
            }

            this.result["year"] = year
            this.result["month"] = month
        }
    },
    name: "Test",
    components: {
        Banner,
        Intro,
        QuestionGroup,
        Result,
    },
    data() {
        return {
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
                district: '도봉구',
                size: 25,
                price: 700000000,
            },
            result: {
                year: 0,
                month: 0,
            },
            submitted: false,
            
        }
    }
}
</script>
<style lang="">
    
</style>