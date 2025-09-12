# Переменные
DOCKER_COMPOSE = docker compose -f docker/docker-compose.yml --env-file docker/.env

.PHONY: up up-build down restart ps logs install-deps

up: ## Запуск локального окружения
	$(DOCKER_COMPOSE) up -d

up-build: ## Запуск локального окружения с обновлением контейнеров
	$(DOCKER_COMPOSE) up -d --build

down: ## Остановка локального окружения
	$(DOCKER_COMPOSE) down

restart: down up ## Перезапустить контейнеры

ps: ## Показать запущенные контейнеры
	$(DOCKER_COMPOSE) ps

logs: ## Смотреть логи в реальном времени
	$(DOCKER_COMPOSE) logs -f
