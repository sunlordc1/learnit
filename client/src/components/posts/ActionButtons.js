import Button from 'react-bootstrap/Button'
import { PostContext } from '../../contexts/PostContext'
import { useContext } from 'react'
const   ActionButtons = ({url,_id})=>{
    const {deletePost,findPost,setShowUpdatePostModal} = useContext(PostContext)
    const choosePost = postId =>{
        findPost(postId)
        setShowUpdatePostModal(true)
    }
    return (
        <>
   
            <Button className='' alt='edit' onClick={choosePost.bind(this,_id)}>
                Edit
            </Button>
            <Button className='' alt='delete' onClick={deletePost.bind(this,_id)}>
                Delete
            </Button>
        </>
    )
}
export default ActionButtons