import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  logoutUser,
  setMailValue,
  setPasswordValue,
} from '../../redux/signInAuthSlice';
import styles from './User.module.scss';
import { TbLogout } from 'react-icons/tb';

const User = () => {
  const { userInfo } = useAppSelector((state) => state.signInAuthSlice);
  const dispatch = useAppDispatch();
  const logaut = () => {
    dispatch(logoutUser());
   
  };
  return (
    <>
      <div className={classNames(styles.wrapper)}>
        <div className={styles.inner}>
          <div className={styles.user}>{userInfo?.name}</div>
          <div className={styles.logAut} onClick={() => dispatch(logoutUser())}>
            Logout
          </div>
          <div className={styles.svg} onClick={logaut}>
            <TbLogout />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
