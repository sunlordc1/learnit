
import { PostContext } from "../contexts/PostContext"
import { useContext,useEffect } from "react"
import Spinner from "react-bootstrap/esm/Spinner"
import { AuthContext } from "../contexts/AuthContext"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import SinglePost from "../components/posts/SinglePost"
import AddPostModal from "../components/posts/AddPostModal"
import UpdatePostModal from "../components/posts/UpdatePostModal"
import Toast from 'react-bootstrap/Toast'
const Dashboard = () => {
    //Context 
    const {authState:{user:{username}}} = useContext(AuthContext)
    const {
        postState:{post,posts,postsLoading},
        getPosts,
        setShowAddPostModal,
        showToast:{show,message,type},
        setShowToast
    } = useContext(PostContext)

    useEffect(() => {
        getPosts()
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    let body = null
    if(postsLoading){
        body = (
            <Spinner animation='border' variant='info'></Spinner>
        )
    }else if(posts.length === 0){
        body = (
        <>
            <Card className='text-center'>
                <Card.Header as='h1'>
                    Hi you, {username}
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        Welcome to learn 
                    </Card.Title>
                    <Card.Text>
                        Click the button below to track your first skill to learn
                    </Card.Text>
                    <Button variant='primary' onClick={setShowAddPostModal.bind(this,true)}>
                        Learn
                    </Button>
                </Card.Body>
            </Card>
        </>
        )
    }else {
        body = (
            <>
                <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
                    {posts.map(post=>(
                        <Col key={post._id} className='my-2'>
                            <SinglePost post={post}/>
                        </Col>
                    ))}
                </Row>
                {/* Open Add Post Modal */}
                    <Button onClick={setShowAddPostModal.bind(this,true)}>Add</Button>
            </>
        )
    }


    return (
        <>
            {body}
            <AddPostModal/>
            {post !==null && <UpdatePostModal/>}
            {/* After post is added show toast */}
            <Toast show={show} animation={false} style={{position:'fixed',top:'20%',right:'10px'}} className={`bg-${type} text-white`} 
            onClose={setShowToast.bind(this,{show:false,message:'',type:null})} delay={3000} autohide>
                <Toast.Body>
                    <strong>{message}</strong>
                </Toast.Body>
            </Toast>
        </>
    )
}

export default Dashboard
