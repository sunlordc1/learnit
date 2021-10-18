import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../logo.svg'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
const NavbarMenu = () => {
   
    const {
        authState:{
            user:{username}
        },
        logoutUser
    } =  useContext(AuthContext)
    const logout = ()=> logoutUser()
    return (
        <Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
            <Navbar.Brand className='font-weight-bolder text-white'>
                <img src={logo} alt="learnit" width='32' height='32' className='me-2'></img>
                Learn it
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto'>
                    <Nav.Link className='font-weight-bolder text-white' to="/dashboard" as={Link}>
                        Dashboard
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to="/about" as={Link}>
                        About
                    </Nav.Link>
                   
                </Nav>
                <Nav className='me-2'>
                    <Nav.Link className='font-weight-bolder text-white' disabled>
                        Hello {username}
                    </Nav.Link>
                    <Button variant='secondary' className='font-weight-bolder text-white' onClick={logout}>
                        Logout
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarMenu
