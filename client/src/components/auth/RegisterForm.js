
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import {useContext,useState} from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const RegisterForm = () => {
    const {registerUser} = useContext(AuthContext)
    // Local state
    const [registerForm,setRegisterForm] = useState({
        username:'',
        password:'',
        confirmPassword:''
    })
    // Router
    // const history = useHistory()

    const {username,password,confirmPassword} = registerForm

    const onChangeRegisterForm = event=>setRegisterForm({...registerForm,[event.target.name]:event.target.value})
    
    const [alert,setAlert] = useState(null)

    const register = async event=> {
        event.preventDefault();
        //check repassword
        if(password !== confirmPassword){
            setAlert({type:'danger',message:'Password do not match'})
            setTimeout(()=>setAlert(null),3000)
            return 
        }

        try {
            const registerData = await registerUser(registerForm)
            if(!registerData.success){
                // history.push('/dashboard')
                setAlert({type:'danger',message:registerData.message})
                setTimeout(()=>setAlert(null),3000)
            }
        } catch (error) {
            console.log(error)
        }
       
    }
    return (
        <>
        <Form onSubmit={register}>
            <AlertMessage info={alert}/>
          <Form.Group>
              <Form.Control type='text' placeholder="Username" name='username' value={username}  onChange={onChangeRegisterForm} required/>
          </Form.Group>
          <Form.Group>
              <Form.Control type='password' placeholder="Password" name='password' value={password} onChange={onChangeRegisterForm} required/>
          </Form.Group>
          <Form.Group>
              <Form.Control type='password' placeholder="Confirm Password" name='confirmPassword' value={confirmPassword} onChange={onChangeRegisterForm} required/>
          </Form.Group>
          <Button variant='success' type='submit'>Register</Button>
        <p>Already have an account?</p>
        <Link to='/login'>
            <Button variant='info' size='sm' className='ml-2'>Login</Button>
        </Link>
        </Form>
        </>
    )
}

export default RegisterForm
