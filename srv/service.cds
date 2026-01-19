using db from '../db/schema';

service myservice {
    @odata.draft.enabled
    entity Customer  as projection on db.Customer;
    entity AuditHistoryCustomer as projection on db.AuditHistoryCustomer;
    entity AuditHistory as projection on db.AuditHistory;


  
    
}


