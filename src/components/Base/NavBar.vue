<template>
  <div class="nav-bar">
    <div class="menu-item">
      <router-link class="menu-item" :to="{ name: 'Group List' }">
        <PauseIcon class="flip"></PauseIcon>Grouplist
      </router-link>
    </div>
    <div class="menu-item">
      <router-link class="menu-item" :to="{ name: 'My Group' }">
        <UsersIcon></UsersIcon>My Group
      </router-link>
    </div>
    <div class="menu-item">
      <router-link class="menu-item" :to="{ name: 'Training' }">
        <ZapIcon></ZapIcon>Training
      </router-link>
    </div>
    <div class="menu-item">
      <router-link class="menu-item" :to="{ name: 'Progress' }">
        <TrendingUpIcon></TrendingUpIcon>Progress
      </router-link>
    </div>
    <div class="menu-item">
      <router-link class="menu-item" :to="{ name: 'Settings' }">
        <MoreHorizontalIcon></MoreHorizontalIcon>More
      </router-link>
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
  components: {
    PauseIcon,
    UsersIcon,
    TrendingUpIcon,
    MoreHorizontalIcon,
    ZapIcon
  }
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
  color: #1cb3fd;
  cursor: pointer;
}
</style>