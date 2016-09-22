<template>
<scroller style="z-index:10" :height="(SCREENHEIGHT-52)" lock-x :prevent-default="false" scrollbar-y>
    <div class="home-content">
        <div v-tap="viewProduct(product.id)" class="product" v-for="product in products" v-bind:class="'product-' + product.id">
            <div class="product-name">{{product.name}}{{product.e_name}}</div>
            <div class="product-content">{{product.content}}</div>
        </div>
    </div>
</scroller>
<l-footer user="user"></l-footer>
</template>

<script>
import Scroller from "vux/src/components/scroller"
import lFooter from "../../components/l-footer.vue"
import "../../scss/homeView.scss"
export default {
    components: {
        Scroller,
        lFooter,
    },
    data() {
        return {
            user: localStorage.getItem("user"),
            products: [{
                    "id": 1,
                    "name": "厨房翻新",
                    "e_name": "Kitchen",
                    "content": "无论是有人为你每日忙在厨房，还是一人食，整体翻新都是感恩拥有的礼物。"
                }, {
                    "id": 2,
                    "name": "卫生间翻新",
                    "e_name": "Toilet",
                    "content": "整体翻新吧，卫生间可忍孰不可忍！也许每日只有这段时光，属于完整的自我。"
                }, {
                    "id": 3,
                    "name": "涂装焕新",
                    "e_name": "Wall Painting",
                    "content": "总想换个活法，不如先从给房间焕新开始。然后无论多少次出发，都满血复活。"
                }, {
                    "id": 4,
                    "name": "内门更换",
                    "e_name": "Inside Door",
                    "content": "安扇新门，为最容易被忽略的家人。泛起温柔，守护这同一屋檐下的光阴。"
                },

            ],
            SCREENHEIGHT:document.body.clientHeight
        };
    },
    methods: {
        viewProduct: function(productId) {
            this.$route.router.go({
                path: "/product?id=" + productId
            });
        }
    }
}
</script>
