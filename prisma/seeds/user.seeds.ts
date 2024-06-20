import { PrismaClient, Role, Status } from '@prisma/client';
import { hashSync } from 'bcrypt';

export async function seedUser(prisma: PrismaClient) {
  await prisma.user.createMany({
    data: [
      {
        name: 'user one',
        email: 'user.one@email.com',
        password: hashSync('12345678', 10),
        role: Role.User,
        status: Status.Ativo,
      },
    ],
  });

  console.log('Users seed added successfully 🌱.');
}
