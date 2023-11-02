import { createContext, useState } from "react";

export type ShowModalContextType = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

const ShowModalContext = createContext<ShowModalContextType>({showModal: false, setShowModal: () => {}});

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ShowModalProvider = ({ children }: ContextProviderProps) => {
  const[showModal, setShowModal] = useState<boolean>(false);
  const value = {
  showModal, setShowModal    
  };

  return (
    <ShowModalContext.Provider value={value}>
      {children}
    </ShowModalContext.Provider>
  );
};

export default ShowModalContext;