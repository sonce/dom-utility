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

	/**
	 * 调换两个元素
	 * @param element1 调换位置的元素1
	 * @param element2 调换位置的元素2
	 */
	static swap(element1: Element, element2: Element): void {
		// save the location of element2
		const parent2 = element1.parentNode;
		const next2 = element2.nextSibling;
		// special case for element1 is the next sibling of element2
		if (next2 === element1) {
			// just put element1 before element2
			parent2.insertBefore(element1, element2);
		} else {
			// insert element2 right before element1
			element1.parentNode.insertBefore(element2, element1);

			// now insert element1 where element2 was
			if (next2) {
				// if there was an element after element2, then insert element1 right before that
				parent2.insertBefore(element1, next2);
			} else {
				// otherwise, just append as last child
				parent2.appendChild(element1);
			}
		}
	}
}
