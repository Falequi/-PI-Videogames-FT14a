import { GET_VIDEO_GAMES, 
         GET_VIDEO_GAME_NAME,
         GET_VIDEO_GAME_ID,
         POST_VIDEO_GAME_ID,
         GET_GENRES,
         GET_PLATFORMS,
         FILTER_GENDER,
         FILTER_PLATFORM,
         FILTER_ALPHABET,
         FILTER_RATING,
         CLEAR_GAME_NAME,
         CLEAR_FILTER,
         LOADING
        }                     from './action';

const initialState = {
  games:    [],
  game_name:[],
  game_id:  [],
  genres:   [],
  platforms:[],
  post:     [],
  loading:  false,
  filters:{
    genre:    '',
    platform: '',
    alphabet: '',
    rating:   ''
  }
}


export default function reducer(state = initialState, { type, payload }) {
  
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

      case FILTER_GENDER: 
        return {
          ...state,
          filters: {
              ...state.filters,
              genre: payload
          }
        };

      case FILTER_PLATFORM:
        return {
          ...state,
          filters: {
              ...state.filters,
              platform: payload
          }
        };

      case FILTER_ALPHABET:
        return {
          ...state,
          filters: {
              ...state.filters,
              alphabet: payload
          }
        };
        
      case FILTER_RATING:
        return {
          ...state,
          filters: {
              ...state.filters,
              rating: payload
          }
        };

      case CLEAR_GAME_NAME:
        return {
          ...state,
          game_name: payload
          };

      case LOADING:
        return {
          type: LOADING,
          loading: payload
        };
          
      case CLEAR_FILTER:
        return {
          ...state,
          filters:{
            genre:    '',
            platform: '',
            alphabet: '',
            rating:   ''
          }
        };
          
      default: return state;
    }
  }
