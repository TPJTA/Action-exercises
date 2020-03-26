import { combineReducers } from 'redux'
import {actionTypes} from './Action'
const initState={
    list:[{
        "id":1,
        "name":"a",
        "age":18
    },{
        "id":2,
        "name":"b",
        "age":12
    }],
    errMsg: '',
    isLoading: false
}//初始对象
function blog(state=initState,action){
    switch(action.type){
        case actionTypes.START_FETCH_BLOG_LIST:
            return{
                ...state,
                errMsg: '',
                isLoading:true

            }
        case actionTypes.FETCH_BLOG_LIST_SUCCESS:
            return{
                ...state,
                isLoading:false,
                list:action.list
            }
        case actionTypes.FETCH_BLOG_LIST_FAILED:
        return{
            ...state,
            isLoading:false,
            errMsg: '发生错误'
        }
        default:
            return state
    }
}


export default combineReducers({blog})