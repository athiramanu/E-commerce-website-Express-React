import React, {useState} from 'react';
import Base from '../core/Base';
import {Link} from 'react-router-dom';

const Signup  = () => {
    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" type="password"/>
                        </div>
                        <button className="btn-success btn-block btn">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <Base title="Signup page" description="A page for user to signup!">
            {signUpForm()}
        </Base>
    );
};

export default Signup;