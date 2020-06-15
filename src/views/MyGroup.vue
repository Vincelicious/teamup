<template>
  <div>
    <div class="bg-primary-color text-center">
      <h2 class="top-bar text-xl text-white flex justify-center items-center">
        Team Up Group
      </h2>
    </div>

    <div class="bg-darkened-color flex justify-evenly text-white">
      <div class="py-3 flex-1 text-center border-b-4 border-highlighted-color">
        Group
      </div>
      <div class="py-3 flex-1 text-center">Scheme</div>
      <div class="py-3 flex-1 text-center">Chat</div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <h3 class="text-white text-2xl mt-4 mb-2">{{ group.name }}</h3>
      <span class="text-white flex items-center">
        <BaseIcon class="mr-2" name="target" width="16" height="16" />
        {{ marathon.name }}
      </span>

      <div class="text-white flex items-center mt-8 mb-2">
        <BaseIcon class="mr-2" name="calendar" width="16" height="16" />
        <h4>Training Days</h4>
      </div>
      <TrainingDays :trainingDays="group.trainingDays" />

      <div class="text-white flex items-center mt-8 mb-2">
        <BaseIcon class="mr-2" name="map-pin" width="16" height="16" />
        <h4>Meeting Point</h4>
      </div>
      <div id="map" class="w-full h-24 rounded-lg overflow-hidden"></div>

      <div class="text-white flex items-center mt-8 mb-2">
        <BaseIcon class="mr-2" name="users" width="16" height="16" />
        <h4>Members</h4>
      </div>
      <div class="mb-16 flex space-x-4">
        <Member
          v-for="member in group.members"
          :key="member"
          :member="member"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TrainingDays from "@/components/groups/TrainingDays";
import mapboxgl from "mapbox-gl";
import Member from "@/components/groups/Member";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    TrainingDays,
    Member
  },
  mounted() {
    this.createMap();
  },
  computed: {
    group() {
      return this.getGroupByMemberId(this.user.id);
    },
    marathon() {
      return this.getMarathonById(this.group.marathonId);
    },
    ...mapState("user", ["user"]),
    ...mapGetters("group", ["getGroupByMemberId"]),
    ...mapGetters("marathon", ["getMarathonById"])
  },
  methods: {
    createMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoidmluY2VsaWNpb3VzIiwiYSI6ImNrMjMxNnZrdTBwenkzaG9jMnd1NW5paXYifQ.bNaLnMChvRiZsZL4B2xSDQ";

      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [
          this.group.trainingLocation.latitude,
          this.group.trainingLocation.longitude
        ],
        zoom: 16
      });
    }
  }
};
</script>

<style scoped>
.top-bar {
  height: 56px;
}
</style>
