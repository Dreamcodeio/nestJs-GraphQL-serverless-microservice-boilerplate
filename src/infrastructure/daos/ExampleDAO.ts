import { Inject, Injectable } from "@nestjs/common";
import { DynamoDB } from "aws-sdk";
import { ProvidersNames } from "../../ioc/providersNames";
import ExampleTO from "../tos/ExampleTO";
import DataResponse from "../graphql/DataResponse";

@Injectable()
export default class ExampleDAO {
  tableName: string;
  connection: DynamoDB.DocumentClient;

  constructor(
    @Inject(ProvidersNames.DYNAMODB_CONNECTION)
    connection: DynamoDB.DocumentClient,
    @Inject(ProvidersNames.EXAMPLE_TABLE) tableName: string,
  ) {
    this.tableName = tableName;
    this.connection = connection;
  }

  async getExamples(someId: string, first?: number, after?: string): Promise<DataResponse<ExampleTO>> {
    return { items:[] };
    // const searchByIdLabel = "someId";
    // const searchByIdValue = someId;
    // const params: DynamoDB.DocumentClient.QueryInput = {
    //   TableName: this.tableName,
    //   KeyConditionExpression: `${searchByIdLabel} = :${searchByIdLabel}`,
    //   ExpressionAttributeValues: { [`:${searchByIdLabel}`]: searchByIdValue },
    // };

    // if (first) {
    //   params.Limit = first;
    // }

    // if (after) {
    //   const cursorDeserialized = new Buffer(after, "base64");
    //   const lastEvaluatedKey = JSON.parse(cursorDeserialized.toString());
    //   params.ExclusiveStartKey = lastEvaluatedKey;
    // }

    // const result: DynamoDB.DocumentClient.QueryOutput = await this.connection
    //   .query(params)
    //   .promise();

    // const items = result.Items ? result.Items.map(_ => _ as ExampleTO) : [];
    // console.info(`result: ${items.length}`, this.getExamples.name);
    // return {
    //   items,
    //   lastEvaluatedKey: result.LastEvaluatedKey,
    // };
  }

  async save(example: ExampleTO) {
    return {};
    // const params: DynamoDB.DocumentClient.PutItemInput = {
    //   TableName: this.tableName,
    //   Item: example
    // };
    // const result = await this.connection.put(params).promise();
    // return result;
  }

}
