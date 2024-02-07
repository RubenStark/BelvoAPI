export interface InstitutionListResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: Institution[];
}

export interface Institution {
    id: number
    name: string
    type: string
    code: string
    website: any
    display_name: string
    country_code: string
    country_codes: string[]
    primary_color: string
    logo: string
    icon_logo: string
    text_logo: string
    form_fields: FormField[]
    features: any[]
    integration_type: string
    status: string
    resources: string[]
    openbanking_information: any
  }
  
  export interface FormField {
    name: string
    type: string
    label: string
    validation: string
    placeholder?: string
    validation_message: string
  }
  