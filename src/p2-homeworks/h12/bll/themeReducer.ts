const SET_NEW_THEME = "SET_NEW_THEME" as const;

type InintStateType = {
    theme: string
}

const initState = {
    theme:"some"
};

export const themeReducer = (state: InintStateType = initState, action: HW12ActionType): InintStateType => {
    switch (action.type) {
        case SET_NEW_THEME:
            return {...state, theme: action.theme};
        default:
            return state;
    }
};

type HW12ActionType = {
    type: "SET_NEW_THEME",
    theme: string
}

export const changeTheme = (theme: string): HW12ActionType => {
    return {type: SET_NEW_THEME, theme}
};