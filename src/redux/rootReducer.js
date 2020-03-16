import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

//Import application reducers here
// import { reducer as videoKYCReducer } from '../screens/video-kyc/redux/video.kyc.reducer';

const appReducer = combineReducers({
    form: formReducer,
    // videoKYC: videoKYCReducer
});

const rootReducer = (state, action) => {
    let newState = state;
    if (action.type === 'RESET_HEADER') {
        newState = {
            app: state.app
        };
    }
    return appReducer(newState, action);
};

export default rootReducer;
