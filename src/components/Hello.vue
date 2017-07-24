<template>
  <div>
    <group>
      <selector v-model="value1" title="城市" :options="plainList" @on-change="onChange"></selector>
    </group>
    <group>
      <cell title="">
        <span>{{weather}}</span>
        <span v-if="weather==='雷阵雨/多云'">
           <svg class="icon"><use xlink:href="#icon-baofengyu"></use></svg>
           <svg class="icon"><use xlink:href="#icon-duoyun"></use></svg>
        </span>
        <span v-if="weather==='阵雨/多云'">
           <svg class="icon"><use xlink:href="#icon-baofengyu"></use></svg>
           <svg class="icon"><use xlink:href="#icon-duoyun"></use></svg>
        </span>
        <span v-if="weather==='雷阵雨/雷阵雨'">
           <svg class="icon"><use xlink:href="#icon-baofengyu"></use></svg>
        </span>
        <span v-if="weather==='多云/多云'">
           <svg class="icon"><use xlink:href="#icon-duoyun"></use></svg>
        </span>
        <span v-if="weather==='小雨/小雨'">
           <svg class="icon"><use xlink:href="#icon-yu"></use></svg>
        </span>
      </cell>
    </group>
    <group>
      <x-switch v-model="show" :title="title" :inline-desc="author"></x-switch>
    </group>
    <group>
      <x-button type="primary" @click.native='getArticle()'>换一篇</x-button>
    </group>
    
    <div v-transfer-dom>
      <x-dialog v-model="show" class="dialog-demo" hide-on-blur>
        <div class="content">
          <p class="dialog-title">{{ title }}</p>
          <p>{{ author }}</p>
          <p class="article" v-html="article"></p>
        </div>
        <div @click="show=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <!-- <ul>
      <li v-for='cat in catList'>
        <img :src='cat.pic' :alt='cat.alt'>
        <p>{{cat.alt}}</p>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { XDialog, XButton, Group, XSwitch, Selector, GroupTitle, Cell} from 'vux'
import { TransferDomDirective as TransferDom } from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      author: '',
      digest: '',
      title: '',
      article: '',
      dialogVisible: false,
      catList: [],
      show: false,
      cityName:'',
      weather:'',
      plainList: ['佛山', '广州','深圳','汕头'],
      value1: '佛山'
    }
  },
  directives: {
    TransferDom
  },
  components: {
    XDialog,
    XButton,
    Group,
    XSwitch,
    Selector,
    GroupTitle,
    Cell
  },
  methods: {
    getShit() {
      let _this = this;
      this.$http.get('http://localhost:3000/api')
        .then(function(res){
          res.data.hello.forEach(cat=>{
            _this.catList.push(cat);
          })
        })
        .catch(function(error){
          console.log(error)
        })
    },
    getArticle() {
      let _this = this;
      //build
      //this.$http.get('https://interface.meiriyiwen.com/article/random?dev=1')
      //dev
      this.$http.get('/article/random?dev=1')
        .then(function(res){
          _this.article = res.data.data.content;
          _this.title = res.data.data.title;
          _this.author = res.data.data.author;
          _this.digest = res.data.data.digest;
        })
    },
    getWeather(val) {
      console.log(val)
      let _this  = this;
      //CHGD000000 广州
      //CHGD050000 深圳
      //CHGD040000 汕头
      //CHGD070000 佛山
      //build
      //this.$http.get('//tj.nineton.cn/Heart/index/all?city='+val)
      //dev
      this.$http.get('/weather/all?city='+val)
        .then(function(res){
          _this.weather = res.data.weather[0].future[0].text;
          _this.cityName = res.data.weather[0].city_name;
        })
    },
    changeArticle() {
      this.getArticle();
    },
    onChange (val) {
      switch(val)
      {
      case '佛山':
        this.getWeather('CHGD070000');
        break;
      case '广州':
        this.getWeather('CHGD000000');
        break;
      case '深圳':
        this.getWeather('CHGD050000');
        break;
      case '汕头':
        this.getWeather('CHGD040000');
        break;
      default:
        this.getWeather('CHGD070000');
      }
      
    }
  },
  mounted() {
    //this.getShit();
    this.getArticle();
    this.getWeather(this.value1);
  }
}
</script>

<style scoped>
  .article {
    text-indent: 2em;
    text-align: left;
  }
  .content {
     height:400px;
     padding:30px;
     overflow:scroll;
     -webkit-overflow-scrolling:touch;
  }
  .icon {
    width: 17px;
    height: 17px;
  }
</style>
