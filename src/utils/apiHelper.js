import { data } from "autoprefixer";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL


export const register = async (userInfo) => {
    try {
        const response = await axios.post(`${baseURL}/users/register`, userInfo)
    
        const data = response.data.user
        console.log(response.data.user)
        return data
    } catch (error) {
        return error.response.data
    }
}

export const login = async (userInfo) => {
    try {
        const response = await axios.post(`${baseURL}/users/login`, userInfo)
        
      
        return response.data
  
      } catch (error) {
          return error.response.data
      }
}

export const validateUser = async (token) => {
    try {
        const response = await axios.get(`${baseURL}/users/validate`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.data
        return data
    } catch (error) {
        return error.response.data
    }
}

export const getCases = async () => {
    try {
        const response = await axios.get(`${baseURL}/case/all`)

        return response.data.data
    } catch (error) {
        return error.response.message
    }
}

export const createCase = async (caseInfo) => {
    try {
        const response = await axios.post(`${baseURL}/case/create`, caseInfo)
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        return error.response.message
    }
}