# React, Node, Mongo in Docker

current project is framework that consists of React.js app, Node.js API with connection to MongoDB and all it is in Docker environment

=====================

Start app:
```
cp api/app/.env.dist api/app/.env
```
```
docker-compose up
```

-------------------

React App (frontend) will be available:

http://localhost:5000

---
Node App (api) will be available:

http://localhost:8080

---
---

### Project structure

**React.js** - almost default project structure but with Axios , that requests API at main page.

**Node.js API** - has root endpoint "/" with "hello world", plus CRUD endpoints for so-called "some-entity". 
Those some-entity data is stored to MongoDB database.