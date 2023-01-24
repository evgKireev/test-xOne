import classNames from 'classnames';
import { ReactElement } from 'react';
import { useAppSelector } from '../../redux/hooks';
import styles from './FormContainer.module.scss';

type FormContainerType = {
  title: string;
  children: ReactElement;
};

const FormContainer: React.FC<FormContainerType> = ({ title, children }) => {

  return (
    <div
      className={classNames(styles.form)}
    >
      <h1 className={styles.title}>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default FormContainer;
