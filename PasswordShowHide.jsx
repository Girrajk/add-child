import React, { useState } from "react";

const PasswaordShowHide = () => {
    const [pass, setPass] = useState("");
    const [showPass, setShowPass] = useState(false);

    function changeHendler(e) {
        setPass(e.target.value);
    }

    function passHendler() {
        setShowPass(!showPass);
    }
    return (
        <div id="pass-container">
            <input type={showPass ? "text" : "password"} placeholder="Enter Your Password"
                onChange={changeHendler}
                value={pass}
            />
            <button onClick={passHendler}>{showPass ? "Hide Password" : "Shaw Password"} </button>

        </div>
    )
}
export default PasswaordShowHide;