import React, { useState } from "react";
import '../styles/home.css'

const Contact = () => {

    return (
        <div className="d-flex mt-3 flex-column align-items-center">
            <h1>CONTACT ME</h1>
            <form className="d-flex flex-wrap col-10 border border-light p-2">
                <div class="mb-3 col-2">
                    <label class="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </div>
    )
}

export default Contact;