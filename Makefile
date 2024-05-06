npm-install: ## Выполнить npm install в контейнере (работает на поднятом проекте)
	docker exec -it react_sorcery npm install

npm-install-lib: ## Выполнить команду npm install <lib>: npm install lib_name=<lib> (работает на поднятом проекте)
	docker exec -it react_sorcery npm install $(lib_name)

npm-install-lib-dev: ## Выполнить команду npm install <lib> в devDependencies (работает на поднятом проекте)
	docker exec -it react_sorcery npm install --save-dev $(lib_name)

########################################################################################################################
