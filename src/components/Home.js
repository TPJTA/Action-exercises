import React, { Component } from 'react'
import {addNum,delNum,delNumLate,addNumLate} from '../redux/Action.js'
import {connect} from 'react-redux'
class home extends Component {
    render() {
        console.log(this.props) 
        return (
            <div>
               {this.props.numArr.map((item,index)=>{
                   return(
                   <div key={index}>
                       num:{item.num},
                        <button onClick={()=>{
                            this.props.addNum(item.id)
                        }}>+</button>
                        <button onClick={()=>{
                            this.props.delNum(item.id)
                        }}>-</button>
                         <button onClick={()=>{
                            this.props.delNumLate(item.id)
                        }}>等一会减</button>
                        <button onClick={()=>{
                            this.props.addNumLate(item.id)
                        }}>等一会加</button>
                   </div>
                   )
               })}
            </div>
        )
    }
}
const storeToProps=(store)=>{
    console.log(store)
    return{
        numArr:store.change_num//这样就是将store内容下的change_num数组(因为reduer的合并所以store是个对象)转移到props下的numArr数组下
    }
}
const dispatchToprops=(dispatch)=>{
    return{
        //addNum和delNum都是action组件中的函数
        add:(id)=>dispatch(addNum(id)),
        //想使用dispatch(addNum())直接调用this.props.add(item.id)
        del:(id)=>dispatch(delNum(id)),
        //使用dispatch(delNum())直接调用this.props.del(item.id)
    }
}
//export default connect(storeToProps,dispatchToprops)(home)
export default connect(storeToProps,{addNum,delNum,delNumLate,addNumLate})(home)
//想使用dispatch(addNum())直接调用this.props.addNum(item.id)
//使用dispatch(delNum())直接调用this.props.delNum(item.id)