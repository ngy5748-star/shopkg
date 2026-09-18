import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  await prisma.user.upsert({
    where: { email: "admin@shopkg.com" },
    update: {},
    create: {
      email: "admin@shopkg.com",
      name: "Админ",
      password: hashedPassword,
      role: "admin",
    },
  });

  const products = [
    {
      name: "Смартфон Samsung Galaxy A54",
      description: "Современный смартфон с отличной камерой",
      price: 29990,
      image: "https://picsum.photos/seed/phone1/400/400",
      category: "Электроника",
      stock: 50,
    },
    {
      name: "Ноутбук ASUS VivoBook",
      description: "Лёгкий ноутбук для работы и учёбы",
      price: 54990,
      image: "https://picsum.photos/seed/laptop1/400/400",
      category: "Электроника",
      stock: 20,
    },
    {
      name: "Наушники Sony WH-1000XM5",
      description: "Беспроводные наушники с шумоподавлением",
      price: 24990,
      image: "https://picsum.photos/seed/headphones1/400/400",
      category: "Аксессуары",
      stock: 100,
    },
    {
      name: "Кроссовки Nike Air Max",
      description: "Стильные и удобные кроссовки",
      price: 8990,
      image: "https://picsum.photos/seed/shoes1/400/400",
      category: "Одежда",
      stock: 75,
    },
    {
      name: "Рюкзак городской",
      description: "Вместительный рюкзак для города",
      price: 2490,
      image: "https://picsum.photos/seed/bag1/400/400",
      category: "Аксессуары",
      stock: 150,
    },
    {
      name: "Умные часы Apple Watch SE",
      description: "Фитнес-трекер и уведомления",
      price: 19990,
      image: "https://picsum.photos/seed/watch1/400/400",
      category: "Электроника",
      stock: 40,
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log("✅ Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
