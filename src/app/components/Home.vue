<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary mb-3 ">
        <a class="navbar-brand text-white" href="/">Home</a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="Login" class="nav-link text-white">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="Register" class="nav-link text-white">Register</router-link>
      </li>
      <li class="nav-item">
        <router-link to="Manager" class="nav-link text-white">Manager</router-link>
      </li>
      <li>
        <router-link to="App" class="nav-link text-white">Admin</router-link>
      </li>
     
    </ul>
  </div>
</nav>

    <router-view/>
    </div>
</template>

<script>

   

export default {
    data() {
        return {
            
        }
    },
    
    
}
</script>