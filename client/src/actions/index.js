export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}
const IS_REQUEST_FAILURE = new RegExp(`_${FAILURE}$`)
export function isRequestFailure({ type }) {
  return IS_REQUEST_FAILURE.test(type)
}

export const SIGN_IN = createRequestTypes('SIGN_IN')
export const SIGN_OUT = createRequestTypes('SIGN_OUT')
export const SAVE_CHECK_AT = createRequestTypes('SAVE_CHECK_AT')
export const SAVE_FREQUENCY = createRequestTypes('SAVE_FREQUENCY')
export const FETCH_PROFILE = createRequestTypes('FETCH_PROFILE')
export const MUTE_SAVED_REPO = createRequestTypes('MUTE_SAVED_REPO')
export const MUTE_ALL_SAVED_REPOS = createRequestTypes('MUTE_ALL_SAVED_REPOS')
export const CREATE_REPO = createRequestTypes('CREATE_REPO')
export const DELETE_REPO = createRequestTypes('DELETE_REPO')
export const DELETE_ALL_REPOS = createRequestTypes('DELETE_ALL_REPOS')
export const UNWATCH = createRequestTypes('UNWATCH')
export const SAVE_WATCHING = createRequestTypes('SAVE_WATCHING')
export const FETCH_SUGGESTIONS = createRequestTypes('FETCH_SUGGESTIONS')
export const CREATE_REPOS = createRequestTypes('CREATE_REPOS')
export const ADD_STARS = createRequestTypes('ADD_STARS')
export const SAVE_WATCHING_STARS = createRequestTypes('SAVE_WATCHING_STARS')

export const SET_REPO_ADD_VALUE = 'SET_REPO_ADD_VALUE'
export const MUTE_REPO_IN_BUFFER =  'MUTE_REPO_IN_BUFFER'
export const MUTE_ALL_REPOS_IN_BUFFER =  'MUTE_ALL_REPOS_IN_BUFFER'
export const ADD_REPO_TO_BUFFER =  'ADD_REPO_TO_BUFFER'
export const REMOVE_REPO_FROM_BUFFER = 'REMOVE_REPO_FROM_BUFFER'
export const REMOVE_ALL_REPOS_FROM_BUFFER = 'REMOVE_ALL_REPOS_FROM_BUFFER'
export const MUTE_REPO = 'MUTE_REPO'
export const MUTE_ALL_REPOS = 'MUTE_ALL_REPOS'
export const ADD_REPO = 'ADD_REPO'
export const REMOVE_REPO = 'REMOVE_REPO'
export const REMOVE_ALL_REPOS = 'REMOVE_ALL_REPOS'
export const TOGGLE_WATCHING = 'TOGGLE_WATCHING'
export const SET_SHOWN_REPOS = 'SET_SHOWN_REPOS'
export const SET_STARS_OPEN = 'SET_STARS_OPEN'
export const SET_SHOW_SPLASH = 'SET_SHOW_SPLASH'
export const TOGGLE_WATCHING_STARS = 'TOGGLE_WATCHING_STARS'
export const TOGGLE_UNWATCHING_NONSTARS = 'TOGGLE_UNWATCHING_NONSTARS'

function action(type, payload = {}) {
  return { type, ...payload }
}

