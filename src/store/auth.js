import { create } from 'zustand';
import cookie from 'js-cookie';

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
      const resp = await fetch(`${import.meta.env.VITE_URL_API}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const respJson = await resp.json();
      if (respJson?.success) {
        localStorage.setItem('user', JSON.stringify(respJson.message));
        const expiredToken = new Date(new Date().getTime() + 3600 * 1000); // respon expires_in nya detik dalam 1 jam, aku kali 1000 agar berubah ke milidetik
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
        }));
      } else {
        return set((state) => ({
          ...state,
          errMsg: respJson.message,
          loadingLogin: false,
        }));
      }
    } catch (error) {
      let message;
      if (error instanceof Error) {
        message = error.message;
        return set((state) => ({
          ...state,
          errMsg: message,
          loadingLogin: false,
        }));
      }
    }
  },

  // actionSignup method
  loadingSignup: false,
  isSignup: false,
  setLoadingSignup: (payload) => {
    return set({ loadingSignup: payload });
  },
  actionSignup: async (payload) => {
    localStorage.removeItem('user');
    try {
      const resp = await fetch(`${import.meta.env.VITE_URL_API}/auth/register`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const respJson = await resp.json();

      if (respJson?.success) {
        return set((state) => ({
          ...state,
          isSignup: true,
          loadingSignup: false,
        }));
      } else {
        return set((state) => ({
          ...state,
          errMsg: respJson.message,
          loadingSignup: false,
        }));
      }
    } catch (error) {
      let message;
      if (error instanceof Error) {
        message = error.message;
        return set((state) => ({
          ...state,
          errMsg: message,
          loadingSignup: false,
        }));
      }
    }
  },
}));
