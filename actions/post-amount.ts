import toast from "react-hot-toast";

export default async function PostAmount({ amount, currency, bank }: { amount: number, currency: string, bank: string }) {
    try {

        console.log("amount", amount);
        console.log("currency", currency);
        console.log("bank", bank);

        const response = await fetch("api/amount/", {
            method: "POST",
            body: JSON.stringify({
                amount,
                currency,
                bank
            }),
        });

        if (!response.ok) {
            console.log('Failed to save Amount:', response.status, response.statusText);
            throw new Error('Failed to save Amount');
        }

        const data = await response.json();

        console.log('Amount saved:', data);

        toast.success('Amount saved');

        if (!data) {
            throw new Error('Invalid data received');
        }

        return data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
}

