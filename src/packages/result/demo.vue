
<template>
  <div class="wxc-demo">
    <nut-result  :icon="icon"
                :title="title"
                :desc="desc"
                padding-top="116"
                @onResultClick="resultClicked"
                class="result"
                ></nut-result>
  </div>
</template>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }
  .result{
    background-color: rgb(242, 243, 244);
  }
</style>

<script>
  import TYPE from './result.js';
  import nutResult from '../../packages/result/index.vue';

  export default {
    components:{nutResult},
    data: () => ({
      icon: TYPE['error']['icon'],
      title: TYPE['error']['title'],
      desc: TYPE['error']['desc'],
    }),
    methods: {
      resultClicked (e) {
        this.$toast.text(`${e.title}`);
      }
    }
  };
</script>
