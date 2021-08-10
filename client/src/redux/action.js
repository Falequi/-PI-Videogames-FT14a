import axios from "axios";

export const GET_VIDEO_GAMES      = "GET_VIDEO";
export const GET_VIDEO_GAME_NAME  = "GET_VIDEO_GAME_NAME";
export const GET_VIDEO_GAME_ID    = "GET_VIDEO_GAME_ID";
export const GET_GENRES           = "GET_GENRES";
export const GET_PLATFORMS        = "GET_PLATFORMS";
export const POST_VIDEO_GAME_ID   = "POST_VIDEO_GAME_ID";
export const FILTER_GENDER        = "FILTER_GENDER";
export const FILTER_PLATFORM      = "FILTER_PLATFORM";
export const FILTER_ALPHABET      = "FILTER_ALPHABET";
export const FILTER_RATING        = "FILTER_RATING";
export const CLEAR_GAME_NAME      = "CLEAR_GAME_NAME";
export const LOADING              = "LOADING";
export const CLEAR_FILTER         = "CLEAR_FILTER";


export function getPages() {
    
    return (dispatch) => {
      axios.get('http://localhost:3001/videogames')
      .then((response) => {
        dispatch({ 
          type: GET_VIDEO_GAMES, 
          payload: response.data 
        });
      })
    };
}

export function getGameName(nameGame){
  return (dispatch) =>{
    // console.log(`http://localhost:3001/videogames?${nameGame}`);
    axios.get(`http://localhost:3001/videogames?name=${nameGame}`)
    .then((response) =>{
      dispatch({ 
        type: GET_VIDEO_GAME_NAME, 
        payload: response.data 
      });
    })
  }
}

export function getGameId(id){
  return (dispatch) =>{
    axios.get(`http://localhost:3001/videogame/${id}`)
    .then((response) =>{
      dispatch({ 
        type: GET_VIDEO_GAME_ID, 
        payload: response.data 
      });
    });
  };
}

export function getGenres(){
  return (dispatch)=>{
    axios.get(`http://localhost:3001/genres`)
    .then((response)=>{
      dispatch({
        type:   GET_GENRES,
        payload: response.data
      });
    });
  };
} 

export function getPlatforms(){
  return (dispatch)=>{
    axios.get(`http://localhost:3001/platforms`)
    .then((response)=>{
      dispatch({
        type: GET_PLATFORMS,
        payload: response.data
      });
    });
  };
} 

export function postVideoGame(obj){
  return (dispatch)=>{
    axios.post(`http://localhost:3001/videogame`,obj)
    .then((response)=>{
    dispatch({
      type: POST_VIDEO_GAME_ID,
      payload: response.data
    })
    });
  };
};

export function filterGender(filterGender) {
  return {
          type: FILTER_GENDER, 
          payload: filterGender
      }
}
  
export function filterPlatform(filterPlatform) {
  return {
          type: FILTER_PLATFORM, 
          payload: filterPlatform
      }
}

export function filterAlpha(filterAlphabet) {
  return {
          type: FILTER_ALPHABET, 
          payload: filterAlphabet
      }
}
  
export function filterRating(filterRating) {
  return {
          type: FILTER_RATING, 
          payload: filterRating
      }
}

export function clearGameName(){
  return {
      type: CLEAR_GAME_NAME,
      payload: []
  }
}
  
export function stateLoad(std){
  return {
    type: LOADING,
    payload: std
  }
}

export function clearFilter(){
  return {
      type: CLEAR_FILTER,
      payload: []
  }
}