import React from 'react';
import './Contact.css';
import '../Work/Work.css';
import emailjs from '@emailjs/browser';
import useRef from 'react';

const Contact = () => {
    const userForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wqyzt6c', 'template_lg7x0sd', userForm.current, 'racdNK1PBcbR86G5N')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className='contact'>
            {/* Left Section */}
            <div className='l-contact'>
                <div className='awesome'>
                    <span>Get in Touch</span>
                    <span>Contact Me</span>
                    <div className='blur s-blur1' style={{background: '#ABF1FF94'}}>

                    </div>
                </div>
            </div>
            {/* Right section */}
            <div className='r-contact'>
                <form className='s-form' ref={userForm} onSubmit={sendEmail}>
                    <input type='text' name='user_name' placeholder='Name' className='user' />
                    <input type='text' name='user_email' className='user' placeholder='Email' />
                    <textarea name='message' className='user' placeholder='message'></textarea>
                    <input type='submit' value='Send' placeholder='message' className='button s-button' />
                    <div className='blur c-blur1' style={{background: 'var(--purple)' , top:'20px'}}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact;