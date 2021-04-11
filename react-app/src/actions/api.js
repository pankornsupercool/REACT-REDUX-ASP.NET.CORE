import axios from "axios";


const baseUrl = "http://localhost:63205/api/"

export default {
    dCandidate(url=baseUrl + "DCandidate" ){
        return {
            fetchAll : () => axios.get(url),
            fetchById : id  => axios.get(url+id),
            create : newRecord => axios.post(url,newRecord),
            update : (id,updateRecord) => axios.put(url+id, updateRecord),
            delete : id => axios.delete(url + id)
        }
    }
}