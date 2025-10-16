import React, { createContext, useContext, useReducer, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
}

type ThemeAction = { type: 'TOGGLE_THEME' };

const ThemeContext = createContext<{
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}>({
  state: { theme: 'dark' },
  dispatch: () => null,
});

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'dark' ? 'light' : 'dark' };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'dark' });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <div className={state.theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);