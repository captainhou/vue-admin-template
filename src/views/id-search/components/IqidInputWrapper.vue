<template>
  <div id="idInputWrapper">
    <el-input placeholder="请输入id" v-model="idValue" @input="emitSearch">
      <template slot="prepend">
        <el-select v-model="idType" style="width: 120px">
          <el-option v-for="t in idTypeOptionList" :key="t.value" :label="t.name" :value="t.value">
          </el-option>
        </el-select>
      </template>
      <el-button slot="append" icon="el-icon-search" @click="emitSearch"></el-button>
    </el-input>
    <id-input-history @quickSearch="quickSearch"></id-input-history>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import * as moduleTypes from '../../../store/module-types'
  import * as types from '../../../store/mutation-types'
  import IdInputHistory from "./IdInputHistory";

  export default {
    name: "IqidInputWrapper",
    components: {IdInputHistory},
    data: function () {
      return {
        idValue: "",
        idType: "1",
      }
    },
    computed:{
      ...mapGetters(['idTypeOptionList'])
    },
    methods: {
      ...mapMutations(moduleTypes.search, [types.add_iqid_search_history]),
      emitSearch: function () {
        if (!this.idType || !this.idValue) {
          return;
        }
        this.$emit("id-search", this.idType, this.idValue);
      },
      quickSearch: function (searchBean) {
        this.idType = searchBean.idType;
        this.idValue = searchBean.idValue;
        this.emitSearch();
      }
    }
  }
</script>

<style type="text/css">
</style>
