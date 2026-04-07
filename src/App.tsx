import { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Balance from './components/Balance';
import Filter from './components/Filter';
import type { Transaction } from './types';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  // 1. Créer le state pour le filtre [cite: 60]
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTx: Transaction) => {
    setTransactions([...transactions, newTx]);
  };

  const [darkMode, setDarkMode] = useState(false);

  // Appliquer la classe au body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div id="center">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Mode Clair" : "🌙 Mode Sombre"}
      </button>
      <h1>Budget Tracker</h1>

      <Balance transactions={transactions} />

      {/* 2. Passer le state et la fonction au composant Filter */}
      <Filter filter={filter} setFilter={setFilter} />

      <TransactionForm onAddTransaction={addTransaction} />

      {/* 3. Passer le filtre à la liste pour l'affichage [cite: 100] */}
      <TransactionList
        transactions={transactions}
        setTransactions={setTransactions}
        filter={filter}
      />
    </div>
  );
}

export default App;