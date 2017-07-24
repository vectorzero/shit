<template>
  <div>
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
import { XDialog, XButton, Group, XSwitch } from 'vux'
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
      show: false
    }
  },
  directives: {
    TransferDom
  },
  components: {
    XDialog,
    XButton,
    Group,
    XSwitch
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
    changeArticle() {
      this.getArticle();
    }
  },
  mounted() {
    //this.getShit();
    this.getArticle();
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
</style>
