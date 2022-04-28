import { Button } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { create_post } from "../../Redux/Action/userAction";


const CreatePost = () =>{
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit
      } = useForm();

    const SavePost = (post) =>{
        console.log("create post",post);
        let postobj = {post:post}
        dispatch(create_post(postobj))
    }
    return(
        <div className="create-post-page">
            <div className="ct-post-heading">
                <h5>create post</h5>
                <div className="create-post-form">
                    <form onSubmit={handleSubmit(SavePost)}>
                    <div className="form-field">
                        <input type="text"
                          placeholder="Enter_title"
                          {...register("title")}
                          />
                    </div>
                    <div className="form-field">
                        <input type="text"
                         placeholder="Enter_Discription"
                         {...register("description")}
                         />
                    </div>
                    <div className="form-field">
                        <Button type="submit">Create Post</Button>
                    </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
export default CreatePost;