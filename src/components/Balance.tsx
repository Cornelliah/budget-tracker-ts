import type { Transaction } from "../types";

function Balance({ transactions }) {
    
  const income = transactions
    .filter((t: Transaction) => t.type === "income")
    .reduce((sum:number, t:Transaction) => sum + t.amount, 0);

  const expense = transactions
    .filter((t:Transaction) => t.type === "expense")
    .reduce((sum:number, t:Transaction) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div>
      <h2>Solde</h2>
      <p>Revenus : {income} €</p>
      <p>Dépenses : {expense} €</p>
      <h3>{balance} €</h3>
    </div>
  );
}

export default Balance;