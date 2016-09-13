<template>
<div>
    <popup-picker title="地区" :data="area" :columns="3" :show-cell="false" :show.sync="showSelect" :value.sync="areaSelect" show-name v-ref:area></popup-picker>
    <group style="margin-top:-1.17647059em">
        <x-input style="padding:18px 24px" title="姓名" :value.sync="name" name="username" placeholder="请输入姓名" :show-clear="false">
            <div class="sex-item"><span style="border-right: 1px solid #ddd;" :class="{'sex-item-selected':sex=='女士'}" v-tap="sex='女士'">女士</span><span :class="{'sex-item-selected':sex=='先生'}" v-tap="sex='先生'">先生</span></div>
        </x-input>
        <x-input style="padding:18px 24px" title="手机号码" :value.sync="phone" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" readonly></x-input>
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
        Datetime
    },
    methods: {
        _show: function() {
            document.activeElement.blur();
            this.showSelect = true;
        },
        isFillData: function() {
            return this.name != "" && this.appoint_at != "" && this.areaSelect.length && this.address != ""
        },
        submit: function() {
            alert("下面没有了")
        },

    },

    data() {
        return {
            showSelect: false,
            area: [{
                name: '中国',
                value: 'china',
                parent: 0
            }, {
                name: '美国',
                value: 'USA',
                parent: 0
            }, {
                name: '广东',
                value: 'china001',
                parent: 'china'
            }, {
                name: '广西',
                value: 'china002',
                parent: 'china'
            }, {
                name: '美国001',
                value: 'usa001',
                parent: 'USA'
            }, {
                name: '美国002',
                value: 'usa002',
                parent: 'USA'
            }, {
                name: '广州',
                value: 'gz',
                parent: 'china001'
            }, {
                name: '深圳',
                value: 'sz',
                parent: 'china001'
            }, {
                name: '广西001',
                value: 'gx001',
                parent: 'china002'
            }, {
                name: '广西002',
                value: 'gx002',
                parent: 'china002'
            }, {
                name: '美国001_001',
                value: '0003',
                parent: 'usa001'
            }, {
                name: '美国001_002',
                value: '0004',
                parent: 'usa001'
            }, {
                name: '美国002_001',
                value: '0005',
                parent: 'usa002'
            }, {
                name: '美国002_002',
                value: '0006',
                parent: 'usa002'
            }],
            name: "",
            phone: localStorage.getItem("user"),
            areaSelect: [],
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
