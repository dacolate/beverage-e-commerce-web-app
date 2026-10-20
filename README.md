# Beverage Management Web App

A full-stack web application for managing beverage inventory, customers, orders, and payments.

## Overview

The application combines a Next.js frontend with a PostgreSQL database through Prisma. It supports authenticated users, beverage stock management, order tracking, and payment records for both income and expenses.

## Features

- User authentication and sessions
- Admin and user roles
- Beverage catalogue with price, stock, image and availability status
- Customer management
- Order tracking with multiple beverages per order
- Income and expense records
- Payment tracking with cash, Mobile Money (MoMo), and Orange Money (OM)
- Responsive UI built with Radix UI components and Tailwind CSS
- Client-side data fetching and caching with TanStack Query

## Tech Stack

- **Framework:** Next.js 14, React 18, TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** Lucia / Argon2
- **UI:** Tailwind CSS, Radix UI, Lucide, Framer Motion
- **Data fetching:** TanStack Query
- **Validation:** Zod

## Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL

### Installation

```bash
git clone https://github.com/dacolate/beverage-e-commerce-web-app.git
cd beverage-e-commerce-web-app
npm install
```

Create a local environment file and provide the database configuration required by the application, including `DATABASE_URL`.

Generate the Prisma client:

```bash
npx prisma generate
```

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Status

This repository represents an actively developed application. The README focuses on the architecture and functionality currently present in the codebase.
