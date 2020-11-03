export class StringUtil {
	static format(str: string, ...args: string[]): string {
		return str.replace(/{(\d+)}/g, function (match: string, number: number) {
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	}

	static isNullOrEmpty(str: string): boolean {
		return !(typeof str === 'string' && str.length > 0);
	}

	static Trim(str: string, c?: string): string {
		if (typeof c == 'undefined' || c == null || c == '') {
			const strR = str.replace(/(^\s*)|(\s*$)/g, '');
			return strR;
		} else {
			let rg = new RegExp('^' + c + '*');
			const strR = str.replace(rg, '');
			rg = new RegExp(c);
			let i = strR.length;
			while (rg.test(strR.charAt(--i)));
			return strR.slice(0, i + 1);
		}
	}

	static TrimStart(str: string, c?: string): string {
		if (c == null || c == '') {
			const strR = str.replace(/(^\s*)/g, '');
			return strR;
		} else {
			const rg = new RegExp('^' + c + '*');
			const strR = str.replace(rg, '');
			return strR;
		}
	}

	static TrimEnd(str: string, c?: string): string {
		if (c == null || c == '') {
			const strR = str.replace(/(\s*$)/g, '');
			return strR;
		} else {
			const rg = new RegExp(c);
			let i = str.length;
			while (rg.test(str.charAt(--i)));
			return str.slice(0, i + 1);
		}
	}
}
