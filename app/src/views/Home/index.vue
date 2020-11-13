<template>
  <div>
      <header>
        <Header/>
      </header>
      <main>
        <div class="list">
          <dl v-for="(item,index) in list" :key="index">
            <dt><img :src="item.img"/></dt>
            <dd>
              <p>{{item.title}}</p>
              <p>{{item.name}}</p>
            </dd>
          </dl>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data(){
    return{
      list:[]
    }
  },
  created(){
    axios.get("/api/getList").then(res=>{
      this.list=res.data.list
    })
  },
}
</script>

<style>
.list{
  width: 100%;
}
.list dl{
  display: flex;
  justify-content: space-between;
  padding:  10px;
}
</style>