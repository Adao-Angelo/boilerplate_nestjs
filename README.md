
# Boilerplate

This is a basic API boilerplate built with **NestJS** version `10.4.4`, using **Prisma** as the ORM and **Docker** to manage the PostgreSQL database. It includes Swagger for automatic API documentation.

## 🚀 Technologies

| Technology     | Description                                                   | Icon                                                                                      |
|----------------|---------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| **NestJS**     | Framework for building efficient, reliable, and scalable server-side applications. | ![NestJS](https://img.shields.io/badge/-Nest.Js-05122A?style=flat&logo=nestjs)            |
| **TypeScript** | Typed superset of JavaScript that compiles to plain JavaScript. | ![TypeScript](https://img.shields.io/badge/-Typescript-05122A?style=flat&logo=typescript) |
| **Prisma**     | Next-generation ORM for Node.js and TypeScript.                | ![Prisma](https://img.shields.io/badge/-Prisma-05122A?style=flat&logo=prisma)             |
| **Docker**     | Containerization platform for seamless deployment.             | ![Docker](https://img.shields.io/badge/-Docker-05122A?style=flat&logo=docker)             |
| **PostgreSQL** | Robust and scalable relational database.                       | ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-05122A?style=flat&logo=postgresql) |
| **Swagger**    | API documentation and testing tool integrated with NestJS.     | ![Swagger](https://img.shields.io/badge/-Swagger-05122A?style=flat&logo=swagger)          |

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Adao-Angelo/boilerplate_nestjs.git
cd boilerplate_nestjs
```

### 2. Install Dependencies

```bash
yarn install
```

> Using Yarn version: `1.22.22`

### 3. Setup the Database

Start the PostgreSQL container with Docker Compose:

```bash
docker-compose up -d
```

Make sure your `.env` file includes the following database URL:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/boiler_place?schema=public"
```

Run the Prisma migrations to set up the database schema:

```bash
npx prisma migrate dev
```

### 4. Run the Application

```bash
yarn start:dev
```

The application will be running at [http://localhost:3000](http://localhost:3000)

### 5. Access API Documentation

Visit [http://localhost:3000/api](http://localhost:3000/api) to access the Swagger documentation.

---

### 📌 Upcoming Features

- JWT authentication system
- Role-based authorization
- Pagination and filtering
- File upload support

---

Made with ❤️ using NestJS and Prisma.
