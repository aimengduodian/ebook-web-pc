<template lang="html">
    <panel title="导航条" :class="$style.panel">
        <ul :class="$style.content">
            <li v-for="(item, key) in config">
                <router-link :to="{ name: item.url}" >
                    <span v-if="item.list.indexOf($route.path)!==-1" :class="['icon',item.iClass]"></span>
                    <span v-else :class="['icon',item.iOutClass]"></span>
                    <p>{{item.text}}</p>
                </router-link>
            </li>
        </ul>
    </panel>
</template>

<script>
    import panel from "../components/core/panel"

    export default {
        name: 'navBar',
        data() {
            return {
                seleted: 'home',
                config: [
                    {
                        url: 'book',
                        text: "图书",
                        iClass: "ion-ios-bookmarks",
                        iOutClass: "ion-ios-bookmarks-outline",
                        list: ['/book', '/bookView', '/bookAdd']
                    },
                    {
                        url: 'electronics',
                        text: "电子",
                        iClass: "ion-ios-monitor",
                        iOutClass: "ion-ios-monitor-outline",
                        list: ['/electronics', '/electronicsView', '/electronicsAdd']
                    },
                    {
                        url: 'tutor',
                        text: "辅导",
                        iClass: "ion-ios-people",
                        iOutClass: "ion-ios-people-outline",
                        list: ['/teach', '/teachView', '/teachAdd']
                    },
                    {
                        url: 'other',
                        text: "其他",
                        iClass: "ion-ios-gear",
                        iOutClass: "ion-ios-gear-outline",
                        list: ['/other', '/otherView', '/otherAdd']
                    },
                    {
                        url: 'home',
                        text: "我",
                        iClass: "ion-ios-person",
                        iOutClass: "ion-ios-person-outline",
                        list: ['/about', '/aboutView', '/aboutAdd']
                    }
                ]
            }
        },
        components: {
            panel,
        },
    }
</script>

<style lang="scss" module>
    @import "../assets/scss/element";

    .panel {
        @include panel;
        position: fixed;
        left: 0;
        right: 0;
        height: 8vh;
        bottom: 0;
        z-index: 1000;
        margin: 0;
        > h4 {
            display: none;
        }
        .content {
            @include flex(row);
            justify-content: space-around;
            li {
                text-align: center;
                a {
                    text-decoration: none;
                }
                span {
                    width: 22px;
                    height: 22px;
                    display: inline-block;
                    margin: 6px auto 3px;
                }
                p {
                    font-size: 11px;
                    color: #656565;
                }
            }
        }
    }
</style>
