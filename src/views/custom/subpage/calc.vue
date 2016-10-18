<template>
<div class="calc-content">
    <div class="calc-header">
        <p class="total">总计
            <l-buttom :line="true" color="#fff" :font-size="13" class="recalc-btn" v-tap="offCalculate">重新计算</l-buttom>
        </p>
        {{totalPrice(roomTotalPrice(rooms),calcClearPrice(roomTotalPrice(rooms)),calcTaxes(roomTotalPrice(rooms)))|currency "" 2}}
    </div>

    <scroller height="calc( 100% - 87px - 105px )" lock-x :prevent-default="false" v-ref:scroller>
        <div>
            <div class="three-items-list list-title"><span>套餐</span><span>面积</span><span>小计</span></div>
            <hr />
            <div v-for="room in rooms">
                <div class="three-items-list" v-for="space in room.spaces"><span>{{room.name}}</span><span>{{space.size}}{{_setUnit(space.name)}}</span><span class="subprice">{{ calcPrice(room.name,space.size)|currency "" 2}}</span></div>
            </div>
            <div class="three-items-list"><span></span><span></span><span style="font-size:20px">{{ roomTotalPrice(rooms)|currency "" 2 }}</span></div>
            <hr style="margin-top:40px"></hr>
            <div class="list-title">其它费用</div>
            <div class="three-items-list"><span>垃圾清运费</span><span></span><span>{{calcClearPrice(roomTotalPrice(rooms))}}</span></div>
            <div class="three-items-list"><span>税金</span><span></span><span>{{calcTaxes(roomTotalPrice(rooms))}}</span></div>
            <div class="three-items-list"><span>备注</span><span></span><span></span></div>
        </div>
    </scroller>
    <div class="calc-footer">
        <l-buttom font-color="#fff" color="#f3b630" :font-size="18" class="recalc-btn" :height="38" width="108" v-tap="appointment">立即预约</l-buttom>
    </div>
</div>
</template>

<script>
import Scroller from "vux/src/components/scroller"
import lButtom from "../../../components/l-buttom.vue"
import {
    rooms
} from '../../../store/getters'
import {
    stopCalculate
} from '../../../store/actions'
export default {
    components: {
        Scroller,
        lButtom
    },
    vuex: {
        getters: {
            rooms: rooms
        },
        actions: {
            offCalculate: stopCalculate
        },
    },
    methods: {
        _setUnit: function(name) {
            let type = name.match(/\D*/)[0];
            return type == "内门"||type=="厨卫内门" ? "个" : "m²";
        },
        appointment: function() {
            this.offCalculate;
            localStorage.getItem("user") ? this.$route.router.go({
                path: "/appointment"
            }) : this.$route.router.go({
                path: "/login?link=appointment"
            });
        },
        calcPrice: function(type, size) {
            switch (type) {
                case "内门":
                    return size * 1799;
                    break;
                case "厨卫内门":
                    return size * 1099;
                    break;
                case "厨房":
                    return size <= 4 ? 17999 : Math.round(size) * 999;
                    break;
                case "卫生间":
                    return size <= 4 ? 13999 : Math.round(size) * 999;
                    break;
                case "墙面涂刷(拆)":
                    return size <= 12 ? 2999 : Math.round(size) * 299;
                    break;
                case "墙面涂刷(不拆)":
                    return size <= 12 ? 999 : Math.round(size) * 999;
                    break;
                default:
                    return 0;
                    break;
            }
        },
        roomTotalPrice: function(rooms) {
            let roomTotal = 0;
            rooms.map((room) => {
                room.spaces.map((space) => {
                    roomTotal += this.calcPrice(room.name, space.size)
                })
            });
            return roomTotal;
        },
        calcClearPrice: function(total) {
            let custom_clear_rate = 3.41 / 100;
            return (total * custom_clear_rate).toFixed(2);
        },
        calcTaxes: function(total) {
            let taxes_rate = 3.41 / 100;
            return (total * taxes_rate).toFixed(2);
        },
        totalPrice: function(roomPrice, clearPrice, taxes) {
            return Number(roomPrice) + Number(clearPrice) + Number(taxes)
        }
    }
}
</script>
<style>
.calc-content {
    z-index: 5;
    position: fixed;
    width: calc( 100% - 38px * 2);
    height: 82%;
    bottom: 0;
    left: 0;
    color: #000;
    line-height: 30px;
    background-color: #fff;
    padding: 0 38px;
    background-image: url("../../../images/calc-bg.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
}

.calc-header {
    margin: 0 0 20px -38px;
    padding: 14px 38px 0;
    height: 70px;
    width: 100%;
    background-color: #24A975;
    font-size: 30px;
    line-height: 30px;
    color: #fff;
}

.total {
    font-size: 13px;
}

.recalc-btn {
    float: right;
}

.calc-content hr {
    margin: 10px 0;
    border-style: solid;
    border-color: #ddd;
    border-width: 1px 1px 0;
}

.three-items-list :first-child {}

.three-items-list :nth-child(2) {
    position: absolute;
    left: 50%;
}

.three-items-list :last-child {
    float: right;
}

.list-title {
    font-size: 13px;
    color: #aaa;
}
</style>
