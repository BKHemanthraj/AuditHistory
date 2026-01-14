const cds = require('@sap/cds');
const { SELECT, INSERT } = require('@sap/cds/lib/ql/cds-ql');


module.exports = cds.service.impl(function (srv) {


    let { Customer, AuditHistoryCustomer} = this.entities;
    const { uuid } = cds.utils;



    this.before('UPDATE', Customer, async (req) => {
    const oldData = await SELECT.one
        .from(Customer)
        .where({ customerId: req.data.customerId });

    req._oldCustomerData = oldData;
});

this.after('UPDATE', Customer, async (data, req) => {
    if (!req._oldCustomerData) return;

    console.log("after-----------------------------------")

    await INSERT.into(AuditHistoryCustomer).entries({
        customerId: req._oldCustomerData.customerId,
        customerName: req._oldCustomerData.customerName,
        email: req._oldCustomerData.email,
        phoneNumber: req._oldCustomerData.phoneNumber,
        address: req._oldCustomerData.address
    });
});

 



    });
















