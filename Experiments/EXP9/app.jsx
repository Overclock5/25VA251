import { useState } from "react";
import "./App.css";
function App() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState([]);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const validate = () => {
        let err = {};
        if (!form.name) err.name = "Name is required";
        if (!form.email) err.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email))
            err.email = "Invalid email";
        if (!form.password) err.password = "Password is required";
        else if (form.password.length < 6)
            err.password = "Min 6 characters";
        return err;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setUsers([...users, { name: form.name }]);
            alert("Registration Successful!");
            setForm({ name: "", email: "", password: "" });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };
    return (
        <div className="container">
            <div className="card">
                <h1>
                    Registration <br /> Form
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={form.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                    <button type="submit">Register</button>
                </form>
                {users.length > 0 && (
                    <div className="api-data">
                        <h3>Registered Users</h3>
                        <ul>
                            {users.map((user, index) => (
                                <li key={index}>{user.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
export default App;