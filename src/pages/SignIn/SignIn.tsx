import { Link, useNavigate } from 'react-router-dom';
import Button, { ButtonTypeEnum } from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';
import {
  getSignInUser,
  setMailValue,
  setPasswordValue,
} from '../../redux/signInAuthSlice';
import styles from './SignIn.module.scss';
import { useEffect, useMemo, useState } from 'react';
import Loading from '../../components/Loader';

const SignIn = () => {
  const dispach = useAppDispatch();
  const { mailValue } = useAppSelector((state) => state.signInAuthSlice);
  const { passwordValue } = useAppSelector((state) => state.signInAuthSlice);
  const { statusSignIn } = useAppSelector((state) => state.signInAuthSlice);
  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, passwordlDirty] = useState(false);
  const [emailError, setEmailErorr] = useState('Емайл не может быть пустым');
  const [passwordError, setPasswordErorr] = useState(
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
    }
  };

  const emailHandler = (e: any) => {
    dispach(setMailValue(e.target.value));
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailErorr('Некоректный емайл!');
    } else {
      setEmailErorr('');
    }
  };

  const passworwHandler = (e: any) => {
    dispach(setPasswordValue(e.target.value));
    if (e.target.value.length < 4 || e.target.value.length > 10) {
      setPasswordErorr('Пароль должен быть длинее 4 и не более 10');
      if (!e.target.value) {
        setPasswordErorr('Пароль не может быть пустым');
      }
    } else {
      setPasswordErorr('');
    }
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setForValid(false);
    } else {
      setForValid(true);
    }
  }, [emailError, passwordError, mailValue, passwordValue]);

  return (
    <div className={styles.wrapper}>
      {statusSignIn === 'pending' ? (
        <div className={styles.spinner}>
          <Loading />
        </div>
      ) : (
        <FormContainer title={'LOG IN'}>
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
                  placeholder={'Enter your name'}
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
            </div>
            <Button
              title={'Continue'}
              type={ButtonTypeEnum.Primary}
              disabled={!formValid}
              className={styles.btn}
              onClick={() => {
                dispach(setMailValue(''));
                dispach(setPasswordValue(''));
                dispach(
                  getSignInUser({
                    datas: {
                      email: mailValue,
                      password: passwordValue,
                      token_name: 'token',
                    },
                    callback: () => navigate('/'),
                  })
                );
              }}
            />
            <div className={styles.textLink}>
              Don’t have an account?{' '}
              <Link to={'/signup'}>
                <span>Sign Up</span>
              </Link>
            </div>
          </>
        </FormContainer>
      )}
    </div>
  );
};

export default SignIn;
