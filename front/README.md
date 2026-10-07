React (CRA) приложение в Docker + Nginx.

```bash
## Сборка
docker build -t front .

##Запуск
docker run -p 8080:80 front

##Открыть в браузере
http://localhost:8080/
```