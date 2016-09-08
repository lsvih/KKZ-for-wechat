<template>
<div class="calculate-content">
    计算家庭面积
    <div class="room" v-for="room in rooms">
        <img :src="room.image">{{room.name}}<i class="plus-room" @click="_addSpace($index)"><i>
          <div>
<span v-for="space in room.spaces">{{space.name}}</span>
          </div>
    </div>
</div>
<div class="calculate-backgroud"></div>
</template>

<script>
import "../../scss/calculate.scss"

var kitchen_img = require('../../images/kitchen.png');
var washroom_img = require('../../images/washroom.png');
export default {
    components: {

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
            }]
        };
    },
    methods: {
        _addSpace: function(roomSub) {
            this.rooms[roomSub].spaces.push({
                "name": this.rooms[roomSub].name + (this.rooms[roomSub].spaces.length+1),
                "size": ""
            });
            this.rooms[roomSub].spaces.push({
                "name": this.rooms[roomSub].name + (this.rooms[roomSub].spaces.length+1),
                "size": ""
            });
        }
    }
}
</script>
<style>
@import '~vux/dist/vux.css';
</style>
