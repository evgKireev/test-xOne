import Mastero from '../../assets/img/Mastero';
import styles from './Footer.module.scss';
import Mas from '../../assets/img/Mas';
import Visa from '../../assets/img/Visa';
import '../../scss/app.scss';
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.order}>
          <h4 className={styles.title}>Lorem</h4>
          <p className={styles.text1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            nisl tincidunt eget nullam non nisi est sit amet.
          </p>
          <div className={styles.carts}>
            <Visa />
            <Mastero />
            <Mas />
          </div>
        </div>
        <div>
          <h4 className={styles.title}>Lorem Ipsum</h4>
          <p className={styles.text2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            nisl tincidunt eget nullam non nisi est sit amet. Vulputate odio ut
            enim blandit volutpat maecenas volutpat. Massa tincidunt dui ut
            ornare lectus sit. Quam elementum pulvinar etiam non.
          </p>
        </div>
        <div>
          <h4 className={styles.title}>Contacts</h4>
          <p className={styles.text3}>
            London <br /> 26985 Brighton Lane, Lake Forest, CA 92630 +1 (949)
            354-2574
          </p>
          <div>
            Paris <br /> 9 Doe Crossing Court +11 281-762-2687
          </div>
        </div>
      </div>
      <div
        className={styles.footerBottom}
        style={{
          maxWidth: '100%',
        }}
      >
        <div className={styles.ftbInner}>
          <div>2022-2023 All rights reserved</div>
          <div>Site is developed by ME</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
