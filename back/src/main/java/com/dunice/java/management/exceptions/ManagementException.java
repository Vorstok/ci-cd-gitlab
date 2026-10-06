package com.dunice.java.management.exceptions;

import com.dunice.java.management.constants.ErrorsConstants;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ManagementException extends RuntimeException {
  private final String message;
  private final Integer code;

  public ManagementException(ErrorsConstants error) {
    super(error.getValue());
    this.message = error.getValue();
    this.code = error.getCode();
  }
}
