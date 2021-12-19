import axios from 'axios'

const instance= axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
//1>   instance.get('/foo-bar');
//1 will concat the above url with url it have  
//   https://api.themoviedb.org/3/foo-bar
export default instance;