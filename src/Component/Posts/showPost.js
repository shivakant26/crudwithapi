import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_post, show_post } from "../../Redux/Action/userAction";

const ShowPost = () => {
    const dispatch = useDispatch();
    const allPost = useSelector((state) => state?.userReducer?.showPost?.data?.posts)
    // console.log("show_post", allPost)

    const DeletePost = (id) =>{
        console.log("delete id is",id)
        dispatch(delete_post(id))
    }

    useEffect(() => {
        dispatch(show_post())
    }, [allPost])

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
                                <td>
                                    <button className="edit-button">Edit</button>
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