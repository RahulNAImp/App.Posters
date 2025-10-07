# Project overview 

Minimal Node + Express backend for the Posters project.

This repository exposes a small users endpoint and connects to MongoDB using Mongoose. The server reads connection settings from `config.env` (or the `DATABASE` / `connection_string` environment variable).

Quick start
1. Install dependencies

```powershell
npm install
```

2. Create or edit `config.env` in the project root with your MongoDB details. Example:

```text
# Example config.env - DO NOT commit real credentials to git
connection_string=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster0
# OR provide components instead of the full string:
connection_user=YourDbUser
connection_password=YourDbPassword
connection_name=YourDatabaseName
```

3. Start the server (development with automatic restart):

```powershell
npm run dev
```

Or start normally:

```powershell
npm start
```

What the app does now
- Connects to MongoDB using Mongoose. The code will use `connection_string` (full URI) or fall back to a constructed URI built from `connection_user`, `connection_password`, and `connection_name`.
- Exposes a single users route:
	- GET /api/v1/users — currently returns a simple text response (controller returns "Router is running").

How to test the endpoint

```powershell
curl http://localhost:5000/api/v1/users -UseBasicParsing
```

If the server connects successfully you'll see console logs and the endpoint will respond with a 200 status.

Notes and troubleshooting
- Make sure `config.env` is in the project root and values are correct. If using the full `connection_string` ensure it contains the real password (not a placeholder like `<db_password>`).
- If the connection fails, the app prints the Mongoose error to the console. Check network access and your Atlas IP whitelist if using MongoDB Atlas.
- Scripts defined in `package.json`:
	- `start`: node app.js
	- `dev`: nodemon app.js

Next steps you might want me to do
- Move more route handlers into `Controller/` and return JSON arrays of users.
- Add express middleware (express.json()) and error-handling middleware.
- Add a simple Mongoose User model and example CRUD routes.

If you want any of those, tell me which and I will implement them and add tests.