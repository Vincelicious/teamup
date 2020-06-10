<template>
  <div class="app">
    <TopBar pageTitle="Progress"></TopBar>
    <!-- Wat is de beste manier om de content naar beneden te pushen? Dit hieronder kan veranderd worden -->
    <div class="spacing py-8"></div>
    <div class="container clickable">
      <div class="recordbadges flex flex-start mb-3">
        <div class="badge1" @click="openLongestRun">
          <div class="container  px-5">
            <div class="text-white flex flex-col items-center">
              <div class="badge-icon flex justify-center items-center">
                <img src="@/assets/badges/Longest-Run-Badge.svg" />
              </div>
              <div class="badge-info flex flex-col justify-center mb-3 ml-3">
                <div>
                  <h1 class="font-bold mt-3">Longest Run</h1>
                  <p class="underline-text text-center">
                    12.54 km
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="badge2" @click="openFastestKm">
          <div class="container clickable px-5">
            <div class="text-white flex flex-col items-center">
              <div class="badge-icon flex justify-center items-center">
                <img src="@/assets/badges/Fastest-Km-Badge.svg" />
              </div>
              <div class="badge-info flex flex-col justify-center mb-3 ml-3">
                <div>
                  <h1 class="font-bold mt-3">Fastest Km</h1>
                  <p class="underline-text text-center">
                    04:54
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="badge3" @click="openTarget">
          <div class="container clickable px-5">
            <div class="text-white flex flex-col items-center">
              <div class="badge-icon flex justify-center items-center">
                <img src="@/assets/badges/Target-Badge.svg" />
              </div>
              <div class="badge-info flex flex-col justify-center mb-3 ml-3">
                <div>
                  <h1 class="font-bold mt-3">Best Finish</h1>
                  <p class="underline-text text-center">
                    04:32:54
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Badge></Badge>
    <Badge></Badge>
    <Badge></Badge>

    <ModalFastestKm
      v-model="ModalFastestKm"
      ref="loadFastestKm"
    ></ModalFastestKm>
    <ModalTarget v-model="ModalTarget" ref="loadTarget"></ModalTarget>
    <ModalLongestRun
      v-model="ModalLongestRun"
      ref="loadLongestRun"
    ></ModalLongestRun>
  </div>
</template>
<script>
import ModalTarget from "@/components/Motivation/ModalTarget.vue";
import ModalFastestKm from "@/components/Motivation/ModalFastestKm.vue";
import ModalLongestRun from "@/components/Motivation/ModalLongestRun.vue";
import TopBar from "@/components/Base/TopBar.vue";
import Badge from "@/components/Base/Progress/Badge.vue";
// import RecordBadge from "@/components/Base/Progress/RecordBadge.vue";
import { mapState } from "vuex";

export default {
  components: {
    TopBar,
    Badge,
    // RecordBadge,
    ModalTarget,
    ModalFastestKm,
    ModalLongestRun
  },
  created() {
    this.$store.dispatch("badge/fetchBadges");
  },
  computed: {
    ...mapState("badge", ["badges"]),
    recordBadges: function() {
      return this.badges.filter(badge => {
        return badge.achievementType == "record";
      });
    }
  },
  data() {
    return {
      ModalFastestKm: false,
      ModalTarget: false,
      ModalLongestRun: false
    };
  },
  methods: {
    openFastestKm() {
      this.ModalFastestKm = !this.ModalFastestKm;
      this.$refs.loadFastestKm.play();
    },
    openTarget() {
      this.ModalTarget = !this.ModalTarget;
      this.$refs.loadTarget.play();
    },
    openLongestRun() {
      this.ModalLongestRun = !this.ModalLongestRun;
      this.$refs.loadLongestRun.play();
    }
  }
};
</script>
<style scoped>
.underline-text {
  color: #9d9d9d;
}
.badge-icon {
  width: 20vw;
}
.clickable {
  cursor: pointer;
}
</style>
