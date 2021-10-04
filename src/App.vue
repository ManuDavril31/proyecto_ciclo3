<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">AdoptarMas</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link activa" aria-current="page"
                >Inicio</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/como-adoptar-un-animal" class="nav-link"
                >Cómo adoptar un animal</router-link
              >
            </li>

            <li class="nav-item">
              <router-link to="/servicios" class="nav-link"
                >Servicios</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/donaciones" class="nav-link"
                >Donaciones</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/contacto" class="nav-link">Contacto</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
