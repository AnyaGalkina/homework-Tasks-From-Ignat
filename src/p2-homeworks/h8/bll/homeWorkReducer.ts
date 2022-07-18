import {UserType} from "../HW8";

let  newState: UserType[];

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case "sort": {
            action.payload === "up"
                ? newState = [...state].sort((a,b) => {return a.name.localeCompare(b.name)})
                : newState = [...state].sort((a,b) => {return b.name.localeCompare(a.name)})
            return newState
        }
        case "check": {
            return state.filter(u => u.age > action.payload)
        }
        default:
            return state
    }
}

type ActionType = CheckType | SortType;

type CheckType = {
    type: "check"
    payload: number
}

type SortType = {
    type: "sort"
    payload: string
}
