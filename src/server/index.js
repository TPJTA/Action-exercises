import axios from 'axios'
const ajax=axios.create({
    baseURL:"http://localhost:4000"
})
export  const getDate=()=>{
    return ajax.get("/arr")
}