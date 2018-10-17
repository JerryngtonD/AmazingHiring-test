export default store => next => action => {
    const {callAPI} = action;
    if(!callAPI) return next(action)

}
