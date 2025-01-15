import {
  PrismaClient,
  Role,
  OrderType,
  PaymentType,
  PaymentMode,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 1. Seed Users
  const users = [
    {
      id: "user-1",
      name: "John Doe",
      phone: "1234567890",
      password: "hashed_password",
      role: Role.ADMIN,
      isFavorite: true,
    },
    {
      id: "user-2",
      name: "Jane Smith",
      phone: "0987654321",
      password: "hashed_password",
      role: Role.USER,
      isFavorite: false,
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: user,
    });
  }

  // 2. Seed Beverages

  //   enum BeverageStatus {
  //     AVAILABLE,
  //     CONDITIONED,
  //     OUT_OF_STOCK,
  //     COMING_SOON,
  //   }
  //   const featuredProducts = [
  //     {
  //       name: "33 Export",
  //       price: 7800,
  //       stock: 100, // Adjust stock as necessary
  //       status: BeverageStatus.CONDITIONED, // Set status based on conditioned
  //       addedDate: new Date(),
  //     },
  //     {
  //       name: "Booster Cola",
  //       price: 7800,
  //       stock: 50,
  //       status: "AVAILABLE",
  //       addedDate: new Date(),
  //     },
  //     {
  //       name: "Chill",
  //       price: 7800,
  //       stock: 70,
  //       status: "AVAILABLE",
  //       addedDate: new Date(),
  //     },
  //     {
  //       name: "Isenbeck",
  //       price: 7800,
  //       stock: 30,
  //       status: "COMING_SOON",
  //       addedDate: new Date(),
  //     },
  //   ];

  //   const products = [
  //     {
  //       name: "Top grenadine",
  //       price: 26000,
  //       stock: 10,
  //       status: "AVAILABLE",
  //       addedDate: new Date(),
  //     },
  //     {
  //       name: "Top pamplemousse",
  //       price: 2600,
  //       stock: 15,
  //       status: "AVAILABLE",
  //       addedDate: new Date(),
  //     },
  //     {
  //       name: "Top ananas",
  //       price: 2600,
  //       stock: 20,
  //       status: "AVAILABLE",
  //       addedDate: new Date(),
  //     },
  //     {
  //       name: "Top orange",
  //       price: 2600,
  //       stock: 25,
  //       status: "AVAILABLE",
  //       addedDate: new Date(),
  //     },
  //   ];

  //   console.log("Seeding featured products...");

  //   for (const product of featuredProducts) {
  //     await prisma.beverage.create({
  //       data: {
  //         name: product.name,
  //         price: product.price,
  //         stock: product.stock,
  //         addedDate: product.addedDate,
  //       },
  //     });
  //   }

  //   console.log("Seeding other products...");

  //   for (const product of products) {
  //     await prisma.beverage.create({
  //       data: {
  //         name: product.name,
  //         price: product.price,
  //         stock: product.stock,
  //         // status: product.status,
  //         addedDate: product.addedDate,
  //       },
  //     });
  //   }

  //   console.log("Seeding completed.");

  // 3. Seed Orders
  const orders = [
    {
      customerId: "user-1",
      orderDate: new Date(),
      totalPrice: 23400,
      type: OrderType.INCOME,
    },
    {
      customerId: "user-2",
      orderDate: new Date(),
      totalPrice: 15600,
      type: OrderType.INCOME,
    },
  ];

  for (const order of orders) {
    await prisma.order.create({
      data: order,
    });
  }

  // 4. Seed Order-Beverage Relationships
  const orderBeverages = [
    {
      orderId: 1,
      beverageId: 1,
      quantity: 3,
    },
    {
      orderId: 1,
      beverageId: 2,
      quantity: 1,
    },
    {
      orderId: 2,
      beverageId: 3,
      quantity: 2,
    },
  ];

  for (const orderBeverage of orderBeverages) {
    await prisma.orderBeverage.create({
      data: orderBeverage,
    });
  }

  // 5. Seed Payments
  const payments = [
    {
      customerId: "user-1",
      orderId: 1,
      paymentDate: new Date(),
      totalPrice: 23400,
      type: PaymentType.INCOME,
      mode: PaymentMode.CASH,
    },
    {
      customerId: "user-2",
      orderId: 2,
      paymentDate: new Date(),
      totalPrice: 15600,
      type: PaymentType.INCOME,
      mode: PaymentMode.MOMO,
    },
  ];

  for (const payment of payments) {
    await prisma.payment.create({
      data: payment,
    });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
