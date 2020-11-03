export class ObjectUtil {
	static isNull(val: unknown): boolean {
		return typeof val === 'undefined' || val == null;
	}
}
