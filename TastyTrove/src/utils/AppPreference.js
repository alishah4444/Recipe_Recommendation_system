import React, {createContext, useState} from 'react';
const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [theme, setTheme] = useState(false);
  return (
    <AppContext.Provider value={{theme, setTheme}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppContextProvider};
