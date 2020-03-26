import {getDate} from '../server/index'
export const actionTypes= {
    START_FETCH_BLOG_LIST: 'START_FETCH_BLOG_LIST',//开始连接
    FETCH_BLOG_LIST_SUCCESS: 'FETCH_BLOG_LIST_SUCCESS',//连接成功
    FETCH_BLOG_LIST_FAILED: 'FETCH_BLOG_LIST_FAILED'//连接失败
}
export const fetchBlogList = () => dispatch => {
    dispatch({
        type: actionTypes.START_FETCH_BLOG_LIST
    })
    getDate()
      .then(resp => {
        if (resp.status === 200) {//连接成功传入的action的type为成功，并且有json的数据
          dispatch({
            type: actionTypes.FETCH_BLOG_LIST_SUCCESS,
            list:resp.data
          })
        } else {//传入连接失败的type
          dispatch({
            type: actionTypes.FETCH_BLOG_LIST_FAILED
          })
        }
      })
      .catch(error => {//传入连接失败的type
        console.log(error)
        dispatch({
            type: actionTypes.FETCH_BLOG_LIST_FAILED
          })
      })
  }
  