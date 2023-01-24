import classNames from 'classnames';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCard } from '../../redux/cardsSlice';
import styles from './OneCard.module.scss';
import Loading from '../../components/Loader';

const OneCard = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { card } = useAppSelector((state) => state.cardsSlice);
  const { statusCards } = useAppSelector((state) => state.cardsSlice);
  const { registered } = useAppSelector((state) => state.signInAuthSlice);

  useEffect(() => {
    dispatch(getCard(id));
    window.scrollTo(0, 0);
  }, [id]);

  console.log(card);
  return (
    <>
      {statusCards === 'pennding' ? (
        <Loading />
      ) : (
        <div className={styles.inner}>
          <div className={styles.images}>
            <img src={card?.download_url} alt="banner" />
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>Details</h2>
            <div className={styles.infoInner}>
              <div className={styles.items}>
                <div className={styles.item}>Resolution</div>
                <div className={styles.item}>Author</div>
                <div className={styles.item}>ID</div>
              </div>
              <div className={styles.items}>
                <div
                  className={styles.res}
                >{`${card?.width}x${card?.height}`}</div>
                <div className={styles.res}>{card?.author}</div>
                <div className={styles.res}>{card?.id}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OneCard;
