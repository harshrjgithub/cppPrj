import axios from "axios";
import cors from "cors"
const BASE_URL ="https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWE5ZjEzNzExMzJmNzc0N2QzZGY1MTAyOTE2ZWZhNiIsIm5iZiI6MTcwMzM0NDMzOC4xNTY5OTk4LCJzdWIiOiI2NTg2ZjhkMjJkZmZkODViOGE0NTE3OGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ALgAIXeuxBsA4xrYnLaPcb0ZdGTm_EQGA_OIlz9iR7U"

const headers ={
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params) => {
    try {
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
            return(data);
    }
    catch(err){
        console.log(err);
        return err;
    }
    
}
