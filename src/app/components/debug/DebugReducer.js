
export function isDebug(state = localStorage.getItem("isDebug") == null ? false : localStorage.getItem("isDebug"), action) {
    switch (action.type) {
        case 'SET_DEBUG':
            localStorage.setItem("isDebug", action.debug);
            return action.debug;
        default:
            return state;
    }
}