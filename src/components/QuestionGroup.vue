<template lang="">
    <div class="outer">
        <div class="form">
            <div class="container">
                <h3>당신의 자산</h3>
                <div class="item">
                    <p>보유 중인 현금은 얼마인가요?</p>
                    <input v-model.number="userInput['cash']" id="cash_asset" type="number" value="0"><label>만원</label> 
                </div>
                <div class="item">
                    <p>예적금/주식/가상화폐 등에 투자해놓은 금액은 얼마인가요?</p>
                    <input v-model.number="userInput['investment']" id="invested_asset" type="number" value="0"><label>만원</label>
                </div>
            </div>
            <div class="container">
                    <h3>당신의 소득</h3>
                    <div class="item">
                        <p>연봉은 얼마인가요? (세후)</p>
                        <input v-model.number="userInput['yearlyIncome']" id="yearly_income" type="number"><label>만원</label> 
                    </div>
                    <!-- <div class="item">
                        <input type="radio" name="tax_type" value="pre_tax" checked="checked"><label>세전</label>
                        <input type="radio" name="tax_type" value="post_tax"><label>세후</label> 
                    </div> -->
                    <div class="item">
                        <p>연봉 상승률은 대략 몇 %인가요?</p>
                        <input v-model.number="userInput['yearlyIncomeIncreaseRate']" id="yearly_income_increase_rate" type="number"><label>%</label>
                    </div>
            </div>
            <div class="container">
                <h3>당신의 지출</h3>
                <div class="item">
                    <p>한 달에 얼마를 사용하시나요?</p>
                    <input v-model.number="userInput['monthlySpending']" id="monthly_spending" type="number"><label>만원</label>
                </div>
                <!-- <div class="item">
                    <p>집을 사기 전에 결혼, 여행 등으로 인해 큰 지출이 있다면... </p><input id="unexpected_spending" type="number" ><label>만원 정도가 들 것 같아요.</label>
                </div> -->
                <!-- <div class="item">
                    <p>소비가 늘어날 것 같다면... </p>
                    <label>매년</label><input id="yearly_spending_increase_rate" type="number"><label>% 정도 늘어날 것 같아요.</label>
                </div> -->
            </div>
            <div class="container">
                <h3>당신의 투자</h3>
                <div class="item">
                    <label>매달 </label>
                    <input v-model.number="userInput['monthlyInvestment']" id="monthly_investment" type="number">
                    <label>만원 가량을 예적금/증권/암호화폐 등에 매달 투자하고 있습니다.</label>
                </div>
                <div class="item">
                    <p>연간 예상 수익률은 얼마인가요?</p>
                    <input v-model.number="userInput['yearlyReturnRate']" id="yearly_return_rate" type="number" >
                    <label>%</label>
                </div>
            </div>
            <div class="container">
                <h3>당신의 운</h3>
                <div class="item">
                    <label>나는 로또를</label>
                    <select v-model.number="userInput['lottoSelect']" id="lotto_select" name="lotto" onchange="select()">
                        <option value="7">일주일</option>
                        <option value="14">이주일</option>
                        <option value="30">한 달</option>
                        <option value="0">안 사요.</option>
                    </select>
                    <label class="lotto_none">간격으로</label> 
                    <input v-model.number="userInput['lottoCount']" id="lotto_count" type="number" class="lotto_none" value=0> <label class="lotto_none">장 삽니다.</label>
                </div>
                <div class="item">
                    <p>나는 아주 아주 특별한 운이 있어서 언젠가 꼭 로또 당첨이 될 것 같아요!</p>
                    <input v-model="userInput['lottoHope']" type="radio" name="lotto_hope" value=true><label>YES</label>
                    <input v-model="userInput['lottoHope']" type="radio" name="lotto_hope" value=false checked="checked"><label>NO...</label>
                </div>
                <div class="item">
                    <p>나의 주식/가상화폐 등 투자는 언젠가 꼭 대박이 날 수 있을 것 같아요! &#128640;&#128640;</p>
                    <input v-model="userInput['investHope']" type="radio" name="invest_hope" value=true><label>YES</label>
                    <input v-model="userInput['investHope']" type="radio" name="invest_hope" value=false checked="checked"><label>NO...</label>
                </div>
            </div>
            <div class="container">
                <h3>당신이 원하는 집</h3>
                    <div class="item">
                    <label>나는 </label>
                    <select v-model.trim="targetHouse['city']" id="city" name="city" onchange="select_city()">
                        <option value="서울">서울</option>
                        <option value="경기">경기</option>
                        <option value="부산">부산</option>
                        <option value="세종">세종</option>
                        <option value="대구">대구</option>
                        <option value="제주">제주</option>
                        <option value="인천">인천</option>
                        <option value="대전">대전</option>
                        <option value="울산">울산</option>
                        <option value="광주">광주</option>
                        <option value="경남">경남</option>
                        <option value="충남">충남</option>
                        <option value="전남">전남</option>
                        <option value="강원">강원</option>
                        <option value="전북">전북</option>
                        <option value="충북">충북</option>
                        <option value="경북">경북</option>
                    </select>
                    <label>의</label>
                    
                    <select v-model.trim="targetHouse['district']" id="district" name="district"></select>
                    <label>의</label>

                    <p></p>
                    <input v-model.number="targetHouse['size']" type="radio" name="home_size" value=25><label>25평대</label>
                    <input v-model.number="targetHouse['size']" type="radio" name="home_size" value=32><label>32평대</label>
                    <label>아파트에서 거주하고 싶어요.</label>
                </div>
            </div>
            <div class="button-container">
                <button @click="submit">계산하러 가기</button>
            </div>
            

            <Developer />
        </div>

</div>
</template>
<script>
import Developer from '@/components/Developer.vue'
export default {
    props: ["userInput", "targetHouse"],
    methods: {
        submit() {
            this.$emit("submit", this.userInput);
        }
    },
    name: 'QuestionGroup',
    components: {
        Developer,
    },
}
</script>
<style lang="scss">

.outer  {
    width: 95%;
    margin: 5px 10px 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    padding-top: 5px;
    padding-bottom: 30px;
    padding: 20px;
    margin: 15px 0px 15px 0px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 0 5px 0 #d6e0f5; 
}    
.item {
    position: relative;
    margin-bottom: 30px;
    line-height: 35px;
}
.item label {
    padding-right: 5px;
    padding-bottom: 5px;
}
.item input {
    text-align: right;
    margin-right: 5px;
}
.item input[type="number"] {
    max-width: 80px;
}
.item input[type="number"], .item select {
    height: 25px;
    background-color: transparent;
    box-shadow: 0 0 2px 0 cornflowerblue;
    border: 1px solid transparent;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.button-container {
    display:flex;
    justify-content:center;
    align-items: center;
}
button {
    width: 150px;
    padding: 10px;
    margin: 50px 0 0 0;
    border: none;
    border-radius: 5px; 
    background: cornflowerblue url('https://picsum.photos/id/1015/200/300?blur=2');
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
}


</style>