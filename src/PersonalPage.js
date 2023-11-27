import { useEffect, useState } from "react";


const PersonalPage = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    }

    let items = [];
    useEffect(() => {
        items = document.querySelectorAll('.item:not(:first-child)');
        items = addSlideIn(items);
        
    }, [])

    function addSlideIn(entries) {
        entries.forEach(entry => {
            entry.classList.add('slide-in');
        });
        return entries;
    }

    // const submitBtn = document.getElementById('Submit');

    const printsuccess = () => {
        const formFirstName = document.getElementById('first-name').value;
        const formLastName = document.getElementById('last-name').value;
        const formEmail = document.getElementById('email').value;
        const formTelephoneNumber = document.getElementById('telephone-number').value;
        const person = { firstname: formFirstName, lastname: formLastName, email: formEmail, telephonenumber: formTelephoneNumber };
        const successmsg = document.getElementById('form-submitted-msg');
        //if you try to reference something that wasn't declared, like person.firstname.value or person.bankAccount, it will return "undefined"
        successmsg.innerHTML = "Form successfully submitted! Thanks " + person.firstname + " I'll send you an email at " + person.email + " or call you at " + person.telephonenumber + ".";
    }

    const validate = (e) => {
        const firstname = document.getElementById('first-name');
        const lastname = document.getElementById('last-name');
        const email = document.getElementById('email');
        const telephonenumber = document.getElementById('telephone-number');
        const successmsg = document.getElementById('form-submitted-msg');
        firstname.style.borderColor = "blue";
        lastname.style.borderColor = "blue";
        email.style.borderColor = "blue";
        telephonenumber.style.borderColor = "blue";
        var check = true;
        if (firstname.value === "") {
            firstname.style.borderColor = "red";
            check = false;
        }
        if (lastname.value === "") {
            lastname.style.borderColor = "red";
            check = false;
        }
        if (email.value === "") {
            email.style.borderColor = "red";
            check = false;
        }

        if (telephonenumber.value === "") {
            telephonenumber.style.borderColor = "red";
            check = false;
        }
        //Use the check variable to determine the result. If false, prevent default interaction. If true, make the successmsg visible.
        if (check === true) {
            successmsg.style.display = "block";
            printsuccess();
        } else {
            e.preventDefault();
        }

        return check;
    }

    return (<html>
        <head>
            <link rel="stylesheet" type="text/css" href="style_personalwebsite.css" />
            <style>

                body {

                }
            </style>

        </head>
        <body className={darkMode ? "dark-mode" : ""} style={{ backgroundImage: 'ines-alvarez-fdez-unsplash.jpg' }}>
            <main className="grid fade-in">
                <div className="header item1">
                    <h1>Healing and Empowerment for Women</h1>
                    <img className="displayed" src="photo for 3.1.jpeg" alt="Samira Davis" style={{ width: "100px" }} />
                    <p className="caption">Welcome to a safe space for women!</p>
                </div>

                <div className="item item2 down">
                    <p />
                    <p>Hello everyone! I am Samira Davis. I am a native of Memphis,TN.
                        I just wanted to create a space of empowerment and healing for all women.
                        My journey to healing may not directly reflect the next person's journey.
                        However, the destination will be the same for everyone! On this site, I will provide inspirational quotes,
                        crystal recommendations, and <a href="https://www.zoom.com/">live zoom sessions</a> for meetings.
                        If you'd like more contact information about me, please feel free to click <a href="https://www.pinterest.com/">here</a>.
                    </p>
                </div>
                <div className="item item3 up">
                    <p>This site is going to function mostly as a blog. I am not the best at journaling so hopefully this will help
                        me attempt to become better at it! I will post blogs about trendy topics, news, and anything spiritual. My first
                        entry will detail my journey to becoming a software developer. I currently work at Amazon. One day, I picked up
                        an extra shift and they were having a career choice fair. Luckily, one of the courses offered was for Software
                        Development. I nervously signed up for it and here we are as a Software Development Cohort 4 fellow.</p>
                </div>
                <div className="item item4 down">
                    <p>I have learned so much already in this course! I enjoy experimenting with the style tags and changing background
                        colors. I also get a kick out of uploading images and importing music. It can be challenging when it comes to
                        balancing this course with other obligations like work and motherhood. However, I am here for the ride and I
                        know that this is going to be a life changing experience! You can check out one of my projects
                        <a href="https://codepen.io/Samira-Davis/pen/eYbjWqQ/">here</a>.</p>
                </div>

                <div className="footer item5" style={{ background: "#D4E2D4" }}>


                    <h4><b>Contact</b></h4>

                    <form id="exampleForm">
                        <p><b>First name:</b></p>
                        <input className="placeholder form-control" type="text" id="first-name" name="PI" required />

                        <small className="error-msg invalid-feedback">Required</small>
                        <p><b>Last name:</b></p>
                        <input className="placeholder form-control" type="text" id="last-name" name="PI" required />
                        <small className="error-msg invalid-feedback">Required</small>

                        <p><b>Email:</b></p>
                        <input className="placeholder form-control" type="text" id="email" name="PI" required />
                        <small className="error-msg invalid-feedback">Required</small>

                        <p><b>Telephone number:</b></p>
                        <input className="placeholder form-control" type="text" id="telephone-number" name="PI" required />
                        <small className="error-msg invalid-feedback">Required</small>

                        <br />
                        <div id="form-submitted-msg">Form successfully submitted!</div>

                        <input className="hover" type="button" id="Submit" value="Submit" onClick={validate} />&nbsp;&nbsp;&nbsp;&nbsp;
                        <label className="toggle-switch">
                            <input type="checkbox" id="mode-toggle" onClick={toggleMode} />
                            <br />

                            <span className="slider"></span>
                        </label>




                    </form>



                </div>
            </main>

        </body>
    </html>);
}
export default PersonalPage;