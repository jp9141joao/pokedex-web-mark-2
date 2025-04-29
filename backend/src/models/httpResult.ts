export class HttpResult<T> {
    public success: boolean;
    public data: T | null;
    public fail: { local: string, message: string};

    private constructor(success: boolean, data: T | null, fail: { local: string, message: string}) {
        this.success = success;
        this.data = data;
        this.fail = fail;
    }

    public static Success<T> (data: T | null): HttpResult<T> {
        return new HttpResult(true, data, { local: '', message: '' });
    }

    public static Fail<T> (local: string, error: string): HttpResult<T> {
        return new HttpResult<T>(false, null, { local: local, message: error });
    }
}