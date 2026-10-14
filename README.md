# Management: frontend

React-приложение (Create React App), которое собирается и раздаётся через Nginx в Docker.

## Локальная разработка

```bash
npm ci
npm start      # http://localhost:3000
npm test       # unit-тесты
npm run build  # production-сборка в ./build
```

## Docker

```bash
# Сборка
docker build -t front .

# Запуск
docker run -p 8080:80 --add-host backend:127.0.0.1 front
```

Открыть в браузере: http://localhost:8080/

Nginx проксирует запросы `/api/` на `http://backend:8080/`. Флаг `--add-host` нужен только при отдельном запуске контейнера: без доступного хоста `backend` nginx не стартует. В составе общего стека контейнер бэкенда должен называться `backend` и слушать порт `8080`.

## CI/CD

Пайплайн описан в `.gitlab-ci.yml` и состоит из двух этапов:

| Этап    | Job           | Что делает                                                     |
|---------|---------------|----------------------------------------------------------------|
| `test`  | `test:front`  | `npm ci` и unit-тесты, отчёт сохраняется как артефакт `junit.xml` |
| `build` | `build:front` | сборка образа и push в GitLab Container Registry              |

Образ публикуется как `localhost:5050/devops/ci-cd-gitlab/front:latest`.