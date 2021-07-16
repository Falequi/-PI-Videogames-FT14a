import { GET_VIDEO_GAMES, 
         GET_VIDEO_GAME_NAME,
         GET_VIDEO_GAME_ID,
         POST_VIDEO_GAME_ID,
         GET_GENRES,
         GET_PLATFORMS
        }                     from './action';


export default function reducer(state = {}, { type, payload }) {
  
    switch (type) {

      case GET_VIDEO_GAMES: 
        return {
          ...state,
          games: payload
        };

      case GET_VIDEO_GAME_NAME: 
        return {
          ...state,
          game_name: payload
        };

      case GET_VIDEO_GAME_ID: 
        return {
          ...state,
          game_id: payload
        };

      case GET_GENRES: 
        return {
          ...state,
          genres: payload
        };

      case GET_PLATFORMS: 
        return {
          ...state,
          platforms: payload
        };

      case POST_VIDEO_GAME_ID: 
        return {
          ...state,
          post: payload
        };

      default: return state;
    }
  }
