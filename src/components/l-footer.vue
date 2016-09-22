<template>
<footer>
    <div class="user" v-tap="_user">
        <div class="icon"></div>
        <span v-if="!user">登录/注册</span>
        <span v-if="user">我的</span>
    </div>
    <div class="calculate" v-tap="_calculate">
        <div class="icon"></div>
        <span>计算报价</span></div>
    <div class="appointment" v-tap="_appointment">立即预约</div>
</footer>
</template>
<script>
export default {
    props: {
        user: "",
    },
    methods: {
        _user: function() {
            this.user ? this.$route.router.go({
                path: "/user"
            }) : this.$route.router.go({
                path: "/login?link=user"
            })
        },
        _calculate: function() {
            this.$route.router.go({
                path: "/calculate"
            });
        },
        _appointment: function() {
            this.user ? this.$route.router.go({
                path: "/appointment"
            }) : this.$route.router.go({
                path: "/login?link=appointment"
            });
        }
    }
}
</script>
<style lang="sass">
$green: #1EA87C;
$grey: #878787;

footer {
    border-top: 1px solid #eee;
    position: fixed;
    bottom: 0;
    height: 52px;
    width: 100%;
    background-color: #fff;
    color: #fff;
    font-size: 18px;
    text-align: center;
    z-index: 10;
    .calculate,
    .user {
        width: 22%;
        margin-left: 7px;
        padding-top: 7px;
        color: $grey;
        font-size: 10px;
        float: left;
        text-align: center;

        span {
            display: block;
            padding-top: 3px;
        }

        &:hover {
            color: $green;
        }
    }

    .calculate {
        margin-left: -7px;
    }

    .icon {
        height: 23px;
        width: 22px;
        background-size: 100% 100%;
        margin-left: calc( 50% - 11px );
    }

    .user .icon {
        background-image: url("../images/icon/User.png");

        &:hover {
            background-image: url("../images/icon/User-active.png");
        }
    }

    .calculate .icon {
        background-image: url("../images/icon/Calculate.png");

        &:hover {
            background-image: url("../images/icon/Calculate-active.png");
        }
    }

    .appointment {
        float: right;
        width: calc( 55% - 20px );
        margin: 5px 10px;
        height: 41px;
        line-height: 41px;
        color: $green;
        border: 1px solid #ccc;
        border-radius: 20.5px;
    }
}
</style>
