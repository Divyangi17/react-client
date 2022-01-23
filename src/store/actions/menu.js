import axios from '../../axios/axios'

import * as actionTypes from './actionTypes'


export const getMenu = () => {
    return {
        type: actionTypes.GET_MENU
    }
}

export const getMenuSuccess = menu => {
    return {
        type: actionTypes.GET_MENU_SUCCESS,
        payload: {
            menu: menu
        }
    }
}

export const getMenuFail = error => {
    return {
        type: actionTypes.GET_MENU_FAIL,
        payload: {
            error: error
        }
    }
}

export const initMenu = () => {
    return dispatch => {
        dispatch(getMenu())
        // axios.get("https://api.npoint.io/dcb674208c20dda4dfbb")
        axios.get('https://aqueous-temple-16771.herokuapp.com/api/getmenu')
            .then(response => (
                console.log(response),
                dispatch(getMenuSuccess(response.data.data))
            ))
            .catch(error => dispatch(getMenuFail(error.message)))
    }
}