using db from '../db/schema';

service basicService{
    entity Customer  as projection on db.Customer;
    entity Orders as projection on db.Orders;
    entity Payment as projection on db.Payment;

}