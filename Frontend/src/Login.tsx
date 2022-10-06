import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Login: React.FC = (): JSX.Element => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
            />
            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <Button variant="primary">Login</Button>
        </div>
    )
}

export default Login
