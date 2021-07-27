<template lang="">
    <div>
        <div class="intro">
            <div class="intro-container">
                <div class="intro-a-container" v-if='result["canBuyHouse"]'>
                    <h2> {{targetHouse["city"]}}  {{targetHouse["district"]}}의 아파트를 사려면 </h2>
                        <h2>{{result["year"]}}년 {{result["month"]}}개월이 필요합니다. &#127968;</h2>
                </div>
                <div class="intro-a-container" v-else>
                    <h2> 주택 구입에 100년이 더 넘는 시간이 걸려요... </h2>
                    <h2> 입력을 다르게 해서 테스트를 해보세요! </h2>
                </div>
            </div>
        </div>
    <div class="outer" >
        <div class="form">
            <div class="container">
                <div class="item">
                    <h3>{{targetHouse["city"]}} {{targetHouse["district"]}} {{targetHouse["size"]}}평대 아파트의 평균 시세는 {{targetHouse["price"]}}억 원이네요!</h3>
                    <p>&#128161; 2020년 7월 국토부 실거래가 평균을 바탕으로 한 자료입니다.</p>
                </div>
            </div>
            
            <!-- <div class="container" id="asset-container">
                <div class="item" id ="asset-item">
                    <h3>매 해 내가 모을 수 있는 돈은 다음과 같아요.</h3>
                    
                </div>
            </div> -->
            
            <div v-if="result['buyLotto']">
                <div v-if="result['winLotto']" class="container">
                    <div class="item">
                        <h3>로또 당첨?</h3>
                        <h4>운이 좋으시네요! 당첨될 만한 분이신가봐요!</h4>
                        <p> 로또 1등에 당첨될 확률은 대략 1/8145060% 라고 해요. </p>
                        <p>{{result["year"]}}년 {{result["month"]}}개월 동안 약 총 {{result["lottoCount"]}}장의 로또를 샀을 때 당첨될 확률 만큼 랜덤한 숫자를 뽑아 당첨인지 계산해보았답니다.</p>
                        <p>물론 실제로 당첨이 된 건 아니지만, 이 어마무시한 확률을 뚫은 당신이니 실제로도 당첨될지도 모르죠!</p>
                    </div>
                </div>

                <div v-else class="container">
                    <div class="item">
                        <h3>로또 당첨?</h3>
                        <h4>시뮬레이션 상 당첨이 되지 않았어요. </h4>
                        <p> 로또 1등에 당첨될 확률은 대략 1/8145060% 라고 해요. </p>
                        <p>{{result["year"]}}년 {{result["month"]}}개월 동안 총 약 {{result["lottoCount"]}}장의 로또를 샀을 때 당첨될 확률 만큼 랜덤한 숫자를 뽑아 당첨인지 계산해보았답니다.</p>
                        <p>하지만 인생은 알 수 없는 법! 다음 주 1등이 당신이 될지도 모르죠!</p>
                    </div>
                </div>
            </div>
            
            <div v-if="result['doInvest']">
                <div v-if="result['winInvest']" class="container">
                    <div class="item">
                        <h3>투자 떡상?</h3>
                        <p>투자의 귀재가 되실 건가봐요!</p>
                        <p>전업투자자 중 단 1%만이 성공한다는 속설에 기반해서 당신이 그 1%인지를 판별하는 랜덤한 숫자를 뽑아보았어요.</p>
                        <p>그 1%가 되실 건가 봐요.</p>
                        <p>실제 투자와는 전혀 관계가 없는 숫자일 뿐이지만, 무언가 좋은 일이 생기실 것 같네요!</p>
                    </div>
                </div>

                <div v-else class="container">
                    <div class="item">
                        <h3>투자 떡상?</h3>
                        <p>나의 투자는 떡상할 수 있을까요?</p>
                        <p>전업투자자 중 단 1%만이 성공한다는 속설에 기반해서 당신이 그 1%인지를 판별하는 랜덤한 숫자를 뽑아보았어요.</p>
                        <p>아쉽게도 그 1%는 아니네요.</p>
                        <p>하지만 고작 컴퓨터가 무작위로 뽑은 숫자가 의미가 있을까요? </p>
                        <p>당신의 투자 실력이라면 언젠가 성공할 거라고 믿어요!</p>
                    </div>
                </div>
            </div>

            <div class="button-container">
                <button @click="$emit('resubmit')">다시 테스트</button>
            </div>
            
            <div class="button-container">
                <button @click="share()">공유</button>
            </div>
            
            <p></p>
            
            <div class="intro-b-container">
                <p>&#128161; 공유될 텍스트 미리보기 </p>
                    <p> " 내집마련 계산기를 해보았어요! </p>
                    <p v-if="this.result['canByHouse']"> {{targetHouse["city"]}} {{targetHouse["district"]}}의 {{targetHouse["size"]}}평대 아파트를 사려면 {{result["year"]}}년 {{result["month"]}}개월이 걸리네요. </p>
                    <p v-else> {{this.targetHouse["city"]}} {{this.targetHouse["district"]}}의 {{this.targetHouse["size"]}}평대 아파트를 사려면 100년이 더 넘는 기간이 걸려요... </p>
                    <p> from http://house-calculator.netlify.app " </p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props: ["result", "targetHouse"],
    methods: {
        async share() {
            const share_title =  `내집마련 계산기를 해보았어요!`
            let share_text = ''
            if(this.result["canByHouse"])
                share_text = this.targetHouse["city"] + " " + this.targetHouse["district"]  + "의 " + this.targetHouse["size"] + "평대 아파트를 사려면 " 
                + this.result["year"] + "년 "+ this.result["month"] + " 개월이 걸리네요. from "
            else
                share_text = this.targetHouse["city"] + " " + this.targetHouse["district"]  + "의 " + this.targetHouse["size"] + "평대 아파트를 사려면 " 
                + " 100년이 넘는 기간이 걸려요... from "
            
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: share_title,
                        text: share_text,
                        url: '',
                    })
                    .then(() => {
                        console.log('Thanks for sharing!')
                    })
                } catch(e) {
                    console.error(e)
                }
            } else {
                // TODO("Mobile share feature")
            }
            
        }
    },
    name: "Result",
    components: {
    }
}
</script>
<style lang="">
    
</style>