<template>
  <div>
    <lc-title title="lc-bank"></lc-title>
    <category title="使用案例"></category>

    <div class="btn" @click="openPopup">
        <span class="btn-txt">点击选择银行卡</span>
    </div>

    <lc-popup height="400"
                :show="isPopShow"
                @LcPopupOverlayClicked="isPopShow=false"
                pos="bottom">
        <lc-bank
          :list="cardList"
          @bankSelected="selectHandler"
        ></lc-bank>        
    </lc-popup>

  </div>
</template>

<style scoped>
  .btn {
    width: 300px;
    height: 40px;
    margin-top: 75px;
    margin-left: 38px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background-color: #399de2;
    border-color: #399de2;
  }
  .btn-txt{
    color: #ffffff;
    font-size: 13px;
  }
</style>

<script>

  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';

  export default {
    components: { LcTitle, Category },
    data: () => ({
      cardList: [],
      isPopShow: false
    }),
    created () {
            this.cardList = [
                {
                    bank: 'abc',
                    num: '2314',
                    balance: 136123.00,
                    tradeLimit: 50,
                    dayLimit: 100,
                    special: '1折起',
                    visa: false
                },
                {
                    bank: 'cmb',
                    num: '8732',
                    balance: 136123.00,
                    tradeLimit: 50,
                    dayLimit: 100,
                    visa: false
                },
                {
                    bank: 'icbc',
                    num: '8732',
                    balance: 136123.00,
                    tradeLimit: 50,
                    dayLimit: 100,
                    visa: true
                },
                {
                    bank: 'boc',
                    num: '3456',
                    balance: 136123.00,
                    tradeLimit: 50,
                    dayLimit: 100,
                    visa: true
                },
                {
                    bank: 'cmbc',
                    num: '7523',
                    balance: 136123.00,
                    tradeLimit: 50,
                    dayLimit: 100,
                    visa: true
                },
                {
                    bank: 'psbc',
                    num: '5654',
                    balance: 136123.00,
                    tradeLimit: 50,
                    dayLimit: 100,
                    visa: true
                }
            ]
    },
    methods: {
      selectHandler(data){
        console.log(data)
        setTimeout(()=>{this.isPopShow = false},300)
      },
      openPopup(){
        this.isPopShow = true;
      }
    }
  };
</script>
