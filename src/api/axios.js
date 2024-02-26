import axios from "axios";

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    params : {
        api_key :  'fcefb2031d95ae543949455704239fac',
        language : 'ko-KR'
    }
})

export default instance;