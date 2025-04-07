export class HttpResult<T> {
    public success: boolean;
    public data: T | null;
    public fail: string;

    private constructor(success: boolean, data: T | null, fail: string) {
        this.success = success;
        this.data = data;
        this.fail = fail;
    }

    public static Success<T> (data: T | null): HttpResult<T> {
        return new HttpResult(true, data, "");
    }

    public static Fail<T> (error: string): HttpResult<T> {
        return new HttpResult<T>(false, null, error);
    }
}