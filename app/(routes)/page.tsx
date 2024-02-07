import getInstitutions from "@/actions/get-institutions";
import InstitutionList from "@/components/institution-list";
import { InstitutionListResponse } from "@/types";


async function Home() {

    const institutionsResponse:InstitutionListResponse = await getInstitutions();
    const institutions = institutionsResponse.results;

    
    console.log(institutions);

    return (
        <>
            {
                institutions.map((institution) => {
                    return (
                        <InstitutionList key={institution.id} institution={institution} />
                    );
                })
            }
        </>
    );
}

export default Home;
