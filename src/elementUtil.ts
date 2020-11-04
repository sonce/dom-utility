// Element.matches() polyfill
export class ElementUtil {
	static matches(el: Element, selector: string): boolean {
		if (Element.prototype.matches) return el.matches(selector);
		else {
			const matches = (document || el.ownerDocument).querySelectorAll(selector);
			let i = matches.length;
			while (--i >= 0 && matches.item(i) !== el) {}
			return i > -1;
		}
	}

	static getParents(el: Element, selector: string): Element[] {
		// Set up a parent array
		const parents: Element[] = [];
		let self = el;
		// Push each parent element to the array
		for (; self && !document.isSameNode(self); self = self.parentNode as HTMLElement) {
			if (selector) {
				if (ElementUtil.matches(self, selector)) {
					parents.push(self);
				}
				continue;
			}
			parents.push(self);
		}

		// Return our parent array
		return parents;
	}

	static closest(el: Element, selector: string): Element {
		let self = el;
		if (!document.documentElement.contains(self)) return null;
		do {
			if (self.matches(selector)) return self;
			self = self.parentElement;
		} while (self !== null);
		return null;
	}

	static indexOfParent(el: Element): number {
		const childrens = Array.from(el.parentElement.children);
		return childrens.indexOf(el);
	}
}
