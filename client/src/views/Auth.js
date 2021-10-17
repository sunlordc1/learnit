
import LoginForm from "../components/auth/LoginForm"
import RegisterForm from "../components/auth/RegisterForm"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"
import { Redirect } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
const Auth = ({authRoute}) => {

    const {authState:{authLoading,isAuthenticated}} = useContext(AuthContext)

    let form 
    if(authLoading)
    form = (
        <Spinner animation='border' variant='info'>
        </Spinner>
    )
    else if (isAuthenticated){
        console.log('authen r')
        return <Redirect to='/dashboard'/>
    }
    else{
        form =  (
            <>
            {authRoute === 'login' && <LoginForm/>}
            {authRoute === 'register' && <RegisterForm/>}
            </>
        )
    }
   
    return (
        <>
            <div className="container">
                <h1>Learn It</h1>
                {form}
            </div>
        </>
    )
}

export default Auth
