# Локальный GitLab CI/CD стенд

## Задача

- Настроить GitLab CI, предварительно развернув его локально:
- Настроить правила на push в main.
- Настроить хранение образов в GitLab.
- Результат Unit-тестов, отправлять как файл на машину.
- Деплой на машине в /var/www/staging, запуск на порту 8081 (Nginx прокси).
- Деплой в /var/www/app, с рестартом сервиса.
- Использовать shared runners, SSH-ключ как переменные (SSH_KEY, VPS_IP, VPS_USER).

```bash
## Сборка
docker compose up -d

## получить пароль от пользователя root 
docker exec gitlab cat /etc/gitlab/initial_root_password

##Открыть в браузере
http://localhost:8929/

## Admin → CI/CD → Runners, создать instance runner, 
## получить токен и зарегистрировать его командой
```

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
  --docker-network-mode gitlab-local_default
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
  --docker-network-mode gitlab-local_default
```

</details>
