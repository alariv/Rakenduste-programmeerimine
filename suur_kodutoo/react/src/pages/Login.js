import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { loginUser } from "../store/actions";
import { Button, Input} from "antd";
import { UserOutlined } from '@ant-design/icons';



function Login() {
    const inputRef = useRef(null);
    const [name, setName] = useState("");
    const [state, dispatch] = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.input.value)
        dispatch(loginUser({token:"token",user : inputRef.current.input.value}));
        
    };

    const logout = (e) => {
        e.preventDefault();
        dispatch(loginUser({token:"",user : ""}));

        if (inputRef.current) inputRef.current.focus();
        
    };


    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt


    console.log({ inputRef });

    return (
    <div style={{ textAlign: "center" }}>
        <h1>{!state.auth.user ? "Logi sisse" : "Logi välja"}</h1>
        <form onSubmit={handleSubmit}>
            <div>Tere {state.auth.user}</div>
            {!state.auth.user ?
                <div><Input
                    ref={inputRef}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                    prefix={<UserOutlined />}
                />
                    <Button type="primary" onClick={handleSubmit}>Logi sisse</Button>
                </div> :
                <Button type="primary" onClick={logout}>Logi välja</Button>
            }


        
        </form>

    </div>
    );
}

export default Login;
