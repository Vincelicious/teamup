<script src="https://cdn.jsdelivr.net/npm/vue-slider-component@latest/dist/vue-slider-component.umd.min.js"></script>

<template>
  <div class="flex flex-col content-center h-screen m-3  text-white ">
    <div class="flex mb-4 mt-8">
      <zap-icon class="card-icon" />
      <p>Groupname</p>
    </div>

    <input
      type="text"
      class="flex justify-center content-center  bg-gray-900  p-3 rounded-lg"
      id="name"
      v-model="group.name"
      placeholder="Groupname"
    />

    <div class="flex mb-4 mt-8">
      <target-icon size="1x" class=" card-icon " />
      <p>Marathon target</p>
    </div>

    <!-- <form class="target text-center">
      <input type="radio" id="quarter" value="quarter" v-model="group.goal" />
      <label for="quarter">Quarter</label>
      <input type="radio" id="half" value="half" v-model="group.goal" />
      <label for="half">Half</label>
      <input type="radio" id="full" value="full" v-model="group.goal" />
      <label for="full">Full</label>
    </form> -->

    <div class="flex mb-4 mt-8">
      <calendar-icon class="card-icon" />
      <p>Trainings days</p>
    </div>

    <form class="days text-center">
      <input type="checkbox" id="mo" value="mo" v-model="group.trainingDays" />
      <label for="mo">Mo</label>
      <input type="checkbox" id="tu" value="tu" v-model="group.trainingDays" />
      <label for="tu">Tu</label>
      <input type="checkbox" id="we" value="we" v-model="group.trainingDays" />
      <label for="we">We</label>
      <input type="checkbox" id="th" value="th" v-model="group.trainingDays" />
      <label for="th">Th</label>
      <input type="checkbox" id="fr" value="fr" v-model="group.trainingDays" />
      <label for="fr">Fr</label>
      <input type="checkbox" id="sa" value="sa" v-model="group.trainingDays" />
      <label for="sa">Sa</label>
      <input type="checkbox" id="su" value="su" v-model="group.trainingDays" />
      <label for="su">Su</label>
    </form>

    <div class="flex mb-4 mt-8">
      <users-icon class="card-icon" />
      <p>Groupsize</p>
    </div>

    <div class="slider">
      <vue-slider
        v-model="group.maxMembers"
        :min="2"
        :max="10"
        :tooltip-placement="['bottom']"
        :tooltip="'always'"
      />
    </div>

    <div id="button" class=" flex justify-between mb-4 mt-16">
      <button
        class=" flex justify-center border border-highlighted-color  py-2 px-4 rounded-lg w-5/12"
      >
        Cancel
      </button>
      <button
        class=" flex justify-center bg-highlighted-color py-2 px-4 rounded-lg w-5/12"
        v-on:click="create"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import GroupService from "@/services/GroupService.js";
import {
  TargetIcon,
  UsersIcon,
  CalendarIcon,
  ZapIcon
} from "vue-feather-icons";

export default {
  components: {
    TargetIcon,
    UsersIcon,
    CalendarIcon,
    ZapIcon,
    VueSlider
  },
  data: () => {
    return {
      group: {
        name: "",
        description: "De fanatiekste groep",
        marathonId: 4,
        trainingDays: [],
        trainingLocation: {},
        maxMembers: 5,
        members: []
      }
    };
  },
  methods: {
    create: function() {
      GroupService.createGroup({
        name: this.group.name,
        description: this.group.description,
        marathonId: this.group.marathonId,
        trainingDays: this.group.trainingDays,
        trainingLocation: this.group.trainingLocation,
        maxMembers: this.group.maxMembers,
        members: this.group.members
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    }
  },
  created() {
    this.$getLocation().then(coordinates => {
      this.group.trainingLocation = {
        lat: coordinates.lat,
        lng: coordinates.lng
      };
    });
  }
};
</script>

<style
  link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/vue-slider-component@latest/theme/default.css"
>
.card-icon {
  margin-right: 0.5em;
  height: 1.2em;
  width: 1.2em;
}

/* component style */
.vue-slider-disabled .vue-slider-process {
  background-color: #a7a7a7;
}
.vue-slider-disabled .vue-slider-dot-handle {
  border-color: #a7a7a7;
}
.vue-slider-disabled .vue-slider-mark-step-active {
  box-shadow: 0 0 0 2px #a7a7a7;
}

/* rail style */
.vue-slider-rail {
  width: 100%;
  margin: auto;
  background-color: theme("colors.darkened-color");
  border-radius: 15px;
  transition: background-color 0.3s;
}
.vue-slider:hover .vue-slider-rail {
  background-color: theme("colors.darkened-color");
}

/* process style */
.vue-slider-process {
  background-color: #1cb3fd;
  border-radius: 15px;
  transition: background-color 0.3s;
}
.vue-slider:hover .vue-slider-process {
  background-color: #69c0ff;
}

/* mark style */
.vue-slider-mark-step {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #e8e8e8;
  background-color: #fff;
}
.vue-slider-mark-step-active {
  box-shadow: 0 0 0 2px #9cd5ff;
}
.vue-slider:hover .vue-slider-mark-step-active {
  box-shadow: 0 0 0 2px #69c0ff;
}

.vue-slider-mark-label {
  font-size: 12px;
  white-space: nowrap;
}
/* dot style */
.vue-slider-dot-handle {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #1cb3fd;
  border: 2px solid #1cb3fd;
  box-sizing: border-box;
  transition: box-shadow 0.3s, border-color 0.3s;
}
.vue-slider:hover .vue-slider-dot-handle {
  border-color: #1cb3fd;
}

.vue-slider-dot-handle-focus {
  border-color: #1cb3fd;
  box-shadow: 0 0 0 5px rgba(54, 171, 255, 0.2);
}
.vue-slider:hover .vue-slider-dot-handle-focus {
  border-color: #1cb3fd;
}

.vue-slider-dot-handle:hover {
  border-color: #1cb3fd;
}
.vue-slider:hover .vue-slider-dot-handle:hover {
  border-color: #1cb3fd;
}

.vue-slider-dot-handle-disabled {
  cursor: not-allowed;
  border-color: #ddd !important;
}

.vue-slider-dot-tooltip {
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}
.vue-slider-dot-tooltip-inner {
  font-size: 14px;
  white-space: nowrap;
  padding: 6px 8px;
  color: #fff;
  border-radius: 5px;
  border-color: rgba(0, 0, 0, 0.75);
  background-color: #1cb3fd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transform: scale(0.9);
  transition: transform 0.3s;
}
.vue-slider-dot-tooltip-inner::after {
  content: "";
  position: absolute;
}
.vue-slider-dot-tooltip-inner-top::after {
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-top-color: inherit;
}
.vue-slider-dot-tooltip-inner-bottom::after {
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-bottom-color: inherit;
}
.vue-slider-dot-tooltip-inner-left::after {
  left: 100%;
  top: 50%;
  transform: translate(0, -50%);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-left-color: inherit;
}
.vue-slider-dot-tooltip-inner-right::after {
  right: 100%;
  top: 50%;
  transform: translate(0, -50%);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-right-color: inherit;
}
.vue-slider-dot-tooltip-inner-top {
  transform-origin: 50% 100%;
}
.vue-slider-dot-tooltip-inner-bottom {
  transform-origin: 50% 0;
}
.vue-slider-dot-tooltip-inner-left {
  transform-origin: 100% 50%;
}
.vue-slider-dot-tooltip-inner-right {
  transform-origin: 0% 50%;
}

.vue-slider-dot:hover .vue-slider-dot-tooltip,
.vue-slider-dot-tooltip-show {
  opacity: 1;
  visibility: visible;
}
.vue-slider-dot:hover .vue-slider-dot-tooltip .vue-slider-dot-tooltip-inner,
.vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner {
  transform: scale(1);
}

.target {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.target label {
  width: 30%;
  padding: 10px 0px;
  background-color: theme("colors.darkened-color");
  transition: all 0.3s;
  color: #fff;
  border-radius: 10px;
}

.target input[type="radio"] {
  display: none;
}

.target input[type="radio"]:checked + label {
  background-color: #1cb3fd;
}

.days {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.days label {
  width: 42px;
  height: 42px;
  padding: 9px 0px;
  background-color: theme("colors.darkened-color");
  transition: all 0.3s;
  color: #fff;
  border-radius: 10px;
}

.days input[type="checkbox"] {
  display: none;
}

.days input[type="checkbox"]:checked + label {
  background-color: #1cb3fd;
}
</style>
