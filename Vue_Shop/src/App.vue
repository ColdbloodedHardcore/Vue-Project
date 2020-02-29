<template>
  <div id="shop">   
    <site-header/>   

      <transition name="fade" mode="out-in">   

        <router-view></router-view>
        
      </transition>

    <site-footer />
  </div>
</template>

<script>
  export default {
    data() {
      return {        
        
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  /* .fade-enter {} */

  .fade-enter-active {
    animation: fadeInLeft .5s linear;
  }
  /* .fade-leave {} */

  .fade-leave-active {
    animation: fadeOutRight .5s linear;
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }

  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }

  .fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight;
  }  
</style>
