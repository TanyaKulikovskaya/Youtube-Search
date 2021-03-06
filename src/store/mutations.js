export default {
  AUTH_SUCCESS(state, token) {
    state.token = token;
  },
  AUTH_ERROR(state) {
    state.token = '';
  },
  SET_LOGOUT(state) {
    state.token = '';
  },
  SET_VIDEOS_TO_STATE(state, videos) {
    state.videos = videos;
  },
  CHANGE_SEARCH_STRING(state, query) {
    state.searchString = query;
  },
  SET_REQUEST_TO_FAVOURITES(state, request) {
    state.favourites.push(request);
  },
  CHANGE_REQUEST_IN_FAVOURITES(state, request) {
    state.favourites = state.favourites.map((item) => (item.requestID !== request.requestID ? item : request));
  },
  CLEAR_FAVOURITES(state) {
    state.favourites = JSON.parse('[]');
  },
  REMOVE_REQUEST_FROM_FAVOURITES(state, index) {
    state.favourites.splice(index, 1);
  },
};
