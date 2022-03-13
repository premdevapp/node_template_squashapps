#!make
express:
	npm init -y
	npm install express morgan dotenv
	touch server.js
	mkdir views models controllers

git:
	touch .gitignore
	git init