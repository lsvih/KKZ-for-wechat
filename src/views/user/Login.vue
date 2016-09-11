<template>

<div class="login-content"><div style="z-index:9999" @click="ss">1123123123</div></div>
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
        history.go(-1)
      }
    }
}
</script>
