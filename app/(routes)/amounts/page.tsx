import prismadb from "@/lib/prismadb";
import Amount from "./components/amount";
import { auth } from "@clerk/nextjs";
import { AmountToSave } from "@prisma/client";

async function Amounts() {

    const { userId } = auth();

    if (!userId) {
        return <div>Unauthorized</div>;
    }

    const amounts: AmountToSave[] = await prismadb.amountToSave.findMany({
        where: {
            userId
        }
    });

    return (
        <>
            <div className="w-full mt-5">
                {amounts.map((amount, index) => {
                    return <Amount key={index} {...amount} />;
                })}
            </div>
        </>
    );
}

export default Amounts;