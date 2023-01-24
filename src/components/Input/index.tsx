import classNames from 'classnames';
import { useAppSelector } from '../../redux/hooks';
import styles from './Input.module.scss';
type SearchType = {
  disabled: boolean;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  emailDirty?: boolean;
  passwordDirty?: boolean;
  passwordConfirmDirty?: boolean;
  emailError?: string;
  passwordError?: string;
  passwordConfirmError?: string;
  name: string;
  value: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const Input: React.FC<SearchType> = ({
  emailDirty,
  passwordDirty,
  emailError,
  passwordError,
  placeholder,
  onChange,
  type,
  className,
  name,
  onBlur,
  value,
  passwordConfirmDirty,
  passwordConfirmError,
}) => {

  return (
    <>
      <input
        value={value}
        onBlur={(e) => onBlur(e)}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(styles.input, className, {
          [styles.error]: emailDirty || passwordDirty || passwordConfirmDirty,
        })}
      />
      {emailDirty && emailError && (
        <span className={styles.spanError}>{emailError}</span>
      )}
      {passwordDirty && passwordError && (
        <span className={styles.spanError}>{passwordError}</span>
      )}
      {passwordConfirmDirty && passwordConfirmError && (
        <span className={styles.spanError}>{passwordConfirmError}</span>
      )}
    </>
  );
};
export default Input;
