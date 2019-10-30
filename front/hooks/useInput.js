import { useState, useCallback } from 'react';

const useInput = (initialValue = null) => {
  const [value, setter] = useState(initialValue);
  const handler = useCallback(({ target: { value } }) => {
    setter(value);
  }, []);
  return [value, handler];
};

export default useInput;
