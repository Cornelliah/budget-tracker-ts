// Structure d'une transaction selon l'énoncé [cite: 52-59]
export interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: 'income' | 'expense'; // Uniquement ces deux choix
    date: string;
}