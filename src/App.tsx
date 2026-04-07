import { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';


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
      
      {/* Le travail de l'Étudiant B viendra ici (Liste, Balance, Filtre) */}
    </div>
  );
}

export default App;