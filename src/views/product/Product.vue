<template>
<scroller style="z-index:10" :height="(SCREENHEIGHT-52)" lock-x :prevent-default="false" scrollbar-y>
    <div class="main">
        <div class="banner-image" :style="{backgroundImage: 'url(' + banner.image + ')'}"></div>
        <div class="banner-head">
            <div class="banner-title">{{banner.head.title}}</div>
            <div class="banner-price">
                <span class="price-number">{{banner.head.priceNumber}}</span>
                <span class="price-unit">{{banner.head.priceUnit}}</span>
            </div>
        </div>
        <div class="banner-body">
            <div class="header">{{banner.body.title}}</div>
            <div class="content">
                <p v-for="line in banner.body.content">{{line}}</p>
            </div>
        </div>
        <div class="content-list">
            <div class="content-panel">
                <div class="header">{{pack.title}}</div>
                <div class="body content">
                    <p v-for="line in pack.content">{{line}}</p>
                </div>
            </div>
            <div class="content-panel">
                <div class="header">{{material.title}}</div>
                <div class="material-list">
                    <div class="material-panel" v-for="panel in material.list">
                        <div class="material-image">
                            <img :src="panel.image" ／>
                        </div>
                        <div class="material-detail">
                            <p class="title">{{panel.title}}</p>
                            <p class="content" v-for="line in panel.content">{{line}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-panel">
                <div class="header">{{process.title}}</div>
                <div class="process-list">
                    <div class="process-panel" v-for="panel in process.list">
                        <div class="process-icon">
                            <img :src="panel.icon">
                        </div>
                        <div class="process-content content">{{panel.content}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</scroller>
<l-footer user="user"></l-footer>
</template>

<script>
import Scroller from "vux/src/components/scroller"
import lFooter from "../../components/l-footer.vue"
import "../../scss/product.scss"
export default {
    components: {
        Scroller,
        lFooter,
    },
    data() {
        var products= [
            {
                banner: {
                    image: require('../../images/product/01.png'),
                    head: {
                        title: "10日厨房翻新",
                        priceNumber: 17999,
                        priceUnit: "元起"
                    },
                    body: {
                        title: "一饭一蔬里的山川湖海",
                        content: [
                            "墙砖早已满是油渍，或者吊顶有些塌了？",
                            "上次忘关水龙头，地柜都泡了？还是吊柜门合不严了？",
                            "是时候整体翻新厨房了，",
                            "让每天忙在厨房里的TA，待得惬意些。",
                        ],
                    },
                },
                pack: {
                    title: "这些全打包",
                    content: [
                        "整体柜橱（含地柜、吊柜、台面、水盆、龙头）、烟机灶具、墙砖地砖、集成吊顶、开关插座、地漏",
                        "施工安装，含辅材、成品保护、拆除",
                    ],
                },
                material: {
                    title: "主材不将就",
                    list: [
                        {
                            image: require('../../images/door.png'),
                            title: "科宝•博洛尼整体橱柜",
                            content: [
                                "原料环保，产品细节人性化",
                                "五金顺滑、静音，可使用10万次以上",
                            ],
                        },
                        {
                            image: require('../../images/door.png'),
                            title: "科宝•博洛尼烟机灶具",
                            content: [
                                "烟机吸力大，噪音低",
                                "灶具燃烧高效、稳定",
                            ],
                        },
                        {
                            image: require('../../images/door.png'),
                            title: "马可波罗瓷砖",
                            content: [
                                "国内一线陶瓷品牌，进口无铅陶瓷釉料",
                                "纹理逼真，超磨耐用，环保无辐射",
                            ],
                        },
                        {
                            image: require('../../images/door.png'),
                            title: "奥普集成吊顶",
                            content: [
                                "品牌保证，节能环保，耐污耐用，简洁明快",
                            ],
                        },
                        {
                            image: require('../../images/door.png'),
                            title: "施耐德开关插座",
                            content: [
                                "防臭防堵，防返水，防蚊虫，易拆洗",
                            ],
                        },
                    ],
                },
            },
        ];
        var productId = parseInt(this.$route.query.id);
        return {
            user: localStorage.getItem("user"),
            banner: products[productId-1].banner,
            pack: products[productId-1].pack,
            material: products[productId-1].material,
            process: {
                title: "流程必须快",
                list: [
                    {
                        icon: require('../../images/process/01.png'),
                        content: "1.一键下单",
                    },
                    {
                        icon: require('../../images/process/02.png'),
                        content: "2.上门检测",
                    },
                    {
                        icon: require('../../images/process/03.png'),
                        content: "3.确认选材",
                    },
                    {
                        icon: require('../../images/process/04.png'),
                        content: "4.交付全款",
                    },
                    {
                        icon: require('../../images/process/05.png'),
                        content: "5.施工服务",
                    },
                    {
                        icon: require('../../images/process/06.png'),
                        content: "6.验收评价",
                    },
                ],
            },
            SCREENHEIGHT:document.body.clientHeight
        };
    },
}
</script>
