<template>
  <div>
    <h4>biqid列表</h4>
    <el-table
      :data="dataList"
      size="small"
      border
      highlight-current-row
    >
      <el-table-column
        align="center"
        label="biqid"
        width="285"
        prop="biqid">
        <template slot-scope="scope">
          <div v-if="searchBean.idType == idTypeOptionMap1.biqid.value
          && scope.row.biqid==searchBean.idValue"
               class="result-match" v-text="scope.row.biqid">
          </div>
          <div v-if="!(searchBean.idType == idTypeOptionMap1.biqid.value
          && scope.row.biqid==searchBean.idValue)"
               v-text="scope.row.biqid"
          >
          </div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        width="140"
        label="p1"
        prop="p1">
        <template slot-scope="scope">
          <div v-text="scope.row.productName"></div>
          <div v-text="scope.row.endName"></div>
          <div v-text="scope.row.p1"></div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="device_id"
        prop="device_id">
        <template slot-scope="scope">
          <div v-show="searchBean.idType== idTypeOptionMap1.device_id.value && scope.row.device_id==searchBean.idValue"
               class="result-match" v-text="scope.row.device_id">
          </div>
          <div
            v-show="!(searchBean.idType== idTypeOptionMap1.device_id.value && scope.row.device_id==searchBean.idValue)"
            v-text="scope.row.device_id"></div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="新增时间"
        width="150"
        prop="device_id">
        <template slot-scope="scope">
          <div v-text="scope.row.createTimeStr"></div>
<!--          <div v-text="scope.row.updateTimeStr"></div>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {uuid} from 'vue-uuid'
  import {mapGetters} from "vuex";

  export default {
    name: "BiqidListResult",
    props: {
      dataProp: {
        type: Array
      },
      searchBean: {
        type: Object,
        default: () => {
        }
      }
    },
    computed: {
      ...mapGetters(['iqidResultVisibleProperties', 'resultColumnMap', "idTypeOptionMap1"]),
    },
    watch: {
      dataProp: {
        deep: true,
        handler: function () {
          this.setDataList();
        }
      }
    },
    methods: {
      setDataList: function () {
        if (!this.dataProp || this.dataProp.length == 0) {
          return []
        }
        let tmpList = [];
        this.dataProp.forEach(d => {
          let bean = {
            ...d,
            id: uuid.v1(),
            device_id: d.qyid,
          }
          tmpList.push(bean);
        });
        this.dataList = tmpList;
      }
    },
    data: function () {
      return {
        dataList: []
      }

    }
  }
</script>

<style scoped>

</style>
