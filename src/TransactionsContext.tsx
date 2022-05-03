import { createContext, useEffect, useState , ReactNode} from "react";
import { api } from "./services/api";

interface ITransactions {
  id: number;
  title: string;
  type: string;
  category: string;
  value: number;
  created_at: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<ITransactions[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api.get("/transactions").then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}