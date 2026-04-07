import { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import Filter from "./components/Filter";


export interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: 'income' | 'expense'; 
    date: string;
}

function App() {
  // Initialisation : on essaie de charger les données existantes 
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

   const [filter, setFilter] = useState("all");

  // Sauvegarde automatique dès que la liste change 
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTx: Transaction) => {
    setTransactions([...transactions, newTx]);
  };

  return (
    <div>
      <h1>Mon Budget Tracker</h1>
     
      <TransactionForm onAddTransaction={addTransaction} />
      <Filter filter={filter} setFilter={setFilter} />
      <Balance transactions={transactions} />
     <TransactionList
        transactions={transactions}
        setTransactions={setTransactions}
        filter={filter}
      />
    </div>
  );
}

export default App;