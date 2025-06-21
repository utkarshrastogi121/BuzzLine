# 💬 BuzzLine

**BuzzLine** is a real‑time social messaging platform built with Next.js, TypeScript, Prisma, and Tailwind CSS. It offers a seamless chat experience with a gorgeous UI and a robust backend. Bombastic buzz for everyone—designed to scale!

---

## 🛠 Features

- User sign‑up/login and authentication using Clerk
- Prisms your data! (type‑safe ORM with Prisma + Postgres)
- Profile pages & dynamic routing
- Tailwind CSS – ultra‑responsive styling
- Deployed on Vercel — blazing fast & serverless

---

## 🚀 Getting Started

### Requirements

- Node.js v16+  
- Yarn, npm, or pnpm  
- PostgreSQL (local/Postgres server)

### Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/utkarshrastogi121/BuzzLine.git
   cd BuzzLine
    ```
2. Install dependencies:
   ```bash
   npm install
    ```
3. Set up your .env:
   ```txt
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = ""
   CLERK_SECRET_KEY = ""
   DATABASE_URL = ""
   UPLOADTHING_TOKEN = ""
    ```
4. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
    ```
5. Launch the dev server:
   ```bash
   npm run dev
