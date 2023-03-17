<template>
    <div class="container">
    
        <h1>{{ counter }}</h1>
        <div class="input">
          <label>ORDERS:</label>
            <input type="number" v-model="count" class="count-input">
        </div>
    
        <button class="btn" @click="updateCount">Enter</button>
        <button class="btn" @click=decrement>Decrement</button>
        <button class="btn" @click="reset">Reset</button>
        <button class="btn" @click="increment">Increment</button>
  
    </div>
  </template>
  
  <script>
  export default {
    
    computed:{
      counter() {
        return this.$store.getters.counter
      }

    },
    methods: {
      
     increment(){
      this.$store.dispatch ('increment')
     },
 
    decrement() {
       if (this.$store.state.count > 0) {
           this.$store.dispatch('decrement');
       }
     },
     
     reset(){
         this.$store.dispatch ('reset')
         this.count = 0 
     },
     updateCount() {
      const newCount = parseInt(this.count)
      this.$store.commit('updateCount', newCount)
      this.count = 0 
    }
    } 
   
  }
  </script>
  
  
  <style scoped>
.container{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-left: 100px;
  padding-top: 150px;
}

.btn{
  
      background-color: rgb(133, 39, 39);
    color: black;
    border: 2px solid #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 14px 40px;
    border-radius: 12px;
    margin: 40px;
    border: 5px;
    width: 140px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    /* position: absolute; */
    z-index: 1;
    }
    .btn:hover{
      background-color: #61bd64; 
      color: white;
    }
    .count-input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100px;
  box-sizing: border-box;
  font-style: oblique;
}
.input{
  padding-left: 350px;
  font-size: 20px;
  color:  rgb(139, 113, 113);
}
h1{
  margin-left: 450px;
  color: rgb(151, 131, 131);
}
  </style>