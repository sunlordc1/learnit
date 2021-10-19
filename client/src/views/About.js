import Button from "react-bootstrap/esm/Button";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const About = () => {
    return (
        <Row className='mt-5'>
            <Col className='text-center'>
                <Button 
                    variants='primary' 
                    href='https://www.youtube.com/'
                    size='lg'
                >
                    Visit my channel 
                </Button>
            </Col>

        </Row>
    )
}
export default About