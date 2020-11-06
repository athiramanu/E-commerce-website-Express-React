import React from 'react';
import '../styles.css';
import { API } from '../backend';
import Base from './Base';
import Card from './Card';

export default function Home() {
    console.log("API is", API);
    return (
        <Base title="Home Page">
            <div className="row text-center">
                <div className="col-4">
                    <Card></Card>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">Test</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">Test</button>
                </div>
            </div>
        </Base>
    )
}
