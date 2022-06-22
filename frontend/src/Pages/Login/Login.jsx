import { useRef, useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

//TODO cosas del cors xdd AllowedOrigin
import axios from '../../Api/axios';
const LOGIN_URL = '/api/v1/auth/signin/';
const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(JSON.stringify(response?.data.token));
      const accessToken = response?.data?.token;
      console.log('RES:', response.data);
      const roles = response?.data?.user?.roles;
      setAuth({ email, password, roles, accessToken });
      setEmail('');
      setPassword('');
      //Replaces success page
      navigate(from, { replace: true });
    } catch (error) {
      if (!error) {
        setErrMsg('No hay respuesta del servidor.');
      } else if (error.response?.status === 400) {
        setErrMsg('Datos invalidos.');
      } else if (error.response?.status === 401) {
        setErrMsg('Sin autorización.');
      } else {
        setErrMsg('Falló el inicio de sesión.');
      }
      errRef.current.focus();
    }
  };

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? 'errmsg' : 'offscreen'}
        aria-live='assertive'
      >
        {errMsg}
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type={'text'}
          id='email'
          ref={emailRef}
          autoComplete='off'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor='password'>Contraseña</label>
        <input
          type={'password'}
          id='password'
          autoComplete='off'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button>Iniciar Sesión</button>
      </form>
      <p>
        Necesitas registrarte?
        <br />
        <span>
          <a href='#'>Registrarse</a>
        </span>
      </p>
    </section>
  );
};

export default Login;
