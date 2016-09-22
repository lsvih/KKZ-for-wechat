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
                                "开关分合能力强，耐疲劳能力高",
                                "插座使用寿命长，稳定性高"
                            ],
                        },
                    ],
                },
            },
            {
                banner: {
                    image: require('../../images/product/02.png'),
                    head: {
                        title: "7日卫生间翻新",
                        priceNumber: 13999,
                        priceUnit: "元起"
                    },
                    body: {
                        title: "每天都该有段独处时光",
                        content: [
                            "瓷砖罢工了，浴霸苍老了，马桶在闹性子‧‧‧‧‧‧",
                            "没做干湿分离，每个清晨都在抢厕所中互相伤害。",
                            "就不能让你一个人静静？！",
                            "能！卫生间整体翻新！！",
                        ],
                    },
                },
                pack: {
                    title: "这些全打包",
                    content: [
                        "马桶、面盆（含龙头）、花洒、整体浴室柜、浴霸、集成吊顶、墙砖地砖、开关插座、地漏",
                        "施工安装，含辅材、成品保护、拆除",
                    ],
                },
                material: {
                    title: "主材不将就",
                    list: [
                      {
                          image: require('../../images/door.png'),
                          title: "乐家卫浴",
                          content: [
                              "马桶、面盆、龙头、花洒",
                              "来自西班牙的全球十大卫浴洁具品牌，最大卫浴生产商之一",
                          ],
                      },
                        {
                            image: require('../../images/door.png'),
                            title: "科宝•博洛尼整体浴室柜",
                            content: [
                                "实木复合材，防水防霉防潮",
                                "含主柜和镜柜，收纳功能强",
                            ],
                        },
                        {
                            image: require('../../images/door.png'),
                            title: "奥普浴霸",
                            content: [
                                "取暖、LED照明、换气三合一",
                                "升温快，寿命长，节能安全，有效抑噪",
                            ],
                        },
                        {
                            image: require('../../images/door.png'),
                            title: "奥普集成吊顶",
                            content: [
                                "品牌保证，节能环保，耐污耐用，简洁明快"
                            ],
                        },
                        {
                            image: require('../../images/door.png'),
                            title: "马可波罗瓷砖",
                            content: [
                                "国内一线陶瓷品牌，进口无铅陶瓷釉料",
                                "纹理逼真，超磨耐用，环保无辐射"
                            ],
                        },
                        {
                            image: require('../../images/door.png'),
                            title: "施耐德开关插座",
                            content: [
                                "开关分合能力强，耐疲劳能力高",
                                "插座使用寿命长，稳定性高"
                            ],
                        },
                        {
                            image: require('../../images/door.png'),
                            title: "潜水艇地漏",
                            content: [
                                "防臭防堵，防返水，防蚊虫，易拆洗"
                            ],
                        },
                    ],
                },
            },
            {
                banner: {
                    image: require('../../images/product/03.png'),
                    head: {
                        title: "1日涂装焕新",
                        priceNumber: 999,
                        priceUnit: "元起/间"
                    },
                    body: {
                        title: "憧憬每一次的焕然一新",
                        content: [
                            "城里人不说忙，不谈论投入产出比，多不fashion!",
                            "好吧，最快、最划算的当然是涂装！",
                            "某日工作一天回家后，",
                            "仿佛被念了“焕然一新”魔法！",
                        ],
                    },
                },
                pack: {
                    title: "这些全打包",
                    content: [
                        "乳胶漆or壁纸",
                        "施工安装，含辅材、成品保护、拆除",
                    ],
                },
                material: {
                    title: "主材不将就",
                    list: [
                        {
                            image: require('../../images/door.png'),
                            title: "诗珑漆",
                            content: [
                                "德国百年企业J.W.O.原装进口，食品级制造标准",
                                "即刷即住，无毒无异味，蓝天使、LGA等全球顶级环保认证",
                            ],
                        }
                    ],
                },
            },
            {
                banner: {
                    image: require('../../images/product/04.png'),
                    head: {
                        title: "3日内门更换",
                        priceNumber: 1099,
                        priceUnit: "元起/套"
                    },
                    body: {
                        title: "守护这一刻的相聚恒常",
                        content: [
                            "明明住在一起，却过着有时差的生活？",
                            "那些不知隔音为何物的老旧门、像恐怖片一样的开门声，",
                            "和它们say goodbye吧，",
                            "且珍惜这同在一个屋檐下的光阴。",
                        ],
                    },
                },
                pack: {
                    title: "这些全打包",
                    content: [
                        "内门、拆除、门洞修复、安装"
                    ],
                },
                material: {
                    title: "主材不将就",
                    list: [
                        {
                            image: require('../../images/door.png'),
                            title: "科宝•博洛尼内门",
                            content: [
                                "实木复合材，3D立体手抓纹耐磨板",
                                "静音降噪，经久耐用",
                            ],
                        }
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
    }
}
</script>
