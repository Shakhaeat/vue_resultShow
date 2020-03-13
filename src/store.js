import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	studentResult: []
  },

  getters: {

  },
  
  actions: {
  	getResult(context, payload){
  		 axios.
        post('http://localhost:7010/get/'+payload.degree+'/'+payload.year+'/'+payload.board+'/'+payload.roll)
         .then(response => (
         	context.commit('getResult',response.data)
         ))
         // .then(function (response) {
         //      console.log(response);
         //  })
         // .then(
         //  console.log(this.infos)
         //  )
                    

         .catch(error => console.log(error))
  	}
  },

  mutations: {
  	getResult(state, data){
  		return state.studentResult = data
  	}
  }
  
})