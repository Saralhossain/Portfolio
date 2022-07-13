import React, { useState } from 'react';
import './Contact.css';
import '../Work/Work.css';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import { useContext } from 'react';



const Contact = () => {
    const theme=useContext(themeContext);
    const darkMode =theme.state.darkMode;
    

    const form = useRef();

    const [done , setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wqyzt6c', 'template_lg7x0sd', form.current, 'racdNK1PBcbR86G5N')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className='contact' id='Contact'>
            {/* Left Section */}
            <div className='l-contact'>
                <div className='awesome'>
                    <span style={{color : darkMode? 'white' : ''}}>Get in Touch</span>
                    <span>Contact Me</span>
                    <div className='blur s-blur1' style={{background: '#ABF1FF94'}}>

                    </div>
                </div>
            </div>
            {/* Right section */}
            <div className='r-contact'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' placeholder='Name' className='user' />
                    <input type='text' name='user_email' className='user' placeholder='Email' />
                    <textarea name='message' className='user' placeholder='message'></textarea>
                    <input type='submit' value='Send' placeholder='message' className='button s-button' />
                    <span>{done && "Thanks for contacting me!"}</span>
                  
                    <div className='blur c-blur1' style={{background: 'var(--purple)' , top:'20px'}}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact;