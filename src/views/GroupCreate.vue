<template>
  <div class="flex flex-col justify-center bg-gray-200 content-center">
    <span>Groupname: {{ group.name }}</span>
    <input
      type="text"
      class="justify-center content-center m-4 bg-gray-600 text-white"
      id="name"
      v-model="group.name"
      placeholder="groupname"
    />

    <span>Goal: {{ group.goal }}</span>
    <div class="justify-center content-center m-4 bg-gray-600">
      <input type="radio" id="quarter" value="Quarter" v-model="group.goal" />
      <input type="radio" id="half" value="Half" v-model="group.goal" />
      <input type="radio" id="full" value="Full" v-model="group.goal" />
    </div>

    <span>Trainingsdag {{ group.trainingDays }}</span>

    <div class="justify-center content-center m-4 bg-gray-600">
      <input
        type="checkbox"
        id="maandag"
        value="Maandag"
        v-model="group.trainingDays"
      />
      <input
        type="checkbox"
        id="dinsdag"
        value="Dinsdag"
        v-model="group.trainingDays"
      />
      <input
        type="checkbox"
        id="woensdag"
        value="Woensdag"
        v-model="group.trainingDays"
      />
      <input
        type="checkbox"
        id="donderdag"
        value="Donderdag"
        v-model="group.trainingDays"
      />
      <input
        type="checkbox"
        id="vrijdag"
        value="Vrijdag"
        v-model="group.trainingDays"
      />
      <input
        type="checkbox"
        id="zaterdag"
        value="Zaterdag"
        v-model="group.trainingDays"
      />
      <input
        type="checkbox"
        id="Zondag"
        value="Zondag"
        v-model="group.trainingDays"
      />
    </div>

    <span>Max groupsize {{ group.groupsize }}</span>

    <vue-slider v-model="group.groupsize" />

    <span>Location {{ group.location }}</span>

    <vue-slider v-model="group.location" />

    <button
      class=" justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      v-on:click="create"
    >
      Create
    </button>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  components: {
    VueSlider
  },
  data: () => {
    return {
      group: {
        name: "",
        trainingDays: [],
        goal: "",
        groupsize: "",
        location: ""
      }
    };
  },
  methods: {
    create: function() {
      console.log({
        groupname: this.group.name,
        goal: this.group.goal,
        trainingDays: this.group.trainingDays,
        maxSize: this.group.groupsize,
        location: this.group.location
      });
    }
  }
};
</script>

<style scoped>
.vue-slider-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* rail style */
.vue-slider-rail {
  background-color: #ccc;
  border-radius: 15px;
}

/* process style */
.vue-slider-process {
  background-color: #3498db;
  border-radius: 15px;
}

/* mark style */
.vue-slider-mark {
  z-index: 4;
}
.vue-slider-mark:first-child .vue-slider-mark-step,
.vue-slider-mark:last-child .vue-slider-mark-step {
  display: none;
}
.vue-slider-mark-step {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.16);
}
.vue-slider-mark-label {
  font-size: 14px;
  white-space: nowrap;
}
/* dot style */
.vue-slider-dot-handle {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
}
.vue-slider-dot-handle-focus {
  box-shadow: 0px 0px 1px 2px rgba(52, 152, 219, 0.36);
}

.vue-slider-dot-handle-disabled {
  cursor: not-allowed;
  background-color: #ccc;
}

.vue-slider-dot-tooltip-inner {
  font-size: 14px;
  white-space: nowrap;
  padding: 2px 5px;
  min-width: 20px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  border-color: #3498db;
  background-color: #3498db;
  box-sizing: content-box;
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

.vue-slider-dot-tooltip-wrapper {
  opacity: 0;
  transition: all 0.3s;
}
.vue-slider-dot-tooltip-wrapper-show {
  opacity: 1;
}
</style>
