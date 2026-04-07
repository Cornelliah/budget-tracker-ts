import type { Transaction } from "../types";
import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, setTransactions, filter }) {
  const filteredTransactions = transactions.filter((t:Transaction) => {
    if (filter === "all") return true;
    return t.type === filter;
  });

  if (filteredTransactions.length === 0) {
    return <p>Aucune transaction</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Montant</th>
          <th>Type</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredTransactions.map((transaction: Transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            setTransactions={setTransactions}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionList;