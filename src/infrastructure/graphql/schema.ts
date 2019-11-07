
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum EventTypeEnum {
    ENUMEXAMPLE = "ENUMEXAMPLE"
}

export class ExampleInput {
    someRequiredID: string;
    someId?: string;
}

export class Example {
    someId: string;
    createdAt?: string;
}

export class ExampleConnection {
    edges?: ExampleEdge[];
    pageInfo?: ExamplePageInfo;
}

export class ExampleEdge {
    node?: Example;
}

export class ExamplePageInfo {
    hasNextPage: boolean;
    totalCount?: number;
    lastCursor?: string;
}

export abstract class IMutation {
    abstract setMockMutation(someMock?: string): string | Promise<string>;
}

export abstract class IQuery {
    abstract getExamples(search: ExampleInput, first?: number, after?: string): ExampleConnection | Promise<ExampleConnection>;
}
