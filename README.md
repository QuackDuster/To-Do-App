This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Getting Started

## Develpment
Steps to run the app in development mode

1. Start the DB
```
docker compose up -d
```

2. Rename .env.template file to .env to set the user of the DB

3. Replace the environment variables

4. Execute the seed to [create the local DB](localhost:3000/api/seed)

## Prisma Commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

