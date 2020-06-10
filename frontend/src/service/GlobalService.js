import config from './config'
import Axios from 'axios';

class GlobalService {
    
    validateUser = async (values,callback)=>{
        try {
           // Axios.defaults.headers.post['Content-Type'] = 'text/json';
            console.log("api",values,callback,config.baseurl)
             const response = await Axios.post(config.baseurl+"/user/login",values);
             console.log(response.data);
            callback(response.data);
        } catch (error) {
            console.error(error);
        }
        
    }
obtainProfile = async (values,callback)=>{
    try {
       // Axios.defaults.headers.post['Content-Type'] = 'text/json';
        console.log("api",values,callback,config.baseurl)
         const response = await Axios.post(config.baseurl+"/user/viewProfile",values);
         console.log(response.data);
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
    
}
updateProfile = async (values,callback)=>{
    try {
       // Axios.defaults.headers.post['Content-Type'] = 'text/json';
        console.log("api",values,callback,config.baseurl)
         const response = await Axios.post(config.baseurl+"/user/updateProfile",values);
         console.log(response.data);
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
    
}
obtainMarks = async (values,callback)=>{
    try {
       // Axios.defaults.headers.post['Content-Type'] = 'text/json';
        console.log("api",values,callback,config.baseurl)
         const response = await Axios.post(config.baseurl+"/user/viewMarks",values);
         console.log(response.data);
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
    
}
obtainUserList = async (values,callback)=>{
    try {
       // Axios.defaults.headers.post['Content-Type'] = 'text/json';
        console.log("api",values,callback,config.baseurl)
         const response = await Axios.post(config.baseurl+"/user/studentList",values);
         console.log(response.data);
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
    
}
deleteUser = async (values,callback)=>{
    try {
       // Axios.defaults.headers.post['Content-Type'] = 'text/json';
        console.log("api",values,callback,config.baseurl)
         const response = await Axios.post(config.baseurl+"/user/deleteUser",values);
         console.log(response.data);
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
    
}
createMovie = async (values,callback)=>{
    try {
       // Axios.defaults.headers.post['Content-Type'] = 'text/json';
        console.log("api",values,callback,config.baseurl)
         const response = await Axios.post(config.baseurl+"/movie/createMovie",values);
         console.log(response.data);
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
    
}
obtainMovieList = async (values,callback)=>{
    try {
       // Axios.defaults.headers.post['Content-Type'] = 'text/json';
        console.log("api",values,callback,config.baseurl)
         const response = await Axios.post(config.baseurl+"/movie/movieList",values);
         console.log(response.data);
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
    
}
deleteMovie = async (values,callback)=>{
    try {
       // Axios.defaults.headers.post['Content-Type'] = 'text/json';
        console.log("api",values,callback,config.baseurl)
         const response = await Axios.post(config.baseurl+"/movie/deleteMovie",values);
         console.log(response.data);
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
    
}
obtainMovie = async (values,callback)=>{
    try {
       // Axios.defaults.headers.post['Content-Type'] = 'text/json';
        console.log("api",values,callback,config.baseurl)
         const response = await Axios.post(config.baseurl+"/movie/viewMovie",values);
         console.log(response.data);
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
    
}
updateMovie = async (values,callback)=>{
    try {
       // Axios.defaults.headers.post['Content-Type'] = 'text/json';
        console.log("api",values,callback,config.baseurl)
         const response = await Axios.post(config.baseurl+"/movie/updateMovie",values);
         console.log(response.data);
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
    
}
updateRating = async (values,callback)=>{
    try {
       // Axios.defaults.headers.post['Content-Type'] = 'text/json';
        console.log("api",values,callback,config.baseurl)
         const response = await Axios.post(config.baseurl+"/movie/updateRating",values);
         console.log(response.data);
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
    
}


}

export default GlobalService;
