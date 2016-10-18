<template>
<mask :zindex="4" rgba="rgba(0,0,0,.75)" v-if="_calculate" transition="fade" transition-mode="out-in" v-tap="offCalculate">
</mask>
<div class="calculate-content">
    计算装修费用
    <div class="tip" v-tap="onTip"> <img src="../../images/tip.png"></div>
    <div class="room" v-for="room in rooms">
        <img :src="room.image">{{room.name}}<i class="plus-room" v-tap="_addSpace($index)"></i>
        <div class="spaces">
            <span v-for="space in room.spaces"><div v-if="!($index%2)" class="border-line"></div>
              <del-btn v-tap="_delSpace($parent.$index,space)" color="#ccc"></del-btn>
              <input type="number" v-bind:placeholder="space.name" v-model="space.size" max="100" min="0" step="1">
              <div class="unit" v-show="space.size">{{_setUnit(space.name)}}</div>
            <hr></hr></span>
        </div>
    </div>
</div>
<div class="to-calculate" v-bind:class="{'active':isFillData()}" v-tap="isFillData()?toCaculate():return;">计算</div>
<calculate v-if="_calculate" transition="pop" transition-mode="out-in"></calculate>
<tip v-if="_tip" transition="fade" transition-mode="out-in"></tip>
<div class="calculate-backgroud"></div>
</template>
<script>
import "../../scss/calculate.scss"
import delBtn from "../../components/del-btn.vue"
import mask from "../../components/mask.vue"
import calculate from "./subpage/calc.vue"
import tip from "./subpage/tip.vue"
import {
    isOnCalculate,
    rooms,
    isOnTip
} from '../../store/getters'

import {
    startCalculate,
    stopCalculate,
    openTip
} from '../../store/actions'
var _calculate = false;
export default {
    components: {
        delBtn,
        mask,
        calculate,
        tip
    },
    data() {
        return {
            showTip: false,
        };
    },
    vuex: {
        getters: {
            _calculate: isOnCalculate,
            _tip: isOnTip,
            rooms: rooms
        },
        actions: {
            onTip: openTip,
            onCalculate: startCalculate,
            offCalculate: stopCalculate
        },
    },
    methods: {
        openTip: function() {
            this.showTip = true
        },
        _addSpace: function(roomSub) {
            let roomName = this.rooms[roomSub].name;
            let num = 2;
            if (roomName == "内门" || roomName == "厨卫内门") {
                num = !this.rooms[roomSub].spaces.length ? 1 : 0;
            }
            if (roomName == "墙面涂刷(拆)" || roomName == "墙面涂刷(不拆)") roomName = "空间";
            for (let i = 0; i < num; i++) {
                this.rooms[roomSub].spaces.push({
                    "name": roomName + (this.rooms[roomSub].spaces.length + 1),
                    "size": ""
                });
            }
        },
        _setUnit: function(name) {
            let type = name.match(/\D*/)[0];
            return type == "内门" || type == "厨卫内门" ? "个" : "m²";
        },
        _delSpace: function(roomSub, space) {
            this.rooms[roomSub].spaces.$remove(space);
            let roomName = this.rooms[roomSub].name;
            if (roomName == "墙面涂刷(拆)" || roomName == "墙面涂刷(不拆)") roomName = "空间";
            this.rooms[roomSub].spaces.map((space, sub) => {
                space.name = roomName + (sub + 1)
            });
        },
        isFillData: function() {
            let filled = false;
            this.rooms.map((room) => {
                room.spaces.map((space) => {
                    if (space.size != "") filled = true;
                })
            })
            return filled
        },
        toCaculate: function() {
            document.activeElement.blur();
            this.rooms.map((room, roomSub) => {
                for (let i = room.spaces.length - 1; i >= 0; i--) {
                    let space = room.spaces[i];
                    if (space.size == "") this._delSpace(roomSub, space)
                }
            });
            this.onCalculate();
        }
    }
}
</script>
<style>
@import '~vux/dist/vux.css';
.fade-transition {
    transition: opacity .3s ease;
}

.fade-enter,
.fade-leave {
    opacity: 0;
}

.pop-transition {
    will-change: bottom;
    transition: bottom .2s ease;
}

.pop-enter,
.pop-leave {
    bottom: -100%!important;
}
</style>
