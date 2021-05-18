<template lang="">
    <div class="banner">
        <h1 id="banner h1">내집마련 계산기</h1>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .banner {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 900;
    }
    .banner h1 {
        background: cornflowerblue url('https://picsum.photos/id/1015/200/300?blur=2');
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        font-size: 42px;
    }
    @media (min-width: 768px) {
        .banner h1 {
            font-size: 72px;
        }
    }
</style>