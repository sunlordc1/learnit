import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext,useState,useEffect } from 'react'
import { PostContext } from '../../contexts/PostContext'

const UpdatePostModal = () => {
    //Contexts 
    const  {
        showUpdatePostModal,setShowUpdatePostModal,updatePost,setShowToast,
        postState:{post}
    } = useContext(PostContext)
   
 
    //State
    const [updatedPost,setUpdatedPost] = useState(post)

    const {title,description,url,status} = updatedPost
    const onChangeUpdatedPostForm = event => setUpdatedPost({...updatedPost,[event.target.name]:event.target.value})
    const onSubmit = async event =>{
        event.preventDefault();
        const {success,message} = await updatePost(updatedPost)
        setShowToast({show:true,message,type:success?'success':'danger'})
        setShowUpdatePostModal(false)
    }
    // const resetAddPostData = ()=>{
    //     setNewPost({title:'',description:'',url:'',status:'TO LEARN'})
    //     setShowAddPostModal(false)
    // }
    useEffect(()=>setUpdatedPost(post),[post])

    const closeDialog = ()=>{
        setUpdatedPost(post)
        setShowUpdatePostModal(false)
    }
    return (
        <Modal show={showUpdatePostModal} animation={false} onHide={closeDialog}>
            <Modal.Header closeButton>
                
                <Modal.Title>Making progess </Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help'
                        value={title}
                        onChange={onChangeUpdatedPostForm}
                        />
                        <Form.Text id='title-help' muted>Required</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as='textarea' rows={3}  placeholder='Description' name='description' 
                        value={description}
                        onChange={onChangeUpdatedPostForm}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='text' placeholder='Youtube Tutorial URL' name='url'
                        value={url}
                        onChange={onChangeUpdatedPostForm}
                        />
                    </Form.Group>
                    <Form.Group>
                       <Form.Control as='select' value={status} name='status' onChange={onChangeUpdatedPostForm}>
                            <option value='TO LEARN'>TO LEARN</option>
                            <option value='LEARNING'>LEARNING</option>
                            <option value='LEARNED'>LEARNED</option>
                       </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={closeDialog}>Cancel</Button>
                    <Button variant='primary' type='submit'>LearnIt</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default UpdatePostModal
