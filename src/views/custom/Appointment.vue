<template>
<div>

    <group title="">
        <x-input title="姓名" :value.sync="name" name="username" placeholder="请输入姓名" :show-clear="false">
            <div class="sex-item"><span style="border-right: 1px solid #ddd;" :class="{'sex-item-selected':sex=='女士'}" v-tap="sex='女士'">女士</span><span :class="{'sex-item-selected':sex=='先生'}" v-tap="sex='先生'">先生</span></div>
        </x-input>
        <x-input title="手机号码" :value.sync="phone" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>

    <group title="">
        <cell title="地区" :value="$refs.area.getNameValues()" v-tap="_show()"></cell>

        <x-textarea :value.sync="address" :height="50" :max="100" name="address" placeholder="请填写详细地址"></x-textarea>
    </group>

    <group title="" class="data-time-picker">
        <datetime :value.sync="appoint_at" placeholder="请选择日期" :min-year=2016 :max-year=2017 format="YYYY-MM-DD HH:mm" title="预约上门时间" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
    </group>
    <div class="to-calculate" style="position:absolute" v-bind:class="{'active':isFillData()}" v-tap="isFillData()?submit():return;">确定</div>
    <popup-picker title="地区" :data="area" :columns="3" :show-cell="false" :show.sync="showSelect" :value.sync="areaSelect" show-name v-ref:area></popup-picker>
</div>
</template>

<script>
import {
    PopupPicker,
    Group,
    Cell,
    Picker,
    XTextarea,
    XInput,
    Checker,
    CheckerItem,
    Datetime
} from 'vux'
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
            return this.name != "" && this.appoint_at != "" && this.areaSelect.length && this.address != "" && /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i.test(this.phone)
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
            phone: "",
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
    padding: 0 10px;
}

.sex-item-selected {
    color: #1EA87C;
}
</style>
