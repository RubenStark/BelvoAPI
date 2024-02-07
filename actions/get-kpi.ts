import { BASE_URL } from "@/utils";

export default async function getKPI() {
    try {
        const response = await fetch(`${BASE_URL}/api/transactions/?page=1`, {
            method: "GET",
            headers: {
                "Authorization": "Basic OTUxNDZmNzEtYTc2Zi00MDNjLWJjODMtNmNhZDFjNGIyMzJlOmVBQk9tLVRyIzU0TmRpR1JPRFcjZ2ZrcHVubVlAM1RITUtGUDRhS08xcnk3YW8xTGpoVGxTbjRAQndqMHA1WEQ="
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch institutions');
        }

        const data = await response.json();

        if (!data) {
            throw new Error('Invalid data received');
        }

        return data;
    } catch (error) {
        console.error('Error fetching institutions:', error);
        throw error;
    }
}

