import { createContext, useContext, useState, ReactNode } from "react";

type QuizContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const QuizContext = createContext<QuizContextType | null>(null);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <QuizContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within QuizProvider");
  return ctx;
};