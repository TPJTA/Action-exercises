import { combineReducers } from 'redux'
import{add_num,del_num} from './Action'
const initState=[
    {
        num:10,
        id:1
    },{
        num:20,
        id:2
    }
]//初始对象
function change_num(state=initState,action){
    switch(action.type){
        case add_num:
            return state.map(item=>{
                if(item.id===action.id)//这个就是为了找到对应的元素，然后进行修改
                    item.num+=1
                return item
            })
        break;
        case del_num:
            return state.map(item=>{
                if(item.id===action.id)
                    item.num-=1
                return item
            })
        break;
        default:
            return state
    }
}


export default combineReducers({change_num})//这个是为了合并reduer，因为我只有一个所以也只写一个(其实只有一个也可以直接暴露change_num())