
import { useState } from 'react';
import Context from './Context';

const Provider =  ({ children }) => {
  const [music, setMusic] = useState({});
  const [input,setInput] = useState('');
  const state = {
    
  }

  return (
    <Context.Provider value={ state }>
      {children}
    </Context.Provider>
  )
}

export default Provider;