import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUser } from '../../redux/signInAuthSlice';
import { TfiArrowCircleUp } from 'react-icons/tfi';
import '../../scss/app.scss';

const Home = () => {
  const dispatch = useAppDispatch();
  const { registered } = useAppSelector((state) => state.signInAuthSlice);
  useEffect(() => {
    if (registered) {
      dispatch(getUser());
    }
  }, [registered]);

  return (
    <>
      <div className="container">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Home;
