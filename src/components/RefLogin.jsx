import { useRef } from 'react'
import logo from '../logo.svg'

const RefLogin = () => {
    const form = useRef(null);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password'),
        }
        console.log(data);
    }

  return (
    <div className="login">
        <div className="login-container">
            <img src={logo} alt="log" className="logo" width="200px" height="200px"/>
            <form className='form' ref={form} >
                    <label htmlFor='email'>Email</label>
                    <input
                        type='text'
                        name='email'
                        placeholder='correo@mail.com'
                    />

                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='******'
                    />

                    <button onClick={handleSubmit}>Iniciar Sesion</button>

                </form>

        </div>
    </div>
  )
}

export default RefLogin