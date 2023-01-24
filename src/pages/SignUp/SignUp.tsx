import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button, { ButtonTypeEnum } from '../../components/Button';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import {
  getRegisterUser,
  setMailValue,
  setPassworConfirmdValue,
  setPasswordValue,
} from '../../redux/signUpAuthSlice';
import styles from './SignUp.module.scss';
import Loading from '../../components/Loader';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [seePassword, setSeePassword] = useState(false);
  const [seePasswordConfirm, setSeePasswordConfirm] = useState(false);
  const { passwordValue } = useAppSelector((state) => state.signUpAuthSlice);
  const { mailValue } = useAppSelector((state) => state.signUpAuthSlice);
  const { nameUser } = useAppSelector((state) => state.signUpAuthSlice);
  const { statusRegisterUser } = useAppSelector(
    (state) => state.signUpAuthSlice
  );
  const { passworConfirmdValue } = useAppSelector(
    (state) => state.signUpAuthSlice
  );
  const navigate = useNavigate();
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, passwordlDirty] = useState(false);
  const [passwordConfirmDirty, passwordConfirmlDirty] = useState(false);
  const [emailError, setEmailErorr] = useState('Емайл не может быть пустым');
  const [passwordError, setPasswordErorr] = useState(
    'Пароль не может быть пустым'
  );
  const [passwordConfirmError, setPasswordConfirmErorr] = useState(
    'Пароль не может быть пустым'
  );
  const [formValid, setForValid] = useState(false);
  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        passwordlDirty(true);
        break;
      case 'passwordConfirm':
        passwordConfirmlDirty(true);
        break;
    }
  };

  const emailHandler = (e: any) => {
    dispatch(setMailValue(e.target.value));
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailErorr('Некоректный емайл!');
    } else {
      setEmailErorr('');
    }
  };

  const passworwHandler = (e: any) => {
    dispatch(setPasswordValue(e.target.value));
    if (e.target.value.length < 4 || e.target.value.length > 10) {
      setPasswordErorr('Пароль должен быть длинее 4 и не более 10');
      if (!e.target.value) {
        setPasswordErorr('Пароль не может быть пустым');
      }
    } else {
      setPasswordErorr('');
    }
  };

  const passworwConfirmHandler = (e: any) => {
    dispatch(setPassworConfirmdValue(e.target.value));
    if (e.target.value.length < 4 || e.target.value.length > 10) {
      setPasswordConfirmErorr('Пароль должен быть длинее 4 и не более 10');
      if (!e.target.value) {
        setPasswordConfirmErorr('Пароль не может быть пустым');
      }
    } else {
      setPasswordConfirmErorr('');
    }
  };

  useEffect(() => {
    if (emailError || passwordError || passwordConfirmError) {
      setForValid(false);
    } else {
      setForValid(true);
    }
  }, [emailError, passwordError, passwordConfirmError]);

  return (
    <div className={styles.inner}>
      {statusRegisterUser === 'pending' ? (
        <div className={styles.spinner}>
          <Loading />
        </div>
      ) : (
        <FormContainer title={'Sign Up'}>
          <>
            <div className={styles.innerInput}>
              <div>
                <Input
                  value={mailValue}
                  onBlur={blurHandler}
                  name="email"
                  className={styles.input}
                  onChange={(e) => emailHandler(e)}
                  disabled={false}
                  placeholder={'Enter your mail'}
                  emailDirty={emailDirty}
                  emailError={emailError}
                />
              </div>
              <div>
                <div className={styles.innerInp}>
                  <Input
                    value={passwordValue}
                    onBlur={blurHandler}
                    name="password"
                    className={styles.input}
                    onChange={(e) => passworwHandler(e)}
                    disabled={false}
                    passwordDirty={passwordDirty}
                    passwordError={passwordError}
                    placeholder={'Enter password'}
                    type={seePassword ? 'text' : 'password'}
                  />
                  <div onClick={() => setSeePassword(!seePassword)}>
                    {seePassword ? (
                      <AiOutlineEyeInvisible className={styles.eye} />
                    ) : (
                      <AiOutlineEye className={styles.eye} />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.innerInp}>
                  <Input
                    onBlur={blurHandler}
                    name="passwordConfirm"
                    value={passworConfirmdValue}
                    className={styles.input}
                    onChange={(e) => passworwConfirmHandler(e)}
                    disabled={false}
                    placeholder={'Confirm password'}
                    type={seePasswordConfirm ? 'text' : 'password'}
                    passwordConfirmDirty={passwordConfirmDirty}
                    passwordConfirmError={passwordConfirmError}
                  />
                  <div
                    onClick={() => setSeePasswordConfirm(!seePasswordConfirm)}
                  >
                    {seePasswordConfirm ? (
                      <AiOutlineEyeInvisible className={styles.eye} />
                    ) : (
                      <AiOutlineEye className={styles.eye} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Button
              title={'Sign up'}
              type={ButtonTypeEnum.Primary}
              onClick={() => {
                dispatch(setMailValue(''));
                dispatch(setPasswordValue(''));
                dispatch(setPassworConfirmdValue(''));
                dispatch(
                  getRegisterUser({
                    datas: {
                      email: mailValue,
                      password: passwordValue,
                      password_confirmation: passworConfirmdValue,
                      purchase_code: nameUser,
                    },
                    callback: (link) => navigate(link),
                  })
                );
              }}
              disabled={!formValid}
              className={styles.btn}
            />
            <div className={styles.textLink}>
              Already have an account?
              <Link to={'/signin'}>
                <span>Sign In</span>
              </Link>
            </div>
          </>
        </FormContainer>
      )}
    </div>
  );
};

export default SignUp;
