<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .header
        position: relative
        overflow: hidden
        height: $headHeight
        line-height: $headHeight
        text-align: center
        color: #fff
        background: $bgColor
        font-size: 16px
        .header-back
            position: absolute
            width: 32px
            top: 0
            left: 0
            text-align: center
            font-size: 20px
            color:#fff
</style>