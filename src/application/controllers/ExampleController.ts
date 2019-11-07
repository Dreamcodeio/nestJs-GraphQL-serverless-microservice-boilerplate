import { Controller, Post, Req, Res, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";
import { ExampleService } from "../services/ExampleService";

@Controller("drift")
export class ExampleController {
    constructor(private readonly exampleService: ExampleService) { }

    @Post()
    async postDriftEvent(@Req() request: Request, @Res() res: Response) {
        const source: any = request.body;
        const baseResponse = {
            headers : {},
            statusCode: 200
        };
        Object.keys(baseResponse.headers).map((key) => {
            res.setHeader(key, baseResponse.headers[key]);
        });
        const result = await this.exampleService.postExample(source);
        return res.status(HttpStatus.OK).json({ result });
    }
}
