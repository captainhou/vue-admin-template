<template>
  <div>
    <el-button
      type="text" @click="showIqidDetail">iqid基础信息<i
      :class="{'el-icon-arrow-down':showIqidDetailVisible,
                                'el-icon-arrow-up':!showIqidDetailVisible, 'el-icon--right':true}"></i>
    </el-button>
    <el-table
      :data="dataList"
      size="small"
      border
      highlight-current-row
    >
      <el-table-column
        width="180"
        align="center"
        label="属性"
        prop="p">
      </el-table-column>
      <el-table-column
        align="center"
        label="值"
        prop="v">
        <template slot-scope="scope">
          <span v-show="scope.row.p!='iqid'
          || !(searchBean.idType==idTypeOptionMap1.iqid.value
          && scope.row.v==searchBean.idValue)"
                v-text="scope.row.v"></span>
          <span v-show="scope.row.p =='iqid'
          && searchBean.idType==idTypeOptionMap1.iqid.value
          && scope.row.v==searchBean.idValue"
                class="result-match" v-text="scope.row.v">
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {uuid} from 'vue-uuid'
  import {mapGetters} from "vuex";

  export default {
    name: "IqidResult",
    props: {
      dataProp: {
        type: Object
      },
      searchBean: {
        type: Object,
        default: () => {
        }
      }
    },
    computed: {
      ...mapGetters(['iqidResultVisibleProperties', 'resultColumnMap', 'idTypeOptionMap1']),
    },
    watch: {
      dataProp: {
        deep: true,
        handler: function () {
          this.setDataList();
        }
      },
      showIqidDetailVisible: function () {
        this.setDataList();
      }
    },
    methods: {
      setDataList: function () {
        if (!this.dataProp) {
          return []
        }
        let tmpList = [];
        Object.keys(this.dataProp).map((key, item) => {
          let visible = this.iqidResultVisibleProperties[key];
          if (visible && visible.visible == 1 || this.showIqidDetailVisible) {
            let bean = {
              id: uuid.v1(),
              p: this.resultColumnMap[key] ? this.resultColumnMap[key] : key,
              v: this.dataProp[key]
            }
            tmpList.push(bean);
          }
        });
        this.dataList = tmpList;
      },
      showIqidDetail: function () {
        this.showIqidDetailVisible = !this.showIqidDetailVisible;
      }
    },
    data: function () {
      return {
        dataList: [],
        showIqidDetailVisible: false
      }

    }
  }
</script>

<style scoped>

</style>
