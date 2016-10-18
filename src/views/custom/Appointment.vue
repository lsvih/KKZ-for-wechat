<template>
<div>
    <popup-picker title="地区" :data="area" :columns="3" :show-cell="false" :show.sync="showSelect" :value.sync="areaSelect" show-name v-ref:area></popup-picker>
    <group style="margin-top:-1.17647059em">
        <x-input style="padding:18px 24px" title="姓名" :value.sync="name" name="username" placeholder="请输入姓名" :show-clear="false">
            <div class="sex-item"><span style="border-right: 1px solid #ddd;" :class="{'sex-item-selected':sex=='女士'}" v-tap="sex='女士'">女士</span><span :class="{'sex-item-selected':sex=='先生'}" v-tap="sex='先生'">先生</span></div>
        </x-input>
        <x-input style="padding:18px 24px" title="手机号码" :value.sync="phone" name="mobile" keyboard="number" is-type="china-mobile" readonly></x-input>
        <div class="mask-the-cell-after"></div>
    </group>
    <group style="margin-top:-.7em;">
        <div class="mask-the-cell-before"></div>
        <cell style="padding:18px 24px;" title="地区" :value="$refs.area.getNameValues()||'请选择'" v-tap="_show()" is-link></cell>
        <x-textarea style="padding:18px 24px" :value.sync="address" :height="50" :max="100" name="address" placeholder="请填写详细地址"></x-textarea>
        <div class="mask-the-cell-after"></div>
    </group>
    <group style="margin-top:-.7em">
        <div class="mask-the-cell-before"></div>
        <datetime style="padding:18px 24px;" :value.sync="appoint_at" placeholder="请选择日期" :min-year=2016 :max-year=2017 format="YYYY-MM-DD HH:mm" title="预约上门时间" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分"
            confirm-text="完成" cancel-text="取消"></datetime>
        <div class="mask-the-cell-after"></div>
    </group>
    <div class="to-calculate" style="position:absolute" v-bind:class="{'active':isFillData()}" v-tap="isFillData()?submit():return;">确定</div>
    <loading :show="showLoading" text="正在预约，请稍后..."></loading>
    <alert :show.sync="showAlert" title="快快装">网络连接失败，请稍后再试</alert>
    <alert :show.sync="showSuccess" title="快快装" @on-hide="appoint_ok">预约成功，请等待管家联系</alert>
</div>
</template>

<script>
import PopupPicker from 'vux/src/components/popup-picker'
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import Picker from 'vux/src/components/picker'
import XTextarea from 'vux/src/components/x-textarea'
import XInput from 'vux/src/components/x-input'
import Checker from 'vux/src/components/checker'
import CheckerItem from 'vux/src/components/checker'
import Datetime from 'vux/src/components/datetime'
import Loading from 'vux/src/components/loading'
import Alert from 'vux/src/components/alert'
export default {
    components: {
        PopupPicker,
        Group,
        Picker,
        Cell,
        XTextarea,
        XInput,
        Checker,
        CheckerItem,
        Datetime,
        Loading,
        Alert
    },
    ready() {
        if (localStorage.getItem("user")) {
            this.phone = JSON.parse(localStorage.getItem("user")).mobile
        } else {
            this.$route.router.go({
                path: "/login?link=appointment"
            })
        }
    },
    methods: {
        _show: function() {
            document.activeElement.blur();
            this.showSelect = true;
        },
        isFillData: function() {
            return this.name != "" && this.appoint_at != "" && this.areaSelect.length && this.address != ""
        },
        appoint_ok() {
            location.href = "/wechat/#!/"
        },
        submit: function() {
            this.showLoading = true
            let city = this.$refs.area.getNameValues().split(" ")
            let that = this
            let appointstamp = new Date(this.appoint_at)
            appointstamp = appointstamp.getTime() / 1000
            let houseInfo = new FormData()
            houseInfo.append('user_id', JSON.parse(localStorage.getItem("user")).id)
            houseInfo.append('zone_code', '000000')
            houseInfo.append('province', city[0])
            houseInfo.append('city', city[1])
            houseInfo.append('county', city[2])
            houseInfo.append('street', "x")
            houseInfo.append('address', this.address)
            this.$http.post("/kkz/api/web/houses", houseInfo).then((res) => {
                let appointData = new FormData()
                appointData.append('house_id', res.data.data.id)
                appointData.append('user_id', JSON.parse(localStorage.getItem("user")).id)
                appointData.append('appointment', appointstamp)
                that.$http.post("/kkz/api/web/house-appointments", appointData).then((res) => {
                    that.showLoading = false
                    that.showSuccess = true
                }, (res) => {
                    that.showLoading = false
                    that.showAlert = true
                })
            }, (res) => {
                this.showLoading = false
                this.showAlert = true
            })
        },
    },
    data() {
        return {
            showSelect: false,
            showLoading: false,
            showAlert: false,
            showSuccess: false,
            area: [{
                name: '北京',
                value: 'beijing',
                parent: 0
            },{
                name: '北京市',
                value: 'bj',
                parent: 'beijing'
            }, {
                name: '东城',
                value: 'dc',
                parent: 'bj'
            }, {
                name: '西城',
                value: 'xc',
                parent: 'bj'
            }, {
                name: '海淀',
                value: 'hd',
                parent: 'bj'
            }, {
                name: '海淀',
                value: 'hd',
                parent: 'bj'
            },{
                name: '朝阳',
                value: 'cy',
                parent: 'bj'
            },{
                name: '丰台',
                value: 'ft',
                parent: 'bj'
            },{
                name: '门头沟',
                value: 'mtg',
                parent: 'bj'
            },{
                name: '石景山',
                value: 'sjs',
                parent: 'bj'
            },{
                name: '房山',
                value: 'fs',
                parent: 'bj'
            },{
                name: '通州',
                value: 'tz',
                parent: 'bj'
            },{
                name: '顺义',
                value: 'sy',
                parent: 'bj'
            },{
                name: '昌平',
                value: 'cp',
                parent: 'bj'
            },{
                name: '大兴',
                value: 'dx',
                parent: 'bj'
            },{
                name: '怀柔',
                value: 'hr',
                parent: 'bj'
            },{
                name: '平谷',
                value: 'pg',
                parent: 'bj'
            },{
                name: '延庆',
                value: 'yq',
                parent: 'bj'
            },{
                name: '密云',
                value: 'my',
                parent: 'bj'
            }],
            name: "",
            areaSelect: [],
            phone: "",
            address: "",
            sex: "女士",
            appoint_at: ""
        }
    }
}
</script>

<style scoped>
.picker-buttons {
    margin: 0 15px;
}

.sex-item {
    width: auto;
    height: 26px;
    line-height: 26px;
    text-align: center;
}

.sex-item span {
    display: inline-block;
    padding: 0 16px;
}

.sex-item-selected {
    color: #1EA87C;
}

.mask-the-cell-before {
    position: absolute;
    top: -1px;
    width: 100%;
    height: 5px;
    background-color: #fff;
    z-index: 1;
}

.mask-the-cell-after {
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 5px;
    background-color: #fff;
    z-index: 1;
}
</style>
