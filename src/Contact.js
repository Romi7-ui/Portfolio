import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css';

const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_adnxtup",
                "template_70ckjyo",
                form.current,
                "yQ6fBapEcX7x4PTVM"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };



    return (
        <div className="contact component__space" id="Contact">


            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text">I am available for freelance work. Connect with me via phone :</p>
                            <p className="hire__textt">+91 7488120291 <div className="mail"> or Email me at</div> ramanujdasgupta05@gmail.com</p>
                        </div>
                        <div className="input__box">
                            <form ref={form} onSubmit={sendEmail}>
                                
                                <input
                                 type="text" 
                                 name="user_name"
                                 className="contact name" 
                                 placeholder="Your name *" 
                                 id="" 
                                 required
                                 autoComplete="off"
                                 />
                               
                                <input 
                                type="email" 
                                name="user_email"  
                                className="contact email" 
                                placeholder="Your Email *" 
                                required 
                                autoComplete="off"/>
                               
                                <textarea 
                                name="message" 
                                id="message" 
                                placeholder="Write Your message"
                                cols="30"
                                rows="10"
                                autocomplete="off"
                                required
                                min= "5" />
                                <button className="neon glow" type="submit" value="send">Submit</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                   
                    
                    <iframe 
                    width="650" 
                    height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=lohardaga%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="location"></iframe>

                </div>
            </div>



        </div>









    )
}

export default Contact
