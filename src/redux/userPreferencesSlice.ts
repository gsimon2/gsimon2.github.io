import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Constants, { ThemeTypes } from '../constants/Constants';

interface IUserPreferences {
   theme: ThemeTypes
   liveBackground: boolean;
};

const getFromCookie = (cookieKey: string) => {
   try {
      const cookie: string[] = document.cookie.split(';').filter(item => item.trim().startsWith(`${cookieKey}=`));
      if (cookie?.length) {
         return cookie[0].split('=')[1].trim();
      }
      return null;
   } catch (e) {
      console.error(`Failed to get ${cookieKey} cookie: `, e);
      return null;
   }
};

const setCookie = (cookieKey: string, newValue: string | boolean) => {
   try {
      document.cookie = `${cookieKey}=${newValue}`;
   } catch (e) {
      console.error(`Failed to set ${cookieKey} cookie with value ${newValue}: `, e);
   }
};

const getUsersThemePreference = (): ThemeTypes => {
   const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
   const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
   const storedUserTheme = getFromCookie(Constants.themeKey);

   if (storedUserTheme) {
      return storedUserTheme === ThemeTypes.dark ? ThemeTypes.dark : ThemeTypes.light;
   } else if (prefersLightTheme) {
      return ThemeTypes.light;
   } else if (prefersDarkTheme) {
      return ThemeTypes.dark;
   }

   return ThemeTypes.dark;
};

const getUsersLiveBackgroundPreference = () => {
   const storedUserPreference = getFromCookie(Constants.enableLiveBackgroundKey);

   if (storedUserPreference === 'false') {
      return false;
   }

   return true;
}

const initialState: IUserPreferences = {
   theme: getUsersThemePreference(),
   liveBackground: getUsersLiveBackgroundPreference()
};

export const userPreferenceSlice = createSlice({
   name: 'userPreferences',
   initialState,
   reducers: {
      updateTheme: (state, action: PayloadAction<ThemeTypes>) => {
         setCookie(Constants.themeKey, action.payload);
         state.theme = action.payload;
      },
      updateLiveBackground: (state, action: PayloadAction<boolean>) => {
         setCookie(Constants.enableLiveBackgroundKey, action.payload);
         state.liveBackground = action.payload;
      }
   }
});

export const { updateTheme, updateLiveBackground } = userPreferenceSlice.actions;
export default userPreferenceSlice.reducer;