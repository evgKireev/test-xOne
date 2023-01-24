import { API_AUTH, API_CARD, limitCards } from '../../@types/constant';
import { RegisterUserType, SingInUserType } from '../../@types/types/auth';
import { GetCardaApi } from '../../@types/types/cards';

const fetchGetCards = ({ page }: GetCardaApi) => {
  return API_CARD.get(`v2/list?page=${page}&limit=12`);
};

const fetchGetCard = (id: string) => {
  return API_CARD.get(`id/${id}/info`);
};

const registerUser = ({
  email,
  password,
  password_confirmation,
  purchase_code,
}: RegisterUserType) => {
  return API_AUTH.post(`/auth/register`, {
    email,
    password,
    password_confirmation,
    purchase_code,
  });
};

const signInUser = ({ email, password, token_name }: SingInUserType) => {
  return API_AUTH.post(`auth/login`, {
    email,
    password,
    token_name,
  });
};

const getUserMe = (access_token: string, idUser: string) => {
  return API_AUTH.get(
    `user-profile/${idUser}`,
    {},
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
};

export default {
  fetchGetCards,
  fetchGetCard,
  registerUser,
  signInUser,
  getUserMe,
};
