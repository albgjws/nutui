<template>
  <div class="fold-container">
    <div class="fold-container-row" @click="foldProcess()">
      <span class="fold-title">{{title}}</span>
      <div class="fold-wrap" @click="moreList()">
         <span class="fold-desc">{{desc}}</span>
         <img class="fold-icon" :src="isFolded?foldIcon:expandIcon"/>       
      </div>     
    </div>
    <slot v-if="!isFolded" name="foldContent"></slot>
  </div>
</template>

<script>
  export default {
    name:"nut-fold-list",
    props:{
      title:{
        type: String,
        default: 'title'
      },
      desc:{
        type: String,
        default: 'desc'
      },
      folded:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        isFolded: false,
        foldIcon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAApElEQVRIS7XUUQ2DQBCE4R8HlYAFHFAHOKA4qBMkUClIQEKlNPtA0hDozSzlknv9dnK3uxUXneoilxJ8A+K+3QAl+AmMwAC8HLwEhxVg7+IKnMJV2MYd2MJdWMYzsIRn4W/8DszbVjwLd0ALLP+Co7cP0SiSSbwOTLOXdE3uwvIUOrCMOk9hoSpsowr8ACZ3sylwLPn61+8f7Wjn85w9n+pjqcAHgrIiFyR718EAAAAASUVORK5CYII=',
        expandIcon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAsElEQVRIS+3UUQ2DMBSF4R8HOBgShoNNAg5whIRlSoaESZiESSBNuA1ltD104Y2+9aFfTk5vW3HQqg5yOWHfrFVRAw3w/qPzwDDYgRfgXog79DWHa4GPwT3wAL4FuKFX4Ak4K5iKEnwTXcNuvwePoluwiifRGJzDs2gKjuESmoPXeAcMQHD7sblX/gq7UDP8SKUekwIvk0uoUsUy1A0Y1SevJla9n09o98HcgTOxb2gCITktF7wp7hQAAAAASUVORK5CYII='
      }
    },
    methods:{
      foldProcess(){
        this.isFolded=!this.isFolded;
        this.$emit("fold",this.isFolded);
      },
      moreList(){
          this.$emit("more",this.isFolded)
      }
    },
    created(){
      this.isFolded = this.folded;
    }
  }
</script>

<style scoped>
  .fold-container{
    padding-left: 18px;
    padding-right: 18px;
  }
  .fold-container-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-bottom:1px solid #c7c7c7;
  }
  .fold-title{
    font-size: 15px;
    color: #4a4a4a;
  }
  .fold-wrap{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .fold-desc{
    font-size: 12px;
    color: #787878;
    padding-right: 15px;
  }
  .fold-icon{
    width: 11px;
    height: 11px;
  }
</style>
