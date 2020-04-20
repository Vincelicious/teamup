<template>
    <div>
        <h1>Create group</h1>
        <input type=text id="name" name="name" v-model="group.name" placeholder="groupname">
        <div class="trainingsDays"> 
            <input type="checkbox" id="maandag" value="maandag" v-model="checkedNames">
                <input type="checkbox" id="dinsdag" value="dinsdag" v-model="checkedNames">
                <input type="checkbox" id="woensdag" value="woensdag" v-model="checkedNames">
        </div>
            </div>
</template>

<script>
export default {
  data: () => {
    return {
      group: {
        name: "",
        trainingDays: []
      }
    }
  }
}
  
</script>

<style scoped>

</style>