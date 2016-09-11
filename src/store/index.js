import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions'
import mutations from './mutations';

Vue.use(Vuex);
var kitchen_img = require('../images/kitchen.png')
var washroom_img = require('../images/washroom.png')
var wall_destroy_img = require('../images/wall-destroy.png')
var wall_normal_img = require('../images/wall-normal.png')
var door_img = require('../images/door.png')
const state = {
    onCalculate: false,
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

export default new Vuex.Store({
    state,
    mutations,
});
