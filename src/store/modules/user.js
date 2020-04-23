import * as types from '../../store/mutation-types'
import * as service from '../../api/user'

const state = {
  token: '',
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  user: {}
}

const mutations = {
  [types.set_current_user](state, response) {
    state.user = response.data
  }
}

const actions = {
  [types.get_db_user]({commit, state}) {
    return service.getUser();
  },
  async [types.set_db_user]({commit, state}) {
    await service.getUser().then(response => {
      commit(types.set_current_user, response);
    }).catch(error => {
      console.log(error)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
