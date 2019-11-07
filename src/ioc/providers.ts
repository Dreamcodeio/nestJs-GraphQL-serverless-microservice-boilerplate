import { ProvidersNames } from "./providersNames";
import * as AWSXray from "aws-xray-sdk-core";
const AWS = AWSXray.captureAWS(require("aws-sdk"));

const {
  ENVIRONMENT = "",
  REGION = "",
  EXAMPLE_TABLE = ""
} = process.env;

export const dynamoDBConnection = {
  provide: ProvidersNames.DYNAMODB_CONNECTION,
  useFactory: () =>
    ENVIRONMENT === "dev"
      ? new AWS.DynamoDB.DocumentClient({
          region: REGION,
          endpoint: "http://localhost:8000",
        })
      : new AWS.DynamoDB.DocumentClient(),
};

export const tableName = {
  provide: ProvidersNames.EXAMPLE_TABLE,
  useValue: EXAMPLE_TABLE
};
