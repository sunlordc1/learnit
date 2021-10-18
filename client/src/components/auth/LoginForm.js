
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link,useHistory} from 'react-router-dom'
import {useState,useContext} from 'react'
import {AuthContext} from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'
const LoginForm = () => {
    // Context
    const {loginUser} = useContext(AuthContext)
    // Local state
    const [loginForm,setLoginForm] = useState({
        username:'',
        password:''
    })
    // Router
    const history = useHistory()

    const {username,password} = loginForm
    const onChangeLoginFrom = event=>setLoginForm({...loginForm,[event.target.name]:event.target.value})
    
    const [alert,setAlert] = useState(null)

    const login = async event=> {
        event.preventDefault();
        try {
            const loginData = await loginUser(loginForm)
            if(loginData.success){
                history.push('/dashboard')
            } 
            else{
                setAlert({type:'danger',message:loginData.message})
                setTimeout(()=>setAlert(null),3000)
            }
        } catch (error) {
            console.log(error)
        }
       
    }
    
    return (
        <>
        <Form onSubmit={login}>
        <AlertMessage info={alert}/>
          <Form.Group>
              <Form.Control type='text' placeholder="Username" name='username' value={username} onChange={onChangeLoginFrom} required/>
          </Form.Group>
          <Form.Group>
              <Form.Control type='password' placeholder="Password" name='password' value={password} onChange={onChangeLoginFrom} required/>
          </Form.Group>
          <Button variant='success' type='submit'>Login</Button>
        <p>Don't have an account?</p>
        <Link to='/register'>
            <Button variant='info' size='sm' className='ml-2'>Register</Button>
        </Link>
        </Form>
        </>
    )
}

export default LoginForm
