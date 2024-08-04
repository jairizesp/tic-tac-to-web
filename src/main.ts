import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: 'https://tic-tac-toe-client-1wsgtiv6y-jairizs-projects.vercel.app',
  });

  await app.listen(3000);
}
bootstrap();
