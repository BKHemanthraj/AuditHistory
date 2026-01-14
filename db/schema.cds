namespace db;
using { cuid,managed} from '@sap/cds/common';


entity Customer {
    
    key customerId : String;
    customerName : String;
    email : String;
    phoneNumber : String;
    address : String;
    CustomerToAuditHistoryCustomer:Composition of many AuditHistoryCustomer on CustomerToAuditHistoryCustomer.AuditHistoryCustomerToCustomer=$self;
}

entity AuditHistoryCustomer:cuid,managed{
    key customerId : String;
    customerName : String;
    email : String;
    phoneNumber : String;
    address : String;
    AuditHistoryCustomerToCustomer:Association to one Customer on  AuditHistoryCustomerToCustomer.customerId=customerId;

}