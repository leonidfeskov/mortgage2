const SET_WARNING_MESSAGE = 'SET_WARNING_MESSAGE';

export function warningMessage(state = '', action) {
    switch (action.type) {
        case SET_WARNING_MESSAGE:
            return action.message;
        default:
            return state;
    }
}

export function setWarningMessage(message) {
    return {
        type: SET_WARNING_MESSAGE,
        message: message,
    }
}
