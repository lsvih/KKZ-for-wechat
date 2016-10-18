<template>
<div class="login-content">
    <input v-model="phone" type="tel" id="phone" placeholder="手机号码" />
    <input v-model="verify" type="text" id="verify" placeholder="短信验证码" /><label class="send-verify" v-bind:class="{'active-verify':(verfy_phone()&&wait)}" v-tap="(verfy_phone()&&wait)?getVerify():return;">获取验证码</label>
    <div class="alert">{{alert}}</div>
    <l-buttom style="margin-top:14px" :font-size="16" border-color="transparent" color="rgba(255,255,255,.47)" width="100%" :height="48" :border-radius="24" font-color="#fff" v-tap="login">确定</l-buttom>
    <!-- <l-divider class="divider" color="fff">或</l-divider> -->
    <!-- <l-buttom :font-size="16" :line="true" color="#fff" width="100%" :height="48" :border-radius="24" v-tap="wx_login">微信登录</l-buttom> -->
</div>
<div class="login-backgroud"></div>
</template>

<script>
import "../../scss/login.scss"
import lDivider from "../../components/l-divider.vue"
import lButtom from "../../components/l-buttom.vue"
export default {
    components: {
        lButtom,
        lDivider
    },
    data() {
        return {
            alert: "",
            phone: "",
            verify: "",
            wait: true
        };
    },
    methods: {
        ss: function() {
            this.$route.router.go({
                path: this.$route.query.link
            })
        },
        verfy_phone: function() {
            return /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i.test(this.phone)
        },
        getVerify: function() {
            this.wait = false
            let that = this
            this.$http.get('/kkz/api/web/users/verify-code?mobile=' + this.phone).then((res) => {
                return;
            }, (res) => {
                that.alert = '验证码发送失败，请稍后再试'
                that.wait = true
            })
        },
        login: function() {
            let that = this
            if (!this.verfy_phone()) {
                this.alert = "请输入正确的手机号";
                return false;
            }
            if (!this.verify) {
                this.alert = "请输入正确的验证码";
                return false;
            }
            this.alert = "";
            // this.wx_login();
            var regData = new FormData()
            regData.append('SignupForm[mobile]',this.phone)
            regData.append('SignupForm[safe_code]',this.verify)
            var loginData = new FormData()
            loginData.append("LoginForm[mobile]", that.phone)
            loginData.append("LoginForm[safe_code]", that.verify)
            this.$http.post('/kkz/api/web/users/signup', regData).then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data.data))
                that.ss()
            }, (res) => {
                that.$http.post('/kkz/api/web/users/login', loginData).then((res) => {
                    localStorage.setItem("user", JSON.stringify(res.data.data))
                    that.ss()
                }, (res) => {
                    that.alert = "登录失败"
                    that.wait = true
                })
            })



        },
        // wx_login: function(){
        //   this.ss();
        // }
    },
    ready: function() {
        if (localStorage.getItem("user")) history.go(-1);
    }
}

</script>
