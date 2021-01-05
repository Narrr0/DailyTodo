import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    todos: [],
  },
  actions:{
    FETCH_TODO(context, data){
      context.commit('SET_TODO', data);
      return 0;
    },
    TOGGLE_TODO(context, key, when){
      context.commit('TOGGLE_DONE', key, when);
      return 0;
    }
  },
  mutations:{
    SET_TODO(state, data){
      state.todos.push(data);
    },
  }
})