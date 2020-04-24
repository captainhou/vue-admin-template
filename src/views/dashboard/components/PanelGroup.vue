<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-iqid">
          <svg-icon icon-class="cloud" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            iqid
          </div>
          <div>
            <count-to :start-val="iqidTotalCnt*startRatio" :end-val="iqidTotalCnt" :duration="1000" class="card-panel-num"/>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('messages')">
        <div class="card-panel-icon-wrapper icon-biqid">
          <svg-icon icon-class="app" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            biqid
          </div>
          <count-to :start-val="biqidTotalCnt*startRatio" :end-val="biqidTotalCnt" :duration="1000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-icon-wrapper icon-iqid-new">
          <svg-icon icon-class="cloud-upload" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            新增iqid
          </div>
          <count-to :start-val="iqidNewCnt*startRatio" :end-val="iqidNewCnt" :duration="1000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-icon-wrapper icon-biqid-new">
          <svg-icon icon-class="app" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            新增biqid
          </div>
          <count-to :start-val="biqidNewCnt*startRatio" :end-val="biqidNewCnt" :duration="1000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import CountTo from 'vue-count-to'
  import * as statService from '@/api/stat'
  import {success} from "../../../utils/request";

  export default {
    components: {
      CountTo
    },
    data: function () {
      return {
        startRatio: 0.75,
        iqidTotalCnt: 0,
        biqidTotalCnt: 0,
        iqidNewCnt: 0,
        biqidNewCnt: 0
      }
    },
    methods: {
      setData: function () {
        statService.getPanelData().then(res => {
          if (success(res.code)) {
            this.iqidTotalCnt = res.data.iqidTotalCnt;
            this.iqidNewCnt = res.data.iqidNewCnt;
            this.biqidTotalCnt = res.data.biqidTotalCnt;
            this.biqidNewCnt = res.data.biqidNewCnt;
          }
        })
      },
      handleSetLineChartData(type) {
        this.$emit('handleSetLineChartData', type)
      }
    },
    mounted: function () {
      this.setData();
    }
  }
</script>

<style lang="scss" scoped>
  .panel-group {
    margin-top: 18px;

    .card-panel-col {
      margin-bottom: 32px;
    }

    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);

      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }

        .icon-iqid {
          background: #40c9c6;
        }

        .icon-biqid {
          background: #36a3f7;
        }

        .icon-iqid-new {
          color: #40c9c6
        }

        .icon-biqid-new {
          background: #36a3f7
        }
      }

      .icon-iqid {
        color: #40c9c6;
      }

      .icon-biqid {
        color: #36a3f7
      }

      .icon-iqid-new {
        color: #40c9c6
      }

      .icon-biqid-new {
        color: #36a3f7
      }

      .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }

      .card-panel-icon {
        float: left;
        font-size: 48px;
      }

      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;

        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }

        .card-panel-num {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width: 550px) {
    .card-panel-description {
      display: none;
    }

    .card-panel-icon-wrapper {
      float: none !important;
      width: 100%;
      height: 100%;
      margin: 0 !important;

      .svg-icon {
        display: block;
        margin: 14px auto !important;
        float: none !important;
      }
    }
  }
</style>
