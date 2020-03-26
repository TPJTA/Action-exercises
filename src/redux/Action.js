export const add_num="add_num"
export const del_num ="del_num"
//写上面常量是为了将action和reduer的常量保持一致
export function addNum(id){
    return{
        type:add_num,
        id
    }
}
export function delNum(id){
    return{
        type:del_num,
        id
    }
}
export function delNumLate(id){
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch({
                type:del_num,
                id
            })
        },1000)
    }
}
export function addNumLate(id){
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch({
                type:add_num,
                id
            })
        },1000)
    }
}
