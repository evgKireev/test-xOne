import Button, { ButtonTypeEnum } from '../Button';
import photo from '../../assets/Macbook_Mockup.png';
import label from '../../assets/label.png';
import styles from './HeaderBottom.module.scss';

const HeaderBottom = () => {
  return (
    <div className={styles.inner}>
      <div>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
        <p className={styles.subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <Button
          title={'to pictures'}
          type={ButtonTypeEnum.Primary}
          onClick={() =>
            window.scrollTo({ top: 600, left: 600, behavior: 'smooth' })
          }
          disabled={false}
          className={styles.btn}
        />
      </div>
      <div className={styles.images}>
        <img src={photo} alt="photo" />
        <img className={styles.label} src={label} alt="label" />
      </div>
    </div>
  );
};

export default HeaderBottom;
