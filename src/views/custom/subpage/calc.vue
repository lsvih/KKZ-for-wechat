<template>
<div class="calc-content">
    <div class="calc-header">
        <p class="total">总计
            <line-buttom color="#fff" :font-size="13" class="recalc-btn" @click="offCalculate">重新计算</line-buttom>
        </p>
        {{total()}}
    </div>
    <div class="three-items-list"><span>套餐</span><span>面积</span><span>小计</span></div>
    <hr></hr>
    <scroller height="50%" :lock-x="true">
        <div>
          <div v-for="room in rooms">
          <div class="three-items-list" v-for="space in room.spaces"><span>{{space.name}}</span><span>{{space.size}}{{_setUnit(space.name)}}</span><span>{{space.size*2|currency "" 2}}</span></div>
        </div>
        </div>
    </scroller>
    <div class="calc-footer">
      <line-buttom color="#fff" :font-size="18" class="recalc-btn" :height="38" :width="108" @click="appointment">立即预约</line-buttom>
    </div>
</div>
</template>

<script>
import scroller from "vux/src/components/scroller"
import lineButtom from "../../../components/line-buttom.vue"
import {
    rooms
} from '../../../store/getters'
import {
    stopCalculate
} from '../../../store/actions'
export default {
    components: {
        scroller,
        lineButtom
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
        total: function() {
            return 123
        },
        _setUnit: function(name) {
            let type = name.match(/\D*/)[0];
            return type == "内门" ? "个":"m²";
        },
        appointment: function(){
          this.offCalculate;
          this.$route.router.go({path:"/appointment"});
        }
    }
}
</script>
<style>
.calc-content {
    z-index: 5;
    position: fixed;
    width: calc( 100% - 38px * 2);
    height: 75%;
    bottom: 0;
    left: 0;
    color: #fff;
    background-color: #039c6b;
    padding: 0 38px;
}

.calc-header {
    margin: 0 0 20px -38px;
    padding: 18px 38px 0;
    height: 84px;
    width: 100%;
    background-color: #24A975;
    font-size: 30px;
    line-height: 30px;
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
    border-color: #24A975;
    border-width: 1px 1px 0;
}

.three-items-list :first-child{
}
.three-items-list :nth-child(2){
  position: absolute;
  left: 50%;
}
.three-items-list :last-child{
  float:right;
}
</style>
