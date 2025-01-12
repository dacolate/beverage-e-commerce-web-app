import { PrismaClient, Role, OrderType, PaymentType, PaymentMode } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create example users
  const customer = await prisma.user.create({
    data: {
      name: 'John Doe',
      phone: '1234567890',
      password: 'securepassword', // Hash passwords in production
      role: Role.USER,
      isFavorite: true,
    },
  });

  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      phone: '0987654321',
      password: 'securepassword',
      role: Role.ADMIN,
    },
  });

  // Create beverages
  const beverage1 = await prisma.beverage.create({
    data: {
      name: 'Coca-Cola',
      price: 1.5,
      stock: 100,
      addedDate: new Date(),
    },
  });

  const beverage2 = await prisma.beverage.create({
    data: {
      name: 'Pepsi',
      price: 1.3,
      stock: 150,
      addedDate: new Date(),
    },
  });

  // Create an order
  const order = await prisma.order.create({
    data: {
      customerId: customer.id,
      orderDate: new Date(),
      totalPrice: 15.0,
      type: OrderType.INCOME,
      beverages: {
        create: [
          { beverageId: beverage1.id, quantity: 5 },
          { beverageId: beverage2.id, quantity: 3 },
        ],
      },
    },
  });

  // Create a payment
  await prisma.payment.create({
    data: {
      customerId: customer.id,
      orderId: order.id,
      paymentDate: new Date(),
      totalPrice: 15.0,
      type: PaymentType.INCOME,
      mode: PaymentMode.CASH,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
