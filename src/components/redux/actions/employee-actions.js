import axios from 'axios'

export const getEmployees = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://falt.onrender.com/api/employees', {
                headers: {
                    'authorization' : localStorage.getItem('token')
                }
            })
            //console.log(response)
            dispatch(setEmployees(response.data))
        } catch(e) {
            console.log(e.message)
        }
    }
}

const setEmployees = (data) => {
    return {type: "SET_EMPLOYEES", payload: data}
}

export const employeeDelete = (id) => {
    return async (dispatch) => {
        try {
            console.log(id)
            const response = await axios.delete(`https://falt.onrender.com/api/employee-delete/${id}`, {
                headers: {
                    'authorization' : localStorage.getItem('token')
                }
            })
            //console.log(response)
            dispatch(delEmployee(response.data._id))
        } catch(e) {
            alert(e.message)
        }
    }
}

const delEmployee = (id) => {
    return {type: "DEL_EMPLOYEE", payload: id}
}

export const employeeEdit = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`https://falt.onrender.com/api/employee-update/${data.id}`, data, {
                headers: {
                    'authorization' : localStorage.getItem('token')
                }
            })
            console.log(response.data)
            if(response.data.hasOwnProperty("_id")) {
                dispatch(editEmployee(response.data))
                alert('successfully updated an Employee')  
            }
        } catch(e) {
        alert(e.message)
        }
    }
}

const editEmployee = (data) => {
    return {type: "EDIT_EMPLOYEE", payload: data}
}


export const addEmployee = (data) => {
    return async (dispatch) => {
        try{
            const response = await axios.post('https://falt.onrender.com/api/employee/create', data, {
                headers: {
                    'authorization' : localStorage.getItem('token')
                }
            })
            //console.log(response.data)
            dispatch(addEmployees(response.data))
            alert('successfully added an Employee')  
          } catch(e) {
            alert(e.message)
          }
    }
}

const addEmployees = (data) => {
    return {type: "ADD_EMPLOYEE", payload: data}
}
