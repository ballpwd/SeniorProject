import axios from 'axios';
import { 
    GET_FEEDBACKLIST,
    GET_FEEDBACK,
    ADD_FEEDBACK,
    FEEDBACK_ERROR,
    FEEDBACK_UNLOADED,
    FEEDBACKLIST_UNLOADED
} from './types';

//Get all ask
// export const getAllAsk = () => async dispatch => {
//     try {
//         const res = await axios.get('/api/ask')
//         dispatch({
//             type: GET_FEEDBACKLIST,
//             payload: res.data
//         });
//     } catch (err) {
//         dispatch({
//             type: FEEDBACK_ERROR,
//             payload: err
//         });    
//     }
// };

//Get ask by ask_id
// export const getAskById = askId => async dispatch => {
//     try {
//         const res = await axios.get(`/api/feedback/${askId}`)
//         dispatch({
//             type: GET_ASK,
//             payload: res.data
//         });
//     } catch (err) {
//         dispatch({
//             type: ASK_ERROR,
//             payload: err
//         });    
//     }
// };

//Get user feedbacklist
export const getUserFeedbackList = (roomId) => async dispatch => {
    try {
        const res = await axios.get(`/api/feedback/user/room/${roomId}`)

        dispatch({
            type: GET_FEEDBACKLIST,
            payload: res.data
        });    
    } catch (err) {
        dispatch({
            type: FEEDBACK_ERROR,
            payload: err
        });    
    }
};

// Add feedback
export const addFeedback = formData => async dispatch => {
    try {
        const res = await axios.post('/api/feedback', formData);
        dispatch({
          type: ADD_FEEDBACK,
          payload: res.data
        });
    } catch (err) {
        dispatch({
            type: FEEDBACK_ERROR,
            payload: err
        });    
    }
};

//feedback Unload
export const feedbackUnload = () => async dispatch => {
    try {
        dispatch({type: FEEDBACK_UNLOADED});
    } catch (err) {
        dispatch({
            type: FEEDBACK_ERROR,
            payload: err
        });    
    }
};

//askList Unload
export const feedbackListUnload = () => async dispatch => {
    try {
        dispatch({type: FEEDBACKLIST_UNLOADED});
    } catch (err) {
        dispatch({
            type: FEEDBACK_ERROR,
            payload: err
        });    
    }
};