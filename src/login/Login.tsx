import { useState } from 'preact/hooks';
import '../styles/login.css';

export function Login() {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let [displayName, setDisplayName] = useState("");
    let [register, setRegister] = useState(false);

    return <div class="Login">
        <i className="logo fa fa-leaf"></i>
        <input type="email" placeholder="Email (someone@example.com)" value={email} onChange={e => setEmail(e.currentTarget.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
        <input type="text" placeholder="Display Name" value={displayName} onChange={e => setDisplayName(e.currentTarget.value)} style={{ display: register ? "block" : "none" }} />
        <button type="button">
            {register ? "Register" : "Login"}
        </button>
        <p>{register ? "Switch back to " : "Have no account yet? Go and "}
            <a href="" onClick={e => {
                e.preventDefault();
                setRegister(!register);
            }}>
                {register ? "Login" : "Register"}
            </a>
        </p>
    </div>
}