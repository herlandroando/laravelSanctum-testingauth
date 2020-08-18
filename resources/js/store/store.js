
import { createStore } from "redux"
import Axios from "axios"

const initialState = {
    user: {id:"",},
    haslogin: false,
  }

  const reducer = (state = initialState, action) => {
    if (action.type === 'LOGIN_USER') {

        if (action.payload.id != state.id) {
            // Axios.defaults.headers.common.Authorization = 'Bearer '+action.payload.token
            return {
                ...state,
                user : action.payload,
                haslogin:true
            }
        }
            // and update the copy with the new value
    }
    if (action.type === "LOGOUT_USER"){
        return {
            ...state,
            user : {id:""},
            haslogin:false
        }
    }

    return state
  }

const store = createStore(reducer)

export default store
