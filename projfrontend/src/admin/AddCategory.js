import React, {useState} from 'react'
import Base from '../core/Base'
import { isAuthenticated } from '../auth/helper'
import { Link } from 'react-router-dom'
import { createCategory } from './helper/adminapicall'

const AddCategory = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const {user, token} = isAuthenticated();

    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-small btn-success mb-3" to="/admin/dashboard">Admin Home</Link>
        </div>
    )

    const handleChange = (event) => {
        setError("");
        setName(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false);
        
        //backend request fired

        createCategory(user._id, token, {name})
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

    const successMessage = () => {
        if(success) {
            return <h4 className="text-success">Category created successfully</h4>
        }
    }

    const warningMessage = () => {
        if(error) {
            return <h4 className="text-danger">Failed to create Category</h4>
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
                    <button onClick={onSubmit} className="btn btn-outline-info">Create Category</button>
                </div>
            </form>
        )
    }

    return (
        <Base
            title="Create category"
            description="Add a new category for new tshirts"
            className="container bg-info p-4"
        >
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {myCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    )
}

export default AddCategory