<template>
  <div>
    <h1>Create group</h1>
    <input type="text" id="name" v-model="group.name" placeholder="groupname" />
    
    <p>Groupname: {{ group.name }}</p>
    <div class="goal">
            <input
        type="radio"
        id="quarter"
        value="Quarter"
        v-model="group.goal"
      />   
            <input
        type="radio"
        id="half"
        value="Half"
        v-model="group.goal"
      />

            <input
        type="radio"
        id="full"
        value="Full"
        v-model="group.goal"
      />
 <br>
 <span>Picked Goal: {{ group.goal }}</span>
 <br>
 </div>
    

    <div class="trainingsDays">
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

    <span>Trainingsdag {{ group.trainingDays }}</span>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      group: {
        name: "",
        trainingDays: [],
        goal: ""
      }
    };
  }
};
</script>

<style scoped>


</style>
