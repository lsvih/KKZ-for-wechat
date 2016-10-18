<template>
<div class="tip-content">
    <p class="title">厨房翻新</p>
    <p>请输入厨房地面面积（平米数）。</p>
    <p>若不大于4平米，全部费用17999元；若超过4平米，超过部分每平米加收999元。</p>
    <p></p>
    <p class="title">卫生间翻新</p>
    <p>请输入卫生间地面面积（平米数）。</p>
    <p>若不大于4平米，全部费用13999元；若超过4平米，超过部分每平米加收999元。</p>
    <p></p>
    <p class="title"> 涂装焕新（铲）</p>
    <p>如需铲除墙基，请输入所需刷新空间的地面面积（平米数）。如无需铲除，请选择“涂装焕新（不铲）”。</p>
    <p>若不大于12平米，全部费用2999元；若超过12平米，超过部分每平米加收299元。</p>
    <p></p>
    <p class="title"> 涂装焕新（不铲）</p>
    <p>如无需铲除墙基，请输入所需刷新空间的地面面积（平米数）。如需铲除，请选择“涂装焕新（铲）”。</p>
    <p>若不大于12平米，全部费用999元；若超过12平米，超过部分每平米加收99元。</p>
    <p></p>
    <p class="title"> 内室门更换</p>
    <p>请输入需更换的内室门个数。每套门全部费用1799元。</p>
    <p></p>
    <p class="title"> 厨卫门更换</p>
    <p>请输入需更换的厨卫门个数。每套门全部费用1099元。</p>
    <div class="close" @click="closeTip"><img src="../../../images/close.png"></div>
</div>
</template>
<script>
import {
    offTip
} from '../../../store/actions'
export default {
    vuex: {
        actions: {
            closeTip: offTip
        },
    },
    methods: {}
}
</script>
<style>
.tip-content {
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow-y: scroll;
    overflow-x: hidden;
}

p {
    padding: 0 20px;
    font-size: 15px;
    color: #727272;
}

.title {
    display: block;
    width: 100%;
    height: 30px;
    margin-left: 20px;
    padding-left: 0;
    font-size: 22px;
    font-weight: bold;
    margin-top: 30px;
    color: #393939;
    border-bottom: 1px solid #999;
}

.close {
    position: fixed;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
}

.close img {
    height: 100%;
    width: 100%;
    opacity: .3;
}
</style>
