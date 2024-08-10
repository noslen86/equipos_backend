import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SERVER_PORT } from '../ormconfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Valida los datos enviados desde el frontend
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*',
  });
  const configService = app.get(ConfigService);
  const port = +configService.get<number>(SERVER_PORT);
  await app.listen(port);
}
bootstrap();
