import { Handler, Context, Callback } from "aws-lambda";
import { Server } from "http";
import { createServer, proxy } from "aws-serverless-express";
import { eventContext } from "aws-serverless-express/middleware";

import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import { AppModule } from "../../ioc/module";

import * as express from "express";

const binaryMimeTypes: string[] = [];

let cachedServer: Server;

// Create the Nest.js server and convert it into an Express.js server
async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );
    nestApp.enableShutdownHooks();
    nestApp.use(eventContext());
    await nestApp.init();

    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
}

export const server: Handler = async (event: any, context: Context, callback: Callback) => {
  const basePath: string = "somePath/";
  const path = String(event.path).includes(basePath) ? String(event.path).replace(basePath, "") : event.path;
  const modifiedEvent = { ...event, path };
  cachedServer = await bootstrapServer();
  return proxy(cachedServer, modifiedEvent, context, "PROMISE").promise;
};
