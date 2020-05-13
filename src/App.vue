<template>
  <div id="app">
    <router-view />
    <NavBar />
  </div>
</template>

<script>
import NavBar from "@/components/Base/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style>

body::-webkit-scrollbar {
  display: none;
}

/* Font Styling */

h1 {
  font-family: Lato;
  font-size: 23px;
  font-style: normal;
  font-variant: normal;
  font-weight: 800;
  line-height: 28px;
}
h2 {
  font-family: Lato;
  font-size: 19px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 15.4px;
}
h3 {
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 15.4px;
}
p {
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
}

body {
  background-color: theme('colors.secondary-color');
}

.icon-color {
  color: theme('colors.highlighted-color');
}

</style>
