import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import NoFaund from './components/NoFaund';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './scss/app.scss';
import { useAppSelector } from './redux/hooks';
import OneCard from './pages/OneCard/OneCard';

const App = () => {
  const { registered } = useAppSelector((state) => state.signInAuthSlice);
  return (
    <>
      <Routes>
        <Route path="/" element={registered ? <Home /> : <SignIn />}>
          <Route index element={<Main />} />
          <Route path="one-card/:id" element={<OneCard />} />
          <Route path="*" element={<NoFaund />} />
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
