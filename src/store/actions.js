/* 
서버에서 실제 값을 가져와서 mutation에 등록된 함수를 실행 한다. -> mutation의 state 값이 변한다.
*/
import getWeather from '../api/weather-api'   // weather-api를 돌려서 데이터를 가져온다.

export default {
  async ACT_DAILY({ commit }, v){
    try{
      commit('MUT_LOADING', true)
      commit('MUT_DAILY', await getWeather('daily', v))
      commit('MUT_LOADING', false)
    }
    catch(err){
      console.log(err)
    }
  },
  
  async ACT_DAYS({ commit }, v){
    try{
      commit('MUT_LOADING', true)
      commit('MUT_DAYS', await getWeather('days', v))
      commit('MUT_LOADING', false)
    }
    catch(err){
      console.log(err)
    }
  },
  ACT_COORDS({ commit }, v){
      commit('MUT_COORDS', v)
  },
  ACT_LOADING({ commit }, v){
      commit('MUT_LOADING', v)
  },
}