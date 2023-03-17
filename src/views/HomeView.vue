<template>
  <div class="home">
    <div class="logo">
      <h2>Rubicon</h2>
      <img src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg" alt="RR" width="30" height="20">
    </div>
    <div class="card">
      <h2>Aims and Objectives</h2>
      <p>Here at Rubicon restaurant we aim at satisfying all customers by following the health guidelines in public food making and ensuring we hire the best of chefs to prepare every meal to customers preference and liking</p>
    </div>
    <div class="card">
      <h2>Mission statement</h2>
      <p>The whole idea of this brand is consumer-based as it allows the custommer dictate how they would like to be served in what manner and also a satisfactory method being deployed</p>
    </div>
    <div class="card">
      <h2>Vision Statement</h2>
      <p>This brand aims at expanding across the globe with the help of it's customers and efficient product and services delivery, we would like to be at the pinnacle of the food business in the world</p>
    </div>
    <footer>
      <p>Rubicon copyright 2023</p>
    </footer>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
   .logo{
  display: flex;
  color: #edf048;
  size: 10px;
  /* border: 1px solid red; */
  margin: 5px;
  padding: 2px;
  height: 30px;
  font-size: smaller;
  /* border: 3px solid red; */
  justify-content: baseline;
}
.logo img{
  padding: 18px;
  margin-right: 5000px;
}
.card{
  margin: 10px;
  border-top: 2px solid black;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  box-shadow: 3px 3px 10px hsl(229, 6%, 66%);
  padding-left: 20px;
  padding-bottom: 5px;
  padding-right: 20px;
  padding-top: 0px;
  block-size: 150px;
  flex-shrink:  1;
  color: white;

}
.card p{
  font-size: larger;
  color: azure;
}
footer{
  color: white;
  padding-left: 450px;
  align-content: center;

}

</style>
