import getKPI from "@/actions/get-kpi";
import { Card, Divider } from "@nextui-org/react";

async function Institution() {

    // const obj = await getKPI();
    // console.log(obj);


    return (
        <>
        <p className="font-medium m-5">Heimdal</p>
            <div className="w-full size-56 flex items-center justify-center">
                <div className="w-full mx-5 flex items-center justify-center flex-col bg-white h-full">
                    <p className="font-bold text-5xl">
                        $5,248.00
                    </p>
                    <p className="">KPI</p>
                </div>
            </div>
            <p className="font-medium m-5">Transacciones</p>

            <div className="flex bg-white p-5">
                <div className="w-full mx-5h-full">
                    <p className="text-default-600 text-small">Google YouTube Music</p>
                    <p className="text-default-600 text-small font-semibold">Pago con tarjeta</p>
                </div>
                <p>$1,578</p>
            </div>

            <Divider className="mx-5" />

        </>
    );
}

export default Institution;