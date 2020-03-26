import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchBlogList} from '../redux/Action'
class item extends Component {
    componentDidMount(){
        this.props.fetchBlogList()      
    }
    render() {   
        return (
            <ul>
                {
                    this.props.isLoading?
                        <li>loading...</li>
                    :
                        this.props.errMsg?
                            <li>{this.props.errMsg}</li>
                        :
                            this.props.list.map(item=>{
                                return(
                                <li key={item.id}>name:{item.name},age:{item.age}</li>
                                )
                            })
                }
            </ul>
        )
    }
}
const listDate=(store)=>{
    return{
        list:store.blog.list,
        errMsg: store.blog.errMsg,
        isLoading: store.blog.isLoading
    }
}
export default connect(listDate,{fetchBlogList})(item)