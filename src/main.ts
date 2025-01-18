import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const configuration = new ConfigService();
  // // const port = configuration.get<string>('PORT');

  // // await app.listen(process.env.PORT ?? 3000);

  const configuration = new ConfigService();
  await app.listen(configuration.get('PORT'), () => {
    console.log(`Service running on port ${configuration.get('PORT')}`);
  });
}
bootstrap();
