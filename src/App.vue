<template>
  <div class="navbar">
   <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Counter">Counter</router-link> |
      <router-link to="/Contact">Contact</router-link> |
      <router-link to="/Login">Login</router-link>
    </nav>
    <router-view/>
  </div>

</template>

<script>
 

</script>



<style>
#app {
  width: 100%;
  background:linear-gradient(to top, rgba(0,0,0,0.7)50%,  rgba(0,0,0,0.6)50%), url(https://thumbs.dreamstime.com/b/breakfast-brunch-side-border-dark-wood-banner-background-breakfast-brunch-side-border-dark-wood-banner-background-224730220.jpg);
  background-position: full;
  background-size: full;
  background-repeat: no-repeat;
  height: 100vh;
  background-color: rgb();
}

.navbar{
  /* border: 2px solid greenyellow; */
}

nav {
  padding: 2px;
  height: 5px;
}

nav a {
  font-weight: bold;
  color: #aabe9e;
  font-size: larger;
}

nav a.router-link-exact-active {
  color: #0d683f;
}
</style>
