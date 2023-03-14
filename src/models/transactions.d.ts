export interface Transaction {
    transactionId: number;
    creditDetails: {
      account: {
        accountId: number;
        accountNumber: string;
        archive: boolean;
        caption: string;
        currency: {
          alphabeticCode: string;
          name: string;
          numericCode: number;
          minorUnit: number;
        };
        favourite: boolean;
        group: {
          id: number;
          name: string;
          priority: number;
        };
        platform: {
          id: number;
          name: string;
        };
        priority: number;
        statement: {
          availableBalance: string;
          currentBalance: string;
          credit: string;
          equity: string;
          freeMargin: string;
          hold: string;
          margin: string;
          marginLevel: string;
          pnl: string;
          updateTime: string;
        };
        type: string;
        createTime: string;
      };
      amount: string;
      commission: string;
      currency: {
        alphabeticCode: string;
        name: string;
        numericCode: number;
        minorUnit: number;
      };
    };
    debitDetails: {
      account: {
        accountId: number;
        accountNumber: string;
        archive: boolean;
        caption: string;
        currency: {
          alphabeticCode: string;
          name: string;
          numericCode: number;
          minorUnit: number;
        };
        favourite: boolean;
        group: {
          id: number;
          name: string;
          priority: number;
        };
        platform: {
          id: number;
          name: string;
        };
        priority: number;
        statement: {
          availableBalance: string;
          currentBalance: string;
          credit: string;
          equity: string;
          freeMargin: string;
          hold: string;
          margin: string;
          marginLevel: string;
          pnl: string;
          updateTime: string;
        };
        type: string;
        createTime: string;
      };
      amount: string;
      commission: string;
      currency: {
        alphabeticCode: string;
        name: string;
        numericCode: number;
        minorUnit: number;
      };
    };
    foreignExchangeRate: string;
    method: {
        name : string
    } | null;
    resolution: string | null;
    status: string;
    type: 'deposit' | 'exchange' | 'external' | 'partner' | 'transfer' | 'withdrawal';
    createTime: string;
    updateTime: string;
  }



  
 