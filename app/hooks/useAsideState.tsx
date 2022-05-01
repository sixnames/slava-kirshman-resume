import * as React from 'react';

const useAsideState = () => {
  const [isAsideOpen, setIsAsideOpen] = React.useState<boolean>(false);

  const toggleAside = React.useCallback(() => {
    setIsAsideOpen((prevState) => !prevState);
  }, []);

  const openAside = React.useCallback(() => {
    setIsAsideOpen(true);
  }, []);

  const closeAside = React.useCallback(() => {
    setIsAsideOpen(false);
  }, []);

  return {
    isAsideOpen,
    toggleAside,
    openAside,
    closeAside,
  };
};

export default useAsideState;
