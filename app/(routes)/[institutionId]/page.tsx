import { Button, Card, Divider } from "@nextui-org/react";
import { Account, Institution, TransactionRequest } from "@/types";
import getTransactions from "@/actions/get-transactions";
import { cn } from "@/lib/tw-merge";
import { getKPI } from "@/utils";
import SaveAmount from "@/components/save-amount";

async function Institution({ params }: { params: { institutionId: string } }) {

    const allTransactions: TransactionRequest[] = await getTransactions();

    const transactions = allTransactions.filter(transaction => transaction.account.institution.name === params.institutionId);

    const KPI = getKPI(transactions);

    return (
        <>
            <p className="font-medium m-5">{params.institutionId}</p>
            <div className="w-full size-56 flex items-center justify-center">
                <div className="w-full mx-5 flex items-center justify-center flex-col bg-white h-full">
                    <p className="font-bold text-5xl">
                        {KPI}
                    </p>
                    <p>KPI</p>
                </div>
            </div>
            <SaveAmount amount={KPI} bank={params.institutionId} currency="MXN" />
            <p className="font-medium m-5">Transactions</p>

            {
                transactions.map((transaction, index) => (
                    <Transaction key={index} transaction={transaction} />
                ))
            }

        </>
    );
}

export default Institution;


function Transaction({ transaction }: {
    transaction: (TransactionRequest & {
        account: Account & {
            institution: Institution
        }
    })
}) {

    return (
        <>
            <div className="flex bg-white p-5">
                <div className="w-full mx-5h-full">
                    <p className={cn("text-small font-semibold", transaction.type === 'INFLOW' ? 'text-green-500' : 'text-red-500')}
                    >{transaction.type}</p>
                    {/* <p className="text-default-600 text-small">{transaction.account.institution.name}</p> */}
                    <p className="text-default-600 text-small">{transaction.currency}</p>
                </div>
                <p className="font-semibold">${transaction.amount}</p>
            </div>

            <Divider className="mx-5" />
        </>
    );
}