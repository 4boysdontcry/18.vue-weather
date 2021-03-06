// 모든 component에서 발생하는 이벤트들의 중앙 처리 센터
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({ state, getters, mutations, actions })
