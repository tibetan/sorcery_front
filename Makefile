# Переменные
DOCKER_COMPOSE_DEV = docker compose -f docker/docker-compose.dev.yml --env-file docker/.env
DOCKER_COMPOSE_PROD = docker compose -f docker/docker-compose.prod.yml --env-file docker/.env

# По умолчанию dev. Если prod, то например: make ENV=prod up
ENV ?= dev

ifeq ($(ENV),dev)
  DC = $(DOCKER_COMPOSE_DEV)
else ifeq ($(ENV),prod)
  DC = $(DOCKER_COMPOSE_PROD)
endif

.PHONY: up build down restart ps logs clean bash

# Поднять контейнеры
up:
	$(DC) up -d

# Поднять и пересобрать
build:
	$(DC) up -d --build

# Остановить контейнеры
down:
	$(DC) down

# Перезапуск
restart: down up

# Список контейнеров
ps:
	$(DC) ps

# Логи
logs:
	$(DC) logs -f

# Полная очистка: контейнеры + образы + volumes (если что-то сломалось)
clean:
	$(DOCKER_COMPOSE_DEV) down -v --rmi all
	$(DOCKER_COMPOSE_PROD) down -v --rmi all
	docker volume prune -f

# Вход в контейнер (по умолчанию в react-app, можно указать другой через CONTAINER=имя)
bash:
	$(DC) exec react-app sh -c "bash || sh"
