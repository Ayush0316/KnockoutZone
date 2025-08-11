# Contributing to KnockoutZone Backend

Welcome to the **backend** of KnockoutZone! This document helps you get started with local setup, tech stack details, contribution guidelines, and testing instructions.

---

## 🧰 Tech Stack

- **Language:** Java 17+
- **Framework:** Spring Boot
- **Database:** PostgreSQL
- **ORM:** Spring Data JPA
- **Build Tool:** Maven
- **Security:** Spring Security (JWT)
- **Testing:** JUnit 5, Mockito
- **API Style:** RESTful (JSON)

---

## 🗂️ Project Structure

``` sh
src/
├── main/
│ ├── java/com/knockoutzone/
│ │ ├── config/ 
│ │ ├── controller/ 
│ │ ├── dto/
│ │ ├── entity/
│ │ ├── exception/
│ │ ├── filters/ # JWT filters
│ │ ├── repository/ # Data access layer
│ │ ├── service/ # Interfaces
│ │ ├── service/impl/ # Service implementations
│ │ ├── util/ # Helper classes
│ │ └── KnockoutZoneBackendApplication.java # Main Spring Boot application class
│ └── resources/
│ ├── application.properties # Default configuration
│ ├── application-dev.properties # Development environment configuration
│ ├── application-prod.properties # Production environment configuration
│ ├── application-test.properties # Test environment configuration
│ └── logback-spring.xml # Logging configuration
└── test/
  └── java/com/knockoutzone/
    ├── util
    └── KnockoutZoneBackendApplicationTests.java

```
---

## 🚀 Setup Instructions

### 1. 📌 Fork the repository
- Go to https://github.com/Ayush0316/KnockoutZone
- Click the Fork button in the top right corner

### 2. 📥 Get the Code
Then, clone your forked repository
```sh
git clone https://github.com/<your-username>/KnockoutZone.git
cd KnockoutZone/app(backend)
```

### 3. Set up PostgreSQL
- Create a database called knockoutzone.
- Update your application.properties:
``` sh
spring.datasource.url=jdbc:postgresql://localhost:5432/knockoutzone
spring.datasource.username=your_db_user
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 4. Run the app:
``` sh
mvn spring-boot:run
```

## 🧪 Testing
We use JUnit 5 and Mockito for testing.

### Run tests:
``` sh
mvn clean test
```

## ✅ Pull Request Checklist
- Descriptive PR title and message
- One feature/fix per PR
- Include tests for your change
- Format code with Prettier or IDE defaults
- Rebase from latest main branch if needed

