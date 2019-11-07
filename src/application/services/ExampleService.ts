import { Injectable, Inject } from "@nestjs/common";
import ExampleDAO from "../../infrastructure/daos/ExampleDAO";
import {
  ExampleInput,
  // @ts-ignore
} from "/tmp/schema";
import ExampleToSaveTO from "../../infrastructure/tos/ExampleToSaveTO";
import ExampleTO from "../../infrastructure/tos/ExampleTO";


@Injectable()
export class ExampleService {
  constructor(
    private readonly exampleDAO: ExampleDAO,
  ) {
  }

  async getExample(search: ExampleInput, first?: number, after?: string) {
    const result = await this.exampleDAO.getExamples(search.someId, first, after);
    return result;
  }

  async postExample(example: ExampleToSaveTO) {
    const result = await this.exampleDAO.save(example as ExampleTO);
    return result;
  }

}
