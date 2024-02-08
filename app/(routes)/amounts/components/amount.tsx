import { Divider } from "@nextui-org/react";
import { AmountToSave } from "@prisma/client";

function Amount(props: AmountToSave) {

    const date = new Date(props.createdAt).toLocaleDateString();

    return (
        <>
            <div className="flex bg-white p-5">
                <div className="w-full mx-5h-full">
                    <p>
                        {props.bank}
                    </p>

                    <p className="text-default-600 text-small">{date}</p>
                </div>
                <p className="font-semibold">${props.amount}</p>
            </div>

            <Divider className="mx-5" />
        </>
    );
}

export default Amount;