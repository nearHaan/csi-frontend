export class APIError extends Error {
    errorfield: string;

    constructor(message: string, errorfield: string = '') {
        super(message);
        this.name = "APIError";
        this.errorfield = errorfield;
    }
}
