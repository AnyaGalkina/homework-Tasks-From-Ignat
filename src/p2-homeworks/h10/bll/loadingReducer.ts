const SET_TOGGLE_IS_LOADING = "SET_TOGGLE_IS_LOADING";
export type LoadingStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: HW10ActionType): LoadingStateType => {
    switch (action.type) {
        case SET_TOGGLE_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type HW10ActionType = {
    type: "SET_TOGGLE_IS_LOADING"
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): HW10ActionType => {
    return {type: SET_TOGGLE_IS_LOADING, isLoading}
}