import axios from 'axios'
import backup from '../backup/backup.js'

var gapi = {
    getPokeData: function(pokenum){
        return axios.get('https://pokeapi.co/api/v2/pokemon/' + pokenum).then(res => {
            return JSON.stringify(res);
        }).catch(res => {return backup});
    }
}
export default gapi;