import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()


    const handleLog = () => {
        auth.login(user)
        navigate('/')
        
    }
  return (
    <div>
        <label>
            Username:{' '}
            <input type='text' onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handleLog}>Login</button>
    </div>
  )
}

export default Login