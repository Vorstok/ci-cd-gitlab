package com.dunice.java.management.constants;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
@Getter
@RequiredArgsConstructor
public enum ErrorsConstants {
  JSON_PARSING_EXCEPTION("Ошибка парсинга JSON, неверные входные данные", 1),
  ENTITY_NOT_FOUND_EXCEPTION("Сущности с таким айди не существует", 2),
  ENTITY_ALREADY_EXISTS_EXCEPTION("Сущность с таким айди уже существует", 3);
  private final String value;
  private final Integer code;
}

