import React, {useState, useEffect} from 'react'
import Base from '../core/Base'
import { isAuthenticated } from '../auth/helper'
import { Link } from 'react-router-dom'
import { updateCategory, getCategory } from './helper/adminapicall'

const UpdateCategory = ({match}) => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const {user, token} = isAuthenticated();

    const handleChange = (event) => {
        setError("");
        setName(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false);
        
        //backend request fired
        updateCategory(match.params.categoryId, user._id, token, {name})
        .then(data => {
            if(data.error) {
                setError(true)
            } else {
                setError("")
                setName("");
                setSuccess(true)
            }
        });
    }

    const preload = (categoryId) => {
        getCategory(categoryId).then(data => {
            if (data.error) {
                setError(data.error)
            }
            else {
                setName(data.name)
            }
        })
    }

    useEffect(() => {
        preload(match.params.categoryId);
    }, [])

    const successMessage = () => {
        if(success) {
            return <h4 className="text-success">Category updated successfully</h4>
        }
    }

    const warningMessage = () => {
        if(error) {
            return <h4 className="text-danger">Failed to update Category</h4>
        }
    }

    const myCategoryForm = () => {
        return(
            <form>
                <div className="form-group">
                    {successMessage()}
                    {warningMessage()}
                    <p className="lead">Enter the category</p>
                    <input type="text" 
                        className="form-control my-3" 
                        autoFocus 
                        required 
                        placeholder="For eg: Summer"
                        onChange={handleChange}
                        value={name}
                    />
                    <button onClick={onSubmit} className="btn btn-outline-info">Update Category</button>
                </div>
            </form>
        )
    }

    return (
        <Base
            title="Update category"
            description="Update a category for tshirts"
            className="container bg-info p-4"
        >
            <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">Admin Home</Link>
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {myCategoryForm()}
                </div>
            </div>
        </Base>
    )
}

export default UpdateCategory;