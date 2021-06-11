// 모든 component에서 발생하는 이벤트들의 중앙 처리 센터
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getter from './getter'
import mutation from './mutation'
import action from './action'

Vue.use(Vuex)

export default new Vuex.Store({ state, getter, mutation, action })
