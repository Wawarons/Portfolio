import React, { useEffect } from 'react';
import arrow from './images/round-arrow-right.png';
import email from 'emailjs-com';


const Contact = () => {
    useEffect(() => {
        const form = document.querySelector('form');
        form.addEventListener('submit', (e)=> {
            e.preventDefault();
            let test = checkForm();
            if(test !== false){
                email.sendForm("service_vh2oohk", "template_jry1vux", e.target,"user_pb0xGUFWR9eZKtjpOlgFO");
                setTimeout(() => {
                    document.querySelectorAll('.userInfo').forEach((input) => {
                        input.value = "";
                    })
                }, 1500);
            }
        })

    }, [])

    const checkForm = () => {
        const emailTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let emailUser = document.getElementById("user-email");
            document.querySelectorAll('.userInfo').forEach((input) => {
                if(input.value === ""){
                    input.nextElementSibling.classList.add("error");
                }else if(input.id === "user-email" && !emailTest.test(emailUser.value)){
                    input.nextElementSibling.classList.add("error");
                }else{
                    input.nextElementSibling.classList.remove("error");
                }
            })
            if(document.querySelectorAll(".error").length === 0){
                document.querySelector('.hide').style.visibility = "visible";
                return true;
            }else{
                document.querySelector('.hide').style.visibility = "hidden";
                return false;
            }
        }

    return (
        <div id = "contact">
            <h2>Contact</h2>
            <form action="mail.php" method = "POST">
                <input type="text" name="username" id="user-name" placeholder = "Nom" className = "userInfo" />
                <label htmlFor = "username" id = "username_Label">Nom invalide</label>
                <input type="email" name="useremail" id="user-email" placeholder = "Email" className = "userInfo"/>
                <label htmlFor = "email" id = "useremail_Label">Email invalide</label>
                <input type="text" name="subject" id="user-subject" placeholder = "Sujet" className = "userInfo"/>
                <label htmlFor = "subject" id = "usersubject_Label">Sujet invalide</label>
                <textarea name="message" id="user-text" cols="30" rows="10" placeholder = "Message..." className = "userInfo"></textarea>
                <label htmlFor = "message" id = "usertext_Label">Message invalide</label>
                <input type = "image" src = {arrow} alt = "send submit" value = "Submit" style = {{width: 35, height: 35}}/>
                <h3 className = "hide">Email envoyé :)</h3>
            </form>
        </div>
    );
};

export default Contact;