import { join } from "path";
import { Module, HttpModule, OnApplicationShutdown, OnModuleDestroy } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ExampleResolver } from "../infrastructure/graphql/resolver";
import { AppController } from "../app.controller";
import { AppService } from "../app.service";

import {
  dynamoDBConnection,
  tableName,
} from "../ioc/providers";
import { ExampleService } from "../application/services/ExampleService";
import ExampleDAO from "../infrastructure/daos/ExampleDAO";
import { ExampleController } from "../application/controllers/ExampleController";


@Module({
  imports: [
    HttpModule.register({
      timeout: 30000,
    }),
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
      typePaths: ["./src/schema.graphql"],
      definitions: {
        path: `${process.env.ENVIRONMENT === "dev" ? "./src/infrastructure/graphql/" : "/tmp/"}schema.ts`,
        outputAs: "class",
      },
      introspection: true,
    }),
  ],
  controllers: [AppController, ExampleController],
  providers: [
    AppService,
    ExampleResolver,
    dynamoDBConnection,
    tableName,
    ExampleService,
    ExampleDAO,
  ],
})
export class AppModule {}
