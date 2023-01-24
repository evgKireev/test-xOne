import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Card';
import styles from './Main.module.scss';
import LoadingPogination from '../LoadingPagination';
import Loader from '../Loader';
import { getCards, setPage } from '../../redux/cardsSlice';
import HeaderBottom from '../HeaderBottom';
import '../../scss/app.scss';

const Main = () => {
  const { isOverGlobal } = useAppSelector((state) => state.cardsSlice);
  const { statusCards } = useAppSelector((state) => state.cardsSlice);
  const { page } = useAppSelector((state) => state.cardsSlice);
  const { cards } = useAppSelector((state) => state.cardsSlice);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getCards({
        page,
        isOverwrite: false,
      })
    );
  }, [page]);

  const onScroll = () => {
    dispatch(setPage(page + 1));
  };

  if (statusCards === 'rejected')
    return (
      <div className={styles.error}>
        <h2>
          Произошла ошибка <span>😕</span>
        </h2>
        <p>
          К сожалению, не удалось получить фильмы. Попробуйте повторить попытку
          позже!
        </p>
      </div>
    );

  return (
    <>
      <HeaderBottom />
      <h2 className={styles.title}>All images</h2>
      <InfiniteScroll
        dataLength={cards.length}
        next={onScroll}
        hasMore={cards.length < 24}
        loader={<LoadingPogination />}
        scrollThreshold={0.9}
      >
        <div className={styles.inner}>
          {statusCards === 'pennding' && !cards.length ? (
            <Loader />
          ) : (
            cards.map((card, index) => (
              <Card key={index} images={card.download_url} id={card.id} />
            ))
          )}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Main;
