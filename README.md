# Локальный GitLab CI/CD стенд

Учебный проект: GitLab и GitLab Runner разворачиваются локально в Docker, CI/CD настраивается для приложения Management (React + Spring Boot).

## Задача

Настроить GitLab CI, предварительно развернув его локально:

- [ ] правила на push в `main`;
- [ ] хранение образов в GitLab (Container Registry);
- [ ] результат unit-тестов сохраняется как файл;
- [ ] деплой в `/var/www/staging`, запуск на порту 8081 (Nginx-прокси);
- [ ] деплой в `/var/www/app` с перезапуском сервиса;
- [ ] shared runner, SSH-ключ и данные сервера в переменных (`SSH_KEY`, `VPS_IP`, `VPS_USER`).

## Структура репозитория

| Ветка   | Содержимое                                                    |
|---------|---------------------------------------------------------------|
| `main`  | README и `docker-compose.yml` (GitLab + Runner)               |
| `front` | React-приложение, `Dockerfile`, `nginx.conf`, `.gitlab-ci.yml` |
| `back`  | Spring Boot-приложение, `Dockerfile`, `pom.xml`               |

У `front` и `back` свои независимые пайплайны.

## Требования

- Docker Desktop (Windows/macOS) или Docker Engine + Compose (Linux)
- Свободные порты: `8929` (GitLab), `5050` (Container Registry), `2224` (SSH)

## Запуск GitLab

```bash
docker compose up -d
```

Первый старт занимает несколько минут. Дождаться статуса `healthy`:

```bash
docker compose ps
```

Пароль пользователя `root`:

```bash
docker exec gitlab cat /etc/gitlab/initial_root_password
```

GitLab открывается по адресу http://localhost:8929/ (логин `root`).

## Регистрация runner

1. В GitLab: **Admin → CI/CD → Runners → New instance runner**. Включить **Run untagged jobs** и скопировать токен.
2. Узнать имя сети compose (обычно `<имя_папки>_default`):

```bash
   docker network ls
```

3. Зарегистрируй runner, подставив токен и имя сети.

<details open>
<summary>Bash / Linux / macOS / Git Bash</summary>

```bash
docker exec -it gitlab-runner gitlab-runner register \
  --non-interactive \
  --url http://gitlab:8929 \
  --clone-url http://gitlab:8929 \
  --token ТОКЕН \
  --name docker \
  --executor docker \
  --docker-image docker:latest \
  --docker-volumes /var/run/docker.sock:/var/run/docker.sock \
  --docker-network-mode devops_default
```

</details>

<details>
<summary>PowerShell (Windows)</summary>

```powershell
docker exec -it gitlab-runner gitlab-runner register `
  --non-interactive `
  --url http://gitlab:8929 `
  --clone-url http://gitlab:8929 `
  --token ТОКЕН `
  --name docker `
  --executor docker `
  --docker-image docker:latest `
  --docker-volumes /var/run/docker.sock:/var/run/docker.sock `
  --docker-network-mode devops_default
```

</details>

## Container Registry

Образы публикуются в GitLab Container Registry проекта, адрес `localhost:5050/<группа>/<проект>/<образ>`.

Например, образ фронтенда: `localhost:5050/devops/ci-cd-gitlab/front:latest`.

## Ссылки

- [front](../../tree/front): React-приложение
- [back](../../tree/back): Spring Boot-приложение