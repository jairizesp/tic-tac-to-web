import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: 'https://tic-tac-toe-client-khaki.vercel.app',
  });

  await app.listen(3000);
}
bootstrap();
