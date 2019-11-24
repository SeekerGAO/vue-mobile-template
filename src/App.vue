<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                transitionName: '',
            }
        },
        watch: {//使用watch 监听$router的变化
            $route(to, from) {
                if (to.meta.index > from.meta.index) {
                    //设置动画名称
                    this.transitionName = 'slide-left';
                } else if (to.meta.index === 100 && from.meta.index === undefined) {
                    this.transitionName = '';
                } else {
                    this.transitionName = 'slide-right';
                }
            },
        },
    }
</script>

<style scoped lang="less" type="text/less">
  html, body, #app {
    width: 100%;
    height: 100%;
  }

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all .4s;
    position: absolute;
    width: 100%;
    left: 0;
  }

  .slide-right-enter {
    transform: translateX(100%);
  }

  /*.slide-right-leave-active {*/
  /*  transform: translateX(-100%);*/
  /*}*/

  /*.slide-left-enter {*/
  /*  transform: translateX(100%);*/
  /*}*/

  /*.slide-left-leave-active {*/
  /*  transform: translateX(-100%);*/
  /*}*/

</style>
