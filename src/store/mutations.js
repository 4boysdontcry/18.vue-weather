/* 
state에 등록된 변수의 내용(값:데이터)을 변화시킨다.
state에 등록된 변수를 변화시킨다.
*/
export default {
  MUT_DAILY(state, v){
    state.daily = v;
  },
  MUT_DAYS(state, v){
    state.days = v;
  },
}