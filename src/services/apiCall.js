import axios from 'axios'


const getMoviesData = async () =>{
   
    const url = 'MoviesApi'
    const data = await sendGetRequest(url)
    console.log(data)
}

const getShowsData = async () =>{
    const url = 'showsApi'
    const data = await sendGetRequest(url)
    return data
}

const sendGetRequest = (url) => {
   return axios({
        method: "Get",
        url: url.toString(),
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then( (res) => {
       return res
      })
      .catch( (err)=>  {
       return err
      });
}

const sendPostRequest = (url,params) => { 
    let payLoad = {}
    axios({
        method: "post",
        url: "url",
        data: payLoad,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then( (res) => {
       return res
      })
      .catch( (err)=>  {
        return err
      });    
}
export {getMoviesData,getShowsData}


