import { createContext } from 'react';
// import { todosAppContextType } from 'types/interfaces';

const moviesAppContext = createContext({
  genres: [],
});

export default moviesAppContext;
