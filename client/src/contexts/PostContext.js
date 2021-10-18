import {createContext,useReducer,useState} from 'react'
import {postReducer} from '../reducers/postReducer'
import { ADD_POST, apiUrl,POSTS_LOADED_FAIL,POSTS_LOADED_SUCCESS } from './constants'
import axios from 'axios'

export const PostContext = createContext();

const PostContextProvider = ({children}) =>{
    //State
    const [postState,dispatch] = useReducer(postReducer,{
        posts:[],
        postsLoading:true
    })

    const [showAddPostModal,setShowAddPostModal] = useState(false)


    //Get all posts
    const getPosts = async ()=>{
        try {
            const response = await axios.get(`${apiUrl}/posts`)
            if(response.data.success){
                dispatch({
                    type:POSTS_LOADED_SUCCESS,
                    payload:response.data.posts
                })
            }
        } catch (error) {
            dispatch({
                type:POSTS_LOADED_FAIL
            })
        }
    }

    //Add post 
    const addPost = async newPost =>{
        try {
            const response = await axios.post(`${apiUrl}/posts`,newPost)
            console.log(newPost)
            if(response.data.success){
                dispatch({type:ADD_POST,payload:response.data.post})
                return response.data
            }
        } catch (error) {
            return error.response.data  ? error.response.data : {success:false,message:'Internal server error'}
        }
    }
    const postContextData = {postState,addPost,getPosts,showAddPostModal,setShowAddPostModal}
    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>
    )
}
export default PostContextProvider