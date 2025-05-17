# registratiion
# registratiion
📌 Project Name: student-registration

🚀 Project Overview

Student registration  designed to streamline students profile management, and more. This application is built using **NestJS** for the backend and integrated with a **PostgreSQL** database.

---

⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gitdeme/registration.git
   cd registration
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Setup:**

   * Create a `.env` file in the root directory.
   * Add your database credentials:

     ```env
     DB_HOST=localhost
     DB_PORT=5432
     DB_USERNAME=postgres
     DB_PASSWORD=root
     DB_DATABASE=student_registration
     ```

4. **Database Migration (if applicable):**

   ```bash
   npm run migration:run
   ```

5. **Start the application:**

   ```bash
   npm run start:dev
   ```

   Visit [http://localhost:3000](http://localhost:3000).

---

### 🗄️ Database Configuration

Ensure PostgreSQL is running and properly configured. You can validate the connection using:

```bash
psql -U postgres -d registration-h localhost -W
```

---

### 📌 API Documentation

API documentation is auto-generated using **Swagger**. Access it at:

```
http://localhost:3000/api
```

---

### 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

### 📜 License

This project is licensed under the MIT License.

---

### 📞 Contact Information

* **Developer:** Gitdeme
* **Email:**  demeke.get23@gmail.com
          

Feel free to reach out if you have any questions or want to contribute!
