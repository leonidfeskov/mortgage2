const SET_FIELD_VALUE = 'SET_FIELD_VALUE';

const initialStateFields = {
    sumPerMonth: 80000,
    creditPercent: 9.5,
    creditSum: 4100000,
};

export function fields(state = initialStateFields, action) {
    switch (action.type) {
        case SET_FIELD_VALUE:
            return {
                ...state,
                [action.fieldName]: action.value
            };
        default:
            return state;
    }
}

export function setFieldValue(name, value) {
    return {
        type: SET_FIELD_VALUE,
        fieldName: name,
        value: value,
    }
}
