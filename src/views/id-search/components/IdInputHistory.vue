<template>
  <div id="idInputHistory" style="width: 700px">
    <el-button size="small" type="text" v-for="h in searchHistoryList" @click="quickSearch(h)">
      <span v-text="idTypeOptionMap2[h.idType].name"></span>: <span v-text="h.idValue"></span>
    </el-button>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  import * as moduleTypes from '../../../store/module-types'
  import * as types from '../../../store/mutation-types'


  export default {
    name: "IdInputHistory",
    data: function () {
      return {}
    },
    computed: {
      ...mapState(moduleTypes.search, ["searchHistoryList"]),
      ...mapGetters(['idTypeOptionMap2']),
    },
    methods: {
      quickSearch: function (searchBean) {
        this.$emit("quickSearch", searchBean);
      }
    }
  }
</script>

<style type="text/css">
  #idInputHistory .el-button + .el-button {
    margin-left: 0px;
  }

  #idInputHistory .el-button {
    margin-right: 15px;
    display: inline-block;
  }

</style>
