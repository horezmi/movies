import { createContext } from 'react';
// import { todosAppContextType } from 'types/interfaces';

interface IGenres {
  id: number,
  name: string,
}

// interface IContext {
//   genres: IGenres[],
// }

const moviesAppContext = createContext({
  genres: [{
    id: 0,
    name: '',
  }],
});

export default moviesAppContext;
