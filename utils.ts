import { TransactionRequest } from "./types";

export const BASE_URL = 'https://sandbox.belvo.com'

export const getKPI = (transactions: TransactionRequest[]) => {
    var KPI = 0;

    transactions.forEach(transaction => {
        if (transaction.type === 'INFLOW') {
            KPI += transaction.amount;
        } else {
            KPI -= transaction.amount;
        }
    });

    KPI = Math.round(KPI * 100) / 100;

    return KPI;
}
