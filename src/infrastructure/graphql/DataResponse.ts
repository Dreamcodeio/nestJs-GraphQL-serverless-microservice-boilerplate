import { Key } from "aws-sdk/clients/dynamodb";

export default interface DataResponse<T> {
  items: T[];
  lastEvaluatedKey?: Key;
}
