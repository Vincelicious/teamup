<template>
  <div class="app">

    <TopBar pageTitle="Progress"></TopBar>
    <!-- Wat is de beste manier om de content naar beneden te pushen? Dit hieronder kan veranderd worden -->
    <div class="spacing py-8"></div>

    <div class="recordbadges flex justify-center mb-3">
      <RecordBadge 
        v-for="badge in recordBadges"
        :key="badge.id"
        :recordBadges="badge"
      ></RecordBadge>
    </div>

    <Badge></Badge>
    <Badge></Badge>
    <Badge></Badge>



    <button class="btn text-white" @click="openFastestKm">
      Open ModalFastestKm
    </button>
    
    <ModalFastestKm
      v-model="ModalFastestKm"
      ref="loadFastestKm"
    ></ModalFastestKm>

    <button class="btn text-white" @click="openTarget">
      Open ModalTarget
    </button>
    <ModalTarget v-model="ModalTarget" ref="loadTarget"></ModalTarget>

    <button class="btn text-white" @click="openLongestRun">
      Open LongestRun
    </button>

    <ModalLongestRun
      v-model="ModalLongestRun"
      ref="loadLongestRun"
    ></ModalLongestRun>
    <h1>Test</h1>
  </div>
</template>
<script>
import ModalTarget from "@/components/Motivation/ModalTarget.vue";
import ModalFastestKm from "@/components/Motivation/ModalFastestKm.vue";
import ModalLongestRun from "@/components/Motivation/ModalLongestRun.vue";
import TopBar from "@/components/Base/TopBar.vue";
import Badge from "@/components/Base/Progress/Badge.vue";
import RecordBadge from "@/components/Base/Progress/RecordBadge.vue";
import { mapState } from "vuex";


export default {
  components: {
    TopBar,
    Badge,
    RecordBadge,
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
<style scoped></style>