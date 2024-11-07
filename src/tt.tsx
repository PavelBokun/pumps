import {createStore} from 'redux'
import ReactDOM from 'react-dom'
import {Provider, useSelector, useDispatch} from 'react-redux'
import React from 'react'

const students = {
    students: [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Donald'},
        {id: 4, name: 'Ann'},
    ]
}
type RemoveStudentAT = {
    type: "REMOVE-STUDENT"
    id: number
}
type RemoveStudentATNAME= {
    type: "REMOVE-STUDENT-NAME"
    name: string
}
const RemoveStudentAC = (id: number): RemoveStudentAT => ({
    type: "REMOVE-STUDENT",
    id
})
const RemoveStudentACName = (name:string): RemoveStudentATNAME => ({
    type: "REMOVE-STUDENT-NAME",
    name
})

const studentsReducer = (state = students, action: RemoveStudentATNAME) => {
    switch (action.type) {
        // case "REMOVE-STUDENT":
        //     return {
        //         ...state,
        //         students: state.students.filter(s => s.id !== action.id)
        //     }
            case "REMOVE-STUDENT-NAME":
                return{
                    ...state,
                    students: state.students.filter(s => s.name !== action.name)
                }
                
    }
    return state
}

const store = createStore(studentsReducer)
type RootStateType = ReturnType<typeof studentsReducer>


 export const StudentList = () => {
    const listItemStyles = {
        width: "100px",
        borderBottom: "1px solid gray",
        cursor: "pointer",
    }
    const students = useSelector((state: RootStateType) => state.students)
    const dispatch = useDispatch()
    const studentsList = students.map(s => {
        const removeStudent = () => {
            dispatch(RemoveStudentAC(s.id))
        }
        const removeName=()=>{
            dispatch(RemoveStudentACName(s.name))
        }
        return (
            <li key={s.id}
                style={listItemStyles}
                onClick={removeName}>
                    
                {s.name}
            </li>)
            
    })
    return (
        <ol>
            {studentsList}
        </ol>

    )
}


// ReactDOM.render(<div>
//         <Provider store={store}>
//             <StudentList/>
//         </Provider>
//     </div>,
//     document.getElementById('root')
// )

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
// удалялся из списка? Напишите через пробел.
