package com.mouraadvocacia.api.domain.port.inbound;

import com.mouraadvocacia.api.domain.model.Customer;

public interface CreateCustomerPort {
    void createCustomer(Customer customer);
}
