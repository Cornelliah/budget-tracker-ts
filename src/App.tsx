import { useState } from 'react'
import './App.css'

function App() {

  interface TransactionType {
      id: number; 
      title: string;
      amount: number;
      type: "income"|"expense"; 
      date: string;
  }
 const [transactions, setTransactions] = useState <TransactionType[]>([
    {
      id: 1,
      title: "Salaire",
      amount: 1500,
      type: "income",
      date: "2026-02-26",
    },
    {
      id: 2,
      title: "Loyer",
      amount: 700,
      type: "expense",
      date: "2026-02-27",
    },
  ]);

  return (
    <>
      
    </>
  )
}

export default App
