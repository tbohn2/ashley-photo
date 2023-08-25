import React, { useState } from "react";
import '../styles/home.css'

const Contact = () => {

    return (
        <div className="d-flex mt-3 flex-column align-items-center">
            <h1>CONTACT ME</h1>
            <form className="d-flex flex-column col-8 border border-light p-2 row g-1">
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input className="form-control" placeholder="Jane Doe" />
                </div>
                <div class="mb-3">
                    <label class="form-label">PHONE NUMBER</label>
                    <input className="form-control" placeholder="555-555-5555" />
                </div>
                <div class="mb-3">
                    <label class="form-label">EMAIL ADDRESS</label>
                    <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div class="mb-3 col-4">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </div>
    )
}

export default Contact;