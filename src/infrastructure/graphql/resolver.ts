import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import {
  ExampleInput
  // @ts-ignore
} from "/tmp/schema";
import Pagination from "./Pagination";
import { ExampleService } from "../../application/services/ExampleService";
import ExampleTO from "../tos/ExampleTO";

@Resolver("Events")
export class ExampleResolver {
  constructor(
    private readonly exampleService: ExampleService,
  ) {
  }

  @Query("getExamples")
  async getExamples(
    @Args("search") search: ExampleInput,
    @Args("first") first: number,
    @Args("after") after: string,
  ): Promise<any> {

    console.info(
      this.getExamples.name,
      `Search: ${JSON.stringify(search)}`,
    );

    const examples = await this.exampleService.getExample(search, first, after);
    const examplesPagination = new Pagination<ExampleTO>(examples);
    const dataPaginated = examplesPagination.getPaginationData();
    console.log(
      this.getExamples.name,
      `Result: ${JSON.stringify(examples)}`,
    );
    return dataPaginated;
  }

}
