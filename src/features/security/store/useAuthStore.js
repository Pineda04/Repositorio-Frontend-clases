import { create } from "zustand";
import { loginAsync } from "../../../shared/actions/auth";

export const useAuthStore = create((set, get) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  message: "",
  error: false,
  login: async (form) => {
    // const result = await loginAsync(form); <- Para hacerlo sin destructurar
    const {status, data, message,} = await loginAsync(form);

    if (status) {
      set({
        error: false,
        user: {
          email: data.email,
          tokenExpiration: data.tokenExpiration,
        },
        token: data.token,
        isAuthenticated: true,
        message: message
      });

      localStorage.setItem('user', JSON.stringify(get().user ?? {}));
      localStorage.setItem('token', get().token);

      return;
    }

    set({message: message, error: true});
    return;
  },
}));