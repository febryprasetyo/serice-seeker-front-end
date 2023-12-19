import { create } from 'zustand';
import cookie from 'js-cookie';
import { loginUser, registerUser } from '../api/api';

export const useAuth = create((set) => ({
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') || '')
    : null,
  isLogin: cookie.get('token') ? true : false,
  loadingLogin: false,
  token: cookie.get('token') || null,
  errMsg: '',
  setLoadingLogin: (payload) => {
    return set({ loadingLogin: payload });
  },
  logOut: () => {
    localStorage.removeItem('user');
    cookie.remove('token', { path: '/' });
    return set({ isLogin: false, user: null, token: null });
  },
  actionLogin: async (payload) => {
    localStorage.removeItem('user');
    try {
      const respJson = await loginUser(payload);

      if (respJson?.success) {
        localStorage.setItem('username', JSON.stringify(respJson?.data?.username));
        const expiredToken = new Date(new Date().getTime() + 3600 * 1000);
        cookie.set('token', respJson?.data?.token, {
          expires: expiredToken,
          path: '/',
        });
        return set((state) => ({
          ...state,
          user: respJson?.user_data,
          token: respJson?.data?._token,
          isLogin: true,
          loadingLogin: false,
          errMsg: '', // Clear error message on success
        }));
      } else {
        return set((state) => ({
          ...state,
          errMsg: respJson.message,
          loadingLogin: false,
        }));
      }
    } catch (error) {
      let message = 'An error occurred while processing your request.';
      if (error instanceof Error) {
        message = error.message;
      }
      return set((state) => ({
        ...state,
        errMsg: message,
        loadingLogin: false,
      }));
    }
  },

  loadingSignup: false,
  isSignup: false,
  setLoadingSignup: (payload) => {
    return set({ loadingSignup: payload });
  },
  actionSignup: async (payload) => {
    localStorage.removeItem('user');
    try {
      const respJson = await registerUser(payload);

      if (respJson?.success) {
        return set((state) => ({
          ...state,
          isSignup: true,
          loadingSignup: false,
          errMsg: '', // Clear error message on success
        }));
      } else {
        return set((state) => ({
          ...state,
          errMsg: respJson.message,
          loadingSignup: false,
        }));
      }
    } catch (error) {
      let message = 'An error occurred while processing your request.';
      if (error instanceof Error) {
        message = error.message;
      }
      return set((state) => ({
        ...state,
        errMsg: message,
        loadingSignup: false,
      }));
    }
  },
}));