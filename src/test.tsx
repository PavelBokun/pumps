
type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
    payload: number
}

export const calculator = (state: number, action: ActionType): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        case "MULT":
            return state * action.payload
        case "EXP":
            return state ** action.payload
        default:
            return state
    }
}
const result = calculator(10, {type:"EXP", payload: 0}) 
if (!(result - 1)){
    console.log("IT-INCUBATOR")
}
type UserType = {
    id: number
    userName: string
    email: string
    password: string
}

type ChangeUserPasswordTypeAT = {
    type: "CHANGE-USER-PASSWORD"
    payload: {
           
           id: number
           newPassword: string
  }
}

export const userReducer = 
    (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
    switch (action.type) {
        case "CHANGE-USER-PASSWORD":
            return state.map(u =>
                 u.id === action.payload.id
                    ? {...u, password: action.payload.newPassword}
                    : u)
        default:
            return state
    }
}

//Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?
//В ответе напишите через пробел: XXX  YYY


//Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?
