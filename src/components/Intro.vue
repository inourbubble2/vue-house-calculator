<template lang="">
    <div class="intro">
        <div class="intro-container">
            <div class="intro-a-container">
                <p>내 소득으로</p>
                <p>아파트를 사기까지 몇 년이 걸릴까?&#127968;</p>
            </div>
            <div class="intro-b-container">
                <p>&#128161; 본 테스트는 디테일한 변수까지 고려하지 않습니다. 오직 재미로만 즐겨주세요!</p>
                <p>&#128161; 사용자가 작성한 정보를 절대 수집하거나 사용하지 않으니 안심하고 즐겨주세요.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Intro',
    
}
</script>
<style lang="scss">
.intro {
    position: relative;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.intro-container {
    max-width: 750px;
    padding: 15px;
}
.intro-a-container p{
    font-size: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-weight: 500;
}
.intro-b-container {
    padding-top: 30px;
}
.intro-b-container p {
    padding-left: 10px;
    padding-right: 10px;
    text-align: justify;
    color: rgb(173, 173, 173);
    font-weight: 300;
}
</style>