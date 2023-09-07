export interface Bank {
    bank_country: string;
    currency: string;
    bank_name: string;
    branch_code: string;
    account_number: string;
    bank_statement: string;
}
export interface BankRes {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    user_id: number;
    bank_country: string;
    currency: string;
    info: string;
    bank_statement: string;
    is_primary: boolean;
    branch_code: string;
    account_number: string;
    bank_name: string;
}