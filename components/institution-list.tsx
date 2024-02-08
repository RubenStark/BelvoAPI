"use client";

import { FormField, Institution } from "@/types";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";

export default function InstitutionList({ institution }: {
    institution: (Institution & {
        form_fields: FormField[]
    })
}) {

    return (
        <Link href={`/${institution.name}`} className="w-full flex justify-center">
            <Card
                isPressable
                className="w-11/12 mt-2">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar size="md" src={institution.logo} isBordered style={{ "background": institution.primary_color }} />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">
                                {institution.display_name}
                            </h4>
                            <h5 className="text-small tracking-tight text-default-400">
                                {institution.name} - {institution.code ? institution.code : "No code"}
                            </h5>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <p>
                        {institution.openbanking_information ? institution.openbanking_information : "No openbanking information"}
                    </p>
                    <span className="pt-2">
                        {institution.country_code}
                    </span>
                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex gap-1">
                        <p className="text-default-400 text-small">Institution placeholder - </p>
                        <p className="text-default-400 text-small font-semibold">{institution.form_fields[0].placeholder}</p>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}

