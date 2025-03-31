export const debounce = <T extends unknown[]>(callback: (...args: T) => void, timeout = 300) => {
	let timer: NodeJS.Timeout;

	return (...args: T) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			callback(...args);
		}, timeout);
	};
};
