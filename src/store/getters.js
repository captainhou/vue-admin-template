const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  user: state => state.user.user,
  idTypeOptionMap1: state => state.search.idTypeOptionMap1,
  idTypeOptionMap2: state => state.search.idTypeOptionMap2,
  idTypeOptionList: state => state.search.idTypeOptionList,
  iqidResultVisibleProperties: state => state.search.iqidResultVisibleProperties,
  resultColumnMap: state => state.search.resultColumnMap,
}
export default getters
