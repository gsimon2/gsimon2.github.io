import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Constants, { ThemeTypes } from '../constants/Constants';

interface IUserPreferences {
    theme: ThemeTypes
};

const getThemeFromCookie = () => {
    try {
       const themeCookie: string[] = document.cookie.split(';').filter(item => item.trim().startsWith(`${Constants.themeKey}=`));
       if (themeCookie?.length) {
          return themeCookie[0].split('=')[1].trim();
       }
       return null;
    } catch (e) {
       console.error('Failed to get theme cookie: ', e);
       return null;
    }
 };

 const setThemeCookie = (newTheme: ThemeTypes) => {
     try
     {
        document.cookie = `${Constants.themeKey}=${newTheme}`;
     } catch (e) {
         console.error('Fail to set theme cookie: ', e);
     }
 };
  
  
 const getUsersThemePreference = (): ThemeTypes => {
    const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedUserTheme = getThemeFromCookie();
  
    if (storedUserTheme) {
       return storedUserTheme === ThemeTypes.dark ? ThemeTypes.dark : ThemeTypes.light;
    } else if (prefersLightTheme) {
       return ThemeTypes.light;
    } else if (prefersDarkTheme) {
       return ThemeTypes.dark;
    }
  
    return ThemeTypes.dark;
 };

 const initialState: IUserPreferences = {
    theme: getUsersThemePreference()
};
 

export const userPreferenceSlice = createSlice({
    name: 'userPreferences',
    initialState,
    reducers: {
        updateTheme: (state, action: PayloadAction<ThemeTypes>) => {
            setThemeCookie(action.payload);
            state.theme = action.payload;
        }
    }
});

export const {updateTheme} = userPreferenceSlice.actions;
export default userPreferenceSlice.reducer;