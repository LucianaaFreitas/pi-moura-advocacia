package com.mouraadvocacia.api.domain.port.inbound;

import java.util.UUID;

public interface DeleteCustomerByIdUseCase {
    void deleteCustomerById(UUID id);
}
