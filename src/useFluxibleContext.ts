import { useContext } from 'react';
import Context from './Context';

const useFluxibleContext = () => {
  return useContext(Context);
};

export default useFluxibleContext;
