"use client";
import { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            border: '2px solid black',
                            width: "100%",
                            padding: "8px",
                            margin: "5px 0",
                            boxSizing: "border-box",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            border: '2px solid black',
                            width: "100%",
                            padding: "8px",
                            margin: "5px 0",
                            boxSizing: "border-box",
                        }}
                    />
                </div>
                <button type="submit" style={{ padding: "10px 20px",border: '2px solid black', }}>
                    Sign In
                </button>
            </form>
        </div>
    );
}
