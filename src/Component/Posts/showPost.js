import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delete_post, show_post, update_post } from "../../Redux/Action/userAction";

const ShowPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allPost = useSelector((state) => state?.userReducer?.showPost?.data?.posts)
    const update_success = useSelector((state) => state?.userReducer?.showPost)
    const delete_success = useSelector((state) => state?.userReducer?.deletePost)

    const DeletePost = (id) =>{
        dispatch(delete_post(id))
    }
    const EditPost = (id) =>{
        navigate(`/dashboard/createPost/${id}`);
    }

    useEffect(() => {
        dispatch(show_post())
        if(update_success?.status === 200){
            dispatch(show_post())
        }
        if(delete_success?.status === 200){
            dispatch(show_post())
        }
    }, [])

    return (
        <div className="table_data">
            <div className="table-heading">
                <h4>show post</h4>
            </div>
            <div className="table-content">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPost?.map((item,index)=>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td colSpan={2}>
                                    <button className="edit-button" onClick={()=>EditPost(item.id)}>Edit</button>
                                    <button className="del-btn" onClick={()=>DeletePost(item.id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowPost;