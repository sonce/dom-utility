# js-dom-utility

> DOM utility library

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i --save js-dom-utility
```

## Usage

```js
import {ElementUtil,ObjectUtil,StringUtil} from "js-dom-utility"
```

## Short description

+ ElementUtil
	+ `matches(HTMLElement, selector)` : `HTMLElement.matches()` wrapper and polyfill (if the browser does not support method)
	+ `getParents(Element,[selector])` get parents with selector
	+ `closest(HTMLElement, selector)` : `HTMLElement.closest()` wrapper and polyfill (if the browser does not support method)

+ ObjectUtil
	+ `isNull(val)` : if the val is undefined or null return true,else return false.

+ StringUtil
	+ `format(str, args)`:format string '{0},{1}' with args
	+ `isNullOrEmpty(val)`:string is null or '' return true
	+ `Trim(str,[c])`:replace start and end of string with arg c(c default nullspace)
	+ `TrimStart(str,[c])`:replace end of string with c (c default nullspace)
	+ `TrimEnd(str,[c])`:replace end of string with c(c default nullspace)
