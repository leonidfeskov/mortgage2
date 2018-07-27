import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { fields } from '../modules/fields';
import { paymentSchedule } from '../modules/paymentSchedule';
import { warningMessage } from '../modules/warningMessage';

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
}

const configureStore = () => {
    return createStore(
        combineReducers({
            fields,
            paymentSchedule,
            warningMessage,
        }),
        applyMiddleware(...middlewares)
    );
};

export default configureStore;
