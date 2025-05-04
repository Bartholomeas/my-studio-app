export class ServerError extends Error {
	readonly status: number;
	readonly body: Record<string, unknown>;
	constructor(message: string, status: number, body: Record<string, unknown>) {
		super(message);
		this.status = status;
		this.body = body;
	}
}

export const handleAsync = async <T>(
	asyncFn: () => Promise<T>,
): Promise<[T | null, Error | null]> => {
	try {
		const data = await asyncFn();
		return [data, null];
	} catch (error) {
		const typedError =
			error instanceof Error
				? new ServerError(error.message, 400, {})
				: new ServerError(String(error), 500, {});
		return [null, typedError];
	}
};
