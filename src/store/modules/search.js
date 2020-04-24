import * as types from '../../store/mutation-types'
import {getCookies, setCookies} from "../../utils/common-util";

const optionData = {
  "iqid": {value: '1', name: 'iqid'},
  "biqid": {value: '2', name: 'biqid'},
  "device_id": {value: '3', name: 'device_id'}
}
const optionList = function () {
  return Object.values(optionData)
}();
const optionMap1 = {
  ...optionData,
};
const optionMap2 = function () {
  let map = {}
  Object.values(optionData).forEach(d => {
    map[d.value] = d;
  })
  return map;
}();
const ck = "searchHistoryList";
let originList = [
  {idType: "1", idValue: "963fe034cb4a8a493fec5640792ff94c0700000c"},
  {idType: "1", idValue: "b1615a9c3dcb63292a5879be327e45a80710000d"},
  {idType: "2", idValue: "4893831f9dd1e54131df4c12ecd9c64d3009"},
  {idType: "3", idValue: "860379048730656"}
];
const state = {
  searchHistoryList: [],
  idTypeOptionList: optionList,
  idTypeOptionMap1: optionMap1,
  idTypeOptionMap2: optionMap2,
  iqidResultVisibleProperties: {
    "iqid": {visible: 1},
    "imei": {visible: 1},
    "androidId": {visible: 1},
    "macAddress": {visible: 2},
    "product": {visible: 2},
    "hardware": {visible: 2},
    "resolution": {visible: 2},
    "imsi": {visible: 2},
  },
  resultColumnMap: {
    "iqid": "iqid",
    "imei": "imei",
    "androidId": "android_id",
    "macAddress": "mac_address",
  }
}

const mutations = {
  [types.add_iqid_search_history]: (state, data) => {
    let contain = state.searchHistoryList.findIndex(bean => {
      return bean.idType == data.idType && bean.idValue == data.idValue;
    });
    if (contain < 0) {
      state.searchHistoryList.unshift(data);
    }
    setCookies(ck, state.searchHistoryList);
  },

  [types.init_iqid_search_history_from_cookie]: (state) => {
    let data = getCookies(ck);
    if (data) {
      state.searchHistoryList = data;
    } else {
      state.searchHistoryList = originList;
    }
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
