# KnockoutZone – Backend 
The backend service of KnockoutZone is built using
- **Spring Boot** - Backend Framework for building REST APIs
- **Maven** - Project Build and dependency management
- **PostgreSQL** - Relational database
- **JWT(JSON Web Token)** - Secure authentication mechanism

### 📁 Project Structure
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

## 🚀 Quickstart Guide

### 1. Prerequisites

- **Java 21**
- **Maven 3.6+**
- **PostgreSQL**
- **Git**
- **IDE**

_Check your versions:_
```sh
java -version
mvn -v
psql --version
```

---

### 2. Get the Code

```sh
git clone https://github.com/Ayush0316/KnockoutZone.git
cd KnockoutZone/app(backend)
```

---

### 3. ⚙️ Configuration

```sh
cp .env-sample .env   # create your local env file
```
Open `.env` and set:
```env
DB_USERNAME=postgres  
DB_PASSWORD=******
DB_NAME=knockoutzone_db
# (adjust SERVER_PORT, JWT_SECRET, etc. if needed)
```

---

### 4. Create the Database (once)

```sql
CREATE DATABASE knockoutzone_db;
```

---

### 5. Build & Start

```sh
mvn clean install         # compile + run tests
mvn spring-boot:run       # starts on http://localhost:8080
```
_Or, after packaging:_
```sh
java -jar target/backend-*.jar
```

---

### Optional Commands

- **Switch to production profile:**  
  `mvn spring-boot:run -Dspring-boot.run.profiles=prod`
- **Switch to development profile:**  
  `mvn spring-boot:run -Dspring-boot.run.profiles=dev`
- **Run tests only:**  
  `mvn test`

---

That’s it—edit `.env`, build, and run.

