import { NestFactory } from "@nestjs/core";
import {
  ExpressAdapter,
  NestExpressApplication
} from "@nestjs/platform-express";
import * as dotenv from "dotenv";
import * as helmet from "helmet";

import { AppModule } from "./app/app.module";
import { WsAdapter } from "@nestjs/platform-ws";

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter()
  );

  app.use(helmet());
  app.enableCors();
  app.useWebSocketAdapter(new WsAdapter(app));
  app.setGlobalPrefix(`api/v1`);

  const hostname = process.env.HOSTNAME || "0.0.0.0";
  const port = process.env.PORT || 3333;

  await app.listen(port, hostname, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

bootstrap();
