<template>
<footer>
<div class="user" @click="_user">
  <div class="icon"></div>
  <span v-if="!user">登录/注册</span>
  <span v-if="user">{{user}}</span>
</div>
<div class="caculate" @click="_caculate">
  <div class="icon"></div>
  <span>计算</span></div>
<div class="appointment" @click="_appointment">立即预约</div>
</footer>
</template>

<script>
import "../../scss/homeView.scss"
export default {
    data() {
        return {
          user:localStorage.user
        };
    },
    methods:{
      _user:function(){
        this.$route.router.go(this.user?{path:"/user"}:{path:"/login"})
      },
      _caculate:function(){
        this.$route.router.go({path:"/caculate"});
      },
      _appointment:function(){
        this.user?this.$route.router.go({path:"/appointment"}):this._user();
      }
    }
}
</script>
