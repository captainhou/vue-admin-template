<template>
  <div class="id-search-container">
    <div class="id-search-input">
      <iqid-input-wrapper @id-search="idSearch"></iqid-input-wrapper>
    </div>
    <div class="id-search-result">
      <id-search-result-wrapper :result-prop="searchResult" :search-bean="currentSeachBean"></id-search-result-wrapper>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import * as statService from '../../api/stat'
  import {success} from "../../utils/request";
  import IqidInputWrapper from './components/IqidInputWrapper'
  import IdSearchResultWrapper from './components/result/ResultWrapper'
  import * as moduleTypes from "../../store/module-types";
  import * as types from "../../store/mutation-types";


  export default {
    name: 'IdSearch',
    components: {
      IqidInputWrapper,
      IdSearchResultWrapper
    },
    data: function () {
      return {
        searchResult: {},
        currentSeachBean: {},
      }
    },
    computed: {
      ...mapGetters([])
    },
    methods: {
      ...mapMutations(moduleTypes.search, [types.add_iqid_search_history, types.init_iqid_search_history_from_cookie]),

      idSearch: function (idType, idValue) {
        statService.idSearch(idType, idValue).then(res => {
          if (success(res.code)) {
            this.searchResult = res.data;
            this.currentSeachBean = {idType: idType, idValue: idValue};
            this[types.add_iqid_search_history](this.currentSeachBean);
          } else {
            // this.searchResult = res.data;
            // this.currentSeachBean = {idType: idType, idValue: idValue};
            this.$message({
              type: 'warning',
              message: "无结果",
              duration: 500
            });
          }
        })
      }
    },
    mounted: function () {
      this[types.init_iqid_search_history_from_cookie]();
    }
  }
</script>

<style lang="scss" scoped>
  .id-search {
    padding-left: 100px;

    &-container {
      margin: 30px;
    }

    &-text {
      font-size: 30px;
      line-height: 46px;
    }

    &-input {
      margin: 30px;
      width: 600px;
    }

    &-result {
      margin: 30px;
      max-width: 800px;
      padding-bottom: 400px;
    }
  }
</style>
