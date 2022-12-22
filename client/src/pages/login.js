
import React from "react";

const Login = () => {
  return (
    <div class="page-login">
    <div class="ui centered grid container">
        <div class="nine wide column">
        <h1 class="ui header login-header">ConnectCarolina Login</h1>
        <div class="input-container">
            <div class="content">
                <form class="ui form" method="POST">
                    <div class="field">
                        <input type="text" name="user" placeholder="ONYEN"/>
                    </div>
                    <div class="field">
                        <input type="password" name="pass" placeholder="Password"/>
                    </div>
                    <button class="ui blue button" type="submit">
                        Continue
                    </button>
                </form>
            </div>
        </div>
        </div>
    </div>
    </div>
  );
};
  
export default Login;