import axios from "axios";

const signUp = async (formData: any) => {
    try {
        const response = await axios.post('/api/users/signup', formData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const login = async (formData: any) => {
    try {
        const response = await axios.post('/api/users/login', formData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const forgotPassword = async (email: string) => {
    try {
        const response = await axios.post('/api/users/forgotPassword', { email });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const authService = {
    signUp,
    login,
    forgotPassword
}

export default authService