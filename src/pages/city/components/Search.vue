<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>
        <div class="search-content" v-show="keyword" ref="search">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id"
                @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScoll from 'better-scroll'
    import { mapMutations } from 'vuex'
    export default {
        name: "CitySearch",
        props:{
            cities: Object
        },
        data() {
            return{
                keyword: '',
                list:[],
                timer: null
            }
        },
        computed:{
            hasNoData(){
                return !this.list.length;
            }
        },
        methods:{
            handleCityClick(city) {
                //this.$store.commit('changeCity',city);
                this.changeCity(city);
                this.$router.push('/');
            },
            ...mapMutations(['changeCity'])
        },
        watch: {
            keyword() {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                if (!this.keyword){
                    this.list = [];
                    return
                }
                this.timer = setTimeout(() => {
                    const result = [];
                    for (let i in this.cities) {
                        this.cities[i].forEach((value) => {
                            if (value.spell.indexOf(this.keyword) > -1 ||
                                value.name.indexOf(this.keyword) > -1) {
                                result.push(value);
                            }
                        })
                    }
                    this.list = result;
                }, 100)
            }
        },
        mounted(){
            this.scroll = new BScoll(this.$refs.search,{
                click: true
            });
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .search
        height: 36px
        padding: 0 5px
        background : $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: 31px
            padding : 0 5px
            line-height: 31px
            text-align :center
            border-radius: 3px
            color: #666
    .search-content
        z-index: 1
        overflow:hidden
        position: absolute
        top: 79px
        left: 0
        right: 0
        bottom: 0
        background : #eee
        .search-item
            line-height : 31px
            padding-left: 10px
            background :#fff
            color: #666
</style>