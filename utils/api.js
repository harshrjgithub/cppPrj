import axios from "axios";
import cors from "cors"
const BASE_URL ="https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2Y0ZjdlNmUzOGUzMjdjYmFmM2QxYzk5ZGEwNGNjZiIsInN1YiI6IjY1ODZmOGQyMmRmZmQ4NWI4YTQ1MTc4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mB5352-64eEssA_fye00inI2h5VXt8_CRA2vxc-5fus"

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
