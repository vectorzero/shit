<template>
  <div>
    <group>
      <selector v-model="value1" title="城市" :options="plainList" @on-change="onChange"></selector>
    </group>
    <group>
      <cell title="">
        <span>{{weather}}</span>
        <span class="weatherPng"><img :src="pngUrl"></span>
      </cell>
    </group>
    <group>
      <x-switch v-model="show" :title="title" :inline-desc="author"></x-switch>
    </group>
    <x-button type="primary" @click.native='getArticle()'>换一篇</x-button>
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
      value1: '佛山',
      pngUrl: ''
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
      let _this  = this;
      //build
      //this.$http.get('https://free-api.heweather.com/v5/weather?city='+val+'&key=85e65ceea7db471f8f16d69b7aca5f3f')
      //dev
      this.$http.get('/weather/weather?city='+val+'&key=85e65ceea7db471f8f16d69b7aca5f3f')
        .then(function(res){
          _this.weather = res.data.HeWeather5[0].now.cond.txt;
           _this.pngUrl = 'https://cdn.heweather.com/cond_icon/'+res.data.HeWeather5[0].now.cond.code+'.png';
          _this.cityName = res.data.HeWeather5[0].basic.city;
        })
    },
    changeArticle() {
      this.getArticle();
    },
    onChange (val) {
      switch(val)
      {
      case '佛山':
        this.getWeather('佛山');
        break;
      case '广州':
        this.getWeather('广州');
        break;
      case '深圳':
        this.getWeather('深圳');
        break;
      case '汕头':
        this.getWeather('汕头');
        break;
      default:
        this.getWeather('佛山');
      }
      
    }
  },
  mounted() {
    //this.getShit();
    this.getArticle();
    this.getWeather('佛山');
  }
}
</script>

<style scoped lang='less'>
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
  .weatherPng{
  	img {
	  height: 19px;
	  width: 19px;
	  margin-bottom: -3px;
  	}
  }
</style>
