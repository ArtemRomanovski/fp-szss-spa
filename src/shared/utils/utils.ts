export const trackByKey = (_: number, item: any): string => {
	return item.key;
};

export const trackById = (index: number, item: any): string => {
	return item ? item.id : '' + index;
};

export const trackByValue = (_: number, value: string): string => {
	return value;
};