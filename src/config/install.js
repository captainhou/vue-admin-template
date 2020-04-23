import store from '../store/index'
import * as types from '../store/mutation-types'
import * as module from '../store/module-types'

const install = function (Vue) {
    Vue.prototype.$userBean = {userName: '', authMap: {}}
    store.dispatch(module.user + '/' + types.get_db_user)
        .then(user => {
            Vue.prototype.$userBean = user.data
        })
    store.dispatch('user/' + types.set_db_user);
}

export default {
    install: install
}
