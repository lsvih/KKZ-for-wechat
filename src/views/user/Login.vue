<template>

<div class="login-content"><div style="z-index:9999" v-tap="ss">1123123123</div></div>
<div class="login-backgroud"></div>
</template>

<script>
import "../../scss/login.scss"
export default {
    data() {
        return {

        };
    },
    methods:{
      ss:function(){
        localStorage.setItem("user",1);
        this.$route.router.go({path:this.$route.query.link})
      }
    },ready:function(){
      if(localStorage.user) history.go(-1);
    }
}
</script>
