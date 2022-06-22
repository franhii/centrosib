import { useState, useRef, useEffect } from 'react';
import './Registro.css';

import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/;
const PHONE_REGEX = /^[0-9]{8,15}$/;

const Registro = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');

  //TODO
  // const [validName, setValidName] = useState(false);
  // const [nameFocus, setNameFocus] = useState(false);

  const [lastName, setLastName] = useState('');
  //TODO
  // const [validLastName, setValidLastName] = useState(false);
  // const [lastNameFocus, setLastNameFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  //TODO
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  //Setting the focus when the component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    // console.log(result);
    // console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    // console.log(result);
    // console.log(password);
    setValidPassword(result);
  }, [password]);

  useEffect(() => {
    const result = PHONE_REGEX.test(phoneNumber) || phoneNumber === '';
    // console.log(result);
    // console.log(phoneNumber);
    setValidPhoneNumber(result);
  }, [phoneNumber]);

  useEffect(() => {
    setErrMsg('');
  }, [email, password, phoneNumber]);
  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // fetch()

  const url = '/api/v1/auth/signup/';
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      first_name: name,
      last_name: lastName,
      password: password,
      email: email,
      phone_number: phoneNumber,
    }),
  };
  const registerUser = async (e) => {
    e.preventDefault();
    // if button ennabled with JS hack
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }
    const response = await fetch(url, options);
    const jsonResponse = await response.json();
    console.log(jsonResponse.data);

    if (response.ok) {
      setSuccess(true);
      setEmail('');
      setPassword('');
      setName('');
      setLastName('');
      setPhoneNumber('');
      errRef.current.focus();
    } else if (response.status === 403) {
      setErrMsg('El e-mail ya se encuentra en uso.');
    } else {
      setErrMsg('No se pudo realizar el registro.');
    }
  };

  return (
    <>
      {success ? (
        <section className='signUp'>
          <h1>Success!</h1>
          <p>
            <a href='#'>Sign In</a>
          </p>
        </section>
      ) : (
        <section className='signUp'>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>
          <form onSubmit={registerUser} className='form'>
            <h1 className='title'>Registrar</h1>

            <div className='input-container'>
              <input
                type='text'
                id='first_name'
                ref={userRef}
                className='input'
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                // aria-invalid={validName ? 'false' : 'true'}
                // onFocus={() => setNameFocus(true)}
                // onBlur={() => setNameFocus(false)}
              />
              <label htmlFor='first_name' className='label'>
                Nombre
              </label>
            </div>
            <div className='input-container'>
              <input
                className='input'
                type={'text'}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <label className='label'>Apellido</label>
            </div>

            <div className='input-container'>
              <button
                className='eye'
                onClick={togglePassword}
                tabIndex='-1'
              ></button>
              <input
                type={passwordShown ? 'text' : 'password'}
                id='password'
                className='input'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                aria-invalid={validPassword ? 'false' : 'true'}
                aria-describedby='pwdnote'
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
              <label htmlFor='password' className='label'>
                Contraseña
                <span className={validPassword ? 'valid' : 'hide'}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span
                  className={validPassword || !password ? 'hide' : 'invalid'}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <p
                id='pwdnote'
                className={
                  passwordFocus && !validPassword ? 'instructions' : 'offscreen'
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Minimo de 8 caracteres
                <br />
                Al menos una letra
                <br />
                Al menos un número
                <br />
                Al menos un caractér especial(@$!%*?&_-)
              </p>
            </div>

            <div className='input-container'>
              <input
                type='email'
                id='email'
                className='input'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                aria-invalid={validEmail ? 'false' : 'true'}
                aria-describedby='emailnote'
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <label htmlFor='email' className='label'>
                E-mail
                <span className={validEmail ? 'valid' : 'hide'}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validEmail || !email ? 'hide' : 'invalid'}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <p
                id='emailnote'
                className={
                  emailFocus && !validEmail ? 'instructions' : 'offscreen'
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Ejemplo de e-mail valido:
                <br />
                mysite@gmail.com, my.site@gmail.com, my.site@you.me.com,
                my.site@123.com
                <br />
                Ejemplo de e-mail no valido:
                <br />
                mysite.gmail.com [@ No está presente], @you.me.net [ No hay
                caracteres antes del @], etc.
              </p>
            </div>

            <div className='input-container'>
              <input
                type='tel'
                id='phoneNumber'
                className='input'
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                aria-invalid={validPhoneNumber ? 'false' : 'true'}
                aria-describedby='phonenote'
                onFocus={() => setPhoneNumberFocus(true)}
                onBlur={() => setPhoneNumberFocus(false)}
              />
              <label htmlFor='phoneNumber' className='label'>
                Número de telefono(opcional)
                <span
                  className={
                    !validPhoneNumber || phoneNumber === '' ? 'hide' : 'valid'
                  }
                >
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span
                  className={
                    validPhoneNumber || !phoneNumber ? 'hide' : 'invalid'
                  }
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <p
                id='phonenote'
                className={
                  phoneNumberFocus && !validPhoneNumber
                    ? 'instructions'
                    : 'offscreen'
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                El número de telefono puede ir vacío.
                <br />
                Sí no va vacion debe tener entre 8 y 15 números.
              </p>
            </div>

            <button
              disabled={
                !validEmail || !validPassword || !validPhoneNumber
                  ? true
                  : false
              }
              className='submitBtn'
            >
              Registrarse
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default Registro;
