<template>
  <div>
    <div class="bg-primary-color text-center">
      <h2 class="text-2xl text-white py-8">Team Up Group</h2>
    </div>

    <div class="bg-darkened-color flex justify-evenly text-white">
      <div class="py-4 flex-1 text-center border-b-4 border-highlighted-color">
        Group
      </div>
      <div class="py-4 flex-1 text-center">Scheme</div>
      <div class="py-4 flex-1 text-center">Chat</div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <h3 class="text-white text-2xl mt-4 mb-2">{{ group.name }}</h3>
      <span class="text-white flex items-center">
        <BaseIcon class="mr-2" name="target" width="16" height="16" />
        {{ group.goal }}
      </span>

      <div class="text-white flex items-center mt-8 mb-2">
        <BaseIcon class="mr-2" name="calendar" width="16" height="16" />
        <h4>Training Days</h4>
      </div>
      <TrainingDays :trainingDays="selectedTrainingDays" />

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

export default {
  components: {
    TrainingDays,
    Member
  },
  props: {
    group: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedTrainingDays: ["tu", "sa"]
    };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoidmluY2VsaWNpb3VzIiwiYSI6ImNrMjMxNnZrdTBwenkzaG9jMnd1NW5paXYifQ.bNaLnMChvRiZsZL4B2xSDQ";

      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [this.group.location.lng, this.group.location.lat],
        zoom: 16
      });
    }
  }
};
</script>
