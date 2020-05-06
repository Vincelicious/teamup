<template>
  <div class="nav-bar">
    <div class="menu-item">
      <PauseIcon class="flip"></PauseIcon>
      <router-link :to="{ name: 'Group List' }">Grouplist</router-link>
    </div>
    <div class="menu-item">
      <UsersIcon></UsersIcon>
      <router-link :to="{ name: 'My Group' }">My Group</router-link>
    </div>
    <div class="menu-item">
      <ZapIcon></ZapIcon>
      <router-link :to="{ name: 'Training' }">Training</router-link>
    </div>
    <div class="menu-item">
      <TrendingUpIcon></TrendingUpIcon>
      <router-link :to="{ name: 'Progress' }">Progress</router-link>
    </div>
    <div class="menu-item">
      <MoreHorizontalIcon></MoreHorizontalIcon>
      <router-link :to="{ name: 'Settings' }">More</router-link>
    </div>
  </div>
</template>

<script>
import {
  PauseIcon,
  UsersIcon,
  TrendingUpIcon,
  MoreHorizontalIcon,
  ZapIcon
} from "vue-feather-icons";

export default {
  components: { PauseIcon, UsersIcon, TrendingUpIcon, MoreHorizontalIcon, ZapIcon }
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #212131;
  font-size: 9pt;
  font-weight: 500;
  height: 56px;
}
.menu-item {
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  width: 20vw;
}

.flip {
  transform: rotate(90deg);
  
}

.menu-item:hover,
.menu-item.router-link-active,
.menu-item.router-link-exact-active {
   color: #1CB3FD;
   cursor: pointer;
 }
</style>
