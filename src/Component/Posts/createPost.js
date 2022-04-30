import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { create_post, single_post, update_post } from "../../Redux/Action/userAction";
import { useNavigate, useParams } from "react-router-dom";


const CreatePost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = useParams();
    const {
        register,
        setValue,
        // formState: { errors },
        handleSubmit
    } = useForm();
    const showSinglePost = useSelector((state) => state?.userReducer?.singlePost?.data?.post)
    const update_success = useSelector((state)=>state);

    console.log(12313211321, update_success)
    const SavePost = (post,e) => {
        var postobj = { post: post }
        if (showSinglePost) {
            dispatch(update_post(id,postobj))
            navigate("../listPost")
        } else {
            console.log("create post", post);
            dispatch(create_post(postobj))
            e.target.reset();
        }

    }
    useEffect(() => {
         dispatch(single_post(id))
        if (id) {
            setValue('title', showSinglePost?.title);
            setValue('description', showSinglePost?.description);
        }
        
    }, [])
    return (
        <div className="create-post-page">
            <div className="ct-post-heading">
                {
                    showSinglePost ? <h5>Update post</h5> : <h5>Create post</h5>
                }

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
                            {
                                showSinglePost ? <Button type="submit">Update Post</Button>
                                    :
                                    <Button type="submit">Create Post</Button>
                            }

                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default CreatePost;