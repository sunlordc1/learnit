
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
const RegisterForm = () => {
    return (
        <>
        <Form>
          <Form.Group>
              <Form.Control type='text' placeholder="Username" name='username' required/>
          </Form.Group>
          <Form.Group>
              <Form.Control type='password' placeholder="Password" name='password' required/>
          </Form.Group>
          <Form.Group>
              <Form.Control type='password' placeholder="Confirm Password" name='confirmPassword' required/>
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
