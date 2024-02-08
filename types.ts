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

export interface TransactionRequest {
  id: string
  account: Account
  created_at: string
  category?: string
  subcategory?: string
  merchant: Merchant
  collected_at: string
  currency: string
  description: string
  internal_identification: string
  value_date: string
  accounting_date: string
  amount: number
  type: string
  status: string
  reference: string
  balance: number
  observations: any
}

export interface Account {
  id: string
  link: string
  institution: Institution
  created_at: string
  collected_at: string
  currency: string
  category: string
  type: string
  number: string
  agency: string
  bank_product_id: string
  internal_identification: string
  public_identification_name: string
  public_identification_value: string
  credit_data?: CreditData
  loan_data?: LoanData
  name: string
  balance: Balance
  last_accessed_at: string
  balance_type: string
}

export interface Institution {
  name: string
  type: string
}

export interface CreditData {
  collected_at: string
  credit_limit: number
  cutting_date: string
  next_payment_date: string
  minimum_payment: number
  monthly_payment: number
  no_interest_payment: number
  last_payment_date: string
  last_period_balance: number
  interest_rate: number
}

export interface LoanData {
  collected_at: string
  credit_limit: number
  cutting_day: string
  cutting_date: string
  next_payment_date: string
  limit_date: string
  limit_day: string
  monthly_payment: any
  no_interest_payment: any
  last_payment_date: string
  last_period_balance: any
  interest_rate: any
  principal: any
  loan_type: any
  payment_due_day: any
  outstanding_balance: any
  outstanding_principal: any
  number_of_installments_total: any
  number_of_installments_outstanding: any
  contract_start_date: any
  contract_number: any
  interest_rates: any
  fees: any
}

export interface Balance {
  current: number
  available: number
}

export interface Merchant {
  name: string
  website: string
  logo: string
}
