<template lang="">
    <div>
        <div class="intro">
            <div class="intro-container">
                <div class="intro-a-container">
                    <h2> {{targetHouse["city"]}}  {{targetHouse["city"]}}의 아파트를 사려면 </h2>
                        <h2>{{result["year"]}}년 {{result["month"]}}개월이 필요합니다. &#127968;</h2>
                </div>
            </div>
        </div>
    <div class="outer" >
        <div class="form">
            <div class="container">
                <div class="item">
                    <h3>{{targetHouse["city"]}} {{targetHouse["district"]}} {{targetHouse["size"]}}평대 아파트의 평균 시세는 {{targetHouse["price"] / 100000000}}억원이네요!</h3>
                    <p>&#128161; 2020년 7월 국토부 실거래가 평균을 바탕으로 한 자료입니다.</p>
                </div>
            </div>
            
            <!-- <div class="container" id="asset-container">
                <div class="item" id ="asset-item">
                    <h3>매 해 내가 모을 수 있는 돈은 다음과 같아요.</h3>
                    
                </div>
            </div> -->
            
            <div class="container">
                <div class="item">
                    <h3>로또 당첨?</h3>
                    <h4>운이 좋으시네요! 당첨될 만한 분이신가봐요!</h4>
                    <p><label class="took_year">#</label>년 <label class="took_month">#</label>개월 동안 총 <label class="lotto_total_count">#</label>장의 로또를 샀을 때 당첨될 확률 만큼 랜덤한 숫자를 뽑아 당첨인지 계산해보았답니다.</p>
                    <p>특별한 운이 있다고 체크하셔서 실제 로또 확률에서 0.01%를 더한 결과 값이에요.</p>
                    <p>물론 실제로 당첨이 된 건 아니지만, 이 어마무시한 확률을 뚫은 당신이니 실제로도 당첨될지도 모르죠!</p>
                </div>
            </div>

            <div class="container">
                <div class="item">
                    <h3>로또 당첨?</h3>
                    <h4> 아쉽게도 <b>당첨이 되지 않았어요.</b> </h4>
                    <p><label class="took_year">#</label>년 <label class="took_month">#</label>개월 동안 총 <label class="lotto_total_count">#</label>장의 로또를 샀을 때 당첨될 확률 만큼 랜덤한 숫자를 뽑아 당첨인지 계산해보았답니다.</p>
                    <p>특별한 운이 있다고 체크하셔서 실제 로또 확률에서 0.01%를 더한 결과 값이에요.</p>
                    <p>하지만 인생은 알 수 없는 법! 다음 주의 1등이 당신이 될지도 모르죠!</p>
                </div>
            </div>

            <div class="container">
                <div class="item">
                    <h3>투자 떡상?</h3>
                    <p>투자의 귀재가 되실 건가봐요!</p>
                    <p>전업투자자 중 단 1%만이 성공한다는 속설에 기반해서 당신이 그 1%인지를 판별하는 랜덤한 숫자를 뽑아보았어요.</p>
                    <p>그 1%가 되실 건가 봐요.</p>
                    <p>실제 투자와는 전혀 관계가 없는 숫자일 뿐이지만, 무언가 좋은 일이 생기실 것 같네요!</p>
                </div>
            </div>

            <div class="container">
                <div class="item">
                    <h3>투자 떡상?</h3>
                    <p>나의 투자는 떡상할 수 있을까요?</p>
                    <p>전업투자자 중 단 1%만이 성공한다는 속설에 기반해서 당신이 그 1%인지를 판별하는 랜덤한 숫자를 뽑아보았어요.</p>
                    <p>아쉽게도 그 1%는 아니네요.</p>
                    <p>하지만 고작 컴퓨터가 무작위로 뽑은 숫자가 의미가 있을까요? </p>
                    <p>당신의 투자 실력이라면 언젠가 상한가를 맞이할 거라고 믿어요!</p>
                </div>
            </div>

            <div class="button-container">
                <button >테스트하러 가기</button>
            </div>
            
            <div class="button-container">
                <button >공유하기</button>
            </div>
            
            <p></p>
            
            <div class="intro-b-container">
                <p>&#128161; 공유될 텍스트 미리보기
                    <br>
                    " 내집마련 계산기를 해보았어요!
                    <br>
                    {{targetHouse["city"]}} {{targetHouse["district"]}}의 {{targetHouse["size"]}}평대 아파트를 사려면 {{result["year"]}}년 {{result["month"]}}개월이 걸리네요. 
                    <br>
                    from http://house-calculator.netlify.app " </p>
            </div>

            <div class="developer">
                <p onclick="document.getElementById('modal').style.display='flex'">@Developer</p>
            </div>
            <div id="modal" class="modal" style="display:none">
                <div class="modal__content">
                    <h1>내집마련 계산기 &#127968;</h1>
                    <p>
                        취업과 주거에 고민이 많은 대학생이 만든 포트폴리오입니다. 
                    </p>
            
                    <div class="modal__footer">
                        <span style="font-size:18px">&#9993;</span> inourbubble2@gmail.com
                    </div>
                </div>
                <p onclick="document.getElementById('modal').style.display='none'" class="modal__close">&times;</p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props: ["result", "targetHouse"],
    name: "Result",
    components: {
    }
}
</script>
<style lang="">
    
</style>