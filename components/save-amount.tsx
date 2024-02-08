"use client";

import PostAmount from "@/actions/post-amount";
import { Button } from "@nextui-org/react";

type SaveAmountProps = {
    amount: number;
    currency: string;
    bank: string;
}

function SaveAmount(props: SaveAmountProps) {

    function onSaveAmount() {
        PostAmount({ amount: props.amount, currency: props.currency, bank: props.bank });
    }

    return (<div className="w-full flex my-5">
        <Button onClick={onSaveAmount} color="primary" className="ml-auto mr-5" variant="flat">
            Save Amount
        </Button>
    </div>);
}

export default SaveAmount;