<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link tag="span" to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailHeader",
        data(){
            return{
                showAbs: true,
                opacityStyle:{
                    opacity: 0
                }
            }
        },
        methods:{
            handleScroll(){
                const top = document.documentElement.scrollTop;
                if (top > 60){
                    let opacity = top / 140;
                    opacity = opacity > 1 ? 1 : opacity;
                    this.opacityStyle = { opacity };
                    this.showAbs = false;
                } else {
                    this.showAbs = true;
                }
            }
        },
        activated(){
            window.addEventListener('scroll',this.handleScroll);
        },
        deactivated() {
            window.removeEventListener('scroll',this.handleScroll);
        }

    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .header-abs
        position :absolute
        left: 10px
        top: 10px
        width: 40px
        height : 40px
        line-height: 40px
        border-radius:20px
        text-align :center
        background : rgba(0,0,0,.8)
        .header-abs-back
            color: #fff
            font-size:20px
    .header-fixed
        position: fixed
        top: 0
        left: 0
        right: 0
        height: $headHeight
        line-height: $headHeight
        text-align: center
        color: #fff
        background: $bgColor
        font-size: 16px
        .header-fixed-back
            position: absolute
            width: 32px
            top: 0
            left: 0
            text-align: center
            font-size: 20px
            color:#fff
</style>