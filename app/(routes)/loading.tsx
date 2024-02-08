import { Card, Skeleton } from "@nextui-org/react";

function Loading() {
    return (

        <Skeleton className="rounded-lg">
            <div className="w-full h-96 rounded-lg bg-default-300"></div>
        </Skeleton>
    );
}

export default Loading;