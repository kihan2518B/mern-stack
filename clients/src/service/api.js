import axios from 'axios';


const URL ='http://localhost:8000';
export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`, data);
    }catch(error){
        console.log('Error While calling add user api' ,error); //This is Error Handling
    }
}

export const getUsers = async() =>{
    try{
    return await axios.get(`${URL}/all`);
    }catch (error) {
        console.log('Error While calling getUsers Api',error);
    }
}