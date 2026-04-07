import { useState } from 'react';
import type { Transaction } from '../types'; // Import du type défini plus haut

interface Props {
    onAddTransaction: (transaction: Transaction) => void;
}

const TransactionForm = ({ onAddTransaction }: Props) => {
    // 1. Définition des states pour chaque champ [cite: 64-69]
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState<number>(0);
    const [type, setType] = useState<'income' | 'expense'>('income');
    const [date, setDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 2. Validation simple [cite: 70]
        if (!title || amount <= 0 || !date) {
            alert("Veuillez remplir tous les champs correctement");
            return;
        }

        // 3. Création de l'objet transaction [cite: 55-59]
        const newTransaction: Transaction = {
            id: Date.now(), // Génère un ID unique basé sur le temps [cite: 55]
            title,
            amount,
            type,
            date
        };

        // 4. Envoi au state global [cite: 71]
        onAddTransaction(newTransaction);

        // 5. Réinitialisation du formulaire
        setTitle('');
        setAmount(0);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container" id="transaction-form">
            <input
                type="text"
                placeholder="Titre (ex: Salaire)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Montant"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />
            <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
                <option value="income">Revenu</option>
                <option value="expense">Dépense</option>
            </select>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default TransactionForm;