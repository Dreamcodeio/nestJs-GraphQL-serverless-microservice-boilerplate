import DataResponse from "./DataResponse";

export default class Pagination<T> {
  dataResponse: DataResponse<T>;
  constructor(dataResponse: DataResponse<T>) {
    this.dataResponse = dataResponse;
  }

  getPaginationData() {
    const edges = this.getEdges();
    const pageInfo = this.getPageInfo();
    return { edges, pageInfo };
  }

  private getPageInfo() {
    const totalCount = this.dataResponse.items.length;
    const lastCursor = this.getLastCursor();
    const hasNextPage = !!lastCursor;

    return {
      totalCount,
      hasNextPage,
      lastCursor,
    };
  }

  private getEdges() {
    return this.dataResponse.items.map((item: T) => {
      return {
        node: item,
      };
    });
  }

  private getLastCursor() {
    let lastCursor: string | undefined;
    if (this.dataResponse.lastEvaluatedKey) {
      const json = JSON.stringify(this.dataResponse.lastEvaluatedKey);
      const buffer = new Buffer(json);
      lastCursor = buffer.toString("base64");
    }
    return lastCursor;
  }
}
