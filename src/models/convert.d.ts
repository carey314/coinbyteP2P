export interface StableCoinsToOptions {
    currency: string,
    alphabeticCode : string,
    minorUnit : number,
    maxAmount : string,
    quoteId : string,
    rate : string
}
export interface CurrentPair {
    currency: string,
    alphabeticCode : string,
    numericCode : string,
    maxAmount : string,
    quoteId : string,
    rate : string,
    minorUnit : number,
}