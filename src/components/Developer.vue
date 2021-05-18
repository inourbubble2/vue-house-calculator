<template lang="">
    <div>
        <div class="developer">
            <p onclick="document.getElementById('modal').style.display='flex'">@Developer</p>
        </div>
        <div id="modal" class="modal" style="display:none">
            <div class="modal__content">
                <h1>내집마련 계산기 &#127968;</h1>
                <p>
                    취업과 주거에 고민이 많은 대학생이 만든 포트폴리오입니다. 내집마련에 걸리는 시간을 계산해보면 재밌지 않을까? 라는 마음으로 만들게 되었습니다.
                </p>
        
                <div class="modal__footer">
                    <span style="font-size:18px">&#9993;</span> inourbubble2@gmail.com
                </div>
            </div>
            <p onclick="document.getElementById('modal').style.display='none'" class="modal__close">&times;</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.developer {
    margin-top:150px;
    text-align: center;
}

.developer p {
    text-decoration: none;
    text-transform: uppercase;
    color: #cacaca;
    font-family: 'Roboto', sans-serif;
}
.modal {
    display: none;
    opacity: 1;
    position: absolute;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(77, 77, 77, .7);
    transition: all .4s;
  }
  
  .modal:target {
    visibility: visible;
    opacity: 1;
  }
  
  .modal__content {
    position: relative;
    max-width: 95%;
    background: #fff;
    padding: 1em 2em;
  }
  
  .modal__footer {
    padding:20px 0 0 0;
    text-align: right;
    color:#cacaca;
  }
  .modal__close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #cacaca;
    text-decoration: none;
  }
</style>