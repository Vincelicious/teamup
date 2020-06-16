<template>
  <div>
    <div class="container mx-auto px-4">
      <div class="text-white flex">
        <!-- Left Icon -->
        <div class="badge-icon flex justify-center items-center">
          <img :src="require(`@/assets/badges/progress/${image}`)" />
        </div>
        <!-- Badge information (right part) -->
        <div class="badge-info flex flex-col justify-center mb-3 ml-3">
          <div>
            <h1 class="font-bold mt-3">{{ title }}</h1>
            <p class="underline-text">{{ desc }}</p>
          </div>
          <!-- Progress Bar -->
          <div class="flex items-center">
            <ProgressBar></ProgressBar>
            <!-- <div class="statistics text-white mt-2">10/200</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/Motivation/ProgressBar.vue";

export default {
  components: {
    ProgressBar
  },
  props: {
    recordBadges: Object,
    image: String,
    title: String,
    desc: String,
    progress: String
  }
};
</script>

<style scoped>
.progressbar {
  width: 100%;
  height: 6px;
  background-color: #1cb3fd;
  border-radius: 10px;
}
.underline-text {
  color: #9d9d9d;
}
/* .line-divider {
  width: 100%;
  height: 2px;
  background-color: theme("colors.highlighted-color");
  opacity: 40%;
} */
.badge-info {
  width: 100%;
}
.badge-icon {
  width: 40vw;
}
.statistics {
  font-size: 0.8rem;
}
</style>
