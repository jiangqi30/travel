<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/经典/游玩主题</div>
        <router-link to="/city">
            <div class="header-right">{{this.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>

    </div>
</template>

<script>
    import { mapState,mapGetters } from 'vuex'
    export default {
        name: "HomeHeader",
        computed:{
            ...mapState(['city']),
            ...mapGetters(['doubleCity'])
        }
    }
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
    .header
        display: flex
        width: 100%
        line-height: $headHeight
        background: $bgColor
        color: #fff
        overflow: hidden
        .header-left
            width: 32px
            float: left
            .back-icon
                text-align: center
                font-size: 20px
        .header-input
            flex: 1
            height: 32px
            line-height: 32px
            margin-top: 6px
            margin-left: 10px
            padding-left: 10px
            background: #fff
            border-radius : 5px
            color: #ccc
        .header-right
            min-width: 52px
            padding:0 5px
            float: right
            text-align: center
            color: #fff
            .arrow-icon
                font-size: 12px
</style>