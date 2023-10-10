import React, { useState, useRef } from "react";
import "../styles/contact.css"
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendForm = (e) => {
        e.preventDefault();

        const nameInput = form.current.querySelector('input[name="name"]').value;
        const phoneInput = form.current.querySelector('input[name="phone"]').value;
        const emailInput = form.current.querySelector('input[name="email"]').value;
        const instagramInput = form.current.querySelector('input[name="instagram"]').value;
        const inquiryTypeInput = form.current.querySelector('button[name="inquiryType"]').value;
        const messageInput = form.current.querySelector('textarea[name="message"]').value;

        console.log(nameInput, phoneInput, emailInput, instagramInput, inquiryTypeInput, messageInput);

        if (!/^\d{3}-\d{3}-\d{4}$/.test(phoneInput)) {
            alert("Please enter a valid phone number in the format '555-555-5555'.");
            e.preventDefault();
            return;
        }

        // emailjs.sendForm('service_dzeb4os', 'template_nnq7g1f', form.current, 'YOUR_PUBLIC_KEY')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    };

    const [selectedOption, setSelectedOption] = useState("What type of photo session would you like to book with me?");

    const updateSelectedOption = (optionText) => {
        setSelectedOption(optionText);
    }

    return (
        <div className="fade-in d-flex my-5 flex-column align-items-center">
            <h1 className="gloock">CONTACT ME</h1>
            <div className="d-flex flex-column allura col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-8 col-9 mb-3">
                <h3 className="ms-5">Please complete the form below</h3>
                <h3 className="me-5 align-self-end text-decoration-underline">I look forward to connecting with you!</h3>
            </div>
            <form ref={form} onSubmit={sendForm} className="fs-5 d-flex flex-column col-xxl-6 col-8 border border-light p-2 row g-1">
                <div className="mb-3">
                    <label className="form-label">NAME</label>
                    <input name="name" className="form-control" placeholder="Jane Doe" />
                </div>
                <div className="mb-3">
                    <label className="form-label">PHONE NUMBER</label>
                    <input name="phone" className="form-control" placeholder="555-555-5555" />
                </div>
                <div className="mb-3">
                    <label className="form-label">EMAIL ADDRESS</label>
                    <input name="email" type="email" id="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">INSTAGRAM HANDLE</label>
                    <input name="instagram" className="form-control" placeholder="optional" />
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label">TYPE OF INQUIRY</label>
                    <button name="inquiryType" type="button" id="selectedOption" className="col-12 btn btn-light text-start dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedOption}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-start">
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Families')} >Families</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Couples')} >Couples</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Graduation')}>Graduation</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Maternity')}>Maternity</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Headshots')}>Headshots</button></li>
                    </ul>
                </div>
                <div className="mb-3 col-12">
                    <label className="form-label">YOUR INSPIRATION</label>
                    <textarea name="message" className="form-control" placeholder="Tell me all the fun details! Your inspiration for the shoot, date, desired location, ideas, etc." rows="3"></textarea>
                </div>
                <button className="submitBtn col-4 col-sm-3 align-self-start">Submit</button>
            </form>
        </div>
    )
}

export default Contact;