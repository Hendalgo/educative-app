import React, {useState} from 'react';
import {createContext} from 'react';

const TutorialContext = createContext({});

const TutorialProvider = ({children}: any): React.JSX.Element => {
  const [watched, setWatched] = useState<boolean>(false);
  return (
    <TutorialContext.Provider value={[watched, setWatched]}>
      {children}
    </TutorialContext.Provider>
  );
};

export {TutorialProvider, TutorialContext};
