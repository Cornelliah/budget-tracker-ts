import type { Transaction } from "../types";

function TransactionItem({ transaction, setTransactions }) {
  const handleDelete = () => {
    setTransactions((prev: Transaction[]) =>
      prev.filter((t: Transaction) => t.id !== transaction.id)
    );
  };

  return (
    <tr>
      <td>{transaction.title}</td>
      <td>{transaction.amount} €</td>
      <td>{transaction.type}</td>
      <td>{transaction.date}</td>
      <td>
        <button onClick={handleDelete}>❌</button>
      </td>
    </tr>
  );
}

export default TransactionItem;