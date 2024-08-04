export declare class ApiResponse<T> {
    message: string;
    statusCode: number;
    data: T;
    constructor(message: string, statusCode: number, data: T);
}