export const signIn = {
  requestId: SIGN_IN[REQUEST],
  request: ({ email, password, repos }) => action(SIGN_IN[REQUEST], { email, password, repos }),
  success: profile => action(SIGN_IN[SUCCESS], { profile }),
  failure: error => action(SIGN_IN[FAILURE], { error }),
}
export const signOut = {
  requestId: SIGN_OUT[REQUEST],
  request: () => action(SIGN_OUT[REQUEST]),
  success: () => action(SIGN_OUT[SUCCESS]),
  failure: error => action(SIGN_OUT[FAILURE], { error }),
}
export const saveCheckAt = {
  requestId: SAVE_CHECK_AT[REQUEST],
  request: checkAt => action(SAVE_CHECK_AT[REQUEST], { checkAt }),
  success: ({ checkAt }) => action(SAVE_CHECK_AT[SUCCESS], { checkAt }),
  failure: error => action(SAVE_CHECK_AT[FAILURE], { error }),
}
export const saveFrequency = {
  requestId: SAVE_FREQUENCY[REQUEST],
  request: ({ frequency, checkAt }) => action(SAVE_FREQUENCY[REQUEST], { frequency, checkAt }),
  success: ({ frequency, checkAt }) => action(SAVE_FREQUENCY[SUCCESS], { frequency, checkAt }),
  failure: error => action(SAVE_FREQUENCY[FAILURE], { error }),
}
export const fetchProfile = {
  requestId: FETCH_PROFILE[REQUEST],
  request: () => action(FETCH_PROFILE[REQUEST]),
  success: profile => action(FETCH_PROFILE[SUCCESS], { profile }),
  failure: error => action(FETCH_PROFILE[FAILURE], { error }),
}
export const muteSavedRepo = {
  requestId: MUTE_SAVED_REPO[REQUEST],
  request: (repo, muted) => action(MUTE_SAVED_REPO[REQUEST], { repo, muted }),
  success: ({ repos }) => action(MUTE_SAVED_REPO[SUCCESS], { repos }),
  failure: error => action(MUTE_SAVED_REPO[FAILURE], { error }),
}
export const muteAllSavedRepos = {
  requestId: MUTE_ALL_SAVED_REPOS[REQUEST],
  request: (muted) => action(MUTE_ALL_SAVED_REPOS[REQUEST], { muted }),
  success: ({ repos }) => action(MUTE_ALL_SAVED_REPOS[SUCCESS], { repos }),
  failure: error => action(MUTE_ALL_SAVED_REPOS[FAILURE], { error }),
}
export const createRepo = {
  requestId: CREATE_REPO[REQUEST],
  request: repo => action(CREATE_REPO[REQUEST], { repo }),
  success: ({ repos }) => action(CREATE_REPO[SUCCESS], { repos }),
  failure: error => action(CREATE_REPO[FAILURE], { error }),
}
export const deleteRepo = {
  requestId: DELETE_REPO[REQUEST],
  request: repo => action(DELETE_REPO[REQUEST], { repo }),
  success: ({ repos }) => action(DELETE_REPO[SUCCESS], { repos }),
  failure: error => action(DELETE_REPO[FAILURE], { error }),
}
export const deleteAllRepos = {
  requestId: DELETE_ALL_REPOS[REQUEST],
  request: repo => action(DELETE_ALL_REPOS[REQUEST]),
  success: () => action(DELETE_ALL_REPOS[SUCCESS]),
  failure: error => action(DELETE_ALL_REPOS[FAILURE], { error }),
}
export const unwatch = {
  requestId: UNWATCH[REQUEST],
  request: lambdajwt => action(UNWATCH[REQUEST], { lambdajwt }),
  success: ({ watching, sameUser }) => action(UNWATCH[SUCCESS], { watching, sameUser }),
  failure: error => action(UNWATCH[FAILURE], { error }),
}
export const saveWatching = {
  requestId: SAVE_WATCHING[REQUEST],
  request: watching => action(SAVE_WATCHING[REQUEST], { watching }),
  success: ({ watching }) => action(SAVE_WATCHING[SUCCESS], { watching }),
  failure: error => action(SAVE_WATCHING[FAILURE], { error }),
}
export const fetchSuggestions = {
  requestId: FETCH_SUGGESTIONS[REQUEST],
  request: ({ value }) => action(FETCH_SUGGESTIONS[REQUEST], { value }),
  success: ({ items }) => action(FETCH_SUGGESTIONS[SUCCESS], { items }),
  failure: error => action(FETCH_SUGGESTIONS[FAILURE], { error }),
}
export const createRepos = {
  requestId: CREATE_REPOS[REQUEST],
  request: ({ repos }) => action(CREATE_REPOS[REQUEST], { repos }),
  success: ({ repos }) => action(CREATE_REPOS[SUCCESS], { repos }),
  failure: error => action(CREATE_REPOS[FAILURE], { error }),
}
export const addStars = {
  requestId: ADD_STARS[REQUEST],
  request: () => action(ADD_STARS[REQUEST]),
  success: () => action(ADD_STARS[SUCCESS]),
  failure: error => action(ADD_STARS[FAILURE], { error }),
}
export const saveWatchingStars = {
  requestId: SAVE_WATCHING_STARS[REQUEST],
  request: watchingStars => action(SAVE_WATCHING_STARS[REQUEST], { watchingStars }),
  success: ({ watchingStars }) => action(SAVE_WATCHING_STARS[SUCCESS], { watchingStars }),
  failure: error => action(SAVE_WATCHING_STARS[FAILURE], { error }),
}

export const setRepoAddValue = value => action(SET_REPO_ADD_VALUE, { value })
export const muteRepoInBuffer = (repo, muted) => action(MUTE_REPO_IN_BUFFER, { repo, muted })
export const addRepoToBuffer = repo => action(ADD_REPO_TO_BUFFER, { repo })
export const removeRepoFromBuffer = repo => action(REMOVE_REPO_FROM_BUFFER, { repo })
export const muteRepo = (repo, muted) => action(MUTE_REPO, { repo, muted })
export const muteAllRepos = muted => action(MUTE_ALL_REPOS, { muted })
export const muteAllReposInBuffer = muted => action(MUTE_ALL_REPOS_IN_BUFFER, { muted })
export const addRepo = repo => action(ADD_REPO, { repo })
export const removeRepo = repo => action(REMOVE_REPO, { repo })
export const removeAllRepos = () => action(REMOVE_ALL_REPOS)
export const removeAllReposFromBuffer = () => action(REMOVE_ALL_REPOS_FROM_BUFFER)
export const toggleWatching = () => action(TOGGLE_WATCHING)
export const setShownRepos = repos => action(SET_SHOWN_REPOS, { repos })
export const setStarsOpen = value => action(SET_STARS_OPEN, { value })
export const setShowIntro = state => action(SET_SHOW_SPLASH, { state })
export const toggleWatchingStars = () => action(TOGGLE_WATCHING_STARS)
export const toggleUnwatchingNonstars = () => action(TOGGLE_UNWATCHING_NONSTARS)

export const mapDispatchToProps = () => ({
  signIn: signIn.request,
  signOut: signOut.request,
  saveCheckAt: saveCheckAt.request,
  saveFrequency: saveFrequency.request,
  fetchProfile: fetchProfile.request,
  createRepo: createRepo.request,
  deleteRepo: deleteRepo.request,
  unwatch: unwatch.request,
  saveWatching: saveWatching.request,
  fetchSuggestions: fetchSuggestions.request,
  addStars: addStars.request,
  toggleWatching,
  setRepoAddValue,
  addRepoToBuffer,
  removeRepoFromBuffer,
  addRepo,
  removeRepo,
  setShownRepos,
  setStarsOpen,
  setShowIntro
})
