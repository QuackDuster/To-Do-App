# TO-DO App with User sessions
Basic TO-DO's or Tasks application to take note of task or reminders to complete

## Stack of technologies used
- NextJS, Redux Toolkit, Prisma, PostgreSQL, Docker, Vercel

# Getting Started
## Development
Steps to run the app in development mode

1. Start the DB
```
docker compose up -d
```

2. Create a copy of .env.template file called .env to set the user of the DB

3. Replace the environment variables

4. Install the dependencies of the project executing the command: ``` npm install ```

5. Run the project under development mode to start the project executing the command: ``` npm run dev ```

6. Execute the following Prisma commands to migrate the info of the DB and generate the schemas:
```
npx prisma migrate dev

npx prisma generate
```

7. Execute the seed to [create the local DB](localhost:3000/api/seed)

## Note: Default user to test faster without create an account
__User__: test1@google.com
__Password__: 123456

## Prisma Commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
