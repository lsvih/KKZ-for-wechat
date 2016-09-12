<template>
<footer>
<div class="user" v-tap="_user">
  <div class="icon"></div>
  <span v-if="!user">登录/注册</span>
  <span v-if="user">{{user}}</span>
</div>
<div class="calculate" v-tap="_calculate">
  <div class="icon"></div>
  <span>计算</span></div>
<div class="appointment" v-tap="_appointment">立即预约</div>
</footer>
</template>

<script>
import "../../scss/homeView.scss"
export default {
    data() {
        return {
          user:localStorage.getItem("user")
        };
    },
    methods:{
      _user:function(){
        this.user?this.$route.router.go({path:"/user"}):this.$route.router.go({path:"/login?link=user"})
      },
      _calculate:function(){
        this.$route.router.go({path:"/calculate"});
      },
      _appointment:function(){
        this.user?this.$route.router.go({path:"/appointment"}):this.$route.router.go({path:"/login?link=appointment"});
      }
    }
}
</script>
