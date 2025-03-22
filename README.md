This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Prisma Commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
