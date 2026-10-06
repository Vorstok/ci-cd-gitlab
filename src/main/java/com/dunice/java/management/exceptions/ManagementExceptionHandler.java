package com.dunice.java.management.exceptions;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ManagementExceptionHandler {
  private final Logger logger = LoggerFactory.getLogger(ManagementExceptionHandler.class);

  @ExceptionHandler(value = {ManagementException.class})
  public void handler(ManagementException e) {
    logger.error(e.getMessage(), e.getCode());
  }
}