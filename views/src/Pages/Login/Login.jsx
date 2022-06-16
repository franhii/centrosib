
import React from 'react'
import './Login.css';


function Login() {
    return (
        <section class='formulario'>
            <div class="form">
                <div class="title">Welcome</div>
                <div class="subtitle">Let's create your account!</div>

                <div class="input-container ic1">
                <input id="fullname" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="fullname" class="placeholder">Full name</label>
                </div>

                <div class="input-container ic2">
                <input id="lastname" class="input" type="tel" placeholder=" " />
                <div class="cut"></div>
                <label for="lastname" class="placeholder" >Telefono</label>
                </div>

                <div class="input-container ic2">
                <input id="email" class="input" type="text" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email</label>
                </div>

                
                <button type="text" className="submit">submit</button>
               
            </div>
        </section>
    );
}


    

export default Login;