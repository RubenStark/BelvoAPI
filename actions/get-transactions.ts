import { BASE_URL } from "@/utils";

/*
Vamos a obtener todas las transacciones de el link 478236e1-d4a9-4ee6-b408-d5e9656e0da6
*/
export default async function getTransactions() {
    try {
        const response = await fetch(`${BASE_URL}/api/transactions/?page=1`, {
            method: "POST",
            body: JSON.stringify({
                "link": "478236e1-d4a9-4ee6-b408-d5e9656e0da6",
                "date_from": "2024-01-01",
                "date_to": "2024-02-02",
                "save_data": false
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic OTUxNDZmNzEtYTc2Zi00MDNjLWJjODMtNmNhZDFjNGIyMzJlOmVBQk9tLVRyIzU0TmRpR1JPRFcjZ2ZrcHVubVlAM1RITUtGUDRhS08xcnk3YW8xTGpoVGxTbjRAQndqMHA1WEQ="
            }
        });

        if (!response.ok) {
            console.log('Failed to fetch transactions:', response.status, response.statusText);
            throw new Error('Failed to fetch transactions');
        }

        const data = await response.json();

        if (!data) {
            throw new Error('Invalid data received');
        }

        return data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
}

