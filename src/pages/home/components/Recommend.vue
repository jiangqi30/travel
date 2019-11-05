<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul class="title">
            <router-link class="item border-bottom" v-for="item of list" :key="item.id"
                         tag="li" :to="'/detail/' + item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </router-link>
        </ul>
    </div>
    
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            list: Array
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .recommend-title
        margin-top: 10px
        line-height:40px
        background :#f5f5f5
        text-indent: 10px
    .item
        overflow: hidden
        display : flex
        height: 120px
        .item-img
            width: 100px
            height :100px
            padding: 10px
        .item-info
            flex: 1
            padding: 5px
            min-width : 0
            .item-title
                line-height: 27px
                font-size: 16px
                ellipsis()
            .item-desc
                line-height: 20px
                color: #ccc
                ellipsis()
</style>