const SET_PAYMENT_SCHEDULE = 'SET_PAYMENT_SCHEDULE';

export function paymentSchedule(state = [], action) {
    switch (action.type) {
        case SET_PAYMENT_SCHEDULE:
            return action.data;
        default:
            return state;
    }
}

export function setPaymentSchedule(data) {
    return {
        type: SET_PAYMENT_SCHEDULE,
        data: data,
    }
}
