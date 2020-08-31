
import { createStore } from "redux"
import Axios from "axios"

const initialState = {
    user: { id: "", },
    haslogin: false,
    welfareData:[],
    holderData:[],
    domicileData:[],
    kbprogramData:[],
    reasonData:[],
}

const reducer = (state = initialState, action) => {
    if (action.type === 'LOGIN_USER') {

        if (action.payload.id != state.id) {
            // Axios.defaults.headers.common.Authorization = 'Bearer '+action.payload.token
            return {
                ...state,
                user: action.payload,
                haslogin: true
            }
        }
        // and update the copy with the new value
    }
    if (action.type === "LOGOUT_USER") {
        return {
            ...state,
            user: { id: "" },
            haslogin: false
        }
    }
    //======================================
    //======================================
    //======================================
    if (action.type === "INIT_HOLDER"){
        let name = [];
        action.payload.forEach(element => {
            name.push({name:element.name,id:element.id})
        });
        console.log(name);
        return {
            ...state,
            holderData: name,
        }
    }
    if (action.type === "INIT_DOMICILE"){
        let name = [];
        action.payload.forEach(element => {
            name.push({name:element.name,id:element.id})
        });
        console.log(name);
        return {
            ...state,
            domicileData: name,
        }
    }
    if (action.type === "INIT_WELFARE"){
        let arr = [];
        action.payload.forEach(element => {
            arr.push({name:element.name,abb:element.abbreviation,id:element.id})
        });
        console.log(arr);
        return {
            ...state,
            welfareData: arr,
        }
    }
    if (action.type === "INIT_REASON"){
        let arr = [];
        action.payload.forEach(element => {
            arr.push({name:element.name,abb:element.abbreviation,id:element.id})
        });
        console.log(arr);
        return {
            ...state,
            reasonData: arr,
        }
    }
    if (action.type === "INIT_KB"){
        let arr = [];
        action.payload.forEach(element => {
            arr.push({name:element.name,abb:element.abbreviation,id:element.id})
        });
        console.log(arr);
        return {
            ...state,
            kbprogramData: arr,
        }
    }
    //======================================
    //======================================
    //======================================

    return state
}

const store = createStore(reducer)

export default store
