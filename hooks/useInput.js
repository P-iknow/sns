import { useState } from 'react';

const useInput = (initialValue = null) => {
  const [value, setter] = useState(initialValue);
  const handler = ({ target: { value } }) => {
    setter(value);
  };
  return [value, handler];
};

export default useInput;
