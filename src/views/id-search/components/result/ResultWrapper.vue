<template>
  <div id="idResultWrapper">
    <iqid-result :search-bean="searchBean" :data-prop="resultProp.iqidInfo"></iqid-result>
    <biqid-list-result :search-bean="searchBean" :data-prop="resultProp.biqidList"></biqid-list-result>
  </div>
</template>

<script>
  import IqidResult from './IqidResult'
  import BiqidListResult from './BiqidListResult'

  export default {
    props: {
      resultProp: {
        type: Object,
        default: () => {
        }
      },
      searchBean: {
        type: Object,
        default: () => {
        }
      }
    },
    name: "ResultWrapper",
    components: {IqidResult, BiqidListResult},
    data: function () {
      return {}
    }
  }
</script>

<style type="text/css">
  #idResultWrapper .result-match {
    color: green;
    font-weight: bold;
  }
</style>
