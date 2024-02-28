import axios from "axios";

const instance = axios.create({
    baseURL : 'http://api.themoviedb.org/3',
    params : {
        api_key : '1c97eb8d751c4ff940394548eb1e3d56',
        language : 'ko-KR',
    }
})

export default instance;