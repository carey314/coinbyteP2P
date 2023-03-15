export interface Status {
    title : string;
    color : string;
}
export interface StatusCollects {
    cancelled : Status,done : Status,failed : Status,hold : Status,holdFailed : Status,inProgress : Status,new : Status,partial : Status,pending : Status,rejected : Status,refund : Status,refundFailed : Status,trade : Status,
};
export type statusSelect = 'cancelled' | 'done' | 'failed' | 'hold' | 'holdFailed' | 'inProgress' | 'new' | 'partial' | 'pending' | 'rejected' | 'refund' | 'refundFailed' | 'trade';
