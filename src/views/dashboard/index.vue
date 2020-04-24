<template>
  <div class="dashboard-container">
    <panel-group></panel-group>
    <div class="dashboard-introduction">
      <img :src="idIntroductionUrl" alt="id体系介绍" width="800"></img>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import PanelGroup from "./components/PanelGroup";


  export default {
    name: 'Dashboard',
    components: {PanelGroup},
    data: function () {
      return {
        idIntroductionUrl: require("../../assets/img/id-introduction.png")
      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }

    &-text {
      font-size: 30px;
      line-height: 46px;
    }

    &-introduction {
      text-align: center;
    }
  }
</style>
