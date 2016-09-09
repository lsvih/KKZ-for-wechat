<template>
<mask :zindex="4" rgba="rgba(0,0,0,.75)" v-if="_calculate" transition="fade" transition-mode="out-in">
</mask>
<div class="calculate-content">
    计算家庭面积
    <div class="room" v-for="room in rooms">
        <img :src="room.image">{{room.name}}<i class="plus-room" @click="_addSpace($index)"></i>
        <div class="spaces">
            <span v-for="space in room.spaces"><div v-if="!($index%2)" class="border-line"></div>
              <del-btn @click="_delSpace($parent.$index,space)" color="#ccc"></del-btn>
              <input type="number" v-bind:placeholder="space.name" v-model="space.size" @blur="_inputed(space.size,$event.target)" max="100" min="0" step="1">
              <div class="unit"></div>
            <hr/></span>
        </div>
    </div>
</div>
<div class="to-calculate" v-bind:class="{'active':isFillData()}" @click="isFillData()?toCaculate():return;">计算</div>
<calculate v-if="_calculate" transition="pop" transition-mode="out-in"></calculate>
<div class="calculate-backgroud"></div>
</template>
<script>
import "../../scss/calculate.scss"
import divider from "vux/src/components/divider"
import delBtn from "../../components/del-btn.vue"
import mask from "../../components/mask.vue"
import calculate from "./subpage/calc.vue"
import Vuex from 'vuex'
import {
    isOnCalculate
} from '../../store/getters'
import {
    startCalculate
} from '../../store/actions'
import {
    stopCalculate
} from '../../store/actions'
var kitchen_img = require('../../images/kitchen.png')
var washroom_img = require('../../images/washroom.png')
var wall_destroy_img = require('../../images/wall-destroy.png')
var wall_normal_img = require('../../images/wall-normal.png')
var door_img = require('../../images/door.png')
var _calculate = false;
export default {
    components: {
        Vuex,
        divider,
        delBtn,
        mask,
        calculate
    },
    vuex: {
        getters: {
            _calculate: isOnCalculate
        },
        actions: {
            onCalculate: startCalculate,
            offCalculate: stopCalculate
        },
    },
    data() {
        return {
            rooms: [{
                name: "厨房",
                id: "1",
                image: kitchen_img,
                spaces: []
            }, {
                name: "卫生间",
                id: "2",
                image: washroom_img,
                spaces: []
            }, {
                name: "墙面涂刷(拆)",
                id: "3",
                image: wall_destroy_img,
                spaces: []
            }, {
                name: "墙面涂刷(不拆)",
                id: "4",
                image: wall_normal_img,
                spaces: []
            }, {
                name: "内门",
                id: "5",
                image: door_img,
                spaces: []
            }]
        };
    },
    methods: {
        _addSpace: function(roomSub) {
            let roomName = this.rooms[roomSub].name;
            let num = 2;
            if (roomName == "内门") {
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
        _inputed: function(content, thisobj) {
            let type = thisobj.getAttribute("placeholder").match(/\D*/)[0];
            thisobj.parentNode.getElementsByClassName("unit")[0].innerText = (type != "内门") ? (content != "" ? "m²" : "") : (content != "" ? "个" : "");
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
.pop-transition{
  transition: bottom .5s ease-in;
}
.pop-enter,
.pop-leave{
  bottom: -100%!important;
}
</style>
