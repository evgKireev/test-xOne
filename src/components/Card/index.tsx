import classNames from 'classnames';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiFillFire } from 'react-icons/ai';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { CardType } from '../../@types/types/cards';

type CardTypeOne = {
  images: string;
  id: string;
};

const Card: React.FC<CardTypeOne> = ({ images, id }) => {
  return (
    <Link to={`/one-card/${id}`}>
      <div className={styles.card}>
        <img src={images}></img>
      </div>
    </Link>
  );
};

export default Card;
