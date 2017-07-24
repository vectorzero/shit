<template>
  <div class="hello">
    <div class="articleDiv">
      <h3>Article</h3>
      <h4>{{ title }} --- {{ author }}</h4>
      <div @click="dialogVisible = true">{{ digest }}...</div>
      <el-button type="primary" @click="changeArticle">换一篇</el-button>
    </div>
    <div class="article">
      <el-dialog
        :title="title"
        :visible.sync="dialogVisible">
        <h4>作者：{{ author }}</h4>
        <p v-html="article"></p>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">关  闭</el-button>
        </span>
      </el-dialog>
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
export default {
  name: 'hello',
  data () {
    return {
      author: '',
      digest: '',
      title: '',
      article: '',
      dialogVisible: false,
      catList: []
    }
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
      this.$http.get('https://interface.meiriyiwen.com/article/random?dev=1')
      //dev
      //this.$http.get('/article/random?dev=1')
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
  .hello {
    height: 100%;
  }
  .articleDiv {
    font-size: 1em;
    position: relative;
    border: 1px solid #fff;
    background: #fff;
    box-shadow: 4px 4px 4px 4px #ccc;
    width: 50%;
    height: 50%;
    margin-left: 25%;
    padding: 10px 20px;
    overflow: auto;
    text-align: center;
    cursor: pointer;
  }
  button {
    position: absolute;
    bottom: 10px;
    right: 50px;
    z-index: 555;
    cursor: pointer;
  }
  .article {
    text-align: center;
  }
  h4 {
      margin-bottom: 5px;
    }
  p{
    text-align: left;
    text-indent: 2em;
    line-height: 2.5;
  }
</style>
