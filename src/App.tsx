import { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';

// Structure d'une transaction selon l'énoncé [cite: 52-59]
export interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: 'income' | 'expense'; // Uniquement ces deux choix
    date: string;
}

function App() {
  // Initialisation : on essaie de charger les données existantes [cite: 105]
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  // Sauvegarde automatique dès que la liste change [cite: 108, 109]
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTx: Transaction) => {
    setTransactions([...transactions, newTx]);
  };

  return (
    <div>
      <h1>Mon Budget Tracker</h1>
      {/* Ton travail : le formulaire */}
      <TransactionForm onAddTransaction={addTransaction} />
      
      {/* Le travail de l'Étudiant B viendra ici (Liste, Balance, Filtre) */}
    </div>
  );
}

export default App;