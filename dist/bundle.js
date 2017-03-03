/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-webpack-loader-syntax
module.exports = __webpack_require__(5);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.css = __webpack_require__ (21);
module.exports.js = __webpack_require__ (6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__ (18);
__webpack_require__ (8);
__webpack_require__ (9);
__webpack_require__ (10);
__webpack_require__ (11);
__webpack_require__ (12);
__webpack_require__ (13);
__webpack_require__ (17);
__webpack_require__ (14);
__webpack_require__ (15);
__webpack_require__ (16);
__webpack_require__ (7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\na {\n  background-color: transparent;\n}\n\na:active,\na:hover {\n  outline: 0;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\ndfn {\n  font-style: italic;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ninput {\n  line-height: normal;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  border: 0;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n}\n\noptgroup {\n  font-weight: bold;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n\n  .navbar {\n    display: none;\n  }\n\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n\n  .label {\n    border: 1px solid #000;\n  }\n\n  .table {\n    border-collapse: collapse !important;\n  }\n\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff;\n}\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\na {\n  color: #337ab7;\n  text-decoration: none;\n}\n\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\n\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\nfigure {\n  margin: 0;\n}\n\nimg {\n  vertical-align: middle;\n}\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-rounded {\n  border-radius: 6px;\n}\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\n\nh1 small,\nh1 .small,\nh2 small,\nh2 .small,\nh3 small,\nh3 .small,\nh4 small,\nh4 .small,\nh5 small,\nh5 .small,\nh6 small,\nh6 .small,\n.h1 small,\n.h1 .small,\n.h2 small,\n.h2 .small,\n.h3 small,\n.h3 .small,\n.h4 small,\n.h4 .small,\n.h5 small,\n.h5 .small,\n.h6 small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777777;\n}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\nh1 small,\nh1 .small,\n.h1 small,\n.h1 .small,\nh2 small,\nh2 .small,\n.h2 small,\n.h2 .small,\nh3 small,\nh3 .small,\n.h3 small,\n.h3 .small {\n  font-size: 65%;\n}\n\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nh4 small,\nh4 .small,\n.h4 small,\n.h4 .small,\nh5 small,\nh5 .small,\n.h5 small,\n.h5 .small,\nh6 small,\nh6 .small,\n.h6 small,\n.h6 .small {\n  font-size: 75%;\n}\n\nh1,\n.h1 {\n  font-size: 36px;\n}\n\nh2,\n.h2 {\n  font-size: 30px;\n}\n\nh3,\n.h3 {\n  font-size: 24px;\n}\n\nh4,\n.h4 {\n  font-size: 18px;\n}\n\nh5,\n.h5 {\n  font-size: 14px;\n}\n\nh6,\n.h6 {\n  font-size: 12px;\n}\n\np {\n  margin: 0 0 10px;\n}\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\n\nsmall,\n.small {\n  font-size: 85%;\n}\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-nowrap {\n  white-space: nowrap;\n}\n\n.text-lowercase {\n  text-transform: lowercase;\n}\n\n.text-uppercase,\n.initialism {\n  text-transform: uppercase;\n}\n\n.text-capitalize {\n  text-transform: capitalize;\n}\n\n.text-muted {\n  color: #777777;\n}\n\n.text-primary {\n  color: #337ab7;\n}\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n\n.text-success {\n  color: #3c763d;\n}\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n\n.text-info {\n  color: #31708f;\n}\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n\n.text-warning {\n  color: #8a6d3b;\n}\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n\n.text-danger {\n  color: #a94442;\n}\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n\n.bg-primary {\n  color: #fff;\n}\n\n.bg-primary {\n  background-color: #337ab7;\n}\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n\n.bg-success {\n  background-color: #dff0d8;\n}\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n\n.bg-info {\n  background-color: #d9edf7;\n}\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n\n.bg-warning {\n  background-color: #fcf8e3;\n}\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n\n.bg-danger {\n  background-color: #f2dede;\n}\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee;\n}\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\nul ul,\nul ol,\nol ul,\nol ol {\n  margin-bottom: 0;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\ndt,\ndd {\n  line-height: 1.42857;\n}\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n.dl-horizontal dd:before,\n.dl-horizontal dd:after {\n  content: \" \";\n  display: table;\n}\n\n.dl-horizontal dd:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777;\n}\n\n.initialism {\n  font-size: 90%;\n}\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\n\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\n\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857;\n  color: #777777;\n}\n\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right;\n}\n\n.blockquote-reverse footer:before,\n.blockquote-reverse small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right footer:before,\nblockquote.pull-right small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n\n.blockquote-reverse footer:after,\n.blockquote-reverse small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right footer:after,\nblockquote.pull-right small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container:before,\n.container:after {\n  content: \" \";\n  display: table;\n}\n\n.container:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container-fluid:before,\n.container-fluid:after {\n  content: \" \";\n  display: table;\n}\n\n.container-fluid:after {\n  clear: both;\n}\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.row:before,\n.row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1,\n.col-sm-1,\n.col-md-1,\n.col-lg-1,\n.col-xs-2,\n.col-sm-2,\n.col-md-2,\n.col-lg-2,\n.col-xs-3,\n.col-sm-3,\n.col-md-3,\n.col-lg-3,\n.col-xs-4,\n.col-sm-4,\n.col-md-4,\n.col-lg-4,\n.col-xs-5,\n.col-sm-5,\n.col-md-5,\n.col-lg-5,\n.col-xs-6,\n.col-sm-6,\n.col-md-6,\n.col-lg-6,\n.col-xs-7,\n.col-sm-7,\n.col-md-7,\n.col-lg-7,\n.col-xs-8,\n.col-sm-8,\n.col-md-8,\n.col-lg-8,\n.col-xs-9,\n.col-sm-9,\n.col-md-9,\n.col-lg-9,\n.col-xs-10,\n.col-sm-10,\n.col-md-10,\n.col-lg-10,\n.col-xs-11,\n.col-sm-11,\n.col-md-11,\n.col-lg-11,\n.col-xs-12,\n.col-sm-12,\n.col-md-12,\n.col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n@media (min-width: 768px) {\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12 {\n    float: left;\n  }\n\n  .col-sm-1 {\n    width: 8.33333%;\n  }\n\n  .col-sm-2 {\n    width: 16.66667%;\n  }\n\n  .col-sm-3 {\n    width: 25%;\n  }\n\n  .col-sm-4 {\n    width: 33.33333%;\n  }\n\n  .col-sm-5 {\n    width: 41.66667%;\n  }\n\n  .col-sm-6 {\n    width: 50%;\n  }\n\n  .col-sm-7 {\n    width: 58.33333%;\n  }\n\n  .col-sm-8 {\n    width: 66.66667%;\n  }\n\n  .col-sm-9 {\n    width: 75%;\n  }\n\n  .col-sm-10 {\n    width: 83.33333%;\n  }\n\n  .col-sm-11 {\n    width: 91.66667%;\n  }\n\n  .col-sm-12 {\n    width: 100%;\n  }\n\n  .col-sm-pull-0 {\n    right: auto;\n  }\n\n  .col-sm-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-sm-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n\n  .col-sm-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-sm-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n\n  .col-sm-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-sm-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n\n  .col-sm-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-sm-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n\n  .col-sm-push-0 {\n    left: auto;\n  }\n\n  .col-sm-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-sm-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-sm-push-3 {\n    left: 25%;\n  }\n\n  .col-sm-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-sm-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-sm-push-6 {\n    left: 50%;\n  }\n\n  .col-sm-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-sm-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-sm-push-9 {\n    left: 75%;\n  }\n\n  .col-sm-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-sm-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-sm-push-12 {\n    left: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12 {\n    float: left;\n  }\n\n  .col-md-1 {\n    width: 8.33333%;\n  }\n\n  .col-md-2 {\n    width: 16.66667%;\n  }\n\n  .col-md-3 {\n    width: 25%;\n  }\n\n  .col-md-4 {\n    width: 33.33333%;\n  }\n\n  .col-md-5 {\n    width: 41.66667%;\n  }\n\n  .col-md-6 {\n    width: 50%;\n  }\n\n  .col-md-7 {\n    width: 58.33333%;\n  }\n\n  .col-md-8 {\n    width: 66.66667%;\n  }\n\n  .col-md-9 {\n    width: 75%;\n  }\n\n  .col-md-10 {\n    width: 83.33333%;\n  }\n\n  .col-md-11 {\n    width: 91.66667%;\n  }\n\n  .col-md-12 {\n    width: 100%;\n  }\n\n  .col-md-pull-0 {\n    right: auto;\n  }\n\n  .col-md-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-md-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-md-pull-3 {\n    right: 25%;\n  }\n\n  .col-md-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-md-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-md-pull-6 {\n    right: 50%;\n  }\n\n  .col-md-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-md-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-md-pull-9 {\n    right: 75%;\n  }\n\n  .col-md-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-md-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-md-pull-12 {\n    right: 100%;\n  }\n\n  .col-md-push-0 {\n    left: auto;\n  }\n\n  .col-md-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-md-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-md-push-3 {\n    left: 25%;\n  }\n\n  .col-md-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-md-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-md-push-6 {\n    left: 50%;\n  }\n\n  .col-md-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-md-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-md-push-9 {\n    left: 75%;\n  }\n\n  .col-md-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-md-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-md-push-12 {\n    left: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12 {\n    float: left;\n  }\n\n  .col-lg-1 {\n    width: 8.33333%;\n  }\n\n  .col-lg-2 {\n    width: 16.66667%;\n  }\n\n  .col-lg-3 {\n    width: 25%;\n  }\n\n  .col-lg-4 {\n    width: 33.33333%;\n  }\n\n  .col-lg-5 {\n    width: 41.66667%;\n  }\n\n  .col-lg-6 {\n    width: 50%;\n  }\n\n  .col-lg-7 {\n    width: 58.33333%;\n  }\n\n  .col-lg-8 {\n    width: 66.66667%;\n  }\n\n  .col-lg-9 {\n    width: 75%;\n  }\n\n  .col-lg-10 {\n    width: 83.33333%;\n  }\n\n  .col-lg-11 {\n    width: 91.66667%;\n  }\n\n  .col-lg-12 {\n    width: 100%;\n  }\n\n  .col-lg-pull-0 {\n    right: auto;\n  }\n\n  .col-lg-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-lg-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n\n  .col-lg-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-lg-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n\n  .col-lg-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-lg-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n\n  .col-lg-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-lg-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n\n  .col-lg-push-0 {\n    left: auto;\n  }\n\n  .col-lg-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-lg-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-lg-push-3 {\n    left: 25%;\n  }\n\n  .col-lg-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-lg-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-lg-push-6 {\n    left: 50%;\n  }\n\n  .col-lg-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-lg-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-lg-push-9 {\n    left: 75%;\n  }\n\n  .col-lg-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-lg-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-lg-push-12 {\n    left: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n}\n\ntable {\n  background-color: transparent;\n}\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left;\n}\n\nth {\n  text-align: left;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\n.table > thead > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > th,\n.table > tbody > tr > td,\n.table > tfoot > tr > th,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n\n.table > caption + thead > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > th,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n\n.table .table {\n  background-color: #fff;\n}\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n\n.table-bordered {\n  border: 1px solid #ddd;\n}\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > th,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > th,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column;\n}\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell;\n}\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%;\n}\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\n\ninput[type=\"file\"] {\n  display: block;\n}\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\n\nselect[multiple],\nselect[size] {\n  height: auto;\n}\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n\n.form-control::-ms-expand {\n  border: 0;\n  background-color: transparent;\n}\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eeeeee;\n  opacity: 1;\n}\n\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n\n  input[type=\"date\"].input-sm,\n  .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px;\n  }\n\n  input[type=\"date\"].input-lg,\n  .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\n\ninput[type=\"radio\"][disabled],\ninput[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed;\n}\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed;\n}\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px;\n}\n\n.form-control-static.input-lg,\n.input-group-lg > .form-control-static.form-control,\n.input-group-lg > .form-control-static.input-group-addon,\n.input-group-lg > .input-group-btn > .form-control-static.btn,\n.form-control-static.input-sm,\n.input-group-sm > .form-control-static.form-control,\n.input-group-sm > .form-control-static.input-group-addon,\n.input-group-sm > .input-group-btn > .form-control-static.btn {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-sm,\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\nselect.input-sm,\n.input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px;\n}\n\ntextarea.input-sm,\n.input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto;\n}\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.input-lg,\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\nselect.input-lg,\n.input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px;\n}\n\ntextarea.input-lg,\n.input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto;\n}\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.has-feedback {\n  position: relative;\n}\n\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n\n.input-lg + .form-control-feedback,\n.input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n\n.input-sm + .form-control-feedback,\n.input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8;\n}\n\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede;\n}\n\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after {\n  content: \" \";\n  display: table;\n}\n\n.form-horizontal .form-group:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n  }\n}\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.btn:focus,\n.btn.focus,\n.btn:active:focus,\n.btn:active.focus,\n.btn.active:focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active:hover,\n.btn-default:active:focus,\n.btn-default:active.focus,\n.btn-default.active:hover,\n.btn-default.active:focus,\n.btn-default.active.focus,\n.open > .btn-default.dropdown-toggle:hover,\n.open > .btn-default.dropdown-toggle:focus,\n.open > .btn-default.dropdown-toggle.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-default.disabled:hover,\n.btn-default.disabled:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled]:hover,\n.btn-default[disabled]:focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default:hover,\nfieldset[disabled] .btn-default:focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active:hover,\n.btn-primary:active:focus,\n.btn-primary:active.focus,\n.btn-primary.active:hover,\n.btn-primary.active:focus,\n.btn-primary.active.focus,\n.open > .btn-primary.dropdown-toggle:hover,\n.open > .btn-primary.dropdown-toggle:focus,\n.open > .btn-primary.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-primary.disabled:hover,\n.btn-primary.disabled:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled]:hover,\n.btn-primary[disabled]:focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary:hover,\nfieldset[disabled] .btn-primary:focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active:hover,\n.btn-success:active:focus,\n.btn-success:active.focus,\n.btn-success.active:hover,\n.btn-success.active:focus,\n.btn-success.active.focus,\n.open > .btn-success.dropdown-toggle:hover,\n.open > .btn-success.dropdown-toggle:focus,\n.open > .btn-success.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-success.disabled:hover,\n.btn-success.disabled:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled]:hover,\n.btn-success[disabled]:focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success:hover,\nfieldset[disabled] .btn-success:focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active:hover,\n.btn-info:active:focus,\n.btn-info:active.focus,\n.btn-info.active:hover,\n.btn-info.active:focus,\n.btn-info.active.focus,\n.open > .btn-info.dropdown-toggle:hover,\n.open > .btn-info.dropdown-toggle:focus,\n.open > .btn-info.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-info.disabled:hover,\n.btn-info.disabled:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled]:hover,\n.btn-info[disabled]:focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info:hover,\nfieldset[disabled] .btn-info:focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active:hover,\n.btn-warning:active:focus,\n.btn-warning:active.focus,\n.btn-warning.active:hover,\n.btn-warning.active:focus,\n.btn-warning.active.focus,\n.open > .btn-warning.dropdown-toggle:hover,\n.open > .btn-warning.dropdown-toggle:focus,\n.open > .btn-warning.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-warning.disabled:hover,\n.btn-warning.disabled:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled]:hover,\n.btn-warning[disabled]:focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning:hover,\nfieldset[disabled] .btn-warning:focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active:hover,\n.btn-danger:active:focus,\n.btn-danger:active.focus,\n.btn-danger.active:hover,\n.btn-danger.active:focus,\n.btn-danger.active.focus,\n.open > .btn-danger.dropdown-toggle:hover,\n.open > .btn-danger.dropdown-toggle:focus,\n.open > .btn-danger.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-danger.disabled:hover,\n.btn-danger.disabled:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled]:hover,\n.btn-danger[disabled]:focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger:hover,\nfieldset[disabled] .btn-danger:focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0;\n}\n\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n\n.btn-link[disabled]:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:hover,\nfieldset[disabled] .btn-link:focus {\n  color: #777777;\n  text-decoration: none;\n}\n\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n\n.fade.in {\n  opacity: 1;\n}\n\n.collapse {\n  display: none;\n}\n\n.collapse.in {\n  display: block;\n}\n\ntr.collapse.in {\n  display: table-row;\n}\n\ntbody.collapse.in {\n  display: table-row-group;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n\n.dropup,\n.dropdown {\n  position: relative;\n}\n\n.dropdown-toggle:focus {\n  outline: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857;\n  color: #333333;\n  white-space: nowrap;\n}\n\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}\n\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7;\n}\n\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777777;\n}\n\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed;\n}\n\n.open > .dropdown-menu {\n  display: block;\n}\n\n.open > a {\n  outline: 0;\n}\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0;\n}\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap;\n}\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990;\n}\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\";\n}\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto;\n  }\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn:hover,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n\n.btn-toolbar {\n  margin-left: -5px;\n}\n\n.btn-toolbar:before,\n.btn-toolbar:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-toolbar:after {\n  clear: both;\n}\n\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group > .btn-group {\n  float: left;\n}\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.btn-group > .btn-lg + .dropdown-toggle,\n.btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn .caret {\n  margin-left: 0;\n}\n\n.btn-lg .caret,\n.btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n\n.dropup .btn-lg .caret,\n.dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-group-vertical > .btn-group:after {\n  clear: both;\n}\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.input-group .form-control:focus {\n  z-index: 3;\n}\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.input-group-addon.input-sm,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .input-group-addon.btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n.input-group-addon.input-lg,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .input-group-addon.btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.input-group-addon:first-child {\n  border-right: 0;\n}\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.input-group-addon:last-child {\n  border-left: 0;\n}\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n\n.input-group-btn > .btn {\n  position: relative;\n}\n\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\n.nav:before,\n.nav:after {\n  content: \" \";\n  display: table;\n}\n\n.nav:after {\n  clear: both;\n}\n\n.nav > li {\n  position: relative;\n  display: block;\n}\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n\n.nav > li.disabled > a {\n  color: #777777;\n}\n\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777777;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eeeeee;\n  border-color: #337ab7;\n}\n\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.nav > li > a > img {\n  max-width: none;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n\n.nav-tabs > li > a:hover {\n  border-color: #eeeeee #eeeeee #ddd;\n}\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555555;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n\n.nav-pills > li {\n  float: left;\n}\n\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n\n.nav-stacked > li {\n  float: none;\n}\n\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n\n.nav-justified,\n.nav-tabs.nav-justified {\n  width: 100%;\n}\n\n.nav-justified > li,\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n\n.nav-justified > li > a,\n.nav-tabs.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n\n@media (min-width: 768px) {\n  .nav-justified > li,\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n\n  .nav-justified > li > a,\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n\n.nav-tabs-justified,\n.nav-tabs.nav-justified {\n  border-bottom: 0;\n}\n\n.nav-tabs-justified > li > a,\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n\n.nav-tabs-justified > .active > a,\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a,\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n\n  .nav-tabs-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n\n.navbar:before,\n.navbar:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n\n.navbar-header:before,\n.navbar-header:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar-header:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n\n.navbar-collapse:before,\n.navbar-collapse:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar-collapse:after {\n  clear: both;\n}\n\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-header,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px;\n}\n\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n\n.navbar-brand > img {\n  display: block;\n}\n\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.navbar-toggle:focus {\n  outline: 0;\n}\n\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n\n  .navbar-nav > li {\n    float: left;\n  }\n\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n}\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.navbar-btn.btn-sm,\n.btn-group-sm > .navbar-btn.btn {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.navbar-btn.btn-xs,\n.btn-group-xs > .navbar-btn.btn {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n\n.navbar-default .navbar-brand {\n  color: #777;\n}\n\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-text {\n  color: #777;\n}\n\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: #e7e7e7;\n  color: #555;\n}\n\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n\n.navbar-default .navbar-link {\n  color: #777;\n}\n\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n\n.navbar-default .btn-link {\n  color: #777;\n}\n\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n\n.navbar-default .btn-link[disabled]:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:hover,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909;\n}\n\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #090909;\n}\n\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #090909;\n  color: #fff;\n}\n\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n\n.navbar-inverse .btn-link[disabled]:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n\n.breadcrumb > li {\n  display: inline-block;\n}\n\n.breadcrumb > li + li:before {\n  content: \"/\\A0\";\n  padding: 0 5px;\n  color: #ccc;\n}\n\n.breadcrumb > .active {\n  color: #777777;\n}\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n\n.pagination > li {\n  display: inline;\n}\n\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  line-height: 1.42857;\n  text-decoration: none;\n  color: #337ab7;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  margin-left: -1px;\n}\n\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.pagination > li > a:hover,\n.pagination > li > a:focus,\n.pagination > li > span:hover,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eeeeee;\n  border-color: #ddd;\n}\n\n.pagination > .active > a,\n.pagination > .active > a:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span,\n.pagination > .active > span:hover,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n  cursor: default;\n}\n\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777777;\n  background-color: #fff;\n  border-color: #ddd;\n  cursor: not-allowed;\n}\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center;\n}\n\n.pager:before,\n.pager:after {\n  content: \" \";\n  display: table;\n}\n\n.pager:after {\n  clear: both;\n}\n\n.pager li {\n  display: inline;\n}\n\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777777;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\n\n.label:empty {\n  display: none;\n}\n\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.label-default {\n  background-color: #777777;\n}\n\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n\n.label-primary {\n  background-color: #337ab7;\n}\n\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n\n.label-success {\n  background-color: #5cb85c;\n}\n\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n\n.label-info {\n  background-color: #5bc0de;\n}\n\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n\n.label-warning {\n  background-color: #f0ad4e;\n}\n\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n\n.label-danger {\n  background-color: #d9534f;\n}\n\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.btn-xs .badge,\n.btn-group-xs > .btn .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\n\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.list-group-item > .badge {\n  float: right;\n}\n\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee;\n}\n\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 6px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.jumbotron .container {\n  max-width: 100%;\n}\n\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out;\n}\n\n.thumbnail > img,\n.thumbnail a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.thumbnail .caption {\n  padding: 9px;\n  color: #333333;\n}\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n\n.alert .alert-link {\n  font-weight: bold;\n}\n\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n\n.alert > p + p {\n  margin-top: 5px;\n}\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d;\n}\n\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n\n.alert-success .alert-link {\n  color: #2b542c;\n}\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n}\n\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n\n.alert-info .alert-link {\n  color: #245269;\n}\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b;\n}\n\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n\n.alert-warning .alert-link {\n  color: #66512c;\n}\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442;\n}\n\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n\n.alert-danger .alert-link {\n  color: #843534;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite;\n}\n\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.media {\n  margin-top: 15px;\n}\n\n.media:first-child {\n  margin-top: 0;\n}\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n\n.media-body {\n  width: 10000px;\n}\n\n.media-object {\n  display: block;\n}\n\n.media-object.img-thumbnail {\n  max-width: none;\n}\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.media-middle {\n  vertical-align: middle;\n}\n\n.media-bottom {\n  vertical-align: bottom;\n}\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\n\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\n\na.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:hover,\nbutton.list-group-item:focus {\n  text-decoration: none;\n  color: #555;\n  background-color: #f5f5f5;\n}\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed;\n}\n\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777777;\n}\n\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\n\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:hover,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\n\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active,\nbutton.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\n\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:hover,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\n\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active,\nbutton.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\n\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:hover,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\n\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active,\nbutton.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\n\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:hover,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\n\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active,\nbutton.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.panel-body {\n  padding: 15px;\n}\n\n.panel-body:before,\n.panel-body:after {\n  content: \" \";\n  display: table;\n}\n\n.panel-body:after {\n  clear: both;\n}\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0;\n}\n\n.panel-group {\n  margin-bottom: 20px;\n}\n\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n\n.panel-group .panel-footer {\n  border-top: 0;\n}\n\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n\n.panel-default {\n  border-color: #ddd;\n}\n\n.panel-default > .panel-heading {\n  color: #333333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333333;\n}\n\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n\n.panel-primary {\n  border-color: #337ab7;\n}\n\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n\n.panel-success {\n  border-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n\n.panel-info {\n  border-color: #bce8f1;\n}\n\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n\n.panel-warning {\n  border-color: #faebcc;\n}\n\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n\n.panel-danger {\n  border-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n}\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, -25%);\n  -ms-transform: translate(0, -25%);\n  -o-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  -moz-transition: -moz-transform 0.3s ease-out;\n  -o-transition: -o-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n}\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.modal-header:before,\n.modal-header:after {\n  content: \" \";\n  display: table;\n}\n\n.modal-header:after {\n  clear: both;\n}\n\n.modal-header .close {\n  margin-top: -2px;\n}\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857;\n}\n\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n\n.modal-footer:before,\n.modal-footer:after {\n  content: \" \";\n  display: table;\n}\n\n.modal-footer:after {\n  clear: both;\n}\n\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0;\n}\n\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  }\n\n  .modal-sm {\n    width: 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n\n.popover.top {\n  margin-top: -10px;\n}\n\n.popover.right {\n  margin-left: 10px;\n}\n\n.popover.bottom {\n  margin-top: 10px;\n}\n\n.popover.left {\n  margin-left: -10px;\n}\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n\n.popover-content {\n  padding: 9px 14px;\n}\n\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.popover > .arrow {\n  border-width: 11px;\n}\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\";\n}\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px;\n}\n\n.popover.top > .arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #fff;\n}\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.right > .arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #fff;\n}\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px;\n}\n\n.popover.bottom > .arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.left > .arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #fff;\n  bottom: -10px;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.carousel-inner > .item {\n  display: none;\n  position: relative;\n  -webkit-transition: 0.6s ease-in-out left;\n  -o-transition: 0.6s ease-in-out left;\n  transition: 0.6s ease-in-out left;\n}\n\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  line-height: 1;\n}\n\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\n    -moz-transition: -moz-transform 0.6s ease-in-out;\n    -o-transition: -o-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n    -moz-perspective: 1000px;\n    perspective: 1000px;\n  }\n\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    left: 0;\n  }\n\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    left: 0;\n  }\n\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    left: 0;\n  }\n}\n\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n\n.carousel-inner > .active {\n  left: 0;\n}\n\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.carousel-inner > .next {\n  left: 100%;\n}\n\n.carousel-inner > .prev {\n  left: -100%;\n}\n\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n\n.carousel-inner > .active.left {\n  left: -100%;\n}\n\n.carousel-inner > .active.right {\n  left: 100%;\n}\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent;\n}\n\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n\n.carousel-control.right {\n  left: auto;\n  right: 0;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n}\n\n.carousel-control:hover,\n.carousel-control:focus {\n  outline: 0;\n  color: #fff;\n  text-decoration: none;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  z-index: 5;\n  display: inline-block;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  line-height: 1;\n  font-family: serif;\n}\n\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n\n.carousel-control .icon-next:before {\n  content: '\\203A';\n}\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n}\n\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: transparent;\n}\n\n.carousel-indicators .active {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n}\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n\n.carousel-caption .btn {\n  text-shadow: none;\n}\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pull-right {\n  float: right !important;\n}\n\n.pull-left {\n  float: left !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.show {\n  display: block !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.affix {\n  position: fixed;\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\n.visible-xs {\n  display: none !important;\n}\n\n.visible-sm {\n  display: none !important;\n}\n\n.visible-md {\n  display: none !important;\n}\n\n.visible-lg {\n  display: none !important;\n}\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n\n  table.visible-xs {\n    display: table !important;\n  }\n\n  tr.visible-xs {\n    display: table-row !important;\n  }\n\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n\n  table.visible-sm {\n    display: table !important;\n  }\n\n  tr.visible-sm {\n    display: table-row !important;\n  }\n\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n\n  table.visible-md {\n    display: table !important;\n  }\n\n  tr.visible-md {\n    display: table-row !important;\n  }\n\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n\n  table.visible-lg {\n    display: table !important;\n  }\n\n  tr.visible-lg {\n    display: table-row !important;\n  }\n\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n\n.visible-print {\n  display: none !important;\n}\n\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n\n  table.visible-print {\n    display: table !important;\n  }\n\n  tr.visible-print {\n    display: table-row !important;\n  }\n\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n\n.visible-print-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n\n.visible-print-inline {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n\n.visible-print-inline-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLWxvYWRlci9uby1vcC5qcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19oaWRlLXRleHQuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX29wYWNpdHkuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2ltYWdlLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19sYWJlbHMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3Jlc2V0LWZpbHRlci5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcmVzaXplLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19yZXNwb25zaXZlLXZpc2liaWxpdHkuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3NpemUuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3RhYi1mb2N1cy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcmVzZXQtdGV4dC5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fdGV4dC1lbXBoYXNpcy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fdGV4dC1vdmVyZmxvdy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fdmVuZG9yLXByZWZpeGVzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19hbGVydHMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2J1dHRvbnMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3BhbmVscy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcGFnaW5hdGlvbi5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fbGlzdC1ncm91cC5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fbmF2LWRpdmlkZXIuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19wcm9ncmVzcy1iYXIuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3RhYmxlLXJvdy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fYmFja2dyb3VuZC12YXJpYW50LnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19ib3JkZXItcmFkaXVzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19ncmFkaWVudHMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2NsZWFyZml4LnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19jZW50ZXItYmxvY2suc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX25hdi12ZXJ0aWNhbC1hbGlnbi5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fZ3JpZC1mcmFtZXdvcmsuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2dyaWQuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX25vcm1hbGl6ZS5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wcmludC5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19zY2FmZm9sZGluZy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL190eXBlLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2NvZGUuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fZ3JpZC5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL190YWJsZXMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fZm9ybXMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYnV0dG9ucy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jb21wb25lbnQtYW5pbWF0aW9ucy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19kcm9wZG93bnMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYnV0dG9uLWdyb3Vwcy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19pbnB1dC1ncm91cHMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbmF2cy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19uYXZiYXIuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYnJlYWRjcnVtYnMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcGFnaW5hdGlvbi5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wYWdlci5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19sYWJlbHMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYmFkZ2VzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2p1bWJvdHJvbi5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL190aHVtYm5haWxzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2FsZXJ0cy5zY3NzIiwiL1VzZXJzL3Jvc3MvRG9jdW1lbnRzL3Byb2plY3RzLXJvc3Mvd2EvcmVhY3Qtcm9zcy9yZWFjdGpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wcm9ncmVzcy1iYXJzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX21lZGlhLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2xpc3QtZ3JvdXAuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcGFuZWxzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3dlbGxzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3Jlc3BvbnNpdmUtZW1iZWQuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fY2xvc2Uuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbW9kYWxzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3Rvb2x0aXAuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcG9wb3ZlcnMuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fY2Fyb3VzZWwuc2NzcyIsIi9Vc2Vycy9yb3NzL0RvY3VtZW50cy9wcm9qZWN0cy1yb3NzL3dhL3JlYWN0LXJvc3MvcmVhY3Rqcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdXRpbGl0aWVzLnNjc3MiLCIvVXNlcnMvcm9zcy9Eb2N1bWVudHMvcHJvamVjdHMtcm9zcy93YS9yZWFjdC1yb3NzL3JlYWN0anMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3Jlc3BvbnNpdmUtdXRpbGl0aWVzLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX21peGluc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3ZhcmlhYmxlc1wiO1xuJGljb24tZm9udC1wYXRoOiBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9mb250cy9ib290c3RyYXAvXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbm9ybWFsaXplXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcHJpbnRcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19zY2FmZm9sZGluZ1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3R5cGVcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jb2RlXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fZ3JpZFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3RhYmxlc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Zvcm1zXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYnV0dG9uc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2NvbXBvbmVudC1hbmltYXRpb25zXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fZHJvcGRvd25zXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYnV0dG9uLWdyb3Vwc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2lucHV0LWdyb3Vwc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX25hdnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19uYXZiYXJcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19icmVhZGNydW1ic1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3BhZ2luYXRpb25cIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wYWdlclwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2xhYmVsc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2JhZGdlc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2p1bWJvdHJvblwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3RodW1ibmFpbHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19hbGVydHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wcm9ncmVzcy1iYXJzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbWVkaWFcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19saXN0LWdyb3VwXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcGFuZWxzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fd2VsbHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19yZXNwb25zaXZlLWVtYmVkXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fY2xvc2VcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19tb2RhbHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL190b29sdGlwXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcG9wb3ZlcnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jYXJvdXNlbFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3V0aWxpdGllc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3Jlc3BvbnNpdmUtdXRpbGl0aWVzXCI7XG5cbiIsIi8vIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVXRpbGl0aWVzXG5AaW1wb3J0IFwibWl4aW5zL2hpZGUtdGV4dFwiO1xuQGltcG9ydCBcIm1peGlucy9vcGFjaXR5XCI7XG5AaW1wb3J0IFwibWl4aW5zL2ltYWdlXCI7XG5AaW1wb3J0IFwibWl4aW5zL2xhYmVsc1wiO1xuQGltcG9ydCBcIm1peGlucy9yZXNldC1maWx0ZXJcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcmVzaXplXCI7XG5AaW1wb3J0IFwibWl4aW5zL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eVwiO1xuQGltcG9ydCBcIm1peGlucy9zaXplXCI7XG5AaW1wb3J0IFwibWl4aW5zL3RhYi1mb2N1c1wiO1xuQGltcG9ydCBcIm1peGlucy9yZXNldC10ZXh0XCI7XG5AaW1wb3J0IFwibWl4aW5zL3RleHQtZW1waGFzaXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvdGV4dC1vdmVyZmxvd1wiO1xuQGltcG9ydCBcIm1peGlucy92ZW5kb3ItcHJlZml4ZXNcIjtcblxuLy8gQ29tcG9uZW50c1xuQGltcG9ydCBcIm1peGlucy9hbGVydHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvYnV0dG9uc1wiO1xuQGltcG9ydCBcIm1peGlucy9wYW5lbHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcGFnaW5hdGlvblwiO1xuQGltcG9ydCBcIm1peGlucy9saXN0LWdyb3VwXCI7XG5AaW1wb3J0IFwibWl4aW5zL25hdi1kaXZpZGVyXCI7XG5AaW1wb3J0IFwibWl4aW5zL2Zvcm1zXCI7XG5AaW1wb3J0IFwibWl4aW5zL3Byb2dyZXNzLWJhclwiO1xuQGltcG9ydCBcIm1peGlucy90YWJsZS1yb3dcIjtcblxuLy8gU2tpbnNcbkBpbXBvcnQgXCJtaXhpbnMvYmFja2dyb3VuZC12YXJpYW50XCI7XG5AaW1wb3J0IFwibWl4aW5zL2JvcmRlci1yYWRpdXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvZ3JhZGllbnRzXCI7XG5cbi8vIExheW91dFxuQGltcG9ydCBcIm1peGlucy9jbGVhcmZpeFwiO1xuQGltcG9ydCBcIm1peGlucy9jZW50ZXItYmxvY2tcIjtcbkBpbXBvcnQgXCJtaXhpbnMvbmF2LXZlcnRpY2FsLWFsaWduXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyaWQtZnJhbWV3b3JrXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyaWRcIjtcbiIsIi8vIENTUyBpbWFnZSByZXBsYWNlbWVudFxuLy9cbi8vIEhlYWRzIHVwISB2MyBsYXVuY2hlZCB3aXRoIG9ubHkgYC5oaWRlLXRleHQoKWAsIGJ1dCBwZXIgb3VyIHBhdHRlcm4gZm9yXG4vLyBtaXhpbnMgYmVpbmcgcmV1c2VkIGFzIGNsYXNzZXMgd2l0aCB0aGUgc2FtZSBuYW1lLCB0aGlzIGRvZXNuJ3QgaG9sZCB1cC4gQXNcbi8vIG9mIHYzLjAuMSB3ZSBoYXZlIGFkZGVkIGAudGV4dC1oaWRlKClgIGFuZCBkZXByZWNhdGVkIGAuaGlkZS10ZXh0KClgLlxuLy9cbi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvY29tbWl0L2FhMDM5NmVhZTc1N1xuXG4vLyBEZXByZWNhdGVkIGFzIG9mIHYzLjAuMSAoaGFzIGJlZW4gcmVtb3ZlZCBpbiB2NClcbkBtaXhpbiBoaWRlLXRleHQoKSB7XG4gIGZvbnQ6IDAvMCBhO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBOZXcgbWl4aW4gdG8gdXNlIGFzIG9mIHYzLjAuMVxuQG1peGluIHRleHQtaGlkZSgpIHtcbiAgQGluY2x1ZGUgaGlkZS10ZXh0O1xufVxuIiwiLy8gT3BhY2l0eVxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xuICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgLy8gSUU4IGZpbHRlclxuICAkb3BhY2l0eS1pZTogKCRvcGFjaXR5ICogMTAwKTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTtcbn1cbiIsIi8vIEltYWdlIE1peGluc1xuLy8gLSBSZXNwb25zaXZlIGltYWdlXG4vLyAtIFJldGluYSBpbWFnZVxuXG5cbi8vIFJlc3BvbnNpdmUgaW1hZ2Vcbi8vXG4vLyBLZWVwIGltYWdlcyBmcm9tIHNjYWxpbmcgYmV5b25kIHRoZSB3aWR0aCBvZiB0aGVpciBwYXJlbnRzLlxuQG1peGluIGltZy1yZXNwb25zaXZlKCRkaXNwbGF5OiBibG9jaykge1xuICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgbWF4LXdpZHRoOiAxMDAlOyAvLyBQYXJ0IDE6IFNldCBhIG1heGltdW0gcmVsYXRpdmUgdG8gdGhlIHBhcmVudFxuICBoZWlnaHQ6IGF1dG87IC8vIFBhcnQgMjogU2NhbGUgdGhlIGhlaWdodCBhY2NvcmRpbmcgdG8gdGhlIHdpZHRoLCBvdGhlcndpc2UgeW91IGdldCBzdHJldGNoaW5nXG59XG5cblxuLy8gUmV0aW5hIGltYWdlXG4vL1xuLy8gU2hvcnQgcmV0aW5hIG1peGluIGZvciBzZXR0aW5nIGJhY2tncm91bmQtaW1hZ2UgYW5kIC1zaXplLiBOb3RlIHRoYXQgdGhlXG4vLyBzcGVsbGluZyBvZiBgbWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvYCBpcyBpbnRlbnRpb25hbC5cbkBtaXhpbiBpbWctcmV0aW5hKCRmaWxlLTF4LCAkZmlsZS0yeCwgJHdpZHRoLTF4LCAkaGVpZ2h0LTF4KSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChpZigkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyLCB0d2JzLWltYWdlLXBhdGgoXCIjeyRmaWxlLTF4fVwiKSwgXCIjeyRmaWxlLTF4fVwiKSk7XG5cbiAgQG1lZGlhXG4gIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICBtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKCAgICAgLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgICAgIG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKCAgICAgICAgICAgICAgICBtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgICAgICAgICAgICAgbWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGlmKCRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXIsIHR3YnMtaW1hZ2UtcGF0aChcIiN7JGZpbGUtMnh9XCIpLCBcIiN7JGZpbGUtMnh9XCIpKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICR3aWR0aC0xeCAkaGVpZ2h0LTF4O1xuICB9XG59XG4iLCIvLyBMYWJlbHNcblxuQG1peGluIGxhYmVsLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAmW2hyZWZdIHtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvciwgMTAlKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFJlc2V0IGZpbHRlcnMgZm9yIElFXG4vL1xuLy8gV2hlbiB5b3UgbmVlZCB0byByZW1vdmUgYSBncmFkaWVudCBiYWNrZ3JvdW5kLCBkbyBub3QgZm9yZ2V0IHRvIHVzZSB0aGlzIHRvIHJlc2V0XG4vLyB0aGUgSUUgZmlsdGVyIGZvciBJRTkgYW5kIGJlbG93LlxuXG5AbWl4aW4gcmVzZXQtZmlsdGVyKCkge1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkID0gZmFsc2UpO1xufVxuIiwiLy8gUmVzaXplIGFueXRoaW5nXG5cbkBtaXhpbiByZXNpemFibGUoJGRpcmVjdGlvbikge1xuICByZXNpemU6ICRkaXJlY3Rpb247IC8vIE9wdGlvbnM6IGhvcml6b250YWwsIHZlcnRpY2FsLCBib3RoXG4gIG92ZXJmbG93OiBhdXRvOyAvLyBQZXIgQ1NTMyBVSSwgYHJlc2l6ZWAgb25seSBhcHBsaWVzIHdoZW4gYG92ZXJmbG93YCBpc24ndCBgdmlzaWJsZWBcbn1cbiIsIi8vIFJlc3BvbnNpdmUgdXRpbGl0aWVzXG5cbi8vXG4vLyBNb3JlIGVhc2lseSBpbmNsdWRlIGFsbCB0aGUgc3RhdGVzIGZvciByZXNwb25zaXZlLXV0aWxpdGllcy5sZXNzLlxuLy8gW2NvbnZlcnRlcl0gJHBhcmVudCBoYWNrXG5AbWl4aW4gcmVzcG9uc2l2ZS12aXNpYmlsaXR5KCRwYXJlbnQpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICB0YWJsZSN7JHBhcmVudH0gIHsgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgfVxuICB0ciN7JHBhcmVudH0gICAgIHsgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7IH1cbiAgdGgjeyRwYXJlbnR9LFxuICB0ZCN7JHBhcmVudH0gICAgIHsgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50OyB9XG59XG5cbi8vIFtjb252ZXJ0ZXJdICRwYXJlbnQgaGFja1xuQG1peGluIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCRwYXJlbnQpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iLCIvLyBTaXppbmcgc2hvcnRjdXRzXG5cbkBtaXhpbiBzaXplKCR3aWR0aCwgJGhlaWdodCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiBzcXVhcmUoJHNpemUpIHtcbiAgQGluY2x1ZGUgc2l6ZSgkc2l6ZSwgJHNpemUpO1xufVxuIiwiLy8gV2ViS2l0LXN0eWxlIGZvY3VzXG5cbkBtaXhpbiB0YWItZm9jdXMoKSB7XG4gIC8vIFdlYktpdC1zcGVjaWZpYy4gT3RoZXIgYnJvd3NlcnMgd2lsbCBrZWVwIHRoZWlyIGRlZmF1bHQgb3V0bGluZSBzdHlsZS5cbiAgLy8gKEluaXRpYWxseSB0cmllZCB0byBhbHNvIGZvcmNlIGRlZmF1bHQgdmlhIGBvdXRsaW5lOiBpbml0aWFsYCxcbiAgLy8gYnV0IHRoYXQgc2VlbXMgdG8gZXJyb25lb3VzbHkgcmVtb3ZlIHRoZSBvdXRsaW5lIGluIEZpcmVmb3ggYWx0b2dldGhlci4pXG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG4iLCJAbWl4aW4gcmVzZXQtdGV4dCgpIHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xuICAvLyBXZSBkZWxpYmVyYXRlbHkgZG8gTk9UIHJlc2V0IGZvbnQtc2l6ZS5cbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBsaW5lLWJyZWFrOiBhdXRvO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7IC8vIEZhbGxiYWNrIGZvciB3aGVyZSBgc3RhcnRgIGlzIG5vdCBzdXBwb3J0ZWRcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cbiIsIi8vIFR5cG9ncmFwaHlcblxuLy8gW2NvbnZlcnRlcl0gJHBhcmVudCBoYWNrXG5AbWl4aW4gdGV4dC1lbXBoYXNpcy12YXJpYW50KCRwYXJlbnQsICRjb2xvcikge1xuICAjeyRwYXJlbnR9IHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICB9XG4gIGEjeyRwYXJlbnR9OmhvdmVyLFxuICBhI3skcGFyZW50fTpmb2N1cyB7XG4gICAgY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gIH1cbn1cbiIsIi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcblxuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiLy8gVmVuZG9yIFByZWZpeGVzXG4vL1xuLy8gQWxsIHZlbmRvciBtaXhpbnMgYXJlIGRlcHJlY2F0ZWQgYXMgb2YgdjMuMi4wIGR1ZSB0byB0aGUgaW50cm9kdWN0aW9uIG9mXG4vLyBBdXRvcHJlZml4ZXIgaW4gb3VyIEdydW50ZmlsZS4gVGhleSBoYXZlIGJlZW4gcmVtb3ZlZCBpbiB2NC5cblxuLy8gLSBBbmltYXRpb25zXG4vLyAtIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIC0gQm94IHNoYWRvd1xuLy8gLSBCb3ggc2l6aW5nXG4vLyAtIENvbnRlbnQgY29sdW1uc1xuLy8gLSBIeXBoZW5zXG4vLyAtIFBsYWNlaG9sZGVyIHRleHRcbi8vIC0gVHJhbnNmb3JtYXRpb25zXG4vLyAtIFRyYW5zaXRpb25zXG4vLyAtIFVzZXIgU2VsZWN0XG5cblxuLy8gQW5pbWF0aW9uc1xuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9uO1xuICAgICAgIC1vLWFuaW1hdGlvbjogJGFuaW1hdGlvbjtcbiAgICAgICAgICBhbmltYXRpb246ICRhbmltYXRpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLW5hbWUoJG5hbWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogJG5hbWU7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xufVxuQG1peGluIGFuaW1hdGlvbi1kdXJhdGlvbigkZHVyYXRpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbn1cbkBtaXhpbiBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uKCR0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ICR0aW1pbmctZnVuY3Rpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRkZWxheSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJGRlbGF5O1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogJGRlbGF5O1xufVxuQG1peGluIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQoJGl0ZXJhdGlvbi1jb3VudCkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb24tY291bnQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogJGl0ZXJhdGlvbi1jb3VudDtcbn1cbkBtaXhpbiBhbmltYXRpb24tZGlyZWN0aW9uKCRkaXJlY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLWZpbGwtbW9kZSgkZmlsbC1tb2RlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogJGZpbGwtbW9kZTtcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiAkZmlsbC1tb2RlO1xufVxuXG4vLyBCYWNrZmFjZSB2aXNpYmlsaXR5XG4vLyBQcmV2ZW50IGJyb3dzZXJzIGZyb20gZmxpY2tlcmluZyB3aGVuIHVzaW5nIENTUyAzRCB0cmFuc2Zvcm1zLlxuLy8gRGVmYXVsdCB2YWx1ZSBpcyBgdmlzaWJsZWAsIGJ1dCBjYW4gYmUgY2hhbmdlZCB0byBgaGlkZGVuYFxuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmlzaWJpbGl0eSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2aXNpYmlsaXR5O1xuICAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2aXNpYmlsaXR5O1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2aXNpYmlsaXR5O1xufVxuXG4vLyBEcm9wIHNoYWRvd3Ncbi8vXG4vLyBOb3RlOiBEZXByZWNhdGVkIGAuYm94LXNoYWRvdygpYCBhcyBvZiB2My4xLjAgc2luY2UgYWxsIG9mIEJvb3RzdHJhcCdzXG4vLyBzdXBwb3J0ZWQgYnJvd3NlcnMgdGhhdCBoYXZlIGJveCBzaGFkb3cgY2FwYWJpbGl0aWVzIG5vdyBzdXBwb3J0IGl0LlxuXG5AbWl4aW4gYm94LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdzsgLy8gaU9TIDw0LjMgJiBBbmRyb2lkIDw0LjFcbiAgICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG4vLyBCb3ggc2l6aW5nXG5AbWl4aW4gYm94LXNpemluZygkYm94bW9kZWwpIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkYm94bW9kZWw7XG4gICAgIC1tb3otYm94LXNpemluZzogJGJveG1vZGVsO1xuICAgICAgICAgIGJveC1zaXppbmc6ICRib3htb2RlbDtcbn1cblxuLy8gQ1NTMyBDb250ZW50IENvbHVtbnNcbkBtaXhpbiBjb250ZW50LWNvbHVtbnMoJGNvbHVtbi1jb3VudCwgJGNvbHVtbi1nYXA6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICAtd2Via2l0LWNvbHVtbi1jb3VudDogJGNvbHVtbi1jb3VudDtcbiAgICAgLW1vei1jb2x1bW4tY291bnQ6ICRjb2x1bW4tY291bnQ7XG4gICAgICAgICAgY29sdW1uLWNvdW50OiAkY29sdW1uLWNvdW50O1xuICAtd2Via2l0LWNvbHVtbi1nYXA6ICRjb2x1bW4tZ2FwO1xuICAgICAtbW96LWNvbHVtbi1nYXA6ICRjb2x1bW4tZ2FwO1xuICAgICAgICAgIGNvbHVtbi1nYXA6ICRjb2x1bW4tZ2FwO1xufVxuXG4vLyBPcHRpb25hbCBoeXBoZW5hdGlvblxuQG1peGluIGh5cGhlbnMoJG1vZGU6IGF1dG8pIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAtd2Via2l0LWh5cGhlbnM6ICRtb2RlO1xuICAgICAtbW96LWh5cGhlbnM6ICRtb2RlO1xuICAgICAgLW1zLWh5cGhlbnM6ICRtb2RlOyAvLyBJRTEwK1xuICAgICAgIC1vLWh5cGhlbnM6ICRtb2RlO1xuICAgICAgICAgIGh5cGhlbnM6ICRtb2RlO1xufVxuXG4vLyBQbGFjZWhvbGRlciB0ZXh0XG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yOiAkaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpIHtcbiAgLy8gRmlyZWZveFxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIG9wYWNpdHk6IDE7IC8vIE92ZXJyaWRlIEZpcmVmb3gncyB1bnVzdWFsIGRlZmF1bHQgb3BhY2l0eTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzExNTI2XG4gIH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEludGVybmV0IEV4cGxvcmVyIDEwK1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuLy8gVHJhbnNmb3JtYXRpb25zXG5AbWl4aW4gc2NhbGUoJHJhdGlvLi4uKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKCRyYXRpbyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgkcmF0aW8pO1xufVxuXG5AbWl4aW4gc2NhbGVYKCRyYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKCRyYXRpbyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoJHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWCgkcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKCRyYXRpbyk7XG59XG5AbWl4aW4gc2NhbGVZKCRyYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKCRyYXRpbyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoJHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWSgkcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKCRyYXRpbyk7XG59XG5AbWl4aW4gc2tldygkeCwgJHkpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKCR4KSBza2V3WSgkeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBza2V3WCgkeCkgc2tld1koJHkpOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy80ODg1OyBJRTkrXG4gICAgICAgLW8tdHJhbnNmb3JtOiBza2V3WCgkeCkgc2tld1koJHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2tld1goJHgpIHNrZXdZKCR5KTtcbn1cbkBtaXhpbiB0cmFuc2xhdGUoJHgsICR5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcbn1cbkBtaXhpbiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xufVxuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiByb3RhdGVYKCRkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKCRkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoJGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWCgkZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiByb3RhdGVZKCRkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKCRkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoJGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWSgkZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogJHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlOiAkcGVyc3BlY3RpdmU7XG4gICAgICAgICAgcGVyc3BlY3RpdmU6ICRwZXJzcGVjdGl2ZTtcbn1cbkBtaXhpbiBwZXJzcGVjdGl2ZS1vcmlnaW4oJHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiAkcGVyc3BlY3RpdmU7XG4gICAgIC1tb3otcGVyc3BlY3RpdmUtb3JpZ2luOiAkcGVyc3BlY3RpdmU7XG4gICAgICAgICAgcGVyc3BlY3RpdmUtb3JpZ2luOiAkcGVyc3BlY3RpdmU7XG59XG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkb3JpZ2luKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcbiAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47IC8vIElFOSBvbmx5XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcbn1cblxuXG4vLyBUcmFuc2l0aW9uc1xuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuQG1peGluIHRyYW5zaXRpb24tcHJvcGVydHkoJHRyYW5zaXRpb24tcHJvcGVydHkuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAkdHJhbnNpdGlvbi1wcm9wZXJ0eTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiAkdHJhbnNpdGlvbi1wcm9wZXJ0eTtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLWRlbGF5KCR0cmFuc2l0aW9uLWRlbGF5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogJHRyYW5zaXRpb24tZGVsYXk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogJHRyYW5zaXRpb24tZGVsYXk7XG59XG5AbWl4aW4gdHJhbnNpdGlvbi1kdXJhdGlvbigkdHJhbnNpdGlvbi1kdXJhdGlvbi4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uO1xufVxuQG1peGluIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKCR0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbjtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLXRyYW5zZm9ybSgkdHJhbnNpdGlvbi4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtICR0cmFuc2l0aW9uO1xuICAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtICR0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAkdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb247XG59XG5cblxuLy8gVXNlciBzZWxlY3Rcbi8vIEZvciBzZWxlY3RpbmcgdGV4dCBvbiB0aGUgcGFnZVxuXG5AbWl4aW4gdXNlci1zZWxlY3QoJHNlbGVjdCkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiAkc2VsZWN0O1xuICAgICAtbW96LXVzZXItc2VsZWN0OiAkc2VsZWN0O1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiAkc2VsZWN0OyAvLyBJRTEwK1xuICAgICAgICAgIHVzZXItc2VsZWN0OiAkc2VsZWN0O1xufVxuIiwiLy8gQWxlcnRzXG5cbkBtaXhpbiBhbGVydC12YXJpYW50KCRiYWNrZ3JvdW5kLCAkYm9yZGVyLCAkdGV4dC1jb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG5cbiAgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IGRhcmtlbigkYm9yZGVyLCA1JSk7XG4gIH1cbiAgLmFsZXJ0LWxpbmsge1xuICAgIGNvbG9yOiBkYXJrZW4oJHRleHQtY29sb3IsIDEwJSk7XG4gIH1cbn1cbiIsIi8vIEJ1dHRvbiB2YXJpYW50c1xuLy9cbi8vIEVhc2lseSBwdW1wIG91dCBkZWZhdWx0IHN0eWxlcywgYXMgd2VsbCBhcyA6aG92ZXIsIDpmb2N1cywgOmFjdGl2ZSxcbi8vIGFuZCBkaXNhYmxlZCBvcHRpb25zIGZvciBhbGwgYnV0dG9uc1xuXG5AbWl4aW4gYnV0dG9uLXZhcmlhbnQoJGNvbG9yLCAkYmFja2dyb3VuZCwgJGJvcmRlcikge1xuICBjb2xvcjogJGNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAyNSUpO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAxMiUpO1xuICB9XG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgLm9wZW4gPiAmLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhY2tncm91bmQsIDEwJSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRib3JkZXIsIDEyJSk7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJi5mb2N1cyB7XG4gICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxNyUpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRib3JkZXIsIDI1JSk7XG4gICAgfVxuICB9XG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgLm9wZW4gPiAmLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgfVxuICAmLmRpc2FibGVkLFxuICAmW2Rpc2FibGVkXSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmLmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAuYmFkZ2Uge1xuICAgIGNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gIH1cbn1cblxuLy8gQnV0dG9uIHNpemVzXG5AbWl4aW4gYnV0dG9uLXNpemUoJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwsICRmb250LXNpemUsICRsaW5lLWhlaWdodCwgJGJvcmRlci1yYWRpdXMpIHtcbiAgcGFkZGluZzogJHBhZGRpbmctdmVydGljYWwgJHBhZGRpbmctaG9yaXpvbnRhbDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbn1cbiIsIi8vIFBhbmVsc1xuXG5AbWl4aW4gcGFuZWwtdmFyaWFudCgkYm9yZGVyLCAkaGVhZGluZy10ZXh0LWNvbG9yLCAkaGVhZGluZy1iZy1jb2xvciwgJGhlYWRpbmctYm9yZGVyKSB7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcblxuICAmID4gLnBhbmVsLWhlYWRpbmcge1xuICAgIGNvbG9yOiAkaGVhZGluZy10ZXh0LWNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkaW5nLWJnLWNvbG9yO1xuICAgIGJvcmRlci1jb2xvcjogJGhlYWRpbmctYm9yZGVyO1xuXG4gICAgKyAucGFuZWwtY29sbGFwc2UgPiAucGFuZWwtYm9keSB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkYm9yZGVyO1xuICAgIH1cbiAgICAuYmFkZ2Uge1xuICAgICAgY29sb3I6ICRoZWFkaW5nLWJnLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRpbmctdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJiA+IC5wYW5lbC1mb290ZXIge1xuICAgICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlcjtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFBhZ2luYXRpb25cblxuQG1peGluIHBhZ2luYXRpb24tc2l6ZSgkcGFkZGluZy12ZXJ0aWNhbCwgJHBhZGRpbmctaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkYm9yZGVyLXJhZGl1cykge1xuICA+IGxpIHtcbiAgICA+IGEsXG4gICAgPiBzcGFuIHtcbiAgICAgIHBhZGRpbmc6ICRwYWRkaW5nLXZlcnRpY2FsICRwYWRkaW5nLWhvcml6b250YWw7XG4gICAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIH1cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgID4gYSxcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmlnaHQtcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIExpc3QgR3JvdXBzXG5cbkBtaXhpbiBsaXN0LWdyb3VwLWl0ZW0tdmFyaWFudCgkc3RhdGUsICRiYWNrZ3JvdW5kLCAkY29sb3IpIHtcbiAgLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX0ge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG5cbiAgICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYSYsIGJ1dHRvbiYgdG8gYS5saXN0LWdyb3VwLWl0ZW0tI3skc3RhdGV9LCBidXR0b24ubGlzdC1ncm91cC1pdGVtLSN7JHN0YXRlfVxuICB9XG5cbiAgYS5saXN0LWdyb3VwLWl0ZW0tI3skc3RhdGV9LFxuICBidXR0b24ubGlzdC1ncm91cC1pdGVtLSN7JHN0YXRlfSB7XG4gICAgY29sb3I6ICRjb2xvcjtcblxuICAgIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgNSUpO1xuICAgIH1cbiAgICAmLmFjdGl2ZSxcbiAgICAmLmFjdGl2ZTpob3ZlcixcbiAgICAmLmFjdGl2ZTpmb2N1cyB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gSG9yaXpvbnRhbCBkaXZpZGVyc1xuLy9cbi8vIERpdmlkZXJzIChiYXNpY2FsbHkgYW4gaHIpIHdpdGhpbiBkcm9wZG93bnMgYW5kIG5hdiBsaXN0c1xuXG5AbWl4aW4gbmF2LWRpdmlkZXIoJGNvbG9yOiAjZTVlNWU1KSB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46ICgoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMikgLSAxKSAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG59XG4iLCIvLyBGb3JtIHZhbGlkYXRpb24gc3RhdGVzXG4vL1xuLy8gVXNlZCBpbiBmb3Jtcy5sZXNzIHRvIGdlbmVyYXRlIHRoZSBmb3JtIHZhbGlkYXRpb24gQ1NTIGZvciB3YXJuaW5ncywgZXJyb3JzLFxuLy8gYW5kIHN1Y2Nlc3Nlcy5cblxuQG1peGluIGZvcm0tY29udHJvbC12YWxpZGF0aW9uKCR0ZXh0LWNvbG9yOiAjNTU1LCAkYm9yZGVyLWNvbG9yOiAjY2NjLCAkYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNSkge1xuICAvLyBDb2xvciB0aGUgbGFiZWwgYW5kIGhlbHAgdGV4dFxuICAuaGVscC1ibG9jayxcbiAgLmNvbnRyb2wtbGFiZWwsXG4gIC5yYWRpbyxcbiAgLmNoZWNrYm94LFxuICAucmFkaW8taW5saW5lLFxuICAuY2hlY2tib3gtaW5saW5lLFxuICAmLnJhZGlvIGxhYmVsLFxuICAmLmNoZWNrYm94IGxhYmVsLFxuICAmLnJhZGlvLWlubGluZSBsYWJlbCxcbiAgJi5jaGVja2JveC1pbmxpbmUgbGFiZWwgIHtcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gIH1cbiAgLy8gU2V0IHRoZSBib3JkZXIgYW5kIGJveCBzaGFkb3cgb24gc3BlY2lmaWMgaW5wdXRzIHRvIG1hdGNoXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpKTsgLy8gUmVkZWNsYXJlIHNvIHRyYW5zaXRpb25zIHdvcmtcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRib3JkZXItY29sb3IsIDEwJSk7XG4gICAgICAkc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDZweCBsaWdodGVuKCRib3JkZXItY29sb3IsIDIwJSk7XG4gICAgICBAaW5jbHVkZSBib3gtc2hhZG93KCRzaGFkb3cpO1xuICAgIH1cbiAgfVxuICAvLyBTZXQgdmFsaWRhdGlvbiBzdGF0ZXMgYWxzbyBmb3IgYWRkb25zXG4gIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgfVxuICAvLyBPcHRpb25hbCBmZWVkYmFjayBpY29uXG4gIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgfVxufVxuXG5cbi8vIEZvcm0gY29udHJvbCBmb2N1cyBzdGF0ZVxuLy9cbi8vIEdlbmVyYXRlIGEgY3VzdG9taXplZCBmb2N1cyBzdGF0ZSBhbmQgZm9yIGFueSBpbnB1dCB3aXRoIHRoZSBzcGVjaWZpZWQgY29sb3IsXG4vLyB3aGljaCBkZWZhdWx0cyB0byB0aGUgYCRpbnB1dC1ib3JkZXItZm9jdXNgIHZhcmlhYmxlLlxuLy9cbi8vIFdlIGhpZ2hseSBlbmNvdXJhZ2UgeW91IHRvIG5vdCBjdXN0b21pemUgdGhlIGRlZmF1bHQgdmFsdWUsIGJ1dCBpbnN0ZWFkIHVzZVxuLy8gdGhpcyB0byB0d2VhayBjb2xvcnMgb24gYW4gYXMtbmVlZGVkIGJhc2lzLiBUaGlzIGFlc3RoZXRpYyBjaGFuZ2UgaXMgYmFzZWQgb25cbi8vIFdlYktpdCdzIGRlZmF1bHQgc3R5bGVzLCBidXQgYXBwbGljYWJsZSB0byBhIHdpZGVyIHJhbmdlIG9mIGJyb3dzZXJzLiBJdHNcbi8vIHVzYWJpbGl0eSBhbmQgYWNjZXNzaWJpbGl0eSBzaG91bGQgYmUgdGFrZW4gaW50byBhY2NvdW50IHdpdGggYW55IGNoYW5nZS5cbi8vXG4vLyBFeGFtcGxlIHVzYWdlOiBjaGFuZ2UgdGhlIGRlZmF1bHQgYmx1ZSBib3JkZXIgYW5kIHNoYWRvdyB0byB3aGl0ZSBmb3IgYmV0dGVyXG4vLyBjb250cmFzdCBhZ2FpbnN0IGEgZGFyayBncmF5IGJhY2tncm91bmQuXG5AbWl4aW4gZm9ybS1jb250cm9sLWZvY3VzKCRjb2xvcjogJGlucHV0LWJvcmRlci1mb2N1cykge1xuICAkY29sb3ItcmdiYTogcmdiYShyZWQoJGNvbG9yKSwgZ3JlZW4oJGNvbG9yKSwgYmx1ZSgkY29sb3IpLCAuNik7XG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgIG91dGxpbmU6IDA7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDhweCAkY29sb3ItcmdiYSk7XG4gIH1cbn1cblxuLy8gRm9ybSBjb250cm9sIHNpemluZ1xuLy9cbi8vIFJlbGF0aXZlIHRleHQgc2l6ZSwgcGFkZGluZywgYW5kIGJvcmRlci1yYWRpaSBjaGFuZ2VzIGZvciBmb3JtIGNvbnRyb2xzLiBGb3Jcbi8vIGhvcml6b250YWwgc2l6aW5nLCB3cmFwIGNvbnRyb2xzIGluIHRoZSBwcmVkZWZpbmVkIGdyaWQgY2xhc3Nlcy4gYDxzZWxlY3Q+YFxuLy8gZWxlbWVudCBnZXRzIHNwZWNpYWwgbG92ZSBiZWNhdXNlIGl0J3Mgc3BlY2lhbCwgYW5kIHRoYXQncyBhIGZhY3QhXG4vLyBbY29udmVydGVyXSAkcGFyZW50IGhhY2tcbkBtaXhpbiBpbnB1dC1zaXplKCRwYXJlbnQsICRpbnB1dC1oZWlnaHQsICRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRib3JkZXItcmFkaXVzKSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy12ZXJ0aWNhbCAkcGFkZGluZy1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgc2VsZWN0I3skcGFyZW50fSB7XG4gICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICB9XG5cbiAgdGV4dGFyZWEjeyRwYXJlbnR9LFxuICBzZWxlY3RbbXVsdGlwbGVdI3skcGFyZW50fSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4iLCIvLyBQcm9ncmVzcyBiYXJzXG5cbkBtaXhpbiBwcm9ncmVzcy1iYXItdmFyaWFudCgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gIC8vIERlcHJlY2F0ZWQgcGFyZW50IGNsYXNzIHJlcXVpcmVtZW50IGFzIG9mIHYzLjIuMFxuICAucHJvZ3Jlc3Mtc3RyaXBlZCAmIHtcbiAgICBAaW5jbHVkZSBncmFkaWVudC1zdHJpcGVkO1xuICB9XG59XG4iLCIvLyBUYWJsZXNcblxuQG1peGluIHRhYmxlLXJvdy12YXJpYW50KCRzdGF0ZSwgJGJhY2tncm91bmQpIHtcbiAgLy8gRXhhY3Qgc2VsZWN0b3JzIGJlbG93IHJlcXVpcmVkIHRvIG92ZXJyaWRlIGAudGFibGUtc3RyaXBlZGAgYW5kIHByZXZlbnRcbiAgLy8gaW5oZXJpdGFuY2UgdG8gbmVzdGVkIHRhYmxlcy5cbiAgLnRhYmxlID4gdGhlYWQgPiB0cixcbiAgLnRhYmxlID4gdGJvZHkgPiB0cixcbiAgLnRhYmxlID4gdGZvb3QgPiB0ciB7XG4gICAgPiB0ZC4jeyRzdGF0ZX0sXG4gICAgPiB0aC4jeyRzdGF0ZX0sXG4gICAgJi4jeyRzdGF0ZX0gPiB0ZCxcbiAgICAmLiN7JHN0YXRlfSA+IHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhvdmVyIHN0YXRlcyBmb3IgYC50YWJsZS1ob3ZlcmBcbiAgLy8gTm90ZTogdGhpcyBpcyBub3QgYXZhaWxhYmxlIGZvciBjZWxscyBvciByb3dzIHdpdGhpbiBgdGhlYWRgIG9yIGB0Zm9vdGAuXG4gIC50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIge1xuICAgID4gdGQuI3skc3RhdGV9OmhvdmVyLFxuICAgID4gdGguI3skc3RhdGV9OmhvdmVyLFxuICAgICYuI3skc3RhdGV9OmhvdmVyID4gdGQsXG4gICAgJjpob3ZlciA+IC4jeyRzdGF0ZX0sXG4gICAgJi4jeyRzdGF0ZX06aG92ZXIgPiB0aCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhY2tncm91bmQsIDUlKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvbnRleHR1YWwgYmFja2dyb3VuZHNcblxuLy8gW2NvbnZlcnRlcl0gJHBhcmVudCBoYWNrXG5AbWl4aW4gYmctdmFyaWFudCgkcGFyZW50LCAkY29sb3IpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICB9XG4gIGEjeyRwYXJlbnR9OmhvdmVyLFxuICBhI3skcGFyZW50fTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvciwgMTAlKTtcbiAgfVxufVxuIiwiLy8gU2luZ2xlIHNpZGUgYm9yZGVyLXJhZGl1c1xuXG5AbWl4aW4gYm9yZGVyLXRvcC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItbGVmdC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuIiwiLy8gR3JhZGllbnRzXG5cblxuXG4vLyBIb3Jpem9udGFsIGdyYWRpZW50LCBmcm9tIGxlZnQgdG8gcmlnaHRcbi8vXG4vLyBDcmVhdGVzIHR3byBjb2xvciBzdG9wcywgc3RhcnQgYW5kIGVuZCwgYnkgc3BlY2lmeWluZyBhIGNvbG9yIGFuZCBwb3NpdGlvbiBmb3IgZWFjaCBjb2xvciBzdG9wLlxuLy8gQ29sb3Igc3RvcHMgYXJlIG5vdCBhdmFpbGFibGUgaW4gSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJHN0YXJ0LXBlcmNlbnQ6IDAlLCAkZW5kLXBlcmNlbnQ6IDEwMCUpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFNhZmFyaSA1LjEtNiwgQ2hyb21lIDEwK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIE9wZXJhIDEyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwLCBGaXJlZm94IDE2KywgT3BlcmEgMTIuMTArLCBTYWZhcmkgNyssIENocm9tZSAyNitcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0xKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbi8vIFZlcnRpY2FsIGdyYWRpZW50LCBmcm9tIHRvcCB0byBib3R0b21cbi8vXG4vLyBDcmVhdGVzIHR3byBjb2xvciBzdG9wcywgc3RhcnQgYW5kIGVuZCwgYnkgc3BlY2lmeWluZyBhIGNvbG9yIGFuZCBwb3NpdGlvbiBmb3IgZWFjaCBjb2xvciBzdG9wLlxuLy8gQ29sb3Igc3RvcHMgYXJlIG5vdCBhdmFpbGFibGUgaW4gSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiBncmFkaWVudC12ZXJ0aWNhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7ICAvLyBTYWZhcmkgNS4xLTYsIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7ICAvLyBPcGVyYSAxMlxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU3RhbmRhcmQsIElFMTAsIEZpcmVmb3ggMTYrLCBPcGVyYSAxMi4xMCssIFNhZmFyaSA3KywgQ2hyb21lIDI2K1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTkgYW5kIGRvd25cbn1cblxuQG1peGluIGdyYWRpZW50LWRpcmVjdGlvbmFsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBTYWZhcmkgNS4xLTYsIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIE9wZXJhIDEyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBTdGFuZGFyZCwgSUUxMCwgRmlyZWZveCAxNissIE9wZXJhIDEyLjEwKywgU2FmYXJpIDcrLCBDaHJvbWUgMjYrXG59XG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAjMDBiM2VlLCAkbWlkLWNvbG9yOiAjN2E0M2I2LCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAjYzMzMjVmKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTEpOyAvLyBJRTkgYW5kIGRvd24sIGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duLCBnZXRzIG5vIGNvbG9yLXN0b3AgYXQgYWxsIGZvciBwcm9wZXIgZmFsbGJhY2tcbn1cbkBtaXhpbiBncmFkaWVudC1yYWRpYWwoJGlubmVyLWNvbG9yOiAjNTU1LCAkb3V0ZXItY29sb3I6ICMzMzMpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC1zdHJpcGVkKCRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpLCAkYW5nbGU6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbn1cbiIsIi8vIENsZWFyZml4XG4vL1xuLy8gRm9yIG1vZGVybiBicm93c2Vyc1xuLy8gMS4gVGhlIHNwYWNlIGNvbnRlbnQgaXMgb25lIHdheSB0byBhdm9pZCBhbiBPcGVyYSBidWcgd2hlbiB0aGVcbi8vICAgIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUgaXMgaW5jbHVkZWQgYW55d2hlcmUgZWxzZSBpbiB0aGUgZG9jdW1lbnQuXG4vLyAgICBPdGhlcndpc2UgaXQgY2F1c2VzIHNwYWNlIHRvIGFwcGVhciBhdCB0aGUgdG9wIGFuZCBib3R0b20gb2YgZWxlbWVudHNcbi8vICAgIHRoYXQgYXJlIGNsZWFyZml4ZWQuXG4vLyAyLiBUaGUgdXNlIG9mIGB0YWJsZWAgcmF0aGVyIHRoYW4gYGJsb2NrYCBpcyBvbmx5IG5lY2Vzc2FyeSBpZiB1c2luZ1xuLy8gICAgYDpiZWZvcmVgIHRvIGNvbnRhaW4gdGhlIHRvcC1tYXJnaW5zIG9mIGNoaWxkIGVsZW1lbnRzLlxuLy9cbi8vIFNvdXJjZTogaHR0cDovL25pY29sYXNnYWxsYWdoZXIuY29tL21pY3JvLWNsZWFyZml4LWhhY2svXG5cbkBtaXhpbiBjbGVhcmZpeCgpIHtcbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiOyAvLyAxXG4gICAgZGlzcGxheTogdGFibGU7IC8vIDJcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuIiwiLy8gQ2VudGVyLWFsaWduIGEgYmxvY2sgbGV2ZWwgZWxlbWVudFxuXG5AbWl4aW4gY2VudGVyLWJsb2NrKCkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiIsIi8vIE5hdmJhciB2ZXJ0aWNhbCBhbGlnblxuLy9cbi8vIFZlcnRpY2FsbHkgY2VudGVyIGVsZW1lbnRzIGluIHRoZSBuYXZiYXIuXG4vLyBFeGFtcGxlOiBhbiBlbGVtZW50IGhhcyBhIGhlaWdodCBvZiAzMHB4LCBzbyB3cml0ZSBvdXQgYC5uYXZiYXItdmVydGljYWwtYWxpZ24oMzBweCk7YCB0byBjYWxjdWxhdGUgdGhlIGFwcHJvcHJpYXRlIHRvcCBtYXJnaW4uXG5cbkBtaXhpbiBuYXZiYXItdmVydGljYWwtYWxpZ24oJGVsZW1lbnQtaGVpZ2h0KSB7XG4gIG1hcmdpbi10b3A6ICgoJG5hdmJhci1oZWlnaHQgLSAkZWxlbWVudC1oZWlnaHQpIC8gMik7XG4gIG1hcmdpbi1ib3R0b206ICgoJG5hdmJhci1oZWlnaHQgLSAkZWxlbWVudC1oZWlnaHQpIC8gMik7XG59XG4iLCIvLyBGcmFtZXdvcmsgZ3JpZCBnZW5lcmF0aW9uXG4vL1xuLy8gVXNlZCBvbmx5IGJ5IEJvb3RzdHJhcCB0byBnZW5lcmF0ZSB0aGUgY29ycmVjdCBudW1iZXIgb2YgZ3JpZCBjbGFzc2VzIGdpdmVuXG4vLyBhbnkgdmFsdWUgb2YgYCRncmlkLWNvbHVtbnNgLlxuXG4vLyBbY29udmVydGVyXSBUaGlzIGlzIGRlZmluZWQgcmVjdXJzaXZlbHkgaW4gTEVTUywgYnV0IFNhc3Mgc3VwcG9ydHMgcmVhbCBsb29wc1xuQG1peGluIG1ha2UtZ3JpZC1jb2x1bW5zKCRpOiAxLCAkbGlzdDogXCIuY29sLXhzLSN7JGl9LCAuY29sLXNtLSN7JGl9LCAuY29sLW1kLSN7JGl9LCAuY29sLWxnLSN7JGl9XCIpIHtcbiAgQGZvciAkaSBmcm9tICgxICsgMSkgdGhyb3VnaCAkZ3JpZC1jb2x1bW5zIHtcbiAgICAkbGlzdDogXCIjeyRsaXN0fSwgLmNvbC14cy0jeyRpfSwgLmNvbC1zbS0jeyRpfSwgLmNvbC1tZC0jeyRpfSwgLmNvbC1sZy0jeyRpfVwiO1xuICB9XG4gICN7JGxpc3R9IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gUHJldmVudCBjb2x1bW5zIGZyb20gY29sbGFwc2luZyB3aGVuIGVtcHR5XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIC8vIElubmVyIGd1dHRlciB2aWEgcGFkZGluZ1xuICAgIHBhZGRpbmctbGVmdDogIGNlaWwoKCRncmlkLWd1dHRlci13aWR0aCAvIDIpKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBmbG9vcigoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMikpO1xuICB9XG59XG5cblxuLy8gW2NvbnZlcnRlcl0gVGhpcyBpcyBkZWZpbmVkIHJlY3Vyc2l2ZWx5IGluIExFU1MsIGJ1dCBTYXNzIHN1cHBvcnRzIHJlYWwgbG9vcHNcbkBtaXhpbiBmbG9hdC1ncmlkLWNvbHVtbnMoJGNsYXNzLCAkaTogMSwgJGxpc3Q6IFwiLmNvbC0jeyRjbGFzc30tI3skaX1cIikge1xuICBAZm9yICRpIGZyb20gKDEgKyAxKSB0aHJvdWdoICRncmlkLWNvbHVtbnMge1xuICAgICRsaXN0OiBcIiN7JGxpc3R9LCAuY29sLSN7JGNsYXNzfS0jeyRpfVwiO1xuICB9XG4gICN7JGxpc3R9IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuXG5cbkBtaXhpbiBjYWxjLWdyaWQtY29sdW1uKCRpbmRleCwgJGNsYXNzLCAkdHlwZSkge1xuICBAaWYgKCR0eXBlID09IHdpZHRoKSBhbmQgKCRpbmRleCA+IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS0jeyRpbmRleH0ge1xuICAgICAgd2lkdGg6IHBlcmNlbnRhZ2UoKCRpbmRleCAvICRncmlkLWNvbHVtbnMpKTtcbiAgICB9XG4gIH1cbiAgQGlmICgkdHlwZSA9PSBwdXNoKSBhbmQgKCRpbmRleCA+IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS1wdXNoLSN7JGluZGV4fSB7XG4gICAgICBsZWZ0OiBwZXJjZW50YWdlKCgkaW5kZXggLyAkZ3JpZC1jb2x1bW5zKSk7XG4gICAgfVxuICB9XG4gIEBpZiAoJHR5cGUgPT0gcHVzaCkgYW5kICgkaW5kZXggPT0gMCkge1xuICAgIC5jb2wtI3skY2xhc3N9LXB1c2gtMCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgIH1cbiAgfVxuICBAaWYgKCR0eXBlID09IHB1bGwpIGFuZCAoJGluZGV4ID4gMCkge1xuICAgIC5jb2wtI3skY2xhc3N9LXB1bGwtI3skaW5kZXh9IHtcbiAgICAgIHJpZ2h0OiBwZXJjZW50YWdlKCgkaW5kZXggLyAkZ3JpZC1jb2x1bW5zKSk7XG4gICAgfVxuICB9XG4gIEBpZiAoJHR5cGUgPT0gcHVsbCkgYW5kICgkaW5kZXggPT0gMCkge1xuICAgIC5jb2wtI3skY2xhc3N9LXB1bGwtMCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICB9XG4gIH1cbiAgQGlmICgkdHlwZSA9PSBvZmZzZXQpIHtcbiAgICAuY29sLSN7JGNsYXNzfS1vZmZzZXQtI3skaW5kZXh9IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCgkaW5kZXggLyAkZ3JpZC1jb2x1bW5zKSk7XG4gICAgfVxuICB9XG59XG5cbi8vIFtjb252ZXJ0ZXJdIFRoaXMgaXMgZGVmaW5lZCByZWN1cnNpdmVseSBpbiBMRVNTLCBidXQgU2FzcyBzdXBwb3J0cyByZWFsIGxvb3BzXG5AbWl4aW4gbG9vcC1ncmlkLWNvbHVtbnMoJGNvbHVtbnMsICRjbGFzcywgJHR5cGUpIHtcbiAgQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAkY29sdW1ucyB7XG4gICAgQGluY2x1ZGUgY2FsYy1ncmlkLWNvbHVtbigkaSwgJGNsYXNzLCAkdHlwZSk7XG4gIH1cbn1cblxuXG4vLyBDcmVhdGUgZ3JpZCBmb3Igc3BlY2lmaWMgY2xhc3NcbkBtaXhpbiBtYWtlLWdyaWQoJGNsYXNzKSB7XG4gIEBpbmNsdWRlIGZsb2F0LWdyaWQtY29sdW1ucygkY2xhc3MpO1xuICBAaW5jbHVkZSBsb29wLWdyaWQtY29sdW1ucygkZ3JpZC1jb2x1bW5zLCAkY2xhc3MsIHdpZHRoKTtcbiAgQGluY2x1ZGUgbG9vcC1ncmlkLWNvbHVtbnMoJGdyaWQtY29sdW1ucywgJGNsYXNzLCBwdWxsKTtcbiAgQGluY2x1ZGUgbG9vcC1ncmlkLWNvbHVtbnMoJGdyaWQtY29sdW1ucywgJGNsYXNzLCBwdXNoKTtcbiAgQGluY2x1ZGUgbG9vcC1ncmlkLWNvbHVtbnMoJGdyaWQtY29sdW1ucywgJGNsYXNzLCBvZmZzZXQpO1xufVxuIiwiLy8gR3JpZCBzeXN0ZW1cbi8vXG4vLyBHZW5lcmF0ZSBzZW1hbnRpYyBncmlkIGNvbHVtbnMgd2l0aCB0aGVzZSBtaXhpbnMuXG5cbi8vIENlbnRlcmVkIGNvbnRhaW5lciBlbGVtZW50XG5AbWl4aW4gY29udGFpbmVyLWZpeGVkKCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6ICBmbG9vcigoJGd1dHRlciAvIDIpKTtcbiAgcGFkZGluZy1yaWdodDogY2VpbCgoJGd1dHRlciAvIDIpKTtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG5cbi8vIENyZWF0ZXMgYSB3cmFwcGVyIGZvciBhIHNlcmllcyBvZiBjb2x1bW5zXG5AbWl4aW4gbWFrZS1yb3coJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIG1hcmdpbi1sZWZ0OiAgY2VpbCgoJGd1dHRlciAvIC0yKSk7XG4gIG1hcmdpbi1yaWdodDogZmxvb3IoKCRndXR0ZXIgLyAtMikpO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcbn1cblxuLy8gR2VuZXJhdGUgdGhlIGV4dHJhIHNtYWxsIGNvbHVtbnNcbkBtaXhpbiBtYWtlLXhzLWNvbHVtbigkY29sdW1ucywgJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6ICAoJGd1dHRlciAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiAoJGd1dHRlciAvIDIpO1xufVxuQG1peGluIG1ha2UteHMtY29sdW1uLW9mZnNldCgkY29sdW1ucykge1xuICBtYXJnaW4tbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG59XG5AbWl4aW4gbWFrZS14cy1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbn1cbkBtaXhpbiBtYWtlLXhzLWNvbHVtbi1wdWxsKCRjb2x1bW5zKSB7XG4gIHJpZ2h0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbn1cblxuLy8gR2VuZXJhdGUgdGhlIHNtYWxsIGNvbHVtbnNcbkBtaXhpbiBtYWtlLXNtLWNvbHVtbigkY29sdW1ucywgJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6ICAoJGd1dHRlciAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiAoJGd1dHRlciAvIDIpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2Utc20tY29sdW1uLW9mZnNldCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBtYXJnaW4tbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLXNtLWNvbHVtbi1wdXNoKCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIGxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1zbS1jb2x1bW4tcHVsbCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICByaWdodDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cblxuLy8gR2VuZXJhdGUgdGhlIG1lZGl1bSBjb2x1bW5zXG5AbWl4aW4gbWFrZS1tZC1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLW1kLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1tZC1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIHtcbiAgICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbWQtY29sdW1uLXB1bGwoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgcmlnaHQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBsYXJnZSBjb2x1bW5zXG5AbWl4aW4gbWFrZS1sZy1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLWxnLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1sZy1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbGctY29sdW1uLXB1bGwoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgcmlnaHQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG4iLCIkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyOiBmYWxzZSAhZGVmYXVsdDtcbi8vXG4vLyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy89PSBDb2xvcnNcbi8vXG4vLyMjIEdyYXkgYW5kIGJyYW5kIGNvbG9ycyBmb3IgdXNlIGFjcm9zcyBCb290c3RyYXAuXG5cbiRncmF5LWJhc2U6ICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuJGdyYXktZGFya2VyOiAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTMuNSUpICFkZWZhdWx0OyAvLyAjMjIyXG4kZ3JheS1kYXJrOiAgICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCAyMCUpICFkZWZhdWx0OyAgIC8vICMzMzNcbiRncmF5OiAgICAgICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDMzLjUlKSAhZGVmYXVsdDsgLy8gIzU1NVxuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNDYuNyUpICFkZWZhdWx0OyAvLyAjNzc3XG4kZ3JheS1saWdodGVyOiAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCA5My41JSkgIWRlZmF1bHQ7IC8vICNlZWVcblxuJGJyYW5kLXByaW1hcnk6ICAgICAgICAgZGFya2VuKCM0MjhiY2EsIDYuNSUpICFkZWZhdWx0OyAvLyAjMzM3YWI3XG4kYnJhbmQtc3VjY2VzczogICAgICAgICAjNWNiODVjICFkZWZhdWx0O1xuJGJyYW5kLWluZm86ICAgICAgICAgICAgIzViYzBkZSAhZGVmYXVsdDtcbiRicmFuZC13YXJuaW5nOiAgICAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XG4kYnJhbmQtZGFuZ2VyOiAgICAgICAgICAjZDk1MzRmICFkZWZhdWx0O1xuXG5cbi8vPT0gU2NhZmZvbGRpbmdcbi8vXG4vLyMjIFNldHRpbmdzIGZvciBzb21lIG9mIHRoZSBtb3N0IGdsb2JhbCBzdHlsZXMuXG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBmb3IgYDxib2R5PmAuXG4kYm9keS1iZzogICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBHbG9iYWwgdGV4dCBjb2xvciBvbiBgPGJvZHk+YC5cbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG5cbi8vKiogR2xvYmFsIHRleHR1YWwgbGluayBjb2xvci5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuLy8qKiBMaW5rIGhvdmVyIGNvbG9yIHNldCB2aWEgYGRhcmtlbigpYCBmdW5jdGlvbi5cbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbi8vKiogTGluayBob3ZlciBkZWNvcmF0aW9uLlxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogdW5kZXJsaW5lICFkZWZhdWx0O1xuXG5cbi8vPT0gVHlwb2dyYXBoeVxuLy9cbi8vIyMgRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LXNlcmlmOiAgICAgICBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWYgIWRlZmF1bHQ7XG4vLyoqIERlZmF1bHQgbW9ub3NwYWNlIGZvbnRzIGZvciBgPGNvZGU+YCwgYDxrYmQ+YCwgYW5kIGA8cHJlPmAuXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgMTRweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2U6ICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpICFkZWZhdWx0OyAvLyB+MThweFxuJGZvbnQtc2l6ZS1zbWFsbDogICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAwLjg1KSkgIWRlZmF1bHQ7IC8vIH4xMnB4XG5cbiRmb250LXNpemUtaDE6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuNikpICFkZWZhdWx0OyAvLyB+MzZweFxuJGZvbnQtc2l6ZS1oMjogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi4xNSkpICFkZWZhdWx0OyAvLyB+MzBweFxuJGZvbnQtc2l6ZS1oMzogICAgICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAxLjcpKSAhZGVmYXVsdDsgLy8gfjI0cHhcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpICFkZWZhdWx0OyAvLyB+MThweFxuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDAuODUpKSAhZGVmYXVsdDsgLy8gfjEycHhcblxuLy8qKiBVbml0LWxlc3MgYGxpbmUtaGVpZ2h0YCBmb3IgdXNlIGluIGNvbXBvbmVudHMgbGlrZSBidXR0b25zLlxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgICAxLjQyODU3MTQyOSAhZGVmYXVsdDsgLy8gMjAvMTRcbi8vKiogQ29tcHV0ZWQgXCJsaW5lLWhlaWdodFwiIChgZm9udC1zaXplYCAqIGBsaW5lLWhlaWdodGApIGZvciB1c2Ugd2l0aCBgbWFyZ2luYCwgYHBhZGRpbmdgLCBldGMuXG4kbGluZS1oZWlnaHQtY29tcHV0ZWQ6ICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSkpICFkZWZhdWx0OyAvLyB+MjBweFxuXG4vLyoqIEJ5IGRlZmF1bHQsIHRoaXMgaW5oZXJpdHMgZnJvbSB0aGUgYDxib2R5PmAuXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgIGluaGVyaXQgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgIDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgMS4xICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuXG5cbi8vPT0gSWNvbm9ncmFwaHlcbi8vXG4vLyMjIFNwZWNpZnkgY3VzdG9tIGxvY2F0aW9uIGFuZCBmaWxlbmFtZSBvZiB0aGUgaW5jbHVkZWQgR2x5cGhpY29ucyBpY29uIGZvbnQuIFVzZWZ1bCBmb3IgdGhvc2UgaW5jbHVkaW5nIEJvb3RzdHJhcCB2aWEgQm93ZXIuXG5cbi8vKiogTG9hZCBmb250cyBmcm9tIHRoaXMgZGlyZWN0b3J5LlxuXG4vLyBbY29udmVydGVyXSBJZiAkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyIGlmIHVzZWQsIHByb3ZpZGUgcGF0aCByZWxhdGl2ZSB0byB0aGUgYXNzZXRzIGxvYWQgcGF0aC5cbi8vIFtjb252ZXJ0ZXJdIFRoaXMgaXMgYmVjYXVzZSBzb21lIGFzc2V0IGhlbHBlcnMsIHN1Y2ggYXMgU3Byb2NrZXRzLCBkbyBub3Qgd29yayB3aXRoIGZpbGUtcmVsYXRpdmUgcGF0aHMuXG4kaWNvbi1mb250LXBhdGg6IGlmKCRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXIsIFwiYm9vdHN0cmFwL1wiLCBcIi4uL2ZvbnRzL2Jvb3RzdHJhcC9cIikgIWRlZmF1bHQ7XG5cbi8vKiogRmlsZSBuYW1lIGZvciBhbGwgZm9udCBmaWxlcy5cbiRpY29uLWZvbnQtbmFtZTogICAgICAgICAgXCJnbHlwaGljb25zLWhhbGZsaW5ncy1yZWd1bGFyXCIgIWRlZmF1bHQ7XG4vLyoqIEVsZW1lbnQgSUQgd2l0aGluIFNWRyBpY29uIGZpbGUuXG4kaWNvbi1mb250LXN2Zy1pZDogICAgICAgIFwiZ2x5cGhpY29uc19oYWxmbGluZ3NyZWd1bGFyXCIgIWRlZmF1bHQ7XG5cblxuLy89PSBDb21wb25lbnRzXG4vL1xuLy8jIyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuIFZhbHVlcyBiYXNlZCBvbiAxNHB4IHRleHQgYW5kIDEuNDI4IGxpbmUtaGVpZ2h0ICh+MjBweCB0byBzdGFydCkuXG5cbiRwYWRkaW5nLWJhc2UtdmVydGljYWw6ICAgICA2cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1iYXNlLWhvcml6b250YWw6ICAgMTJweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctbGFyZ2UtdmVydGljYWw6ICAgIDEwcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsOiAgMTZweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctc21hbGwtdmVydGljYWw6ICAgIDVweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw6ICAxMHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy14cy12ZXJ0aWNhbDogICAgICAgMXB4ICFkZWZhdWx0O1xuJHBhZGRpbmcteHMtaG9yaXpvbnRhbDogICAgIDVweCAhZGVmYXVsdDtcblxuJGxpbmUtaGVpZ2h0LWxhcmdlOiAgICAgICAgIDEuMzMzMzMzMyAhZGVmYXVsdDsgLy8gZXh0cmEgZGVjaW1hbHMgZm9yIFdpbiA4LjEgQ2hyb21lXG4kbGluZS1oZWlnaHQtc21hbGw6ICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgIDZweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtYWxsOiAgICAgICAzcHggIWRlZmF1bHQ7XG5cbi8vKiogR2xvYmFsIGNvbG9yIGZvciBhY3RpdmUgaXRlbXMgKGUuZy4sIG5hdnMgb3IgZHJvcGRvd25zKS5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBHbG9iYWwgYmFja2dyb3VuZCBjb2xvciBmb3IgYWN0aXZlIGl0ZW1zIChlLmcuLCBuYXZzIG9yIGRyb3Bkb3ducykuXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vKiogV2lkdGggb2YgdGhlIGBib3JkZXJgIGZvciBnZW5lcmF0aW5nIGNhcmV0cyB0aGF0IGluZGljYXRlIGRyb3Bkb3ducy5cbiRjYXJldC13aWR0aC1iYXNlOiAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4vLyoqIENhcmV0cyBpbmNyZWFzZSBzbGlnaHRseSBpbiBzaXplIGZvciBsYXJnZXIgY29tcG9uZW50cy5cbiRjYXJldC13aWR0aC1sYXJnZTogICAgICAgICA1cHggIWRlZmF1bHQ7XG5cblxuLy89PSBUYWJsZXNcbi8vXG4vLyMjIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuLy8qKiBQYWRkaW5nIGZvciBgPHRoPmBzIGFuZCBgPHRkPmBzLlxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgICA4cHggIWRlZmF1bHQ7XG4vLyoqIFBhZGRpbmcgZm9yIGNlbGxzIGluIGAudGFibGUtY29uZGVuc2VkYC5cbiR0YWJsZS1jb25kZW5zZWQtY2VsbC1wYWRkaW5nOiAgNXB4ICFkZWZhdWx0O1xuXG4vLyoqIERlZmF1bHQgYmFja2dyb3VuZCBjb2xvciB1c2VkIGZvciBhbGwgdGFibGVzLlxuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbi8vKiogQmFja2dyb3VuZCBjb2xvciB1c2VkIGZvciBgLnRhYmxlLXN0cmlwZWRgLlxuJHRhYmxlLWJnLWFjY2VudDogICAgICAgICAgICAgICAjZjlmOWY5ICFkZWZhdWx0O1xuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIHVzZWQgZm9yIGAudGFibGUtaG92ZXJgLlxuJHRhYmxlLWJnLWhvdmVyOiAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJHRhYmxlLWJnLWFjdGl2ZTogICAgICAgICAgICAgICAkdGFibGUtYmctaG92ZXIgIWRlZmF1bHQ7XG5cbi8vKiogQm9yZGVyIGNvbG9yIGZvciB0YWJsZSBhbmQgY2VsbCBib3JkZXJzLlxuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG5cbi8vPT0gQnV0dG9uc1xuLy9cbi8vIyMgRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgICAgbm9ybWFsICFkZWZhdWx0O1xuXG4kYnRuLWRlZmF1bHQtY29sb3I6ICAgICAgICAgICAgICAjMzMzICFkZWZhdWx0O1xuJGJ0bi1kZWZhdWx0LWJnOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tZGVmYXVsdC1ib3JkZXI6ICAgICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG5cbiRidG4tcHJpbWFyeS1jb2xvcjogICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLXByaW1hcnktYmc6ICAgICAgICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbiRidG4tcHJpbWFyeS1ib3JkZXI6ICAgICAgICAgICAgIGRhcmtlbigkYnRuLXByaW1hcnktYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi1zdWNjZXNzLWNvbG9yOiAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tc3VjY2Vzcy1iZzogICAgICAgICAgICAgICAgICRicmFuZC1zdWNjZXNzICFkZWZhdWx0O1xuJGJ0bi1zdWNjZXNzLWJvcmRlcjogICAgICAgICAgICAgZGFya2VuKCRidG4tc3VjY2Vzcy1iZywgNSUpICFkZWZhdWx0O1xuXG4kYnRuLWluZm8tY29sb3I6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi1pbmZvLWJnOiAgICAgICAgICAgICAgICAgICAgJGJyYW5kLWluZm8gIWRlZmF1bHQ7XG4kYnRuLWluZm8tYm9yZGVyOiAgICAgICAgICAgICAgICBkYXJrZW4oJGJ0bi1pbmZvLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4td2FybmluZy1jb2xvcjogICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLXdhcm5pbmctYmc6ICAgICAgICAgICAgICAgICAkYnJhbmQtd2FybmluZyAhZGVmYXVsdDtcbiRidG4td2FybmluZy1ib3JkZXI6ICAgICAgICAgICAgIGRhcmtlbigkYnRuLXdhcm5pbmctYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi1kYW5nZXItY29sb3I6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tZGFuZ2VyLWJnOiAgICAgICAgICAgICAgICAgICRicmFuZC1kYW5nZXIgIWRlZmF1bHQ7XG4kYnRuLWRhbmdlci1ib3JkZXI6ICAgICAgICAgICAgICBkYXJrZW4oJGJ0bi1kYW5nZXItYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1cy1iYXNlOiAgICAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1sYXJnZSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAgICRib3JkZXItcmFkaXVzLXNtYWxsICFkZWZhdWx0O1xuXG5cbi8vPT0gRm9ybXNcbi8vXG4vLyMjXG5cbi8vKiogYDxpbnB1dD5gIGJhY2tncm91bmQgY29sb3JcbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIGA8aW5wdXQgZGlzYWJsZWQ+YCBiYWNrZ3JvdW5kIGNvbG9yXG4kaW5wdXQtYmctZGlzYWJsZWQ6ICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4vLyoqIFRleHQgY29sb3IgZm9yIGA8aW5wdXQ+YHNcbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5ICFkZWZhdWx0O1xuLy8qKiBgPGlucHV0PmAgYm9yZGVyIGNvbG9yXG4kaW5wdXQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuXG4vLyBUT0RPOiBSZW5hbWUgYCRpbnB1dC1ib3JkZXItcmFkaXVzYCB0byBgJGlucHV0LWJvcmRlci1yYWRpdXMtYmFzZWAgaW4gdjRcbi8vKiogRGVmYXVsdCBgLmZvcm0tY29udHJvbGAgYm9yZGVyIHJhZGl1c1xuLy8gVGhpcyBoYXMgbm8gZWZmZWN0IG9uIGA8c2VsZWN0PmBzIGluIHNvbWUgYnJvd3NlcnMsIGR1ZSB0byB0aGUgbGltaXRlZCBzdHlsYWJpbGl0eSBvZiBgPHNlbGVjdD5gcyBpbiBDU1MuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuLy8qKiBMYXJnZSBgLmZvcm0tY29udHJvbGAgYm9yZGVyIHJhZGl1c1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgIWRlZmF1bHQ7XG4vLyoqIFNtYWxsIGAuZm9ybS1jb250cm9sYCBib3JkZXIgcmFkaXVzXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAkYm9yZGVyLXJhZGl1cy1zbWFsbCAhZGVmYXVsdDtcblxuLy8qKiBCb3JkZXIgY29sb3IgZm9yIGlucHV0cyBvbiBmb2N1c1xuJGlucHV0LWJvcmRlci1mb2N1czogICAgICAgICAgICAgIzY2YWZlOSAhZGVmYXVsdDtcblxuLy8qKiBQbGFjZWhvbGRlciB0ZXh0IGNvbG9yXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICAgICAgICAjOTk5ICFkZWZhdWx0O1xuXG4vLyoqIERlZmF1bHQgYC5mb3JtLWNvbnRyb2xgIGhlaWdodFxuJGlucHV0LWhlaWdodC1iYXNlOiAgICAgICAgICAgICAgKCRsaW5lLWhlaWdodC1jb21wdXRlZCArICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICogMikgKyAyKSAhZGVmYXVsdDtcbi8vKiogTGFyZ2UgYC5mb3JtLWNvbnRyb2xgIGhlaWdodFxuJGlucHV0LWhlaWdodC1sYXJnZTogICAgICAgICAgICAgKGNlaWwoJGZvbnQtc2l6ZS1sYXJnZSAqICRsaW5lLWhlaWdodC1sYXJnZSkgKyAoJHBhZGRpbmctbGFyZ2UtdmVydGljYWwgKiAyKSArIDIpICFkZWZhdWx0O1xuLy8qKiBTbWFsbCBgLmZvcm0tY29udHJvbGAgaGVpZ2h0XG4kaW5wdXQtaGVpZ2h0LXNtYWxsOiAgICAgICAgICAgICAoZmxvb3IoJGZvbnQtc2l6ZS1zbWFsbCAqICRsaW5lLWhlaWdodC1zbWFsbCkgKyAoJHBhZGRpbmctc21hbGwtdmVydGljYWwgKiAyKSArIDIpICFkZWZhdWx0O1xuXG4vLyoqIGAuZm9ybS1ncm91cGAgbWFyZ2luXG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4kbGVnZW5kLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkZ3JheS1kYXJrICFkZWZhdWx0O1xuJGxlZ2VuZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgI2U1ZTVlNSAhZGVmYXVsdDtcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciB0ZXh0dWFsIGlucHV0IGFkZG9uc1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbi8vKiogQm9yZGVyIGNvbG9yIGZvciB0ZXh0dWFsIGlucHV0IGFkZG9uc1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlciAhZGVmYXVsdDtcblxuLy8qKiBEaXNhYmxlZCBjdXJzb3IgZm9yIGZvcm0gY29udHJvbHMgYW5kIGJ1dHRvbnMuXG4kY3Vyc29yLWRpc2FibGVkOiAgICAgICAgICAgICAgICBub3QtYWxsb3dlZCAhZGVmYXVsdDtcblxuXG4vLz09IERyb3Bkb3duc1xuLy9cbi8vIyMgRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4vLyoqIEJhY2tncm91bmQgZm9yIHRoZSBkcm9wZG93biBtZW51LlxuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogRHJvcGRvd24gbWVudSBgYm9yZGVyLWNvbG9yYC5cbiRkcm9wZG93bi1ib3JkZXI6ICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsLjE1KSAhZGVmYXVsdDtcbi8vKiogRHJvcGRvd24gbWVudSBgYm9yZGVyLWNvbG9yYCAqKmZvciBJRTgqKi5cbiRkcm9wZG93bi1mYWxsYmFjay1ib3JkZXI6ICAgICAgICNjY2MgIWRlZmF1bHQ7XG4vLyoqIERpdmlkZXIgY29sb3IgZm9yIGJldHdlZW4gZHJvcGRvd24gaXRlbXMuXG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAjZTVlNWU1ICFkZWZhdWx0O1xuXG4vLyoqIERyb3Bkb3duIGxpbmsgdGV4dCBjb2xvci5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG4vLyoqIEhvdmVyIGNvbG9yIGZvciBkcm9wZG93biBsaW5rcy5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgIGRhcmtlbigkZ3JheS1kYXJrLCA1JSkgIWRlZmF1bHQ7XG4vLyoqIEhvdmVyIGJhY2tncm91bmQgZm9yIGRyb3Bkb3duIGxpbmtzLlxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcblxuLy8qKiBBY3RpdmUgZHJvcGRvd24gbWVudSBpdGVtIHRleHQgY29sb3IuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbi8vKiogQWN0aXZlIGRyb3Bkb3duIG1lbnUgaXRlbSBiYWNrZ3JvdW5kIGNvbG9yLlxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbi8vKiogRGlzYWJsZWQgZHJvcGRvd24gbWVudSBpdGVtIGJhY2tncm91bmQgY29sb3IuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy8qKiBUZXh0IGNvbG9yIGZvciBoZWFkZXJzIHdpdGhpbiBkcm9wZG93biBtZW51cy5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4vLyoqIERlcHJlY2F0ZWQgYCRkcm9wZG93bi1jYXJldC1jb2xvcmAgYXMgb2YgdjMuMS4wXG4kZHJvcGRvd24tY2FyZXQtY29sb3I6ICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuXG5cbi8vLS0gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuLy9cbi8vIE5vdGU6IFRoZXNlIHZhcmlhYmxlcyBhcmUgbm90IGdlbmVyYXRlZCBpbnRvIHRoZSBDdXN0b21pemVyLlxuXG4kemluZGV4LW5hdmJhcjogICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuJHppbmRleC1uYXZiYXItZml4ZWQ6ICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2dyb3VuZDogIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuXG5cbi8vPT0gTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xuLy9cbi8vIyMgRGVmaW5lIHRoZSBicmVha3BvaW50cyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSwgYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuLy8gRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmVcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi14c2AgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLXhzOiAgICAgICAgICAgICAgICAgIDQ4MHB4ICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXhzLW1pbmAgYXMgb2YgdjMuMi4wXG4kc2NyZWVuLXhzLW1pbjogICAgICAgICAgICAgICRzY3JlZW4teHMgIWRlZmF1bHQ7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tcGhvbmVgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1waG9uZTogICAgICAgICAgICAgICAkc2NyZWVuLXhzLW1pbiAhZGVmYXVsdDtcblxuLy8gU21hbGwgc2NyZWVuIC8gdGFibGV0XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tc21gIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1zbTogICAgICAgICAgICAgICAgICA3NjhweCAhZGVmYXVsdDtcbiRzY3JlZW4tc20tbWluOiAgICAgICAgICAgICAgJHNjcmVlbi1zbSAhZGVmYXVsdDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi10YWJsZXRgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi10YWJsZXQ6ICAgICAgICAgICAgICAkc2NyZWVuLXNtLW1pbiAhZGVmYXVsdDtcblxuLy8gTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3Bcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1tZGAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLW1kOiAgICAgICAgICAgICAgICAgIDk5MnB4ICFkZWZhdWx0O1xuJHNjcmVlbi1tZC1taW46ICAgICAgICAgICAgICAkc2NyZWVuLW1kICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLWRlc2t0b3BgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1kZXNrdG9wOiAgICAgICAgICAgICAkc2NyZWVuLW1kLW1pbiAhZGVmYXVsdDtcblxuLy8gTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tbGdgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1sZzogICAgICAgICAgICAgICAgICAxMjAwcHggIWRlZmF1bHQ7XG4kc2NyZWVuLWxnLW1pbjogICAgICAgICAgICAgICRzY3JlZW4tbGcgIWRlZmF1bHQ7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tbGctZGVza3RvcGAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLWxnLWRlc2t0b3A6ICAgICAgICAgICRzY3JlZW4tbGctbWluICFkZWZhdWx0O1xuXG4vLyBTbyBtZWRpYSBxdWVyaWVzIGRvbid0IG92ZXJsYXAgd2hlbiByZXF1aXJlZCwgcHJvdmlkZSBhIG1heGltdW1cbiRzY3JlZW4teHMtbWF4OiAgICAgICAgICAgICAgKCRzY3JlZW4tc20tbWluIC0gMSkgIWRlZmF1bHQ7XG4kc2NyZWVuLXNtLW1heDogICAgICAgICAgICAgICgkc2NyZWVuLW1kLW1pbiAtIDEpICFkZWZhdWx0O1xuJHNjcmVlbi1tZC1tYXg6ICAgICAgICAgICAgICAoJHNjcmVlbi1sZy1taW4gLSAxKSAhZGVmYXVsdDtcblxuXG4vLz09IEdyaWQgc3lzdGVtXG4vL1xuLy8jIyBEZWZpbmUgeW91ciBjdXN0b20gcmVzcG9uc2l2ZSBncmlkLlxuXG4vLyoqIE51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBncmlkLlxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuLy8qKiBQYWRkaW5nIGJldHdlZW4gY29sdW1ucy4gR2V0cyBkaXZpZGVkIGluIGhhbGYgZm9yIHRoZSBsZWZ0IGFuZCByaWdodC5cbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAzMHB4ICFkZWZhdWx0O1xuLy8gTmF2YmFyIGNvbGxhcHNlXG4vLyoqIFBvaW50IGF0IHdoaWNoIHRoZSBuYXZiYXIgYmVjb21lcyB1bmNvbGxhcHNlZC5cbiRncmlkLWZsb2F0LWJyZWFrcG9pbnQ6ICAgICAkc2NyZWVuLXNtLW1pbiAhZGVmYXVsdDtcbi8vKiogUG9pbnQgYXQgd2hpY2ggdGhlIG5hdmJhciBiZWdpbnMgY29sbGFwc2luZy5cbiRncmlkLWZsb2F0LWJyZWFrcG9pbnQtbWF4OiAoJGdyaWQtZmxvYXQtYnJlYWtwb2ludCAtIDEpICFkZWZhdWx0O1xuXG5cbi8vPT0gQ29udGFpbmVyIHNpemVzXG4vL1xuLy8jIyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4vLyBTbWFsbCBzY3JlZW4gLyB0YWJsZXRcbiRjb250YWluZXItdGFibGV0OiAgICAgICAgICAgICAoNzIwcHggKyAkZ3JpZC1ndXR0ZXItd2lkdGgpICFkZWZhdWx0O1xuLy8qKiBGb3IgYCRzY3JlZW4tc20tbWluYCBhbmQgdXAuXG4kY29udGFpbmVyLXNtOiAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci10YWJsZXQgIWRlZmF1bHQ7XG5cbi8vIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wXG4kY29udGFpbmVyLWRlc2t0b3A6ICAgICAgICAgICAgKDk0MHB4ICsgJGdyaWQtZ3V0dGVyLXdpZHRoKSAhZGVmYXVsdDtcbi8vKiogRm9yIGAkc2NyZWVuLW1kLW1pbmAgYW5kIHVwLlxuJGNvbnRhaW5lci1tZDogICAgICAgICAgICAgICAgICRjb250YWluZXItZGVza3RvcCAhZGVmYXVsdDtcblxuLy8gTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXG4kY29udGFpbmVyLWxhcmdlLWRlc2t0b3A6ICAgICAgKDExNDBweCArICRncmlkLWd1dHRlci13aWR0aCkgIWRlZmF1bHQ7XG4vLyoqIEZvciBgJHNjcmVlbi1sZy1taW5gIGFuZCB1cC5cbiRjb250YWluZXItbGc6ICAgICAgICAgICAgICAgICAkY29udGFpbmVyLWxhcmdlLWRlc2t0b3AgIWRlZmF1bHQ7XG5cblxuLy89PSBOYXZiYXJcbi8vXG4vLyMjXG5cbi8vIEJhc2ljcyBvZiBhIG5hdmJhclxuJG5hdmJhci1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICA1MHB4ICFkZWZhdWx0O1xuJG5hdmJhci1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAkbGluZS1oZWlnaHQtY29tcHV0ZWQgIWRlZmF1bHQ7XG4kbmF2YmFyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDogICAgICAgIGZsb29yKCgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKSkgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmctdmVydGljYWw6ICAgICAgICAgICgoJG5hdmJhci1oZWlnaHQgLSAkbGluZS1oZWlnaHQtY29tcHV0ZWQpIC8gMikgIWRlZmF1bHQ7XG4kbmF2YmFyLWNvbGxhcHNlLW1heC1oZWlnaHQ6ICAgICAgIDM0MHB4ICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRlZmF1bHQtY29sb3I6ICAgICAgICAgICAgICM3NzcgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtYmc6ICAgICAgICAgICAgICAgICNmOGY4ZjggIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtYm9yZGVyOiAgICAgICAgICAgIGRhcmtlbigkbmF2YmFyLWRlZmF1bHQtYmcsIDYuNSUpICFkZWZhdWx0O1xuXG4vLyBOYXZiYXIgbGlua3NcbiRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICAjNzc3ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1ob3Zlci1iZzogICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAgIzU1NSAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICBkYXJrZW4oJG5hdmJhci1kZWZhdWx0LWJnLCA2LjUlKSAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAjY2NjICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtYmc6ICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBOYXZiYXIgYnJhbmQgbGFiZWxcbiRuYXZiYXItZGVmYXVsdC1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAkbmF2YmFyLWRlZmF1bHQtbGluay1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICBkYXJrZW4oJG5hdmJhci1kZWZhdWx0LWJyYW5kLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWJyYW5kLWhvdmVyLWJnOiAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBOYXZiYXIgdG9nZ2xlXG4kbmF2YmFyLWRlZmF1bHQtdG9nZ2xlLWhvdmVyLWJnOiAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC10b2dnbGUtaWNvbi1iYXItYmc6ICAgICAgICAjODg4ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LXRvZ2dsZS1ib3JkZXItY29sb3I6ICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cblxuLy89PT0gSW52ZXJ0ZWQgbmF2YmFyXG4vLyBSZXNldCBpbnZlcnRlZCBuYXZiYXIgYmFzaWNzXG4kbmF2YmFyLWludmVyc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktbGlnaHQsIDE1JSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkbmF2YmFyLWludmVyc2UtYmcsIDEwJSkgIWRlZmF1bHQ7XG5cbi8vIEludmVydGVkIG5hdmJhciBsaW5rc1xuJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWxpZ2h0LCAxNSUpICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAgIGRhcmtlbigkbmF2YmFyLWludmVyc2UtYmcsIDEwJSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICM0NDQgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1iZzogICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBJbnZlcnRlZCBuYXZiYXIgYnJhbmQgbGFiZWxcbiRuYXZiYXItaW52ZXJzZS1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtYnJhbmQtaG92ZXItYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBJbnZlcnRlZCBuYXZiYXIgdG9nZ2xlXG4kbmF2YmFyLWludmVyc2UtdG9nZ2xlLWhvdmVyLWJnOiAgICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtdG9nZ2xlLWljb24tYmFyLWJnOiAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtdG9nZ2xlLWJvcmRlci1jb2xvcjogICAgICAgICMzMzMgIWRlZmF1bHQ7XG5cblxuLy89PSBOYXZzXG4vL1xuLy8jI1xuXG4vLz09PSBTaGFyZWQgbmF2IHN0eWxlc1xuJG5hdi1saW5rLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMHB4IDE1cHggIWRlZmF1bHQ7XG4kbmF2LWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG5cbiRuYXYtZGlzYWJsZWQtbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kbmF2LWRpc2FibGVkLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4vLz09IFRhYnNcbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAkZ3JheSAhZGVmYXVsdDtcbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAgI2RkZCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWp1c3RpZmllZC1saW5rLWJvcmRlci1jb2xvcjogICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuJG5hdi10YWJzLWp1c3RpZmllZC1hY3RpdmUtbGluay1ib3JkZXItY29sb3I6ICAgICAkYm9keS1iZyAhZGVmYXVsdDtcblxuLy89PSBQaWxsc1xuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuJG5hdi1waWxscy1hY3RpdmUtbGluay1ob3Zlci1iZzogICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtYWN0aXZlLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cblxuLy89PSBQYWdpbmF0aW9uXG4vL1xuLy8jI1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXI6ICAgICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyOiAgICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyOiAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuXG4vLz09IFBhZ2VyXG4vL1xuLy8jI1xuXG4kcGFnZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1iZyAhZGVmYXVsdDtcbiRwYWdlci1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWJvcmRlciAhZGVmYXVsdDtcbiRwYWdlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG5cbiRwYWdlci1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuXG4kcGFnZXItYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kcGFnZXItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cbiRwYWdlci1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vPT0gSnVtYm90cm9uXG4vL1xuLy8jI1xuXG4kanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWhlYWRpbmctY29sb3I6ICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1mb250LXNpemU6ICAgICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS41KSkgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWhlYWRpbmctZm9udC1zaXplOiAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiA0LjUpKSAhZGVmYXVsdDtcblxuXG4vLz09IEZvcm0gc3RhdGVzIGFuZCBhbGVydHNcbi8vXG4vLyMjIERlZmluZSBjb2xvcnMgZm9yIGZvcm0gZmVlZGJhY2sgc3RhdGVzIGFuZCwgYnkgZGVmYXVsdCwgYWxlcnRzLlxuXG4kc3RhdGUtc3VjY2Vzcy10ZXh0OiAgICAgICAgICAgICAjM2M3NjNkICFkZWZhdWx0O1xuJHN0YXRlLXN1Y2Nlc3MtYmc6ICAgICAgICAgICAgICAgI2RmZjBkOCAhZGVmYXVsdDtcbiRzdGF0ZS1zdWNjZXNzLWJvcmRlcjogICAgICAgICAgIGRhcmtlbihhZGp1c3QtaHVlKCRzdGF0ZS1zdWNjZXNzLWJnLCAtMTApLCA1JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS1pbmZvLXRleHQ6ICAgICAgICAgICAgICAgICMzMTcwOGYgIWRlZmF1bHQ7XG4kc3RhdGUtaW5mby1iZzogICAgICAgICAgICAgICAgICAjZDllZGY3ICFkZWZhdWx0O1xuJHN0YXRlLWluZm8tYm9yZGVyOiAgICAgICAgICAgICAgZGFya2VuKGFkanVzdC1odWUoJHN0YXRlLWluZm8tYmcsIC0xMCksIDclKSAhZGVmYXVsdDtcblxuJHN0YXRlLXdhcm5pbmctdGV4dDogICAgICAgICAgICAgIzhhNmQzYiAhZGVmYXVsdDtcbiRzdGF0ZS13YXJuaW5nLWJnOiAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XG4kc3RhdGUtd2FybmluZy1ib3JkZXI6ICAgICAgICAgICBkYXJrZW4oYWRqdXN0LWh1ZSgkc3RhdGUtd2FybmluZy1iZywgLTEwKSwgNSUpICFkZWZhdWx0O1xuXG4kc3RhdGUtZGFuZ2VyLXRleHQ6ICAgICAgICAgICAgICAjYTk0NDQyICFkZWZhdWx0O1xuJHN0YXRlLWRhbmdlci1iZzogICAgICAgICAgICAgICAgI2YyZGVkZSAhZGVmYXVsdDtcbiRzdGF0ZS1kYW5nZXItYm9yZGVyOiAgICAgICAgICAgIGRhcmtlbihhZGp1c3QtaHVlKCRzdGF0ZS1kYW5nZXItYmcsIC0xMCksIDUlKSAhZGVmYXVsdDtcblxuXG4vLz09IFRvb2x0aXBzXG4vL1xuLy8jI1xuXG4vLyoqIFRvb2x0aXAgbWF4IHdpZHRoXG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbi8vKiogVG9vbHRpcCB0ZXh0IGNvbG9yXG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBUb29sdGlwIGJhY2tncm91bmQgY29sb3JcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICMwMDAgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcblxuLy8qKiBUb29sdGlwIGFycm93IHdpZHRoXG4kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICA1cHggIWRlZmF1bHQ7XG4vLyoqIFRvb2x0aXAgYXJyb3cgY29sb3JcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG5cbi8vPT0gUG9wb3ZlcnNcbi8vXG4vLyMjXG5cbi8vKiogUG9wb3ZlciBib2R5IGJhY2tncm91bmQgY29sb3JcbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBtYXhpbXVtIHdpZHRoXG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDI3NnB4ICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIGJvcmRlciBjb2xvclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4yKSAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBmYWxsYmFjayBib3JkZXIgY29sb3JcbiRwb3BvdmVyLWZhbGxiYWNrLWJvcmRlci1jb2xvcjogICAgICAgI2NjYyAhZGVmYXVsdDtcblxuLy8qKiBQb3BvdmVyIHRpdGxlIGJhY2tncm91bmQgY29sb3JcbiRwb3BvdmVyLXRpdGxlLWJnOiAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XG5cbi8vKiogUG9wb3ZlciBhcnJvdyB3aWR0aFxuJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIGFycm93IGNvbG9yXG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4vLyoqIFBvcG92ZXIgb3V0ZXIgYXJyb3cgd2lkdGhcbiRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoOiAgICAgICAgICAgKCRwb3BvdmVyLWFycm93LXdpZHRoICsgMSkgIWRlZmF1bHQ7XG4vLyoqIFBvcG92ZXIgb3V0ZXIgYXJyb3cgY29sb3JcbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgICAgZmFkZV9pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIDAuMDUpICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIG91dGVyIGFycm93IGZhbGxiYWNrIGNvbG9yXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1mYWxsYmFjay1jb2xvcjogIGRhcmtlbigkcG9wb3Zlci1mYWxsYmFjay1ib3JkZXItY29sb3IsIDIwJSkgIWRlZmF1bHQ7XG5cblxuLy89PSBMYWJlbHNcbi8vXG4vLyMjXG5cbi8vKiogRGVmYXVsdCBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtZGVmYXVsdC1iZzogICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogUHJpbWFyeSBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtcHJpbWFyeS1iZzogICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbi8vKiogU3VjY2VzcyBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtc3VjY2Vzcy1iZzogICAgICAgICAgICAkYnJhbmQtc3VjY2VzcyAhZGVmYXVsdDtcbi8vKiogSW5mbyBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtaW5mby1iZzogICAgICAgICAgICAgICAkYnJhbmQtaW5mbyAhZGVmYXVsdDtcbi8vKiogV2FybmluZyBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtd2FybmluZy1iZzogICAgICAgICAgICAkYnJhbmQtd2FybmluZyAhZGVmYXVsdDtcbi8vKiogRGFuZ2VyIGxhYmVsIGJhY2tncm91bmQgY29sb3JcbiRsYWJlbC1kYW5nZXItYmc6ICAgICAgICAgICAgICRicmFuZC1kYW5nZXIgIWRlZmF1bHQ7XG5cbi8vKiogRGVmYXVsdCBsYWJlbCB0ZXh0IGNvbG9yXG4kbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBEZWZhdWx0IHRleHQgY29sb3Igb2YgYSBsaW5rZWQgbGFiZWxcbiRsYWJlbC1saW5rLWhvdmVyLWNvbG9yOiAgICAgICNmZmYgIWRlZmF1bHQ7XG5cblxuLy89PSBNb2RhbHNcbi8vXG4vLyMjXG5cbi8vKiogUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4vLyoqIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgdGl0bGVcbiRtb2RhbC10aXRsZS1wYWRkaW5nOiAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIHRpdGxlIGxpbmUtaGVpZ2h0XG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIG1vZGFsIGNvbnRlbnQgYXJlYVxuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBNb2RhbCBjb250ZW50IGJvcmRlciBjb2xvclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4yKSAhZGVmYXVsdDtcbi8vKiogTW9kYWwgY29udGVudCBib3JkZXIgY29sb3IgKipmb3IgSUU4KipcbiRtb2RhbC1jb250ZW50LWZhbGxiYWNrLWJvcmRlci1jb2xvcjogICAgICAgICAgIzk5OSAhZGVmYXVsdDtcblxuLy8qKiBNb2RhbCBiYWNrZHJvcCBiYWNrZ3JvdW5kIGNvbG9yXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuLy8qKiBNb2RhbCBiYWNrZHJvcCBvcGFjaXR5XG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAuNSAhZGVmYXVsdDtcbi8vKiogTW9kYWwgaGVhZGVyIGJvcmRlciBjb2xvclxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgI2U1ZTVlNSAhZGVmYXVsdDtcbi8vKiogTW9kYWwgZm9vdGVyIGJvcmRlciBjb2xvclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgIDkwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgNjAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuXG4vLz09IEFsZXJ0c1xuLy9cbi8vIyMgRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nOiAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgYm9sZCAhZGVmYXVsdDtcblxuJGFsZXJ0LXN1Y2Nlc3MtYmc6ICAgICAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtYmcgIWRlZmF1bHQ7XG4kYWxlcnQtc3VjY2Vzcy10ZXh0OiAgICAgICAgICAkc3RhdGUtc3VjY2Vzcy10ZXh0ICFkZWZhdWx0O1xuJGFsZXJ0LXN1Y2Nlc3MtYm9yZGVyOiAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtYm9yZGVyICFkZWZhdWx0O1xuXG4kYWxlcnQtaW5mby1iZzogICAgICAgICAgICAgICAkc3RhdGUtaW5mby1iZyAhZGVmYXVsdDtcbiRhbGVydC1pbmZvLXRleHQ6ICAgICAgICAgICAgICRzdGF0ZS1pbmZvLXRleHQgIWRlZmF1bHQ7XG4kYWxlcnQtaW5mby1ib3JkZXI6ICAgICAgICAgICAkc3RhdGUtaW5mby1ib3JkZXIgIWRlZmF1bHQ7XG5cbiRhbGVydC13YXJuaW5nLWJnOiAgICAgICAgICAgICRzdGF0ZS13YXJuaW5nLWJnICFkZWZhdWx0O1xuJGFsZXJ0LXdhcm5pbmctdGV4dDogICAgICAgICAgJHN0YXRlLXdhcm5pbmctdGV4dCAhZGVmYXVsdDtcbiRhbGVydC13YXJuaW5nLWJvcmRlcjogICAgICAgICRzdGF0ZS13YXJuaW5nLWJvcmRlciAhZGVmYXVsdDtcblxuJGFsZXJ0LWRhbmdlci1iZzogICAgICAgICAgICAgJHN0YXRlLWRhbmdlci1iZyAhZGVmYXVsdDtcbiRhbGVydC1kYW5nZXItdGV4dDogICAgICAgICAgICRzdGF0ZS1kYW5nZXItdGV4dCAhZGVmYXVsdDtcbiRhbGVydC1kYW5nZXItYm9yZGVyOiAgICAgICAgICRzdGF0ZS1kYW5nZXItYm9yZGVyICFkZWZhdWx0O1xuXG5cbi8vPT0gUHJvZ3Jlc3MgYmFyc1xuLy9cbi8vIyNcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB3aG9sZSBwcm9ncmVzcyBjb21wb25lbnRcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4vLyoqIFByb2dyZXNzIGJhciB0ZXh0IGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBWYXJpYWJsZSBmb3Igc2V0dGluZyByb3VuZGVkIGNvcm5lcnMgb24gcHJvZ3Jlc3MgYmFyLlxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcblxuLy8qKiBEZWZhdWx0IHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4vLyoqIFN1Y2Nlc3MgcHJvZ3Jlc3MgYmFyIGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmc6ICAgICAkYnJhbmQtc3VjY2VzcyAhZGVmYXVsdDtcbi8vKiogV2FybmluZyBwcm9ncmVzcyBiYXIgY29sb3JcbiRwcm9ncmVzcy1iYXItd2FybmluZy1iZzogICAgICRicmFuZC13YXJuaW5nICFkZWZhdWx0O1xuLy8qKiBEYW5nZXIgcHJvZ3Jlc3MgYmFyIGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZzogICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuLy8qKiBJbmZvIHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci1pbmZvLWJnOiAgICAgICAgJGJyYW5kLWluZm8gIWRlZmF1bHQ7XG5cblxuLy89PSBMaXN0IGdyb3VwXG4vL1xuLy8jI1xuXG4vLyoqIEJhY2tncm91bmQgY29sb3Igb24gYC5saXN0LWdyb3VwLWl0ZW1gXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIGAubGlzdC1ncm91cC1pdGVtYCBib3JkZXIgY29sb3JcbiRsaXN0LWdyb3VwLWJvcmRlcjogICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbi8vKiogTGlzdCBncm91cCBib3JkZXIgcmFkaXVzXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiBzaW5nbGUgbGlzdCBpdGVtcyBvbiBob3ZlclxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuLy8qKiBUZXh0IGNvbG9yIG9mIGFjdGl2ZSBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIGFjdGl2ZSBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuLy8qKiBCb3JkZXIgY29sb3Igb2YgYWN0aXZlIGxpc3QgZWxlbWVudHNcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXI6ICAgICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuLy8qKiBUZXh0IGNvbG9yIGZvciBjb250ZW50IHdpdGhpbiBhY3RpdmUgbGlzdCBpdGVtc1xuJGxpc3QtZ3JvdXAtYWN0aXZlLXRleHQtY29sb3I6ICBsaWdodGVuKCRsaXN0LWdyb3VwLWFjdGl2ZS1iZywgNDAlKSAhZGVmYXVsdDtcblxuLy8qKiBUZXh0IGNvbG9yIG9mIGRpc2FibGVkIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIGRpc2FibGVkIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4vLyoqIFRleHQgY29sb3IgZm9yIGNvbnRlbnQgd2l0aGluIGRpc2FibGVkIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWRpc2FibGVkLXRleHQtY29sb3I6ICRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1saW5rLWNvbG9yOiAgICAgICAgICM1NTUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1saW5rLWhvdmVyLWNvbG9yOiAgICRsaXN0LWdyb3VwLWxpbmstY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1saW5rLWhlYWRpbmctY29sb3I6ICMzMzMgIWRlZmF1bHQ7XG5cblxuLy89PSBQYW5lbHNcbi8vXG4vLyMjXG5cbiRwYW5lbC1iZzogICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFuZWwtYm9keS1wYWRkaW5nOiAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuJHBhbmVsLWhlYWRpbmctcGFkZGluZzogICAgICAgMTBweCAxNXB4ICFkZWZhdWx0O1xuJHBhbmVsLWZvb3Rlci1wYWRkaW5nOiAgICAgICAgJHBhbmVsLWhlYWRpbmctcGFkZGluZyAhZGVmYXVsdDtcbiRwYW5lbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogQm9yZGVyIGNvbG9yIGZvciBlbGVtZW50cyB3aXRoaW4gcGFuZWxzXG4kcGFuZWwtaW5uZXItYm9yZGVyOiAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuJHBhbmVsLWZvb3Rlci1iZzogICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcblxuJHBhbmVsLWRlZmF1bHQtdGV4dDogICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcbiRwYW5lbC1kZWZhdWx0LWJvcmRlcjogICAgICAgICNkZGQgIWRlZmF1bHQ7XG4kcGFuZWwtZGVmYXVsdC1oZWFkaW5nLWJnOiAgICAjZjVmNWY1ICFkZWZhdWx0O1xuXG4kcGFuZWwtcHJpbWFyeS10ZXh0OiAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhbmVsLXByaW1hcnktYm9yZGVyOiAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kcGFuZWwtcHJpbWFyeS1oZWFkaW5nLWJnOiAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcblxuJHBhbmVsLXN1Y2Nlc3MtdGV4dDogICAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtdGV4dCAhZGVmYXVsdDtcbiRwYW5lbC1zdWNjZXNzLWJvcmRlcjogICAgICAgICRzdGF0ZS1zdWNjZXNzLWJvcmRlciAhZGVmYXVsdDtcbiRwYW5lbC1zdWNjZXNzLWhlYWRpbmctYmc6ICAgICRzdGF0ZS1zdWNjZXNzLWJnICFkZWZhdWx0O1xuXG4kcGFuZWwtaW5mby10ZXh0OiAgICAgICAgICAgICAkc3RhdGUtaW5mby10ZXh0ICFkZWZhdWx0O1xuJHBhbmVsLWluZm8tYm9yZGVyOiAgICAgICAgICAgJHN0YXRlLWluZm8tYm9yZGVyICFkZWZhdWx0O1xuJHBhbmVsLWluZm8taGVhZGluZy1iZzogICAgICAgJHN0YXRlLWluZm8tYmcgIWRlZmF1bHQ7XG5cbiRwYW5lbC13YXJuaW5nLXRleHQ6ICAgICAgICAgICRzdGF0ZS13YXJuaW5nLXRleHQgIWRlZmF1bHQ7XG4kcGFuZWwtd2FybmluZy1ib3JkZXI6ICAgICAgICAkc3RhdGUtd2FybmluZy1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFuZWwtd2FybmluZy1oZWFkaW5nLWJnOiAgICAkc3RhdGUtd2FybmluZy1iZyAhZGVmYXVsdDtcblxuJHBhbmVsLWRhbmdlci10ZXh0OiAgICAgICAgICAgJHN0YXRlLWRhbmdlci10ZXh0ICFkZWZhdWx0O1xuJHBhbmVsLWRhbmdlci1ib3JkZXI6ICAgICAgICAgJHN0YXRlLWRhbmdlci1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFuZWwtZGFuZ2VyLWhlYWRpbmctYmc6ICAgICAkc3RhdGUtZGFuZ2VyLWJnICFkZWZhdWx0O1xuXG5cbi8vPT0gVGh1bWJuYWlsc1xuLy9cbi8vIyNcblxuLy8qKiBQYWRkaW5nIGFyb3VuZCB0aGUgdGh1bWJuYWlsIGltYWdlXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4vLyoqIFRodW1ibmFpbCBiYWNrZ3JvdW5kIGNvbG9yXG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbi8vKiogVGh1bWJuYWlsIGJvcmRlciBjb2xvclxuJHRodW1ibmFpbC1ib3JkZXI6ICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbi8vKiogVGh1bWJuYWlsIGJvcmRlciByYWRpdXNcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogQ3VzdG9tIHRleHQgY29sb3IgZm9yIHRodW1ibmFpbCBjYXB0aW9uc1xuJHRodW1ibmFpbC1jYXB0aW9uLWNvbG9yOiAgICAgJHRleHQtY29sb3IgIWRlZmF1bHQ7XG4vLyoqIFBhZGRpbmcgYXJvdW5kIHRoZSB0aHVtYm5haWwgY2FwdGlvblxuJHRodW1ibmFpbC1jYXB0aW9uLXBhZGRpbmc6ICAgOXB4ICFkZWZhdWx0O1xuXG5cbi8vPT0gV2VsbHNcbi8vXG4vLyMjXG5cbiR3ZWxsLWJnOiAgICAgICAgICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4kd2VsbC1ib3JkZXI6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHdlbGwtYmcsIDclKSAhZGVmYXVsdDtcblxuXG4vLz09IEJhZGdlc1xuLy9cbi8vIyNcblxuJGJhZGdlLWNvbG9yOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogTGlua2VkIGJhZGdlIHRleHQgY29sb3Igb24gaG92ZXJcbiRiYWRnZS1saW5rLWhvdmVyLWNvbG9yOiAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYmFkZ2UtYmc6ICAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy8qKiBCYWRnZSB0ZXh0IGNvbG9yIGluIGFjdGl2ZSBuYXYgbGlua1xuJGJhZGdlLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4vLyoqIEJhZGdlIGJhY2tncm91bmQgY29sb3IgaW4gYWN0aXZlIG5hdiBsaW5rXG4kYmFkZ2UtYWN0aXZlLWJnOiAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuXG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICBib2xkICFkZWZhdWx0O1xuJGJhZGdlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgMSAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG5cblxuLy89PSBCcmVhZGNydW1ic1xuLy9cbi8vIyNcblxuJGJyZWFkY3J1bWItcGFkZGluZy12ZXJ0aWNhbDogICA4cHggIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLWhvcml6b250YWw6IDE1cHggIWRlZmF1bHQ7XG4vLyoqIEJyZWFkY3J1bWIgYmFja2dyb3VuZCBjb2xvclxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuLy8qKiBCcmVhZGNydW1iIHRleHQgY29sb3JcbiRicmVhZGNydW1iLWNvbG9yOiAgICAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcbi8vKiogVGV4dCBjb2xvciBvZiBjdXJyZW50IHBhZ2UgaW4gdGhlIGJyZWFkY3J1bWJcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIFRleHR1YWwgc2VwYXJhdG9yIGZvciBiZXR3ZWVuIGJyZWFkY3J1bWIgZWxlbWVudHNcbiRicmVhZGNydW1iLXNlcGFyYXRvcjogICAgICAgICAgXCIvXCIgIWRlZmF1bHQ7XG5cblxuLy89PSBDYXJvdXNlbFxuLy9cbi8vIyNcblxuJGNhcm91c2VsLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKDAsMCwwLC42KSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDIwcHggIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuXG5cbi8vPT0gQ2xvc2Vcbi8vXG4vLyMjXG5cbiRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgIGJvbGQgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgMCAxcHggMCAjZmZmICFkZWZhdWx0O1xuXG5cbi8vPT0gQ29kZVxuLy9cbi8vIyNcblxuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgI2M3MjU0ZSAhZGVmYXVsdDtcbiRjb2RlLWJnOiAgICAgICAgICAgICAgICAgICAgICNmOWYyZjQgIWRlZmF1bHQ7XG5cbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAjMzMzICFkZWZhdWx0O1xuXG4kcHJlLWJnOiAgICAgICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcbiRwcmUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG4kcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAzNDBweCAhZGVmYXVsdDtcblxuXG4vLz09IFR5cGVcbi8vXG4vLyMjXG5cbi8vKiogSG9yaXpvbnRhbCBvZmZzZXQgZm9yIGZvcm1zIGFuZCBsaXN0cy5cbiRjb21wb25lbnQtb2Zmc2V0LWhvcml6b250YWw6IDE4MHB4ICFkZWZhdWx0O1xuLy8qKiBUZXh0IG11dGVkIGNvbG9yXG4kdGV4dC1tdXRlZDogICAgICAgICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogQWJicmV2aWF0aW9ucyBhbmQgYWNyb255bXMgYm9yZGVyIGNvbG9yXG4kYWJici1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogSGVhZGluZ3Mgc21hbGwgY29sb3JcbiRoZWFkaW5ncy1zbWFsbC1jb2xvcjogICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBCbG9ja3F1b3RlIHNtYWxsIGNvbG9yXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogQmxvY2txdW90ZSBmb250IHNpemVcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbi8vKiogQmxvY2txdW90ZSBib3JkZXIgY29sb3JcbiRibG9ja3F1b3RlLWJvcmRlci1jb2xvcjogICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4vLyoqIFBhZ2UgaGVhZGVyIGJvcmRlciBjb2xvclxuJHBhZ2UtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbi8vKiogV2lkdGggb2YgaG9yaXpvbnRhbCBkZXNjcmlwdGlvbiBsaXN0IHRpdGxlc1xuJGRsLWhvcml6b250YWwtb2Zmc2V0OiAgICAgICAgJGNvbXBvbmVudC1vZmZzZXQtaG9yaXpvbnRhbCAhZGVmYXVsdDtcbi8vKiogUG9pbnQgYXQgd2hpY2ggLmRsLWhvcml6b250YWwgYmVjb21lcyBob3Jpem9udGFsXG4kZGwtaG9yaXpvbnRhbC1icmVha3BvaW50OiAgICAkZ3JpZC1mbG9hdC1icmVha3BvaW50ICFkZWZhdWx0O1xuLy8qKiBIb3Jpem9udGFsIGxpbmUgY29sb3IuXG4kaHItYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuIiwiLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4zIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vL1xuLy8gMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cbi8vIDIuIFByZXZlbnQgaU9TIGFuZCBJRSB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2UsXG4vLyAgICB3aXRob3V0IGRpc2FibGluZyB1c2VyIHpvb20uXG4vL1xuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8vIDFcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8vIDJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvLyAyXG59XG5cbi8vXG4vLyBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXG4vL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vLyBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGFueSBIVE1MNSBlbGVtZW50IGluIElFIDgvOS5cbi8vIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXG4vLyBhbmQgRmlyZWZveC5cbi8vIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgbWFpbmAgaW4gSUUgMTEuXG4vL1xuXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1haW4sXG5tZW51LFxubmF2LFxuc2VjdGlvbixcbnN1bW1hcnkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy9cbi8vIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXG4vLyAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4vL1xuXG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vIDFcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvLyAyXG59XG5cbi8vXG4vLyBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxuLy8gUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cbi8vXG5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC5cbi8vIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cbi8vXG5cbltoaWRkZW5dLFxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vLyBMaW5rc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9cbi8vIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuLy9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vL1xuLy8gSW1wcm92ZSByZWFkYWJpbGl0eSBvZiBmb2N1c2VkIGVsZW1lbnRzIHdoZW4gdGhleSBhcmUgYWxzbyBpbiBhblxuLy8gYWN0aXZlL2hvdmVyIHN0YXRlLlxuLy9cblxuYTphY3RpdmUsXG5hOmhvdmVyIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLy8gVGV4dC1sZXZlbCBzZW1hbnRpY3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4vL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XG59XG5cbi8vXG4vLyBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4vL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8vXG4vLyBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXG4vL1xuXG5kZm4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vXG4vLyBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXG4vLyBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4vL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cbi8vXG5cbm1hcmsge1xuICBiYWNrZ3JvdW5kOiAjZmYwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuLy9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLy9cbi8vIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cbi8vXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbi8vIEVtYmVkZGVkIGNvbnRlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cbi8vXG5cbmltZyB7XG4gIGJvcmRlcjogMDtcbn1cblxuLy9cbi8vIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxuLy9cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyBHcm91cGluZyBjb250ZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXG4vL1xuXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG4vL1xuLy8gQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxuLy9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vL1xuLy8gQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXG4vL1xuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLy9cbi8vIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cbi8vXG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLy8gRm9ybXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxuLy8gc3R5bGluZyBvZiBgc2VsZWN0YCwgdW5sZXNzIGEgYGJvcmRlcmAgcHJvcGVydHkgaXMgc2V0LlxuLy9cblxuLy9cbi8vIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cbi8vICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxuLy8gMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cbi8vIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuLy9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgY29sb3I6IGluaGVyaXQ7IC8vIDFcbiAgZm9udDogaW5oZXJpdDsgLy8gMlxuICBtYXJnaW46IDA7IC8vIDNcbn1cblxuLy9cbi8vIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxuLy9cblxuYnV0dG9uIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8vXG4vLyBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXG4vLyBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxuLy8gQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LCBJRSA4LzkvMTAvMTEsIGFuZCBPcGVyYS5cbi8vIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cbi8vXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vL1xuLy8gMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2Bcbi8vICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxuLy8gMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxuLy8gMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcbi8vICAgIGBpbnB1dGAgYW5kIG90aGVycy5cbi8vXG5cbmJ1dHRvbixcbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgLy8gMVxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvLyAyXG4gIGN1cnNvcjogcG9pbnRlcjsgLy8gM1xufVxuXG4vL1xuLy8gUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cbi8vXG5cbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLy9cbi8vIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cbi8vXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxuLy8gdGhlIFVBIHN0eWxlc2hlZXQuXG4vL1xuXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8vXG4vLyBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXG4vLyBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxuLy9cbi8vIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXG4vLyAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxuLy9cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLy8gMVxuICBwYWRkaW5nOiAwOyAvLyAyXG59XG5cbi8vXG4vLyBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxuLy8gYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcbi8vIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cbi8vXG5cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vL1xuLy8gMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXG4vLyAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxuLy9cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvLyAxXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvLzJcbn1cblxuLy9cbi8vIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxuLy8gU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xuLy8gcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxuLy9cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8vXG4vLyBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXG4vL1xuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gIG1hcmdpbjogMCAycHg7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcbn1cblxuLy9cbi8vIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cbi8vIDIuIFJlbW92ZSBwYWRkaW5nIHNvIHBlb3BsZSBhcmVuJ3QgY2F1Z2h0IG91dCBpZiB0aGV5IHplcm8gb3V0IGZpZWxkc2V0cy5cbi8vXG5cbmxlZ2VuZCB7XG4gIGJvcmRlcjogMDsgLy8gMVxuICBwYWRkaW5nOiAwOyAvLyAyXG59XG5cbi8vXG4vLyBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxuLy9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLy9cbi8vIERvbid0IGluaGVyaXQgdGhlIGBmb250LXdlaWdodGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cbi8vIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxuLy9cblxub3B0Z3JvdXAge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLy8gVGFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxuLy9cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7XG59XG4iLCIvKiEgU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9ibG9iL21hc3Rlci9zcmMvY3NzL21haW4uY3NzICovXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQcmludCBzdHlsZXMuXG4vLyBJbmxpbmVkIHRvIGF2b2lkIHRoZSBhZGRpdGlvbmFsIEhUVFAgcmVxdWVzdDogaDVicC5jb20vclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQG1lZGlhIHByaW50IHtcbiAgICAqLFxuICAgICo6YmVmb3JlLFxuICAgICo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50OyAvLyBCbGFjayBwcmludHMgZmFzdGVyOiBoNWJwLmNvbS9zXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBhLFxuICAgIGE6dmlzaXRlZCB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgIGFbaHJlZl06YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiAoXCIgYXR0cihocmVmKSBcIilcIjtcbiAgICB9XG5cbiAgICBhYmJyW3RpdGxlXTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIChcIiBhdHRyKHRpdGxlKSBcIilcIjtcbiAgICB9XG5cbiAgICAvLyBEb24ndCBzaG93IGxpbmtzIHRoYXQgYXJlIGZyYWdtZW50IGlkZW50aWZpZXJzLFxuICAgIC8vIG9yIHVzZSB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2xcbiAgICBhW2hyZWZePVwiI1wiXTphZnRlcixcbiAgICBhW2hyZWZePVwiamF2YXNjcmlwdDpcIl06YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgIH1cblxuICAgIHByZSxcbiAgICBibG9ja3F1b3RlIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIH1cblxuICAgIHRoZWFkIHtcbiAgICAgICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwOyAvLyBoNWJwLmNvbS90XG4gICAgfVxuXG4gICAgdHIsXG4gICAgaW1nIHtcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIHAsXG4gICAgaDIsXG4gICAgaDMge1xuICAgICAgICBvcnBoYW5zOiAzO1xuICAgICAgICB3aWRvd3M6IDM7XG4gICAgfVxuXG4gICAgaDIsXG4gICAgaDMge1xuICAgICAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcbiAgICB9XG5cbiAgICAvLyBCb290c3RyYXAgc3BlY2lmaWMgY2hhbmdlcyBzdGFydFxuXG4gICAgLy8gQm9vdHN0cmFwIGNvbXBvbmVudHNcbiAgICAubmF2YmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmJ0bixcbiAgICAuZHJvcHVwID4gLmJ0biB7XG4gICAgICAgID4gLmNhcmV0IHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubGFiZWwge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIH1cblxuICAgIC50YWJsZSB7XG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDtcblxuICAgICAgICB0ZCxcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC50YWJsZS1ib3JkZXJlZCB7XG4gICAgICAgIHRoLFxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCb290c3RyYXAgc3BlY2lmaWMgY2hhbmdlcyBlbmRcbn1cbiIsIi8vXG4vLyBTY2FmZm9sZGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBSZXNldCB0aGUgYm94LXNpemluZ1xuLy9cbi8vIEhlYWRzIHVwISBUaGlzIHJlc2V0IG1heSBjYXVzZSBjb25mbGljdHMgd2l0aCBzb21lIHRoaXJkLXBhcnR5IHdpZGdldHMuXG4vLyBGb3IgcmVjb21tZW5kYXRpb25zIG9uIHJlc29sdmluZyBzdWNoIGNvbmZsaWN0cywgc2VlXG4vLyBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9nZXR0aW5nLXN0YXJ0ZWQvI3RoaXJkLWJveC1zaXppbmdcbioge1xuICBAaW5jbHVkZSBib3gtc2l6aW5nKGJvcmRlci1ib3gpO1xufVxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgQGluY2x1ZGUgYm94LXNpemluZyhib3JkZXItYm94KTtcbn1cblxuXG4vLyBCb2R5IHJlc2V0XG5cbmh0bWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcbn1cblxuLy8gUmVzZXQgZm9udHMgZm9yIHJlbGV2YW50IGVsZW1lbnRzXG5pbnB1dCxcbmJ1dHRvbixcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cblxuLy8gTGlua3NcblxuYSB7XG4gIGNvbG9yOiAkbGluay1jb2xvcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246ICRsaW5rLWhvdmVyLWRlY29yYXRpb247XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBAaW5jbHVkZSB0YWItZm9jdXM7XG4gIH1cbn1cblxuXG4vLyBGaWd1cmVzXG4vL1xuLy8gV2UgcmVzZXQgdGhpcyBoZXJlIGJlY2F1c2UgcHJldmlvdXNseSBOb3JtYWxpemUgaGFkIG5vIGBmaWd1cmVgIG1hcmdpbnMuIFRoaXNcbi8vIGVuc3VyZXMgd2UgZG9uJ3QgYnJlYWsgYW55b25lJ3MgdXNlIG9mIHRoZSBlbGVtZW50LlxuXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG59XG5cblxuLy8gSW1hZ2VzXG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi8vIFJlc3BvbnNpdmUgaW1hZ2VzIChlbnN1cmUgaW1hZ2VzIGRvbid0IHNjYWxlIGJleW9uZCB0aGVpciBwYXJlbnRzKVxuLmltZy1yZXNwb25zaXZlIHtcbiAgQGluY2x1ZGUgaW1nLXJlc3BvbnNpdmU7XG59XG5cbi8vIFJvdW5kZWQgY29ybmVyc1xuLmltZy1yb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGFyZ2U7XG59XG5cbi8vIEltYWdlIHRodW1ibmFpbHNcbi8vXG4vLyBIZWFkcyB1cCEgVGhpcyBpcyBtaXhpbi1lZCBpbnRvIHRodW1ibmFpbHMubGVzcyBmb3IgYC50aHVtYm5haWxgLlxuLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAkdGh1bWJuYWlsLXBhZGRpbmc7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRodW1ibmFpbC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJHRodW1ibmFpbC1ib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6ICR0aHVtYm5haWwtYm9yZGVyLXJhZGl1cztcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjJzIGVhc2UtaW4tb3V0KTtcblxuICAvLyBLZWVwIHRoZW0gYXQgbW9zdCAxMDAlIHdpZGVcbiAgQGluY2x1ZGUgaW1nLXJlc3BvbnNpdmUoaW5saW5lLWJsb2NrKTtcbn1cblxuLy8gUGVyZmVjdCBjaXJjbGVcbi5pbWctY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlOyAvLyBzZXQgcmFkaXVzIGluIHBlcmNlbnRzXG59XG5cblxuLy8gSG9yaXpvbnRhbCBydWxlc1xuXG5ociB7XG4gIG1hcmdpbi10b3A6ICAgICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkaHItYm9yZGVyO1xufVxuXG5cbi8vIE9ubHkgZGlzcGxheSBjb250ZW50IHRvIHNjcmVlbiByZWFkZXJzXG4vL1xuLy8gU2VlOiBodHRwOi8vYTExeXByb2plY3QuY29tL3Bvc3RzL2hvdy10by1oaWRlLWNvbnRlbnRcblxuLnNyLW9ubHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCwwLDAsMCk7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gVXNlIGluIGNvbmp1bmN0aW9uIHdpdGggLnNyLW9ubHkgdG8gb25seSBkaXNwbGF5IGNvbnRlbnQgd2hlbiBpdCdzIGZvY3VzZWQuXG4vLyBVc2VmdWwgZm9yIFwiU2tpcCB0byBtYWluIGNvbnRlbnRcIiBsaW5rczsgc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTMvTk9URS1XQ0FHMjAtVEVDSFMtMjAxMzA5MDUvRzFcbi8vIENyZWRpdDogSFRNTDUgQm9pbGVycGxhdGVcblxuLnNyLW9ubHktZm9jdXNhYmxlIHtcbiAgJjphY3RpdmUsXG4gICY6Zm9jdXMge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBjbGlwOiBhdXRvO1xuICB9XG59XG5cblxuLy8gaU9TIFwiY2xpY2thYmxlIGVsZW1lbnRzXCIgZml4IGZvciByb2xlPVwiYnV0dG9uXCJcbi8vXG4vLyBGaXhlcyBcImNsaWNrYWJpbGl0eVwiIGlzc3VlIChhbmQgbW9yZSBnZW5lcmFsbHksIHRoZSBmaXJpbmcgb2YgZXZlbnRzIHN1Y2ggYXMgZm9jdXMgYXMgd2VsbClcbi8vIGZvciB0cmFkaXRpb25hbGx5IG5vbi1mb2N1c2FibGUgZWxlbWVudHMgd2l0aCByb2xlPVwiYnV0dG9uXCJcbi8vIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvY2xpY2sjU2FmYXJpX01vYmlsZVxuXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi8vXG4vLyBUeXBvZ3JhcGh5XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEhlYWRpbmdzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcbiAgZm9udC1mYW1pbHk6ICRoZWFkaW5ncy1mb250LWZhbWlseTtcbiAgZm9udC13ZWlnaHQ6ICRoZWFkaW5ncy1mb250LXdlaWdodDtcbiAgbGluZS1oZWlnaHQ6ICRoZWFkaW5ncy1saW5lLWhlaWdodDtcbiAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcblxuICBzbWFsbCxcbiAgLnNtYWxsIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiAkaGVhZGluZ3Mtc21hbGwtY29sb3I7XG4gIH1cbn1cblxuaDEsIC5oMSxcbmgyLCAuaDIsXG5oMywgLmgzIHtcbiAgbWFyZ2luLXRvcDogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBtYXJnaW4tYm90dG9tOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMik7XG5cbiAgc21hbGwsXG4gIC5zbWFsbCB7XG4gICAgZm9udC1zaXplOiA2NSU7XG4gIH1cbn1cbmg0LCAuaDQsXG5oNSwgLmg1LFxuaDYsIC5oNiB7XG4gIG1hcmdpbi10b3A6ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKTtcbiAgbWFyZ2luLWJvdHRvbTogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpO1xuXG4gIHNtYWxsLFxuICAuc21hbGwge1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICB9XG59XG5cbmgxLCAuaDEgeyBmb250LXNpemU6ICRmb250LXNpemUtaDE7IH1cbmgyLCAuaDIgeyBmb250LXNpemU6ICRmb250LXNpemUtaDI7IH1cbmgzLCAuaDMgeyBmb250LXNpemU6ICRmb250LXNpemUtaDM7IH1cbmg0LCAuaDQgeyBmb250LXNpemU6ICRmb250LXNpemUtaDQ7IH1cbmg1LCAuaDUgeyBmb250LXNpemU6ICRmb250LXNpemUtaDU7IH1cbmg2LCAuaDYgeyBmb250LXNpemU6ICRmb250LXNpemUtaDY7IH1cblxuXG4vLyBCb2R5IHRleHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxucCB7XG4gIG1hcmdpbjogMCAwICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKTtcbn1cblxuLmxlYWQge1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGZvbnQtc2l6ZTogZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMTUpKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBmb250LXNpemU6ICgkZm9udC1zaXplLWJhc2UgKiAxLjUpO1xuICB9XG59XG5cblxuLy8gRW1waGFzaXMgJiBtaXNjXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEV4OiAoMTJweCBzbWFsbCBmb250IC8gMTRweCBiYXNlIGZvbnQpICogMTAwJSA9IGFib3V0IDg1JVxuc21hbGwsXG4uc21hbGwge1xuICBmb250LXNpemU6IGZsb29yKCgxMDAlICogJGZvbnQtc2l6ZS1zbWFsbCAvICRmb250LXNpemUtYmFzZSkpO1xufVxuXG5tYXJrLFxuLm1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3RhdGUtd2FybmluZy1iZztcbiAgcGFkZGluZzogLjJlbTtcbn1cblxuLy8gQWxpZ25tZW50XG4udGV4dC1sZWZ0ICAgICAgICAgICB7IHRleHQtYWxpZ246IGxlZnQ7IH1cbi50ZXh0LXJpZ2h0ICAgICAgICAgIHsgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbi50ZXh0LWNlbnRlciAgICAgICAgIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4udGV4dC1qdXN0aWZ5ICAgICAgICB7IHRleHQtYWxpZ246IGp1c3RpZnk7IH1cbi50ZXh0LW5vd3JhcCAgICAgICAgIHsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4vLyBUcmFuc2Zvcm1hdGlvblxuLnRleHQtbG93ZXJjYXNlICAgICAgeyB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlOyB9XG4udGV4dC11cHBlcmNhc2UgICAgICB7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbi50ZXh0LWNhcGl0YWxpemUgICAgIHsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cblxuLy8gQ29udGV4dHVhbCBjb2xvcnNcbi50ZXh0LW11dGVkIHtcbiAgY29sb3I6ICR0ZXh0LW11dGVkO1xufVxuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LXByaW1hcnknLCAkYnJhbmQtcHJpbWFyeSk7XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtc3VjY2VzcycsICRzdGF0ZS1zdWNjZXNzLXRleHQpO1xuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LWluZm8nLCAkc3RhdGUtaW5mby10ZXh0KTtcblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC13YXJuaW5nJywgJHN0YXRlLXdhcm5pbmctdGV4dCk7XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtZGFuZ2VyJywgJHN0YXRlLWRhbmdlci10ZXh0KTtcblxuLy8gQ29udGV4dHVhbCBiYWNrZ3JvdW5kc1xuLy8gRm9yIG5vdyB3ZSdsbCBsZWF2ZSB0aGVzZSBhbG9uZ3NpZGUgdGhlIHRleHQgY2xhc3NlcyB1bnRpbCB2NCB3aGVuIHdlIGNhblxuLy8gc2FmZWx5IHNoaWZ0IHRoaW5ncyBhcm91bmQgKHBlciBTZW1WZXIgcnVsZXMpLlxuLmJnLXByaW1hcnkge1xuICAvLyBHaXZlbiB0aGUgY29udHJhc3QgaGVyZSwgdGhpcyBpcyB0aGUgb25seSBjbGFzcyB0byBoYXZlIGl0cyBjb2xvciBpbnZlcnRlZFxuICAvLyBhdXRvbWF0aWNhbGx5LlxuICBjb2xvcjogI2ZmZjtcbn1cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy1wcmltYXJ5JywgJGJyYW5kLXByaW1hcnkpO1xuXG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctc3VjY2VzcycsICRzdGF0ZS1zdWNjZXNzLWJnKTtcblxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLWluZm8nLCAkc3RhdGUtaW5mby1iZyk7XG5cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy13YXJuaW5nJywgJHN0YXRlLXdhcm5pbmctYmcpO1xuXG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctZGFuZ2VyJywgJHN0YXRlLWRhbmdlci1iZyk7XG5cblxuLy8gUGFnZSBoZWFkZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206ICgoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMikgLSAxKTtcbiAgbWFyZ2luOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICogMikgMCAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkcGFnZS1oZWFkZXItYm9yZGVyLWNvbG9yO1xufVxuXG5cbi8vIExpc3RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFVub3JkZXJlZCBhbmQgT3JkZXJlZCBsaXN0c1xudWwsXG5vbCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKTtcbiAgdWwsXG4gIG9sIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5cbi8vIExpc3Qgb3B0aW9uc1xuXG4vLyBbY29udmVydGVyXSBleHRyYWN0ZWQgZnJvbSBgLmxpc3QtdW5zdHlsZWRgIGZvciBsaWJzYXNzIGNvbXBhdGliaWxpdHlcbkBtaXhpbiBsaXN0LXVuc3R5bGVkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGFzIGBAbWl4aW4gbGlzdC11bnN0eWxlZGAgZm9yIGxpYnNhc3MgY29tcGF0aWJpbGl0eVxuLmxpc3QtdW5zdHlsZWQge1xuICBAaW5jbHVkZSBsaXN0LXVuc3R5bGVkO1xufVxuXG5cbi8vIElubGluZSB0dXJucyBsaXN0IGl0ZW1zIGludG8gaW5saW5lLWJsb2NrXG4ubGlzdC1pbmxpbmUge1xuICBAaW5jbHVkZSBsaXN0LXVuc3R5bGVkO1xuICBtYXJnaW4tbGVmdDogLTVweDtcblxuICA+IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG59XG5cbi8vIERlc2NyaXB0aW9uIExpc3RzXG5kbCB7XG4gIG1hcmdpbi10b3A6IDA7IC8vIFJlbW92ZSBicm93c2VyIGRlZmF1bHRcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xufVxuZHQsXG5kZCB7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbn1cbmR0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5kZCB7XG4gIG1hcmdpbi1sZWZ0OiAwOyAvLyBVbmRvIGJyb3dzZXIgZGVmYXVsdFxufVxuXG4vLyBIb3Jpem9udGFsIGRlc2NyaXB0aW9uIGxpc3RzXG4vL1xuLy8gRGVmYXVsdHMgdG8gYmVpbmcgc3RhY2tlZCB3aXRob3V0IGFueSBvZiB0aGUgYmVsb3cgc3R5bGVzIGFwcGxpZWQsIHVudGlsIHRoZVxuLy8gZ3JpZCBicmVha3BvaW50IGlzIHJlYWNoZWQgKGRlZmF1bHQgb2Ygfjc2OHB4KS5cblxuLmRsLWhvcml6b250YWwge1xuICBkZCB7XG4gICAgQGluY2x1ZGUgY2xlYXJmaXg7IC8vIENsZWFyIHRoZSBmbG9hdGVkIGBkdGAgaWYgYW4gZW1wdHkgYGRkYCBpcyBwcmVzZW50XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGRsLWhvcml6b250YWwtYnJlYWtwb2ludCkge1xuICAgIGR0IHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6ICgkZGwtaG9yaXpvbnRhbC1vZmZzZXQgLSAyMCk7XG4gICAgICBjbGVhcjogbGVmdDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdztcbiAgICB9XG4gICAgZGQge1xuICAgICAgbWFyZ2luLWxlZnQ6ICRkbC1ob3Jpem9udGFsLW9mZnNldDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBNaXNjXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEFiYnJldmlhdGlvbnMgYW5kIGFjcm9ueW1zXG5hYmJyW3RpdGxlXSxcbi8vIEFkZCBkYXRhLSogYXR0cmlidXRlIHRvIGhlbHAgb3V0IG91ciB0b29sdGlwIHBsdWdpbiwgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvNTI1N1xuYWJicltkYXRhLW9yaWdpbmFsLXRpdGxlXSB7XG4gIGN1cnNvcjogaGVscDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAkYWJici1ib3JkZXItY29sb3I7XG59XG4uaW5pdGlhbGlzbSB7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBAZXh0ZW5kIC50ZXh0LXVwcGVyY2FzZTtcbn1cblxuLy8gQmxvY2txdW90ZXNcbmJsb2NrcXVvdGUge1xuICBwYWRkaW5nOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMikgJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBtYXJnaW46IDAgMCAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGZvbnQtc2l6ZTogJGJsb2NrcXVvdGUtZm9udC1zaXplO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRibG9ja3F1b3RlLWJvcmRlci1jb2xvcjtcblxuICBwLFxuICB1bCxcbiAgb2wge1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5vdGU6IERlcHJlY2F0ZWQgc21hbGwgYW5kIC5zbWFsbCBhcyBvZiB2My4xLjBcbiAgLy8gQ29udGV4dDogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTY2MFxuICBmb290ZXIsXG4gIHNtYWxsLFxuICAuc21hbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogODAlOyAvLyBiYWNrIHRvIGRlZmF1bHQgZm9udC1zaXplXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICAgIGNvbG9yOiAkYmxvY2txdW90ZS1zbWFsbC1jb2xvcjtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDIwMTQgXFwwMEEwJzsgLy8gZW0gZGFzaCwgbmJzcFxuICAgIH1cbiAgfVxufVxuXG4vLyBPcHBvc2l0ZSBhbGlnbm1lbnQgb2YgYmxvY2txdW90ZVxuLy9cbi8vIEhlYWRzIHVwOiBgYmxvY2txdW90ZS5wdWxsLXJpZ2h0YCBoYXMgYmVlbiBkZXByZWNhdGVkIGFzIG9mIHYzLjEuMC5cbi5ibG9ja3F1b3RlLXJldmVyc2UsXG5ibG9ja3F1b3RlLnB1bGwtcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICRibG9ja3F1b3RlLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gIC8vIEFjY291bnQgZm9yIGNpdGF0aW9uXG4gIGZvb3RlcixcbiAgc21hbGwsXG4gIC5zbWFsbCB7XG4gICAgJjpiZWZvcmUgeyBjb250ZW50OiAnJzsgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJ1xcMDBBMCBcXDIwMTQnOyAvLyBuYnNwLCBlbSBkYXNoXG4gICAgfVxuICB9XG59XG5cbi8vIEFkZHJlc3Nlc1xuYWRkcmVzcyB7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG59XG4iLCIvL1xuLy8gQ29kZSAoaW5saW5lIGFuZCBibG9jaylcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gSW5saW5lIGFuZCBibG9jayBjb2RlIHN0eWxlc1xuY29kZSxcbmtiZCxcbnByZSxcbnNhbXAge1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTtcbn1cblxuLy8gSW5saW5lIGNvZGVcbmNvZGUge1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICRjb2RlLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29kZS1iZztcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcbn1cblxuLy8gVXNlciBpbnB1dCB0eXBpY2FsbHkgZW50ZXJlZCB2aWEga2V5Ym9hcmRcbmtiZCB7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogJGtiZC1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGtiZC1iZztcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc21hbGw7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIHJnYmEoMCwwLDAsLjI1KTtcblxuICBrYmQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cblxuLy8gQmxvY2tzIG9mIGNvZGVcbnByZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAoKCRsaW5lLWhlaWdodC1jb21wdXRlZCAtIDEpIC8gMik7XG4gIG1hcmdpbjogMCAwICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKTtcbiAgZm9udC1zaXplOiAoJGZvbnQtc2l6ZS1iYXNlIC0gMSk7IC8vIDE0cHggdG8gMTNweFxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBjb2xvcjogJHByZS1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByZS1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJHByZS1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XG5cbiAgLy8gQWNjb3VudCBmb3Igc29tZSBjb2RlIG91dHB1dHMgdGhhdCBwbGFjZSBjb2RlIHRhZ3MgaW4gcHJlIHRhZ3NcbiAgY29kZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cblxuLy8gRW5hYmxlIHNjcm9sbGFibGUgYmxvY2tzIG9mIGNvZGVcbi5wcmUtc2Nyb2xsYWJsZSB7XG4gIG1heC1oZWlnaHQ6ICRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4iLCIvL1xuLy8gR3JpZCBzeXN0ZW1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQ29udGFpbmVyIHdpZHRoc1xuLy9cbi8vIFNldCB0aGUgY29udGFpbmVyIHdpZHRoLCBhbmQgb3ZlcnJpZGUgaXQgZm9yIGZpeGVkIG5hdmJhcnMgaW4gbWVkaWEgcXVlcmllcy5cblxuLmNvbnRhaW5lciB7XG4gIEBpbmNsdWRlIGNvbnRhaW5lci1maXhlZDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICB3aWR0aDogJGNvbnRhaW5lci1zbTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIHtcbiAgICB3aWR0aDogJGNvbnRhaW5lci1tZDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgICB3aWR0aDogJGNvbnRhaW5lci1sZztcbiAgfVxufVxuXG5cbi8vIEZsdWlkIGNvbnRhaW5lclxuLy9cbi8vIFV0aWxpemVzIHRoZSBtaXhpbiBtZWFudCBmb3IgZml4ZWQgd2lkdGggY29udGFpbmVycywgYnV0IHdpdGhvdXQgYW55IGRlZmluZWRcbi8vIHdpZHRoIGZvciBmbHVpZCwgZnVsbCB3aWR0aCBsYXlvdXRzLlxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgQGluY2x1ZGUgY29udGFpbmVyLWZpeGVkO1xufVxuXG5cbi8vIFJvd1xuLy9cbi8vIFJvd3MgY29udGFpbiBhbmQgY2xlYXIgdGhlIGZsb2F0cyBvZiB5b3VyIGNvbHVtbnMuXG5cbi5yb3cge1xuICBAaW5jbHVkZSBtYWtlLXJvdztcbn1cblxuXG4vLyBDb2x1bW5zXG4vL1xuLy8gQ29tbW9uIHN0eWxlcyBmb3Igc21hbGwgYW5kIGxhcmdlIGdyaWQgY29sdW1uc1xuXG5AaW5jbHVkZSBtYWtlLWdyaWQtY29sdW1ucztcblxuXG4vLyBFeHRyYSBzbWFsbCBncmlkXG4vL1xuLy8gQ29sdW1ucywgb2Zmc2V0cywgcHVzaGVzLCBhbmQgcHVsbHMgZm9yIGV4dHJhIHNtYWxsIGRldmljZXMgbGlrZVxuLy8gc21hcnRwaG9uZXMuXG5cbkBpbmNsdWRlIG1ha2UtZ3JpZCh4cyk7XG5cblxuLy8gU21hbGwgZ3JpZFxuLy9cbi8vIENvbHVtbnMsIG9mZnNldHMsIHB1c2hlcywgYW5kIHB1bGxzIGZvciB0aGUgc21hbGwgZGV2aWNlIHJhbmdlLCBmcm9tIHBob25lc1xuLy8gdG8gdGFibGV0cy5cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gIEBpbmNsdWRlIG1ha2UtZ3JpZChzbSk7XG59XG5cblxuLy8gTWVkaXVtIGdyaWRcbi8vXG4vLyBDb2x1bW5zLCBvZmZzZXRzLCBwdXNoZXMsIGFuZCBwdWxscyBmb3IgdGhlIGRlc2t0b3AgZGV2aWNlIHJhbmdlLlxuXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIHtcbiAgQGluY2x1ZGUgbWFrZS1ncmlkKG1kKTtcbn1cblxuXG4vLyBMYXJnZSBncmlkXG4vL1xuLy8gQ29sdW1ucywgb2Zmc2V0cywgcHVzaGVzLCBhbmQgcHVsbHMgZm9yIHRoZSBsYXJnZSBkZXNrdG9wIGRldmljZSByYW5nZS5cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gIEBpbmNsdWRlIG1ha2UtZ3JpZChsZyk7XG59XG4iLCIvL1xuLy8gVGFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRhYmxlLWJnO1xufVxuY2FwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAkdGFibGUtY2VsbC1wYWRkaW5nO1xuICBwYWRkaW5nLWJvdHRvbTogJHRhYmxlLWNlbGwtcGFkZGluZztcbiAgY29sb3I6ICR0ZXh0LW11dGVkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxudGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbi8vIEJhc2VsaW5lIHN0eWxlc1xuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIC8vIENlbGxzXG4gID4gdGhlYWQsXG4gID4gdGJvZHksXG4gID4gdGZvb3Qge1xuICAgID4gdHIge1xuICAgICAgPiB0aCxcbiAgICAgID4gdGQge1xuICAgICAgICBwYWRkaW5nOiAkdGFibGUtY2VsbC1wYWRkaW5nO1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBCb3R0b20gYWxpZ24gZm9yIGNvbHVtbiBoZWFkaW5nc1xuICA+IHRoZWFkID4gdHIgPiB0aCB7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgfVxuICAvLyBSZW1vdmUgdG9wIGJvcmRlciBmcm9tIHRoZWFkIGJ5IGRlZmF1bHRcbiAgPiBjYXB0aW9uICsgdGhlYWQsXG4gID4gY29sZ3JvdXAgKyB0aGVhZCxcbiAgPiB0aGVhZDpmaXJzdC1jaGlsZCB7XG4gICAgPiB0cjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IHRoLFxuICAgICAgPiB0ZCB7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIEFjY291bnQgZm9yIG11bHRpcGxlIHRib2R5IGluc3RhbmNlc1xuICA+IHRib2R5ICsgdGJvZHkge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICB9XG5cbiAgLy8gTmVzdGluZ1xuICAudGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xuICB9XG59XG5cblxuLy8gQ29uZGVuc2VkIHRhYmxlIHcvIGhhbGYgcGFkZGluZ1xuXG4udGFibGUtY29uZGVuc2VkIHtcbiAgPiB0aGVhZCxcbiAgPiB0Ym9keSxcbiAgPiB0Zm9vdCB7XG4gICAgPiB0ciB7XG4gICAgICA+IHRoLFxuICAgICAgPiB0ZCB7XG4gICAgICAgIHBhZGRpbmc6ICR0YWJsZS1jb25kZW5zZWQtY2VsbC1wYWRkaW5nO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIEJvcmRlcmVkIHZlcnNpb25cbi8vXG4vLyBBZGQgYm9yZGVycyBhbGwgYXJvdW5kIHRoZSB0YWJsZSBhbmQgYmV0d2VlbiBhbGwgdGhlIGNvbHVtbnMuXG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gID4gdGhlYWQsXG4gID4gdGJvZHksXG4gID4gdGZvb3Qge1xuICAgID4gdHIge1xuICAgICAgPiB0aCxcbiAgICAgID4gdGQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICA+IHRoZWFkID4gdHIge1xuICAgID4gdGgsXG4gICAgPiB0ZCB7XG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgfVxuICB9XG59XG5cblxuLy8gWmVicmEtc3RyaXBpbmdcbi8vXG4vLyBEZWZhdWx0IHplYnJhLXN0cmlwZSBzdHlsZXMgKGFsdGVybmF0aW5nIGdyYXkgYW5kIHRyYW5zcGFyZW50IGJhY2tncm91bmRzKVxuXG4udGFibGUtc3RyaXBlZCB7XG4gID4gdGJvZHkgPiB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFibGUtYmctYWNjZW50O1xuICB9XG59XG5cblxuLy8gSG92ZXIgZWZmZWN0XG4vL1xuLy8gUGxhY2VkIGhlcmUgc2luY2UgaXQgaGFzIHRvIGNvbWUgYWZ0ZXIgdGhlIHBvdGVudGlhbCB6ZWJyYSBzdHJpcGluZ1xuXG4udGFibGUtaG92ZXIge1xuICA+IHRib2R5ID4gdHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1iZy1ob3ZlcjtcbiAgfVxufVxuXG5cbi8vIFRhYmxlIGNlbGwgc2l6aW5nXG4vL1xuLy8gUmVzZXQgZGVmYXVsdCB0YWJsZSBiZWhhdmlvclxuXG50YWJsZSBjb2xbY2xhc3MqPVwiY29sLVwiXSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7IC8vIFByZXZlbnQgYm9yZGVyIGhpZGluZyBpbiBGaXJlZm94IGFuZCBJRTktMTEgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNjIzKVxuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogdGFibGUtY29sdW1uO1xufVxudGFibGUge1xuICB0ZCxcbiAgdGgge1xuICAgICZbY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljOyAvLyBQcmV2ZW50IGJvcmRlciBoaWRpbmcgaW4gRmlyZWZveCBhbmQgSUU5LTExIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTYyMylcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBUYWJsZSBiYWNrZ3JvdW5kc1xuLy9cbi8vIEV4YWN0IHNlbGVjdG9ycyBiZWxvdyByZXF1aXJlZCB0byBvdmVycmlkZSBgLnRhYmxlLXN0cmlwZWRgIGFuZCBwcmV2ZW50XG4vLyBpbmhlcml0YW5jZSB0byBuZXN0ZWQgdGFibGVzLlxuXG4vLyBHZW5lcmF0ZSB0aGUgY29udGV4dHVhbCB2YXJpYW50c1xuQGluY2x1ZGUgdGFibGUtcm93LXZhcmlhbnQoJ2FjdGl2ZScsICR0YWJsZS1iZy1hY3RpdmUpO1xuQGluY2x1ZGUgdGFibGUtcm93LXZhcmlhbnQoJ3N1Y2Nlc3MnLCAkc3RhdGUtc3VjY2Vzcy1iZyk7XG5AaW5jbHVkZSB0YWJsZS1yb3ctdmFyaWFudCgnaW5mbycsICRzdGF0ZS1pbmZvLWJnKTtcbkBpbmNsdWRlIHRhYmxlLXJvdy12YXJpYW50KCd3YXJuaW5nJywgJHN0YXRlLXdhcm5pbmctYmcpO1xuQGluY2x1ZGUgdGFibGUtcm93LXZhcmlhbnQoJ2RhbmdlcicsICRzdGF0ZS1kYW5nZXItYmcpO1xuXG5cbi8vIFJlc3BvbnNpdmUgdGFibGVzXG4vL1xuLy8gV3JhcCB5b3VyIHRhYmxlcyBpbiBgLnRhYmxlLXJlc3BvbnNpdmVgIGFuZCB3ZSdsbCBtYWtlIHRoZW0gbW9iaWxlIGZyaWVuZGx5XG4vLyBieSBlbmFibGluZyBob3Jpem9udGFsIHNjcm9sbGluZy4gT25seSBhcHBsaWVzIDw3NjhweC4gRXZlcnl0aGluZyBhYm92ZSB0aGF0XG4vLyB3aWxsIGRpc3BsYXkgbm9ybWFsbHkuXG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWluLWhlaWdodDogMC4wMSU7IC8vIFdvcmthcm91bmQgZm9yIElFOSBidWcgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzE0ODM3KVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAqIDAuNzUpO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuXG4gICAgLy8gVGlnaHRlbiB1cCBzcGFjaW5nXG4gICAgPiAudGFibGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgLy8gRW5zdXJlIHRoZSBjb250ZW50IGRvZXNuJ3Qgd3JhcFxuICAgICAgPiB0aGVhZCxcbiAgICAgID4gdGJvZHksXG4gICAgICA+IHRmb290IHtcbiAgICAgICAgPiB0ciB7XG4gICAgICAgICAgPiB0aCxcbiAgICAgICAgICA+IHRkIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3BlY2lhbCBvdmVycmlkZXMgZm9yIHRoZSBib3JkZXJlZCB0YWJsZXNcbiAgICA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgICBib3JkZXI6IDA7XG5cbiAgICAgIC8vIE51a2UgdGhlIGFwcHJvcHJpYXRlIGJvcmRlcnMgc28gdGhhdCB0aGUgcGFyZW50IGNhbiBoYW5kbGUgdGhlbVxuICAgICAgPiB0aGVhZCxcbiAgICAgID4gdGJvZHksXG4gICAgICA+IHRmb290IHtcbiAgICAgICAgPiB0ciB7XG4gICAgICAgICAgPiB0aDpmaXJzdC1jaGlsZCxcbiAgICAgICAgICA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICA+IHRoOmxhc3QtY2hpbGQsXG4gICAgICAgICAgPiB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT25seSBudWtlIHRoZSBsYXN0IHJvdydzIGJvdHRvbS1ib3JkZXIgaW4gYHRib2R5YCBhbmQgYHRmb290YCBzaW5jZVxuICAgICAgLy8gY2hhbmNlcyBhcmUgdGhlcmUgd2lsbCBiZSBvbmx5IG9uZSBgdHJgIGluIGEgYHRoZWFkYCBhbmQgdGhhdCB3b3VsZFxuICAgICAgLy8gcmVtb3ZlIHRoZSBib3JkZXIgYWx0b2dldGhlci5cbiAgICAgID4gdGJvZHksXG4gICAgICA+IHRmb290IHtcbiAgICAgICAgPiB0cjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICA+IHRoLFxuICAgICAgICAgID4gdGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIEZvcm1zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIE5vcm1hbGl6ZSBub24tY29udHJvbHNcbi8vXG4vLyBSZXN0eWxlIGFuZCBiYXNlbGluZSBub24tY29udHJvbCBmb3JtIGVsZW1lbnRzLlxuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICAvLyBDaHJvbWUgYW5kIEZpcmVmb3ggc2V0IGEgYG1pbi13aWR0aDogbWluLWNvbnRlbnQ7YCBvbiBmaWVsZHNldHMsXG4gIC8vIHNvIHdlIHJlc2V0IHRoYXQgdG8gZW5zdXJlIGl0IGJlaGF2ZXMgbW9yZSBsaWtlIGEgc3RhbmRhcmQgYmxvY2sgZWxlbWVudC5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTIzNTkuXG4gIG1pbi13aWR0aDogMDtcbn1cblxubGVnZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGZvbnQtc2l6ZTogKCRmb250LXNpemUtYmFzZSAqIDEuNSk7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBjb2xvcjogJGxlZ2VuZC1jb2xvcjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxlZ2VuZC1ib3JkZXItY29sb3I7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7IC8vIEZvcmNlIElFOCB0byB3cmFwIGxvbmcgY29udGVudCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTMxNDEpXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLy8gTm9ybWFsaXplIGZvcm0gY29udHJvbHNcbi8vXG4vLyBXaGlsZSBtb3N0IG9mIG91ciBmb3JtIHN0eWxlcyByZXF1aXJlIGV4dHJhIGNsYXNzZXMsIHNvbWUgYmFzaWMgbm9ybWFsaXphdGlvblxuLy8gaXMgcmVxdWlyZWQgdG8gZW5zdXJlIG9wdGltdW0gZGlzcGxheSB3aXRoIG9yIHdpdGhvdXQgdGhvc2UgY2xhc3NlcyB0byBiZXR0ZXJcbi8vIGFkZHJlc3MgYnJvd3NlciBpbmNvbnNpc3RlbmNpZXMuXG5cbi8vIE92ZXJyaWRlIGNvbnRlbnQtYm94IGluIE5vcm1hbGl6ZSAoKiBpc24ndCBzcGVjaWZpYyBlbm91Z2gpXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgQGluY2x1ZGUgYm94LXNpemluZyhib3JkZXItYm94KTtcbn1cblxuLy8gUG9zaXRpb24gcmFkaW9zIGFuZCBjaGVja2JveGVzIGJldHRlclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgbWFyZ2luOiA0cHggMCAwO1xuICBtYXJnaW4tdG9wOiAxcHggXFw5OyAvLyBJRTgtOVxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vLyBNYWtlIHJhbmdlIGlucHV0cyBiZWhhdmUgbGlrZSB0ZXh0dWFsIGZvcm0gY29udHJvbHNcbmlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gTWFrZSBtdWx0aXBsZSBzZWxlY3QgZWxlbWVudHMgaGVpZ2h0IG5vdCBmaXhlZFxuc2VsZWN0W211bHRpcGxlXSxcbnNlbGVjdFtzaXplXSB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLy8gRm9jdXMgZm9yIGZpbGUsIHJhZGlvLCBhbmQgY2hlY2tib3hcbmlucHV0W3R5cGU9XCJmaWxlXCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzIHtcbiAgQGluY2x1ZGUgdGFiLWZvY3VzO1xufVxuXG4vLyBBZGp1c3Qgb3V0cHV0IGVsZW1lbnRcbm91dHB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKyAxKTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgY29sb3I6ICRpbnB1dC1jb2xvcjtcbn1cblxuXG4vLyBDb21tb24gZm9ybSBjb250cm9sc1xuLy9cbi8vIFNoYXJlZCBzaXplIGFuZCB0eXBlIHJlc2V0cyBmb3IgZm9ybSBjb250cm9scy4gQXBwbHkgYC5mb3JtLWNvbnRyb2xgIHRvIGFueVxuLy8gb2YgdGhlIGZvbGxvd2luZyBmb3JtIGNvbnRyb2xzOlxuLy9cbi8vIHNlbGVjdFxuLy8gdGV4dGFyZWFcbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdXG4vLyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl1cbi8vIGlucHV0W3R5cGU9XCJkYXRldGltZVwiXVxuLy8gaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZVwiXVxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXVxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl1cbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl1cbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXVxuLy8gaW5wdXRbdHlwZT1cInVybFwiXVxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXVxuLy8gaW5wdXRbdHlwZT1cInRlbFwiXVxuLy8gaW5wdXRbdHlwZT1cImNvbG9yXCJdXG5cbi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJGlucHV0LWhlaWdodC1iYXNlOyAvLyBNYWtlIGlucHV0cyBhdCBsZWFzdCB0aGUgaGVpZ2h0IG9mIHRoZWlyIGJ1dHRvbiBjb3VudGVycGFydCAoYmFzZSBsaW5lLWhlaWdodCArIHBhZGRpbmcgKyBib3JkZXIpXG4gIHBhZGRpbmc6ICRwYWRkaW5nLWJhc2UtdmVydGljYWwgJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICBjb2xvcjogJGlucHV0LWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8vIFJlc2V0IHVudXN1YWwgRmlyZWZveC1vbi1BbmRyb2lkIGRlZmF1bHQgc3R5bGU7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzL2lzc3Vlcy8yMTRcbiAgYm9yZGVyOiAxcHggc29saWQgJGlucHV0LWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXM7IC8vIE5vdGU6IFRoaXMgaGFzIG5vIGVmZmVjdCBvbiA8c2VsZWN0PnMgaW4gc29tZSBicm93c2VycywgZHVlIHRvIHRoZSBsaW1pdGVkIHN0eWxhYmlsaXR5IG9mIDxzZWxlY3Q+cyBpbiBDU1MuXG4gIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSkpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXMpO1xuXG4gIC8vIEN1c3RvbWl6ZSB0aGUgYDpmb2N1c2Agc3RhdGUgdG8gaW1pdGF0ZSBuYXRpdmUgV2ViS2l0IHN0eWxlcy5cbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLWZvY3VzO1xuXG4gIC8vIFBsYWNlaG9sZGVyXG4gIEBpbmNsdWRlIHBsYWNlaG9sZGVyO1xuXG4gIC8vIFVuc3R5bGUgdGhlIGNhcmV0IG9uIGA8c2VsZWN0PmBzIGluIElFMTArLlxuICAmOjotbXMtZXhwYW5kIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAvLyBEaXNhYmxlZCBhbmQgcmVhZC1vbmx5IGlucHV0c1xuICAvL1xuICAvLyBIVE1MNSBzYXlzIHRoYXQgY29udHJvbHMgdW5kZXIgYSBmaWVsZHNldCA+IGxlZ2VuZDpmaXJzdC1jaGlsZCB3b24ndCBiZVxuICAvLyBkaXNhYmxlZCBpZiB0aGUgZmllbGRzZXQgaXMgZGlzYWJsZWQuIER1ZSB0byBpbXBsZW1lbnRhdGlvbiBkaWZmaWN1bHR5LCB3ZVxuICAvLyBkb24ndCBob25vciB0aGF0IGVkZ2UgY2FzZTsgd2Ugc3R5bGUgdGhlbSBhcyBkaXNhYmxlZCBhbnl3YXkuXG4gICZbZGlzYWJsZWRdLFxuICAmW3JlYWRvbmx5XSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iZy1kaXNhYmxlZDtcbiAgICBvcGFjaXR5OiAxOyAvLyBpT1MgZml4IGZvciB1bnJlYWRhYmxlIGRpc2FibGVkIGNvbnRlbnQ7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNjU1XG4gIH1cblxuICAmW2Rpc2FibGVkXSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgfVxuXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCB0ZXh0YXJlYSYgdG8gdGV4dGFyZWEuZm9ybS1jb250cm9sXG59XG5cbi8vIFJlc2V0IGhlaWdodCBmb3IgYHRleHRhcmVhYHNcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuXG4vLyBTZWFyY2ggaW5wdXRzIGluIGlPU1xuLy9cbi8vIFRoaXMgb3ZlcnJpZGVzIHRoZSBleHRyYSByb3VuZGVkIGNvcm5lcnMgb24gc2VhcmNoIGlucHV0cyBpbiBpT1Mgc28gdGhhdCBvdXJcbi8vIGAuZm9ybS1jb250cm9sYCBjbGFzcyBjYW4gcHJvcGVybHkgc3R5bGUgdGhlbS4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IHNpbXBseVxuLy8gYmUgYWRkZWQgdG8gYC5mb3JtLWNvbnRyb2xgIGFzIGl0J3Mgbm90IHNwZWNpZmljIGVub3VnaC4gRm9yIGRldGFpbHMsIHNlZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTU4Ni5cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuXG4vLyBTcGVjaWFsIHN0eWxlcyBmb3IgaU9TIHRlbXBvcmFsIGlucHV0c1xuLy9cbi8vIEluIE1vYmlsZSBTYWZhcmksIHNldHRpbmcgYGRpc3BsYXk6IGJsb2NrYCBvbiB0ZW1wb3JhbCBpbnB1dHMgY2F1c2VzIHRoZVxuLy8gdGV4dCB3aXRoaW4gdGhlIGlucHV0IHRvIGJlY29tZSB2ZXJ0aWNhbGx5IG1pc2FsaWduZWQuIEFzIGEgd29ya2Fyb3VuZCwgd2Vcbi8vIHNldCBhIHBpeGVsIGxpbmUtaGVpZ2h0IHRoYXQgbWF0Y2hlcyB0aGUgZ2l2ZW4gaGVpZ2h0IG9mIHRoZSBpbnB1dCwgYnV0IG9ubHlcbi8vIGZvciBTYWZhcmkuIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM5ODQ4XG4vL1xuLy8gTm90ZSB0aGF0IGFzIG9mIDkuMywgaU9TIGRvZXNuJ3Qgc3VwcG9ydCBgd2Vla2AuXG5cbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIHtcbiAgaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4gIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0sXG4gIGlucHV0W3R5cGU9XCJtb250aFwiXSB7XG4gICAgJi5mb3JtLWNvbnRyb2wge1xuICAgICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtYmFzZTtcbiAgICB9XG5cbiAgICAmLmlucHV0LXNtLFxuICAgIC5pbnB1dC1ncm91cC1zbSAmIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xuICAgIH1cblxuICAgICYuaW5wdXQtbGcsXG4gICAgLmlucHV0LWdyb3VwLWxnICYge1xuICAgICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gICAgfVxuICB9XG59XG5cblxuLy8gRm9ybSBncm91cHNcbi8vXG4vLyBEZXNpZ25lZCB0byBoZWxwIHdpdGggdGhlIG9yZ2FuaXphdGlvbiBhbmQgc3BhY2luZyBvZiB2ZXJ0aWNhbCBmb3Jtcy4gRm9yXG4vLyBob3Jpem9udGFsIGZvcm1zLCB1c2UgdGhlIHByZWRlZmluZWQgZ3JpZCBjbGFzc2VzLlxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206ICRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b207XG59XG5cblxuLy8gQ2hlY2tib3hlcyBhbmQgcmFkaW9zXG4vL1xuLy8gSW5kZW50IHRoZSBsYWJlbHMgdG8gcG9zaXRpb24gcmFkaW9zL2NoZWNrYm94ZXMgYXMgaGFuZ2luZyBjb250cm9scy5cblxuLnJhZGlvLFxuLmNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICBsYWJlbCB7XG4gICAgbWluLWhlaWdodDogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkOyAvLyBFbnN1cmUgdGhlIGlucHV0IGRvZXNuJ3QganVtcCB3aGVuIHRoZXJlIGlzIG5vIHRleHRcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbi5yYWRpby1pbmxpbmUgaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi5jaGVja2JveC1pbmxpbmUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIG1hcmdpbi10b3A6IDRweCBcXDk7XG59XG5cbi5yYWRpbyArIC5yYWRpbyxcbi5jaGVja2JveCArIC5jaGVja2JveCB7XG4gIG1hcmdpbi10b3A6IC01cHg7IC8vIE1vdmUgdXAgc2libGluZyByYWRpb3Mgb3IgY2hlY2tib3hlcyBmb3IgdGlnaHRlciBzcGFjaW5nXG59XG5cbi8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBvbiBzYW1lIGxpbmVcbi5yYWRpby1pbmxpbmUsXG4uY2hlY2tib3gtaW5saW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJhZGlvLWlubGluZSArIC5yYWRpby1pbmxpbmUsXG4uY2hlY2tib3gtaW5saW5lICsgLmNoZWNrYm94LWlubGluZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyAvLyBzcGFjZSBvdXQgY29uc2VjdXRpdmUgaW5saW5lIGNvbnRyb2xzXG59XG5cbi8vIEFwcGx5IHNhbWUgZGlzYWJsZWQgY3Vyc29yIHR3ZWFrIGFzIGZvciBpbnB1dHNcbi8vIFNvbWUgc3BlY2lhbCBjYXJlIGlzIG5lZWRlZCBiZWNhdXNlIDxsYWJlbD5zIGRvbid0IGluaGVyaXQgdGhlaXIgcGFyZW50J3MgYGN1cnNvcmAuXG4vL1xuLy8gTm90ZTogTmVpdGhlciByYWRpb3Mgbm9yIGNoZWNrYm94ZXMgY2FuIGJlIHJlYWRvbmx5LlxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgJltkaXNhYmxlZF0sXG4gICYuZGlzYWJsZWQsXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gIH1cbn1cbi8vIFRoZXNlIGNsYXNzZXMgYXJlIHVzZWQgZGlyZWN0bHkgb24gPGxhYmVsPnNcbi5yYWRpby1pbmxpbmUsXG4uY2hlY2tib3gtaW5saW5lIHtcbiAgJi5kaXNhYmxlZCxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgfVxufVxuLy8gVGhlc2UgY2xhc3NlcyBhcmUgdXNlZCBvbiBlbGVtZW50cyB3aXRoIDxsYWJlbD4gZGVzY2VuZGFudHNcbi5yYWRpbyxcbi5jaGVja2JveCB7XG4gICYuZGlzYWJsZWQsXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBsYWJlbCB7XG4gICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgfVxuICB9XG59XG5cblxuLy8gU3RhdGljIGZvcm0gY29udHJvbCB0ZXh0XG4vL1xuLy8gQXBwbHkgY2xhc3MgdG8gYSBgcGAgZWxlbWVudCB0byBtYWtlIGFueSBzdHJpbmcgb2YgdGV4dCBhbGlnbiB3aXRoIGxhYmVscyBpblxuLy8gYSBob3Jpem9udGFsIGZvcm0gbGF5b3V0LlxuXG4uZm9ybS1jb250cm9sLXN0YXRpYyB7XG4gIC8vIFNpemUgaXQgYXBwcm9wcmlhdGVseSBuZXh0IHRvIHJlYWwgZm9ybSBjb250cm9sc1xuICBwYWRkaW5nLXRvcDogKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKyAxKTtcbiAgcGFkZGluZy1ib3R0b206ICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSk7XG4gIC8vIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiBmcm9tIGBwYFxuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtaW4taGVpZ2h0OiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgJGZvbnQtc2l6ZS1iYXNlKTtcblxuICAmLmlucHV0LWxnLFxuICAmLmlucHV0LXNtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG5cbi8vIEZvcm0gY29udHJvbCBzaXppbmdcbi8vXG4vLyBCdWlsZCBvbiBgLmZvcm0tY29udHJvbGAgd2l0aCBtb2RpZmllciBjbGFzc2VzIHRvIGRlY3JlYXNlIG9yIGluY3JlYXNlIHRoZVxuLy8gaGVpZ2h0IGFuZCBmb250LXNpemUgb2YgZm9ybSBjb250cm9scy5cbi8vXG4vLyBUaGUgYC5mb3JtLWdyb3VwLSogZm9ybS1jb250cm9sYCB2YXJpYXRpb25zIGFyZSBzYWRseSBkdXBsaWNhdGVkIHRvIGF2b2lkIHRoZVxuLy8gaXNzdWUgZG9jdW1lbnRlZCBpbiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzE1MDc0LlxuXG5AaW5jbHVkZSBpbnB1dC1zaXplKCcuaW5wdXQtc20nLCAkaW5wdXQtaGVpZ2h0LXNtYWxsLCAkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCwgJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1zbWFsbCwgJGxpbmUtaGVpZ2h0LXNtYWxsLCAkaW5wdXQtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4uZm9ybS1ncm91cC1zbSB7XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCAkcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LXNtYWxsO1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzLXNtYWxsO1xuICB9XG4gIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgfVxuICB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wsXG4gIHNlbGVjdFttdWx0aXBsZV0uZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgICBtaW4taGVpZ2h0OiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgJGZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgcGFkZGluZzogKCRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsICsgMSkgJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1zbWFsbDtcbiAgfVxufVxuXG5AaW5jbHVkZSBpbnB1dC1zaXplKCcuaW5wdXQtbGcnLCAkaW5wdXQtaGVpZ2h0LWxhcmdlLCAkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCwgJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1sYXJnZSwgJGxpbmUtaGVpZ2h0LWxhcmdlLCAkaW5wdXQtYm9yZGVyLXJhZGl1cy1sYXJnZSk7XG4uZm9ybS1ncm91cC1sZyB7XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCAkcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sYXJnZTtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWxhcmdlO1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzLWxhcmdlO1xuICB9XG4gIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgfVxuICB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wsXG4gIHNlbGVjdFttdWx0aXBsZV0uZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgICBtaW4taGVpZ2h0OiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgJGZvbnQtc2l6ZS1sYXJnZSk7XG4gICAgcGFkZGluZzogKCRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsICsgMSkgJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1sYXJnZTtcbiAgfVxufVxuXG5cbi8vIEZvcm0gY29udHJvbCBmZWVkYmFjayBzdGF0ZXNcbi8vXG4vLyBBcHBseSBjb250ZXh0dWFsIGFuZCBzZW1hbnRpYyBzdGF0ZXMgdG8gaW5kaXZpZHVhbCBmb3JtIGNvbnRyb2xzLlxuXG4uaGFzLWZlZWRiYWNrIHtcbiAgLy8gRW5hYmxlIGFic29sdXRlIHBvc2l0aW9uaW5nXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAvLyBFbnN1cmUgaWNvbnMgZG9uJ3Qgb3ZlcmxhcCB0ZXh0XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmctcmlnaHQ6ICgkaW5wdXQtaGVpZ2h0LWJhc2UgKiAxLjI1KTtcbiAgfVxufVxuLy8gRmVlZGJhY2sgaWNvbiAocmVxdWlyZXMgLmdseXBoaWNvbiBjbGFzc2VzKVxuLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjsgLy8gRW5zdXJlIGljb24gaXMgYWJvdmUgaW5wdXQgZ3JvdXBzXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogJGlucHV0LWhlaWdodC1iYXNlO1xuICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtYmFzZTtcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtYmFzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5pbnB1dC1sZyArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4uaW5wdXQtZ3JvdXAtbGcgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxuLmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbCArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICB3aWR0aDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxhcmdlO1xuICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbn1cbi5pbnB1dC1zbSArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4uaW5wdXQtZ3JvdXAtc20gKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxuLmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbCArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICB3aWR0aDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xuICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbn1cblxuLy8gRmVlZGJhY2sgc3RhdGVzXG4uaGFzLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkc3RhdGUtc3VjY2Vzcy10ZXh0LCAkc3RhdGUtc3VjY2Vzcy10ZXh0LCAkc3RhdGUtc3VjY2Vzcy1iZyk7XG59XG4uaGFzLXdhcm5pbmcge1xuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkc3RhdGUtd2FybmluZy10ZXh0LCAkc3RhdGUtd2FybmluZy10ZXh0LCAkc3RhdGUtd2FybmluZy1iZyk7XG59XG4uaGFzLWVycm9yIHtcbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLXZhbGlkYXRpb24oJHN0YXRlLWRhbmdlci10ZXh0LCAkc3RhdGUtZGFuZ2VyLXRleHQsICRzdGF0ZS1kYW5nZXItYmcpO1xufVxuXG4vLyBSZXBvc2l0aW9uIGZlZWRiYWNrIGljb24gaWYgaW5wdXQgaGFzIHZpc2libGUgbGFiZWwgYWJvdmVcbi5oYXMtZmVlZGJhY2sgbGFiZWwge1xuXG4gICYgfiAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICB0b3A6ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKyA1KTsgLy8gSGVpZ2h0IG9mIHRoZSBgbGFiZWxgIGFuZCBpdHMgbWFyZ2luXG4gIH1cbiAgJi5zci1vbmx5IH4gLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgdG9wOiAwO1xuICB9XG59XG5cblxuLy8gSGVscCB0ZXh0XG4vL1xuLy8gQXBwbHkgdG8gYW55IGVsZW1lbnQgeW91IHdpc2ggdG8gY3JlYXRlIGxpZ2h0IHRleHQgZm9yIHBsYWNlbWVudCBpbW1lZGlhdGVseVxuLy8gYmVsb3cgYSBmb3JtIGNvbnRyb2wuIFVzZSBmb3IgZ2VuZXJhbCBoZWxwLCBmb3JtYXR0aW5nLCBvciBpbnN0cnVjdGlvbmFsIHRleHQuXG5cbi5oZWxwLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7IC8vIGFjY291bnQgZm9yIGFueSBlbGVtZW50IHVzaW5nIGhlbHAtYmxvY2tcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogbGlnaHRlbigkdGV4dC1jb2xvciwgMjUlKTsgLy8gbGlnaHRlbiB0aGUgdGV4dCBzb21lIGZvciBjb250cmFzdFxufVxuXG5cbi8vIElubGluZSBmb3Jtc1xuLy9cbi8vIE1ha2UgZm9ybXMgYXBwZWFyIGlubGluZSgtYmxvY2spIGJ5IGFkZGluZyB0aGUgYC5mb3JtLWlubGluZWAgY2xhc3MuIElubGluZVxuLy8gZm9ybXMgYmVnaW4gc3RhY2tlZCBvbiBleHRyYSBzbWFsbCAobW9iaWxlKSBkZXZpY2VzIGFuZCB0aGVuIGdvIGlubGluZSB3aGVuXG4vLyB2aWV3cG9ydHMgcmVhY2ggPDc2OHB4LlxuLy9cbi8vIFJlcXVpcmVzIHdyYXBwaW5nIGlucHV0cyBhbmQgbGFiZWxzIHdpdGggYC5mb3JtLWdyb3VwYCBmb3IgcHJvcGVyIGRpc3BsYXkgb2Zcbi8vIGRlZmF1bHQgSFRNTCBmb3JtIGNvbnRyb2xzIGFuZCBvdXIgY3VzdG9tIGZvcm0gY29udHJvbHMgKGUuZy4sIGlucHV0IGdyb3VwcykuXG4vL1xuLy8gSGVhZHMgdXAhIFRoaXMgaXMgbWl4aW4tZWQgaW50byBgLm5hdmJhci1mb3JtYCBpbiBuYXZiYXJzLmxlc3MuXG5cbi8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBmcm9tIGAuZm9ybS1pbmxpbmVgIGZvciBsaWJzYXNzIGNvbXBhdGliaWxpdHlcbkBtaXhpbiBmb3JtLWlubGluZSB7XG5cbiAgLy8gS2ljayBpbiB0aGUgaW5saW5lXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIC8vIElubGluZS1ibG9jayBhbGwgdGhlIHRoaW5ncyBmb3IgXCJpbmxpbmVcIlxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC8vIEluIG5hdmJhci1mb3JtLCBhbGxvdyBmb2xrcyB0byAqbm90KiB1c2UgYC5mb3JtLWdyb3VwYFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IGF1dG87IC8vIFByZXZlbnQgbGFiZWxzIGZyb20gc3RhY2tpbmcgYWJvdmUgaW5wdXRzIGluIGAuZm9ybS1ncm91cGBcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdGF0aWMgY29udHJvbHMgYmVoYXZlIGxpa2UgcmVndWxhciBvbmVzXG4gICAgLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5pbnB1dC1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAuaW5wdXQtZ3JvdXAtYWRkb24sXG4gICAgICAuaW5wdXQtZ3JvdXAtYnRuLFxuICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElucHV0IGdyb3VwcyBuZWVkIHRoYXQgMTAwJSB3aWR0aCB0aG91Z2hcbiAgICAuaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jb250cm9sLWxhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiBvbiByYWRpb3MvY2hlY2tib3hlcyB0aGF0IHdlcmUgdXNlZCBmb3Igc3RhY2tpbmcsIGFuZFxuICAgIC8vIHRoZW4gdW5kbyB0aGUgZmxvYXRpbmcgb2YgcmFkaW9zIGFuZCBjaGVja2JveGVzIHRvIG1hdGNoLlxuICAgIC5yYWRpbyxcbiAgICAuY2hlY2tib3gge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbiAgICAuY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC8vIFJlLW92ZXJyaWRlIHRoZSBmZWVkYmFjayBpY29uLlxuICAgIC5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICB9XG59XG4vLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYXMgYEBtaXhpbiBmb3JtLWlubGluZWAgZm9yIGxpYnNhc3MgY29tcGF0aWJpbGl0eVxuLmZvcm0taW5saW5lIHtcbiAgQGluY2x1ZGUgZm9ybS1pbmxpbmU7XG59XG5cblxuXG4vLyBIb3Jpem9udGFsIGZvcm1zXG4vL1xuLy8gSG9yaXpvbnRhbCBmb3JtcyBhcmUgYnVpbHQgb24gZ3JpZCBjbGFzc2VzIGFuZCBhbGxvdyB5b3UgdG8gY3JlYXRlIGZvcm1zIHdpdGhcbi8vIGxhYmVscyBvbiB0aGUgbGVmdCBhbmQgaW5wdXRzIG9uIHRoZSByaWdodC5cblxuLmZvcm0taG9yaXpvbnRhbCB7XG5cbiAgLy8gQ29uc2lzdGVudCB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgcmFkaW9zIGFuZCBjaGVja2JveGVzXG4gIC8vXG4gIC8vIExhYmVscyBhbHNvIGdldCBzb21lIHJlc2V0IHN0eWxlcywgYnV0IHRoYXQgaXMgc2NvcGVkIHRvIGEgbWVkaWEgcXVlcnkgYmVsb3cuXG4gIC5yYWRpbyxcbiAgLmNoZWNrYm94LFxuICAucmFkaW8taW5saW5lLFxuICAuY2hlY2tib3gtaW5saW5lIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSk7IC8vIERlZmF1bHQgcGFkZGluZyBwbHVzIGEgYm9yZGVyXG4gIH1cbiAgLy8gQWNjb3VudCBmb3IgcGFkZGluZyB3ZSdyZSBhZGRpbmcgdG8gZW5zdXJlIHRoZSBhbGlnbm1lbnQgYW5kIG9mIGhlbHAgdGV4dFxuICAvLyBhbmQgb3RoZXIgY29udGVudCBiZWxvdyBpdGVtc1xuICAucmFkaW8sXG4gIC5jaGVja2JveCB7XG4gICAgbWluLWhlaWdodDogKCRsaW5lLWhlaWdodC1jb21wdXRlZCArICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSkpO1xuICB9XG5cbiAgLy8gTWFrZSBmb3JtIGdyb3VwcyBiZWhhdmUgbGlrZSByb3dzXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBtYWtlLXJvdztcbiAgfVxuXG4gIC8vIFJlc2V0IHNwYWNpbmcgYW5kIHJpZ2h0IGFsaWduIGxhYmVscywgYnV0IHNjb3BlIHRvIG1lZGlhIHF1ZXJpZXMgc28gdGhhdFxuICAvLyBsYWJlbHMgb24gbmFycm93IHZpZXdwb3J0cyBzdGFjayB0aGUgc2FtZSBhcyBhIGRlZmF1bHQgZm9ybSBleGFtcGxlLlxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICAuY29udHJvbC1sYWJlbCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBwYWRkaW5nLXRvcDogKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKyAxKTsgLy8gRGVmYXVsdCBwYWRkaW5nIHBsdXMgYSBib3JkZXJcbiAgICB9XG4gIH1cblxuICAvLyBWYWxpZGF0aW9uIHN0YXRlc1xuICAvL1xuICAvLyBSZXBvc2l0aW9uIHRoZSBpY29uIGJlY2F1c2UgaXQncyBub3cgd2l0aGluIGEgZ3JpZCBjb2x1bW4gYW5kIGNvbHVtbnMgaGF2ZVxuICAvLyBgcG9zaXRpb246IHJlbGF0aXZlO2Agb24gdGhlbS4gQWxzbyBhY2NvdW50cyBmb3IgdGhlIGdyaWQgZ3V0dGVyIHBhZGRpbmcuXG4gIC5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgcmlnaHQ6IGZsb29yKCgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKSk7XG4gIH1cblxuICAvLyBGb3JtIGdyb3VwIHNpemVzXG4gIC8vXG4gIC8vIFF1aWNrIHV0aWxpdHkgY2xhc3MgZm9yIGFwcGx5aW5nIGAuaW5wdXQtbGdgIGFuZCBgLmlucHV0LXNtYCBzdHlsZXMgdG8gdGhlXG4gIC8vIGlucHV0cyBhbmQgbGFiZWxzIHdpdGhpbiBhIGAuZm9ybS1ncm91cGAuXG4gIC5mb3JtLWdyb3VwLWxnIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICAgIC5jb250cm9sLWxhYmVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCArIDEpO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbGFyZ2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5mb3JtLWdyb3VwLXNtIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICAgIC5jb250cm9sLWxhYmVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCArIDEpO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQnV0dG9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIHN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMDsgLy8gRm9yIGlucHV0LmJ0blxuICBmb250LXdlaWdodDogJGJ0bi1mb250LXdlaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvLyBSZXNldCB1bnVzdWFsIEZpcmVmb3gtb24tQW5kcm9pZCBkZWZhdWx0IHN0eWxlOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcy9pc3N1ZXMvMjE0XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBAaW5jbHVkZSBidXR0b24tc2l6ZSgkcGFkZGluZy1iYXNlLXZlcnRpY2FsLCAkcGFkZGluZy1iYXNlLWhvcml6b250YWwsICRmb250LXNpemUtYmFzZSwgJGxpbmUtaGVpZ2h0LWJhc2UsICRidG4tYm9yZGVyLXJhZGl1cy1iYXNlKTtcbiAgQGluY2x1ZGUgdXNlci1zZWxlY3Qobm9uZSk7XG5cbiAgJixcbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlIHtcbiAgICAmOmZvY3VzLFxuICAgICYuZm9jdXMge1xuICAgICAgQGluY2x1ZGUgdGFiLWZvY3VzO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgIGNvbG9yOiAkYnRuLWRlZmF1bHQtY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwuMTI1KSk7XG4gIH1cblxuICAmLmRpc2FibGVkLFxuICAmW2Rpc2FibGVkXSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgICBAaW5jbHVkZSBvcGFjaXR5KC42NSk7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgfVxuXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBhJiB0byBhLmJ0blxufVxuXG5hLmJ0biB7XG4gICYuZGlzYWJsZWQsXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLy8gRnV0dXJlLXByb29mIGRpc2FibGluZyBvZiBjbGlja3Mgb24gYDxhPmAgZWxlbWVudHNcbiAgfVxufVxuXG5cbi8vIEFsdGVybmF0ZSBidXR0b25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYnRuLWRlZmF1bHQge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLWRlZmF1bHQtY29sb3IsICRidG4tZGVmYXVsdC1iZywgJGJ0bi1kZWZhdWx0LWJvcmRlcik7XG59XG4uYnRuLXByaW1hcnkge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLXByaW1hcnktY29sb3IsICRidG4tcHJpbWFyeS1iZywgJGJ0bi1wcmltYXJ5LWJvcmRlcik7XG59XG4vLyBTdWNjZXNzIGFwcGVhcnMgYXMgZ3JlZW5cbi5idG4tc3VjY2VzcyB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4tc3VjY2Vzcy1jb2xvciwgJGJ0bi1zdWNjZXNzLWJnLCAkYnRuLXN1Y2Nlc3MtYm9yZGVyKTtcbn1cbi8vIEluZm8gYXBwZWFycyBhcyBibHVlLWdyZWVuXG4uYnRuLWluZm8ge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLWluZm8tY29sb3IsICRidG4taW5mby1iZywgJGJ0bi1pbmZvLWJvcmRlcik7XG59XG4vLyBXYXJuaW5nIGFwcGVhcnMgYXMgb3JhbmdlXG4uYnRuLXdhcm5pbmcge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLXdhcm5pbmctY29sb3IsICRidG4td2FybmluZy1iZywgJGJ0bi13YXJuaW5nLWJvcmRlcik7XG59XG4vLyBEYW5nZXIgYW5kIGVycm9yIGFwcGVhciBhcyByZWRcbi5idG4tZGFuZ2VyIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi1kYW5nZXItY29sb3IsICRidG4tZGFuZ2VyLWJnLCAkYnRuLWRhbmdlci1ib3JkZXIpO1xufVxuXG5cbi8vIExpbmsgYnV0dG9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNYWtlIGEgYnV0dG9uIGxvb2sgYW5kIGJlaGF2ZSBsaWtlIGEgbGlua1xuLmJ0bi1saW5rIHtcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICYsXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJltkaXNhYmxlZF0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG4gICYsXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246ICRsaW5rLWhvdmVyLWRlY29yYXRpb247XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJltkaXNhYmxlZF0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgY29sb3I6ICRidG4tbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBCdXR0b24gU2l6ZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5idG4tbGcge1xuICAvLyBsaW5lLWhlaWdodDogZW5zdXJlIGV2ZW4tbnVtYmVyZWQgaGVpZ2h0IG9mIGJ1dHRvbiBuZXh0IHRvIGxhcmdlIGlucHV0XG4gIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsLCAkcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsLCAkZm9udC1zaXplLWxhcmdlLCAkbGluZS1oZWlnaHQtbGFyZ2UsICRidG4tYm9yZGVyLXJhZGl1cy1sYXJnZSk7XG59XG4uYnRuLXNtIHtcbiAgLy8gbGluZS1oZWlnaHQ6IGVuc3VyZSBwcm9wZXIgaGVpZ2h0IG9mIGJ1dHRvbiBuZXh0IHRvIHNtYWxsIGlucHV0XG4gIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsLCAkcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsLCAkZm9udC1zaXplLXNtYWxsLCAkbGluZS1oZWlnaHQtc21hbGwsICRidG4tYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG59XG4uYnRuLXhzIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJHBhZGRpbmcteHMtdmVydGljYWwsICRwYWRkaW5nLXhzLWhvcml6b250YWwsICRmb250LXNpemUtc21hbGwsICRsaW5lLWhlaWdodC1zbWFsbCwgJGJ0bi1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbn1cblxuXG4vLyBCbG9jayBidXR0b25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5idG4tYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIFZlcnRpY2FsbHkgc3BhY2Ugb3V0IG11bHRpcGxlIGJsb2NrIGJ1dHRvbnNcbi5idG4tYmxvY2sgKyAuYnRuLWJsb2NrIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4vLyBTcGVjaWZpY2l0eSBvdmVycmlkZXNcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdIHtcbiAgJi5idG4tYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIvL1xuLy8gQ29tcG9uZW50IGFuaW1hdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEhlYWRzIHVwIVxuLy9cbi8vIFdlIGRvbid0IHVzZSB0aGUgYC5vcGFjaXR5KClgIG1peGluIGhlcmUgc2luY2UgaXQgY2F1c2VzIGEgYnVnIHdpdGggdGV4dFxuLy8gZmllbGRzIGluIElFNy04LiBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzM1NTIuXG5cbi5mYWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihvcGFjaXR5IC4xNXMgbGluZWFyKTtcbiAgJi5pbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uY29sbGFwc2Uge1xuICBkaXNwbGF5OiBub25lO1xuXG4gICYuaW4gICAgICB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCB0ciYuaW4gdG8gdHIuY29sbGFwc2UuaW5cbiAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIHRib2R5Ji5pbiB0byB0Ym9keS5jb2xsYXBzZS5pblxufVxuXG50ci5jb2xsYXBzZS5pbiAgICB7IGRpc3BsYXk6IHRhYmxlLXJvdzsgfVxuXG50Ym9keS5jb2xsYXBzZS5pbiB7IGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDsgfVxuXG4uY29sbGFwc2luZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uLXByb3BlcnR5KGhlaWdodCwgdmlzaWJpbGl0eSk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24tZHVyYXRpb24oLjM1cyk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKGVhc2UpO1xufVxuIiwiLy9cbi8vIERyb3Bkb3duIG1lbnVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIERyb3Bkb3duIGFycm93L2NhcmV0XG4uY2FyZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci10b3A6ICAgJGNhcmV0LXdpZHRoLWJhc2UgZGFzaGVkO1xuICBib3JkZXItdG9wOiAgICRjYXJldC13aWR0aC1iYXNlIHNvbGlkIFxcOTsgLy8gSUU4XG4gIGJvcmRlci1yaWdodDogJGNhcmV0LXdpZHRoLWJhc2Ugc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAgJGNhcmV0LXdpZHRoLWJhc2Ugc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi8vIFRoZSBkcm9wZG93biB3cmFwcGVyIChkaXYpXG4uZHJvcHVwLFxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vLyBQcmV2ZW50IHRoZSBmb2N1cyBvbiB0aGUgZHJvcGRvd24gdG9nZ2xlIHdoZW4gY2xvc2luZyBkcm9wZG93bnNcbi5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4vLyBUaGUgZHJvcGRvd24gbWVudSAodWwpXG4uZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAkemluZGV4LWRyb3Bkb3duO1xuICBkaXNwbGF5OiBub25lOyAvLyBub25lIGJ5IGRlZmF1bHQsIGJ1dCBibG9jayBvbiBcIm9wZW5cIiBvZiB0aGUgbWVudVxuICBmbG9hdDogbGVmdDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbjogMnB4IDAgMDsgLy8gb3ZlcnJpZGUgZGVmYXVsdCB1bFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgdGV4dC1hbGlnbjogbGVmdDsgLy8gRW5zdXJlcyBwcm9wZXIgYWxpZ25tZW50IGlmIHBhcmVudCBoYXMgaXQgY2hhbmdlZCAoZS5nLiwgbW9kYWwgZm9vdGVyKVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJvcGRvd24tYmc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRkcm9wZG93bi1mYWxsYmFjay1ib3JkZXI7IC8vIElFOCBmYWxsYmFja1xuICBib3JkZXI6IDFweCBzb2xpZCAkZHJvcGRvd24tYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KSk7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG5cbiAgLy8gQWxpZ25zIHRoZSBkcm9wZG93biBtZW51IHRvIHJpZ2h0XG4gIC8vXG4gIC8vIERlcHJlY2F0ZWQgYXMgb2YgMy4xLjAgaW4gZmF2b3Igb2YgYC5kcm9wZG93bi1tZW51LVtkaXJdYFxuICAmLnB1bGwtcmlnaHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cblxuICAvLyBEaXZpZGVycyAoYmFzaWNhbGx5IGFuIGhyKSB3aXRoaW4gdGhlIGRyb3Bkb3duXG4gIC5kaXZpZGVyIHtcbiAgICBAaW5jbHVkZSBuYXYtZGl2aWRlcigkZHJvcGRvd24tZGl2aWRlci1iZyk7XG4gIH1cblxuICAvLyBMaW5rcyB3aXRoaW4gdGhlIGRyb3Bkb3duIG1lbnVcbiAgPiBsaSA+IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDNweCAyMHB4O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICAgIGNvbG9yOiAkZHJvcGRvd24tbGluay1jb2xvcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvLyBwcmV2ZW50IGxpbmtzIGZyb20gcmFuZG9tbHkgYnJlYWtpbmcgb250byBuZXcgbGluZXNcbiAgfVxufVxuXG4vLyBIb3Zlci9Gb2N1cyBzdGF0ZVxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEge1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcm9wZG93bi1saW5rLWhvdmVyLWJnO1xuICB9XG59XG5cbi8vIEFjdGl2ZSBzdGF0ZVxuLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYSB7XG4gICYsXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnO1xuICB9XG59XG5cbi8vIERpc2FibGVkIHN0YXRlXG4vL1xuLy8gR3JheSBvdXQgdGV4dCBhbmQgZW5zdXJlIHRoZSBob3Zlci9mb2N1cyBzdGF0ZSByZW1haW5zIGdyYXlcblxuLmRyb3Bkb3duLW1lbnUgPiAuZGlzYWJsZWQgPiBhIHtcbiAgJixcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yO1xuICB9XG5cbiAgLy8gTnVrZSBob3Zlci9mb2N1cyBlZmZlY3RzXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvLyBSZW1vdmUgQ1NTIGdyYWRpZW50XG4gICAgQGluY2x1ZGUgcmVzZXQtZmlsdGVyO1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgfVxufVxuXG4vLyBPcGVuIHN0YXRlIGZvciB0aGUgZHJvcGRvd25cbi5vcGVuIHtcbiAgLy8gU2hvdyB0aGUgbWVudVxuICA+IC5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgb3V0bGluZSB3aGVuIDpmb2N1cyBpcyB0cmlnZ2VyZWRcbiAgPiBhIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG59XG5cbi8vIE1lbnUgcG9zaXRpb25pbmdcbi8vXG4vLyBBZGQgZXh0cmEgY2xhc3MgdG8gYC5kcm9wZG93bi1tZW51YCB0byBmbGlwIHRoZSBhbGlnbm1lbnQgb2YgdGhlIGRyb3Bkb3duXG4vLyBtZW51IHdpdGggdGhlIHBhcmVudC5cbi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgbGVmdDogYXV0bzsgLy8gUmVzZXQgdGhlIGRlZmF1bHQgZnJvbSBgLmRyb3Bkb3duLW1lbnVgXG4gIHJpZ2h0OiAwO1xufVxuLy8gV2l0aCB2Mywgd2UgZW5hYmxlZCBhdXRvLWZsaXBwaW5nIGlmIHlvdSBoYXZlIGEgZHJvcGRvd24gd2l0aGluIGEgcmlnaHRcbi8vIGFsaWduZWQgbmF2IGNvbXBvbmVudC4gVG8gZW5hYmxlIHRoZSB1bmRvaW5nIG9mIHRoYXQsIHdlIHByb3ZpZGUgYW4gb3ZlcnJpZGVcbi8vIHRvIHJlc3RvcmUgdGhlIGRlZmF1bHQgZHJvcGRvd24gbWVudSBhbGlnbm1lbnQuXG4vL1xuLy8gVGhpcyBpcyBvbmx5IGZvciBsZWZ0LWFsaWduaW5nIGEgZHJvcGRvd24gbWVudSB3aXRoaW4gYSBgLm5hdmJhci1yaWdodGAgb3Jcbi8vIGAucHVsbC1yaWdodGAgbmF2IGNvbXBvbmVudC5cbi5kcm9wZG93bi1tZW51LWxlZnQge1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbn1cblxuLy8gRHJvcGRvd24gc2VjdGlvbiBoZWFkZXJzXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDNweCAyMHB4O1xuICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgY29sb3I6ICRkcm9wZG93bi1oZWFkZXItY29sb3I7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8vIGFzIHdpdGggPiBsaSA+IGFcbn1cblxuLy8gQmFja2Ryb3AgdG8gY2F0Y2ggYm9keSBjbGlja3Mgb24gbW9iaWxlLCBldGMuXG4uZHJvcGRvd24tYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogKCR6aW5kZXgtZHJvcGRvd24gLSAxMCk7XG59XG5cbi8vIFJpZ2h0IGFsaWduZWQgZHJvcGRvd25zXG4ucHVsbC1yaWdodCA+IC5kcm9wZG93bi1tZW51IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG5cbi8vIEFsbG93IGZvciBkcm9wZG93bnMgdG8gZ28gYm90dG9tIHVwIChha2EsIGRyb3B1cC1tZW51KVxuLy9cbi8vIEp1c3QgYWRkIC5kcm9wdXAgYWZ0ZXIgdGhlIHN0YW5kYXJkIC5kcm9wZG93biBjbGFzcyBhbmQgeW91J3JlIHNldCwgYnJvLlxuLy8gVE9ETzogYWJzdHJhY3QgdGhpcyBzbyB0aGF0IHRoZSBuYXZiYXIgZml4ZWQgc3R5bGVzIGFyZSBub3QgcGxhY2VkIGhlcmU/XG5cbi5kcm9wdXAsXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSAuZHJvcGRvd24ge1xuICAvLyBSZXZlcnNlIHRoZSBjYXJldFxuICAuY2FyZXQge1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogJGNhcmV0LXdpZHRoLWJhc2UgZGFzaGVkO1xuICAgIGJvcmRlci1ib3R0b206ICRjYXJldC13aWR0aC1iYXNlIHNvbGlkIFxcOTsgLy8gSUU4XG4gICAgY29udGVudDogXCJcIjtcbiAgfVxuICAvLyBEaWZmZXJlbnQgcG9zaXRpb25pbmcgZm9yIGJvdHRvbSB1cCBtZW51XG4gIC5kcm9wZG93bi1tZW51IHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxufVxuXG5cbi8vIENvbXBvbmVudCBhbGlnbm1lbnRcbi8vXG4vLyBSZWl0ZXJhdGUgcGVyIG5hdmJhci5sZXNzIGFuZCB0aGUgbW9kaWZpZWQgY29tcG9uZW50IGFsaWdubWVudCB0aGVyZS5cblxuQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgLm5hdmJhci1yaWdodCB7XG4gICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgcmlnaHQ6IDA7IGxlZnQ6IGF1dG87XG4gICAgfVxuICAgIC8vIE5lY2Vzc2FyeSBmb3Igb3ZlcnJpZGVzIG9mIHRoZSBkZWZhdWx0IHJpZ2h0IGFsaWduZWQgbWVudS5cbiAgICAvLyBXaWxsIHJlbW92ZSBjb21lIHY0IGluIGFsbCBsaWtlbGlob29kLlxuICAgIC5kcm9wZG93bi1tZW51LWxlZnQge1xuICAgICAgbGVmdDogMDsgcmlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQnV0dG9uIGdyb3Vwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWFrZSB0aGUgZGl2IGJlaGF2ZSBsaWtlIGEgYnV0dG9uXG4uYnRuLWdyb3VwLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvLyBtYXRjaCAuYnRuIGFsaWdubWVudCBnaXZlbiBmb250LXNpemUgaGFjayBhYm92ZVxuICA+IC5idG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAvLyBCcmluZyB0aGUgXCJhY3RpdmVcIiBidXR0b24gdG8gdGhlIGZyb250XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICY6YWN0aXZlLFxuICAgICYuYWN0aXZlIHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICB9XG59XG5cbi8vIFByZXZlbnQgZG91YmxlIGJvcmRlcnMgd2hlbiBidXR0b25zIGFyZSBuZXh0IHRvIGVhY2ggb3RoZXJcbi5idG4tZ3JvdXAge1xuICAuYnRuICsgLmJ0bixcbiAgLmJ0biArIC5idG4tZ3JvdXAsXG4gIC5idG4tZ3JvdXAgKyAuYnRuLFxuICAuYnRuLWdyb3VwICsgLmJ0bi1ncm91cCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIH1cbn1cblxuLy8gT3B0aW9uYWw6IEdyb3VwIG11bHRpcGxlIGJ1dHRvbiBncm91cHMgdG9nZXRoZXIgZm9yIGEgdG9vbGJhclxuLmJ0bi10b29sYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7IC8vIE9mZnNldCB0aGUgZmlyc3QgY2hpbGQncyBtYXJnaW5cbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG5cbiAgLmJ0bixcbiAgLmJ0bi1ncm91cCxcbiAgLmlucHV0LWdyb3VwIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICA+IC5idG4sXG4gID4gLmJ0bi1ncm91cCxcbiAgPiAuaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn1cblxuLmJ0bi1ncm91cCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4vLyBTZXQgY29ybmVycyBpbmRpdmlkdWFsIGJlY2F1c2Ugc29tZXRpbWVzIGEgc2luZ2xlIGJ1dHRvbiBjYW4gYmUgaW4gYSAuYnRuLWdyb3VwIGFuZCB3ZSBuZWVkIDpmaXJzdC1jaGlsZCBhbmQgOmxhc3QtY2hpbGQgdG8gYm90aCBtYXRjaFxuLmJ0bi1ncm91cCA+IC5idG46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgJjpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygwKTtcbiAgfVxufVxuLy8gTmVlZCAuZHJvcGRvd24tdG9nZ2xlIHNpbmNlIDpsYXN0LWNoaWxkIGRvZXNuJ3QgYXBwbHksIGdpdmVuIHRoYXQgYSAuZHJvcGRvd24tbWVudSBpcyB1c2VkIGltbWVkaWF0ZWx5IGFmdGVyIGl0XG4uYnRuLWdyb3VwID4gLmJ0bjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpLFxuLmJ0bi1ncm91cCA+IC5kcm9wZG93bi10b2dnbGU6bm90KDpmaXJzdC1jaGlsZCkge1xuICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoMCk7XG59XG5cbi8vIEN1c3RvbSBlZGl0cyBmb3IgaW5jbHVkaW5nIGJ0bi1ncm91cHMgd2l0aGluIGJ0bi1ncm91cHMgKHVzZWZ1bCBmb3IgaW5jbHVkaW5nIGRyb3Bkb3duIGJ1dHRvbnMgd2l0aGluIGEgYnRuLWdyb3VwKVxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXAge1xuICBmbG9hdDogbGVmdDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xuICA+IC5idG46bGFzdC1jaGlsZCxcbiAgPiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmlnaHQtcmFkaXVzKDApO1xuICB9XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygwKTtcbn1cblxuLy8gT24gYWN0aXZlIGFuZCBvcGVuLCBkb24ndCBzaG93IG91dGxpbmVcbi5idG4tZ3JvdXAgLmRyb3Bkb3duLXRvZ2dsZTphY3RpdmUsXG4uYnRuLWdyb3VwLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIG91dGxpbmU6IDA7XG59XG5cblxuLy8gU2l6aW5nXG4vL1xuLy8gUmVtaXggdGhlIGRlZmF1bHQgYnV0dG9uIHNpemluZyBjbGFzc2VzIGludG8gbmV3IG9uZXMgZm9yIGVhc2llciBtYW5pcHVsYXRpb24uXG5cbi5idG4tZ3JvdXAteHMgPiAuYnRuIHsgQGV4dGVuZCAuYnRuLXhzOyB9XG4uYnRuLWdyb3VwLXNtID4gLmJ0biB7IEBleHRlbmQgLmJ0bi1zbTsgfVxuLmJ0bi1ncm91cC1sZyA+IC5idG4geyBAZXh0ZW5kIC5idG4tbGc7IH1cblxuXG4vLyBTcGxpdCBidXR0b24gZHJvcGRvd25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEdpdmUgdGhlIGxpbmUgYmV0d2VlbiBidXR0b25zIHNvbWUgZGVwdGhcbi5idG4tZ3JvdXAgPiAuYnRuICsgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1sZyArIC5kcm9wZG93bi10b2dnbGUge1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG5cbi8vIFRoZSBjbGlja2FibGUgYnV0dG9uIGZvciB0b2dnbGluZyB0aGUgbWVudVxuLy8gUmVtb3ZlIHRoZSBncmFkaWVudCBhbmQgc2V0IHRoZSBzYW1lIGluc2V0IHNoYWRvdyBhcyB0aGUgOmFjdGl2ZSBzdGF0ZVxuLmJ0bi1ncm91cC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xuICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgM3B4IDVweCByZ2JhKDAsMCwwLC4xMjUpKTtcblxuICAvLyBTaG93IG5vIHNoYWRvdyBmb3IgYC5idG4tbGlua2Agc2luY2UgaXQgaGFzIG5vIG90aGVyIGJ1dHRvbiBzdHlsZXMuXG4gICYuYnRuLWxpbmsge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3cobm9uZSk7XG4gIH1cbn1cblxuXG4vLyBSZXBvc2l0aW9uIHRoZSBjYXJldFxuLmJ0biAuY2FyZXQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi8vIENhcmV0cyBpbiBvdGhlciBidXR0b24gc2l6ZXNcbi5idG4tbGcgLmNhcmV0IHtcbiAgYm9yZGVyLXdpZHRoOiAkY2FyZXQtd2lkdGgtbGFyZ2UgJGNhcmV0LXdpZHRoLWxhcmdlIDA7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG4vLyBVcHNpZGUgZG93biBjYXJldHMgZm9yIC5kcm9wdXBcbi5kcm9wdXAgLmJ0bi1sZyAuY2FyZXQge1xuICBib3JkZXItd2lkdGg6IDAgJGNhcmV0LXdpZHRoLWxhcmdlICRjYXJldC13aWR0aC1sYXJnZTtcbn1cblxuXG4vLyBWZXJ0aWNhbCBidXR0b24gZ3JvdXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5idG4tZ3JvdXAtdmVydGljYWwge1xuICA+IC5idG4sXG4gID4gLmJ0bi1ncm91cCxcbiAgPiAuYnRuLWdyb3VwID4gLmJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gQ2xlYXIgZmxvYXRzIHNvIGRyb3Bkb3duIG1lbnVzIGNhbiBiZSBwcm9wZXJseSBwbGFjZWRcbiAgPiAuYnRuLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBjbGVhcmZpeDtcbiAgICA+IC5idG4ge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgPiAuYnRuICsgLmJ0bixcbiAgPiAuYnRuICsgLmJ0bi1ncm91cCxcbiAgPiAuYnRuLWdyb3VwICsgLmJ0bixcbiAgPiAuYnRuLWdyb3VwICsgLmJ0bi1ncm91cCB7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0biB7XG4gICY6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAmOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKCRidG4tYm9yZGVyLXJhZGl1cy1iYXNlKTtcbiAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygwKTtcbiAgfVxuICAmOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKDApO1xuICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKCRidG4tYm9yZGVyLXJhZGl1cy1iYXNlKTtcbiAgfVxufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSA+IC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gID4gLmJ0bjpsYXN0LWNoaWxkLFxuICA+IC5kcm9wZG93bi10b2dnbGUge1xuICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKDApO1xuICB9XG59XG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKDApO1xufVxuXG5cbi8vIEp1c3RpZmllZCBidXR0b24gZ3JvdXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5idG4tZ3JvdXAtanVzdGlmaWVkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICA+IC5idG4sXG4gID4gLmJ0bi1ncm91cCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB3aWR0aDogMSU7XG4gIH1cbiAgPiAuYnRuLWdyb3VwIC5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgPiAuYnRuLWdyb3VwIC5kcm9wZG93bi1tZW51IHtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG59XG5cblxuLy8gQ2hlY2tib3ggYW5kIHJhZGlvIG9wdGlvbnNcbi8vXG4vLyBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBicm93c2VyJ3MgZm9ybSB2YWxpZGF0aW9uIGZlZWRiYWNrLCBwb3dlcmVkIGJ5IHRoZVxuLy8gYHJlcXVpcmVkYCBhdHRyaWJ1dGUsIHdlIGhhdmUgdG8gXCJoaWRlXCIgdGhlIGlucHV0cyB2aWEgYGNsaXBgLiBXZSBjYW5ub3QgdXNlXG4vLyBgZGlzcGxheTogbm9uZTtgIG9yIGB2aXNpYmlsaXR5OiBoaWRkZW47YCBhcyB0aGF0IGFsc28gaGlkZXMgdGhlIHBvcG92ZXIuXG4vLyBTaW1wbHkgdmlzdWFsbHkgaGlkaW5nIHRoZSBpbnB1dHMgdmlhIGBvcGFjaXR5YCB3b3VsZCBsZWF2ZSB0aGVtIGNsaWNrYWJsZSBpblxuLy8gY2VydGFpbiBjYXNlcyB3aGljaCBpcyBwcmV2ZW50ZWQgYnkgdXNpbmcgYGNsaXBgIGFuZCBgcG9pbnRlci1ldmVudHNgLlxuLy8gVGhpcyB3YXksIHdlIGVuc3VyZSBhIERPTSBlbGVtZW50IGlzIHZpc2libGUgdG8gcG9zaXRpb24gdGhlIHBvcG92ZXIgZnJvbS5cbi8vXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMTI3OTQgYW5kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xNDU1OSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSB7XG4gID4gLmJ0bixcbiAgPiAuYnRuLWdyb3VwID4gLmJ0biB7XG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjbGlwOiByZWN0KDAsMCwwLDApO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gSW5wdXQgZ3JvdXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBCYXNlIHN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmlucHV0LWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvLyBGb3IgZHJvcGRvd25zXG4gIGRpc3BsYXk6IHRhYmxlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlOyAvLyBwcmV2ZW50IGlucHV0IGdyb3VwcyBmcm9tIGluaGVyaXRpbmcgYm9yZGVyIHN0eWxlcyBmcm9tIHRhYmxlIGNlbGxzIHdoZW4gcGxhY2VkIHdpdGhpbiBhIHRhYmxlXG5cbiAgLy8gVW5kbyBwYWRkaW5nIGFuZCBmbG9hdCBvZiBncmlkIGNsYXNzZXNcbiAgJltjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBpbnB1dCBpcyBhbHdheXMgYWJvdmUgdGhlICphcHBlbmRlZCogYWRkb24gYnV0dG9uIGZvclxuICAgIC8vIHByb3BlciBib3JkZXIgY29sb3JzLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgLy8gSUU5IGZ1YmFycyB0aGUgcGxhY2Vob2xkZXIgYXR0cmlidXRlIGluIHRleHQgaW5wdXRzIGFuZCB0aGUgYXJyb3dzIG9uXG4gICAgLy8gc2VsZWN0IGVsZW1lbnRzIGluIGlucHV0IGdyb3Vwcy4gVG8gZml4IGl0LCB3ZSBmbG9hdCB0aGUgaW5wdXQuIERldGFpbHM6XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTU2MSNpc3N1ZWNvbW1lbnQtMjg5MzY4NTVcbiAgICBmbG9hdDogbGVmdDtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgfVxuICB9XG59XG5cbi8vIFNpemluZyBvcHRpb25zXG4vL1xuLy8gUmVtaXggdGhlIGRlZmF1bHQgZm9ybSBjb250cm9sIHNpemluZyBjbGFzc2VzIGludG8gbmV3IG9uZXMgZm9yIGVhc2llclxuLy8gbWFuaXB1bGF0aW9uLlxuXG4uaW5wdXQtZ3JvdXAtbGcgPiAuZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWJ0biA+IC5idG4ge1xuICBAZXh0ZW5kIC5pbnB1dC1sZztcbn1cbi5pbnB1dC1ncm91cC1zbSA+IC5mb3JtLWNvbnRyb2wsXG4uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIEBleHRlbmQgLmlucHV0LXNtO1xufVxuXG5cbi8vIERpc3BsYXkgYXMgdGFibGUtY2VsbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLWJ0bixcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcblxuICAmOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cbi8vIEFkZG9uIGFuZCBhZGRvbiB3cmFwcGVyIGZvciBidXR0b25zXG4uaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtYnRuIHtcbiAgd2lkdGg6IDElO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvLyBNYXRjaCB0aGUgaW5wdXRzXG59XG5cbi8vIFRleHQgaW5wdXQgZ3JvdXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uaW5wdXQtZ3JvdXAtYWRkb24ge1xuICBwYWRkaW5nOiAkcGFkZGluZy1iYXNlLXZlcnRpY2FsICRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogJGlucHV0LWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1ncm91cC1hZGRvbi1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXM7XG5cbiAgLy8gU2l6aW5nXG4gICYuaW5wdXQtc20ge1xuICAgIHBhZGRpbmc6ICRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsICRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzLXNtYWxsO1xuICB9XG4gICYuaW5wdXQtbGcge1xuICAgIHBhZGRpbmc6ICRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsICRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxhcmdlO1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzLWxhcmdlO1xuICB9XG5cbiAgLy8gTnVrZSBkZWZhdWx0IG1hcmdpbnMgZnJvbSBjaGVja2JveGVzIGFuZCByYWRpb3MgdG8gdmVydGljYWxseSBjZW50ZXIgd2l0aGluLlxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG4vLyBSZXNldCByb3VuZGVkIGNvcm5lcnNcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZpcnN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0bi1ncm91cCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmRyb3Bkb3duLXRvZ2dsZSxcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSksXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQgPiAuYnRuLWdyb3VwOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuIHtcbiAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygwKTtcbn1cbi5pbnB1dC1ncm91cC1hZGRvbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmxhc3QtY2hpbGQsXG4uaW5wdXQtZ3JvdXAtYWRkb246bGFzdC1jaGlsZCxcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQgPiAuYnRuLWdyb3VwID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5kcm9wZG93bi10b2dnbGUsXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0bjpub3QoOmZpcnN0LWNoaWxkKSxcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0biB7XG4gIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygwKTtcbn1cbi5pbnB1dC1ncm91cC1hZGRvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG5cbi8vIEJ1dHRvbiBpbnB1dCBncm91cHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5pbnB1dC1ncm91cC1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIEphbmtpbHkgcHJldmVudCBpbnB1dCBidXR0b24gZ3JvdXBzIGZyb20gd3JhcHBpbmcgd2l0aCBgd2hpdGUtc3BhY2VgIGFuZFxuICAvLyBgZm9udC1zaXplYCBpbiBjb21iaW5hdGlvbiB3aXRoIGBpbmxpbmUtYmxvY2tgIG9uIGJ1dHRvbnMuXG4gIGZvbnQtc2l6ZTogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAvLyBOZWdhdGl2ZSBtYXJnaW4gZm9yIHNwYWNpbmcsIHBvc2l0aW9uIGZvciBicmluZ2luZyBob3ZlcmVkL2ZvY3VzZWQvYWN0aXZlZFxuICAvLyBlbGVtZW50IGFib3ZlIHRoZSBzaWJsaW5ncy5cbiAgPiAuYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgKyAuYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIH1cbiAgICAvLyBCcmluZyB0aGUgXCJhY3RpdmVcIiBidXR0b24gdG8gdGhlIGZyb250XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICY6YWN0aXZlIHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICB9XG5cbiAgLy8gTmVnYXRpdmUgbWFyZ2luIHRvIG9ubHkgaGF2ZSBhIDFweCBib3JkZXIgYmV0d2VlbiB0aGUgdHdvXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgID4gLmJ0bixcbiAgICA+IC5idG4tZ3JvdXAge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgIH1cbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgID4gLmJ0bixcbiAgICA+IC5idG4tZ3JvdXAge1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIE5hdnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBjbGFzc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDsgLy8gT3ZlcnJpZGUgZGVmYXVsdCB1bC9vbFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcblxuICA+IGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICA+IGEge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAkbmF2LWxpbmstcGFkZGluZztcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWxpbmstaG92ZXItYmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZWQgc3RhdGUgc2V0cyB0ZXh0IHRvIGdyYXkgYW5kIG51a2VzIGhvdmVyL3RhYiBlZmZlY3RzXG4gICAgJi5kaXNhYmxlZCA+IGEge1xuICAgICAgY29sb3I6ICRuYXYtZGlzYWJsZWQtbGluay1jb2xvcjtcblxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdi1kaXNhYmxlZC1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gT3BlbiBkcm9wZG93bnNcbiAgLm9wZW4gPiBhIHtcbiAgICAmLFxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWxpbmstaG92ZXItYmc7XG4gICAgICBib3JkZXItY29sb3I6ICRsaW5rLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5hdiBkaXZpZGVycyAoZGVwcmVjYXRlZCB3aXRoIHYzLjAuMSlcbiAgLy9cbiAgLy8gVGhpcyBzaG91bGQgaGF2ZSBiZWVuIHJlbW92ZWQgaW4gdjMgd2l0aCB0aGUgZHJvcHBpbmcgb2YgYC5uYXYtbGlzdGAsIGJ1dFxuICAvLyB3ZSBtaXNzZWQgaXQuIFdlIGRvbid0IGN1cnJlbnRseSBzdXBwb3J0IHRoaXMgYW55d2hlcmUsIGJ1dCBpbiB0aGUgaW50ZXJlc3RcbiAgLy8gb2YgbWFpbnRhaW5pbmcgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBpbiBjYXNlIHlvdSB1c2UgaXQsIGl0J3MgZGVwcmVjYXRlZC5cbiAgLm5hdi1kaXZpZGVyIHtcbiAgICBAaW5jbHVkZSBuYXYtZGl2aWRlcjtcbiAgfVxuXG4gIC8vIFByZXZlbnQgSUU4IGZyb20gbWlzcGxhY2luZyBpbWdzXG4gIC8vXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9pc3N1ZXMvOTg0I2lzc3VlY29tbWVudC0zOTg1OTg5XG4gID4gbGkgPiBhID4gaW1nIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbn1cblxuXG4vLyBUYWJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEdpdmUgdGhlIHRhYnMgc29tZXRoaW5nIHRvIHNpdCBvblxuLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8vIE1ha2UgdGhlIGxpc3QtaXRlbXMgb3ZlcmxheSB0aGUgYm90dG9tIGJvcmRlclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG5cbiAgICAvLyBBY3R1YWwgdGFicyAoYXMgbGlua3MpXG4gICAgPiBhIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlICRib3JkZXItcmFkaXVzLWJhc2UgMCAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yICRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvciAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFjdGl2ZSBzdGF0ZSwgYW5kIGl0cyA6aG92ZXIgdG8gb3ZlcnJpZGUgbm9ybWFsIDpob3ZlclxuICAgICYuYWN0aXZlID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItYmc7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1ib3JkZXItY29sb3I7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIHB1bGxpbmcgdGhpcyBpbiBtYWlubHkgZm9yIGxlc3Mgc2hvcnRoYW5kXG4gICYubmF2LWp1c3RpZmllZCB7XG4gICAgQGV4dGVuZCAubmF2LWp1c3RpZmllZDtcbiAgICBAZXh0ZW5kIC5uYXYtdGFicy1qdXN0aWZpZWQ7XG4gIH1cbn1cblxuXG4vLyBQaWxsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLm5hdi1waWxscyB7XG4gID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgLy8gTGlua3MgcmVuZGVyZWQgYXMgcGlsbHNcbiAgICA+IGEge1xuICAgICAgYm9yZGVyLXJhZGl1czogJG5hdi1waWxscy1ib3JkZXItcmFkaXVzO1xuICAgIH1cbiAgICArIGxpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgfVxuXG4gICAgLy8gQWN0aXZlIHN0YXRlXG4gICAgJi5hY3RpdmUgPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2LXBpbGxzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LXBpbGxzLWFjdGl2ZS1saW5rLWhvdmVyLWJnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIFN0YWNrZWQgcGlsbHNcbi5uYXYtc3RhY2tlZCB7XG4gID4gbGkge1xuICAgIGZsb2F0OiBub25lO1xuICAgICsgbGkge1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7IC8vIG5vIG5lZWQgZm9yIHRoaXMgZ2FwIGJldHdlZW4gbmF2IGl0ZW1zXG4gICAgfVxuICB9XG59XG5cblxuLy8gTmF2IHZhcmlhdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEp1c3RpZmllZCBuYXYgbGlua3Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLm5hdi1qdXN0aWZpZWQge1xuICB3aWR0aDogMTAwJTtcblxuICA+IGxpIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICA+IGEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxuXG4gID4gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgICB0b3A6IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgID4gbGkge1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgIHdpZHRoOiAxJTtcbiAgICAgID4gYSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE1vdmUgYm9yZGVycyB0byBhbmNob3JzIGluc3RlYWQgb2YgYm90dG9tIG9mIGxpc3Rcbi8vXG4vLyBNaXhpbiBmb3IgYWRkaW5nIG9uIHRvcCB0aGUgc2hhcmVkIGAubmF2LWp1c3RpZmllZGAgc3R5bGVzIGZvciBvdXIgdGFic1xuLm5hdi10YWJzLWp1c3RpZmllZCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG5cbiAgPiBsaSA+IGEge1xuICAgIC8vIE92ZXJyaWRlIG1hcmdpbiBmcm9tIC5uYXYtdGFic1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuICB9XG5cbiAgPiAuYWN0aXZlID4gYSxcbiAgPiAuYWN0aXZlID4gYTpob3ZlcixcbiAgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJG5hdi10YWJzLWp1c3RpZmllZC1saW5rLWJvcmRlci1jb2xvcjtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgID4gbGkgPiBhIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbmF2LXRhYnMtanVzdGlmaWVkLWxpbmstYm9yZGVyLWNvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZSAkYm9yZGVyLXJhZGl1cy1iYXNlIDAgMDtcbiAgICB9XG4gICAgPiAuYWN0aXZlID4gYSxcbiAgICA+IC5hY3RpdmUgPiBhOmhvdmVyLFxuICAgID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJG5hdi10YWJzLWp1c3RpZmllZC1hY3RpdmUtbGluay1ib3JkZXItY29sb3I7XG4gICAgfVxuICB9XG59XG5cblxuLy8gVGFiYmFibGUgdGFic1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBIaWRlIHRhYmJhYmxlIHBhbmVzIHRvIHN0YXJ0LCBzaG93IHRoZW0gd2hlbiBgLmFjdGl2ZWBcbi50YWItY29udGVudCB7XG4gID4gLnRhYi1wYW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gID4gLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuXG4vLyBEcm9wZG93bnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BlY2lmaWMgZHJvcGRvd25zXG4ubmF2LXRhYnMgLmRyb3Bkb3duLW1lbnUge1xuICAvLyBtYWtlIGRyb3Bkb3duIGJvcmRlciBvdmVybGFwIHRhYiBib3JkZXJcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgLy8gUmVtb3ZlIHRoZSB0b3Agcm91bmRlZCBjb3JuZXJzIGhlcmUgc2luY2UgdGhlcmUgaXMgYSBoYXJkIGVkZ2UgYWJvdmUgdGhlIG1lbnVcbiAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoMCk7XG59XG4iLCIvL1xuLy8gTmF2YmFyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBXcmFwcGVyIGFuZCBiYXNlIGNsYXNzXG4vL1xuLy8gUHJvdmlkZSBhIHN0YXRpYyBuYXZiYXIgZnJvbSB3aGljaCB3ZSBleHBhbmQgdG8gY3JlYXRlIGZ1bGwtd2lkdGgsIGZpeGVkLCBhbmRcbi8vIG90aGVyIG5hdmJhciB2YXJpYXRpb25zLlxuXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAkbmF2YmFyLWhlaWdodDsgLy8gRW5zdXJlIGEgbmF2YmFyIGFsd2F5cyBzaG93cyAoZS5nLiwgd2l0aG91dCBhIC5uYXZiYXItYnJhbmQgaW4gY29sbGFwc2VkIG1vZGUpXG4gIG1hcmdpbi1ib3R0b206ICRuYXZiYXItbWFyZ2luLWJvdHRvbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgLy8gUHJldmVudCBmbG9hdHMgZnJvbSBicmVha2luZyB0aGUgbmF2YmFyXG4gIEBpbmNsdWRlIGNsZWFyZml4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgYm9yZGVyLXJhZGl1czogJG5hdmJhci1ib3JkZXItcmFkaXVzO1xuICB9XG59XG5cblxuLy8gTmF2YmFyIGhlYWRpbmdcbi8vXG4vLyBHcm91cHMgYC5uYXZiYXItYnJhbmRgIGFuZCBgLm5hdmJhci10b2dnbGVgIGludG8gYSBzaW5nbGUgY29tcG9uZW50IGZvciBlYXN5XG4vLyBzdHlsaW5nIG9mIHJlc3BvbnNpdmUgYXNwZWN0cy5cblxuLm5hdmJhci1oZWFkZXIge1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG5cblxuLy8gTmF2YmFyIGNvbGxhcHNlIChib2R5KVxuLy9cbi8vIEdyb3VwIHlvdXIgbmF2YmFyIGNvbnRlbnQgaW50byB0aGlzIGZvciBlYXN5IGNvbGxhcHNpbmcgYW5kIGV4cGFuZGluZyBhY3Jvc3Ncbi8vIHZhcmlvdXMgZGV2aWNlIHNpemVzLiBCeSBkZWZhdWx0LCB0aGlzIGNvbnRlbnQgaXMgY29sbGFwc2VkIHdoZW4gPDc2OHB4LCBidXRcbi8vIHdpbGwgZXhwYW5kIHBhc3QgdGhhdCBmb3IgYSBob3Jpem9udGFsIGRpc3BsYXkuXG4vL1xuLy8gVG8gc3RhcnQgKG9uIG1vYmlsZSBkZXZpY2VzKSB0aGUgbmF2YmFyIGxpbmtzLCBmb3JtcywgYW5kIGJ1dHRvbnMgYXJlIHN0YWNrZWRcbi8vIHZlcnRpY2FsbHkgYW5kIGluY2x1ZGUgYSBgbWF4LWhlaWdodGAgdG8gb3ZlcmZsb3cgaW4gY2FzZSB5b3UgaGF2ZSB0b28gbXVjaFxuLy8gY29udGVudCBmb3IgdGhlIHVzZXIncyB2aWV3cG9ydC5cblxuLm5hdmJhci1jb2xsYXBzZSB7XG4gIG92ZXJmbG93LXg6IHZpc2libGU7XG4gIHBhZGRpbmctcmlnaHQ6ICRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBwYWRkaW5nLWxlZnQ6ICAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gICYuaW4ge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICYuY29sbGFwc2Uge1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7IC8vIE92ZXJyaWRlIGRlZmF1bHQgc2V0dGluZ1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLmluIHtcbiAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgfVxuXG4gICAgLy8gVW5kbyB0aGUgY29sbGFwc2Ugc2lkZSBwYWRkaW5nIGZvciBuYXZiYXJzIHdpdGggY29udGFpbmVycyB0byBlbnN1cmVcbiAgICAvLyBhbGlnbm1lbnQgb2YgcmlnaHQtYWxpZ25lZCBjb250ZW50cy5cbiAgICAubmF2YmFyLWZpeGVkLXRvcCAmLFxuICAgIC5uYXZiYXItc3RhdGljLXRvcCAmLFxuICAgIC5uYXZiYXItZml4ZWQtYm90dG9tICYge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuLm5hdmJhci1maXhlZC10b3AsXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSB7XG4gIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIG1heC1oZWlnaHQ6ICRuYXZiYXItY29sbGFwc2UtbWF4LWhlaWdodDtcblxuICAgIEBtZWRpYSAobWF4LWRldmljZS13aWR0aDogJHNjcmVlbi14cy1taW4pIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgfVxuICB9XG59XG5cblxuLy8gQm90aCBuYXZiYXIgaGVhZGVyIGFuZCBjb2xsYXBzZVxuLy9cbi8vIFdoZW4gYSBjb250YWluZXIgaXMgcHJlc2VudCwgY2hhbmdlIHRoZSBiZWhhdmlvciBvZiB0aGUgaGVhZGVyIGFuZCBjb2xsYXBzZS5cblxuLmNvbnRhaW5lcixcbi5jb250YWluZXItZmx1aWQge1xuICA+IC5uYXZiYXItaGVhZGVyLFxuICA+IC5uYXZiYXItY29sbGFwc2Uge1xuICAgIG1hcmdpbi1yaWdodDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICAgIG1hcmdpbi1sZWZ0OiAgLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAgMDtcbiAgICB9XG4gIH1cbn1cblxuXG4vL1xuLy8gTmF2YmFyIGFsaWdubWVudCBvcHRpb25zXG4vL1xuLy8gRGlzcGxheSB0aGUgbmF2YmFyIGFjcm9zcyB0aGUgZW50aXJldHkgb2YgdGhlIHBhZ2Ugb3IgZml4ZWQgaXQgdG8gdGhlIHRvcCBvclxuLy8gYm90dG9tIG9mIHRoZSBwYWdlLlxuXG4vLyBTdGF0aWMgdG9wICh1bmZpeGVkLCBidXQgMTAwJSB3aWRlKSBuYXZiYXJcbi5uYXZiYXItc3RhdGljLXRvcCB7XG4gIHotaW5kZXg6ICR6aW5kZXgtbmF2YmFyO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG5cbi8vIEZpeCB0aGUgdG9wL2JvdHRvbSBuYXZiYXJzIHdoZW4gc2NyZWVuIHJlYWwgZXN0YXRlIHN1cHBvcnRzIGl0XG4ubmF2YmFyLWZpeGVkLXRvcCxcbi5uYXZiYXItZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1uYXZiYXItZml4ZWQ7XG5cbiAgLy8gVW5kbyB0aGUgcm91bmRlZCBjb3JuZXJzXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuLm5hdmJhci1maXhlZC10b3Age1xuICB0b3A6IDA7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcbn1cbi5uYXZiYXItZml4ZWQtYm90dG9tIHtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwOyAvLyBvdmVycmlkZSAubmF2YmFyIGRlZmF1bHRzXG4gIGJvcmRlci13aWR0aDogMXB4IDAgMDtcbn1cblxuXG4vLyBCcmFuZC9wcm9qZWN0IG5hbWVcblxuLm5hdmJhci1icmFuZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAkbmF2YmFyLXBhZGRpbmctdmVydGljYWwgJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sYXJnZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgaGVpZ2h0OiAkbmF2YmFyLWhlaWdodDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICA+IGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIC5uYXZiYXIgPiAuY29udGFpbmVyICYsXG4gICAgLm5hdmJhciA+IC5jb250YWluZXItZmx1aWQgJiB7XG4gICAgICBtYXJnaW4tbGVmdDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdmJhciB0b2dnbGVcbi8vXG4vLyBDdXN0b20gYnV0dG9uIGZvciB0b2dnbGluZyB0aGUgYC5uYXZiYXItY29sbGFwc2VgLCBwb3dlcmVkIGJ5IHRoZSBjb2xsYXBzZVxuLy8gSmF2YVNjcmlwdCBwbHVnaW4uXG5cbi5uYXZiYXItdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gIHBhZGRpbmc6IDlweCAxMHB4O1xuICBAaW5jbHVkZSBuYXZiYXItdmVydGljYWwtYWxpZ24oMzRweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvLyBSZXNldCB1bnVzdWFsIEZpcmVmb3gtb24tQW5kcm9pZCBkZWZhdWx0IHN0eWxlOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcy9pc3N1ZXMvMjE0XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG4gIC8vIFdlIHJlbW92ZSB0aGUgYG91dGxpbmVgIGhlcmUsIGJ1dCBsYXRlciBjb21wZW5zYXRlIGJ5IGF0dGFjaGluZyBgOmhvdmVyYFxuICAvLyBzdHlsZXMgdG8gYDpmb2N1c2AuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICAvLyBCYXJzXG4gIC5pY29uLWJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICB9XG4gIC5pY29uLWJhciArIC5pY29uLWJhciB7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLy8gTmF2YmFyIG5hdiBsaW5rc1xuLy9cbi8vIEJ1aWxkcyBvbiB0b3Agb2YgdGhlIGAubmF2YCBjb21wb25lbnRzIHdpdGggaXRzIG93biBtb2RpZmllciBjbGFzcyB0byBtYWtlXG4vLyB0aGUgbmF2IHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgaG9yaXpvbnRhbCBuYXYgKGFib3ZlIDc2OHB4KS5cblxuLm5hdmJhci1uYXYge1xuICBtYXJnaW46ICgkbmF2YmFyLXBhZGRpbmctdmVydGljYWwgLyAyKSAoLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsKTtcblxuICA+IGxpID4gYSB7XG4gICAgcGFkZGluZy10b3A6ICAgIDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50LW1heCkge1xuICAgIC8vIERyb3Bkb3ducyBnZXQgY3VzdG9tIGRpc3BsYXkgd2hlbiBjb2xsYXBzZWRcbiAgICAub3BlbiAuZHJvcGRvd24tbWVudSB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICA+IGxpID4gYSxcbiAgICAgIC5kcm9wZG93bi1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMjVweDtcbiAgICAgIH1cbiAgICAgID4gbGkgPiBhIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFVuY29sbGFwc2UgdGhlIG5hdlxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcblxuICAgID4gbGkge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICA+IGEge1xuICAgICAgICBwYWRkaW5nLXRvcDogICAgJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdmJhciBmb3JtXG4vL1xuLy8gRXh0ZW5zaW9uIG9mIHRoZSBgLmZvcm0taW5saW5lYCB3aXRoIHNvbWUgZXh0cmEgZmxhdm9yIGZvciBvcHRpbXVtIGRpc3BsYXkgaW5cbi8vIG91ciBuYXZiYXJzLlxuXG4ubmF2YmFyLWZvcm0ge1xuICBtYXJnaW4tbGVmdDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBtYXJnaW4tcmlnaHQ6IC0kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgcGFkZGluZzogMTBweCAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICRzaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMSksIDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMSk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coJHNoYWRvdyk7XG5cbiAgLy8gTWl4aW4gYmVoYXZpb3IgZm9yIG9wdGltdW0gZGlzcGxheVxuICBAaW5jbHVkZSBmb3JtLWlubGluZTtcblxuICAuZm9ybS1ncm91cCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQtbWF4KSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVmVydGljYWxseSBjZW50ZXIgaW4gZXhwYW5kZWQsIGhvcml6b250YWwgbmF2YmFyXG4gIEBpbmNsdWRlIG5hdmJhci12ZXJ0aWNhbC1hbGlnbigkaW5wdXQtaGVpZ2h0LWJhc2UpO1xuXG4gIC8vIFVuZG8gMTAwJSB3aWR0aCBmb3IgcHVsbCBjbGFzc2VzXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG59XG5cblxuLy8gRHJvcGRvd24gbWVudXNcblxuLy8gTWVudSBwb3NpdGlvbiBhbmQgbWVudSBjYXJldHNcbi5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKDApO1xufVxuLy8gTWVudSBwb3NpdGlvbiBhbmQgbWVudSBjYXJldCBzdXBwb3J0IGZvciBkcm9wdXBzIHZpYSBleHRyYSBkcm9wdXAgY2xhc3Ncbi5uYXZiYXItZml4ZWQtYm90dG9tIC5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKCRuYXZiYXItYm9yZGVyLXJhZGl1cyk7XG4gIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKDApO1xufVxuXG5cbi8vIEJ1dHRvbnMgaW4gbmF2YmFyc1xuLy9cbi8vIFZlcnRpY2FsbHkgY2VudGVyIGEgYnV0dG9uIHdpdGhpbiBhIG5hdmJhciAod2hlbiAqbm90KiBpbiBhIGZvcm0pLlxuXG4ubmF2YmFyLWJ0biB7XG4gIEBpbmNsdWRlIG5hdmJhci12ZXJ0aWNhbC1hbGlnbigkaW5wdXQtaGVpZ2h0LWJhc2UpO1xuXG4gICYuYnRuLXNtIHtcbiAgICBAaW5jbHVkZSBuYXZiYXItdmVydGljYWwtYWxpZ24oJGlucHV0LWhlaWdodC1zbWFsbCk7XG4gIH1cbiAgJi5idG4teHMge1xuICAgIEBpbmNsdWRlIG5hdmJhci12ZXJ0aWNhbC1hbGlnbigyMik7XG4gIH1cbn1cblxuXG4vLyBUZXh0IGluIG5hdmJhcnNcbi8vXG4vLyBBZGQgYSBjbGFzcyB0byBtYWtlIGFueSBlbGVtZW50IHByb3Blcmx5IGFsaWduIGl0c2VsZiB2ZXJ0aWNhbGx5IHdpdGhpbiB0aGUgbmF2YmFycy5cblxuLm5hdmJhci10ZXh0IHtcbiAgQGluY2x1ZGUgbmF2YmFyLXZlcnRpY2FsLWFsaWduKCRsaW5lLWhlaWdodC1jb21wdXRlZCk7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gICAgbWFyZ2luLXJpZ2h0OiAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgfVxufVxuXG5cbi8vIENvbXBvbmVudCBhbGlnbm1lbnRcbi8vXG4vLyBSZXB1cnBvc2UgdGhlIHB1bGwgdXRpbGl0aWVzIGFzIHRoZWlyIG93biBuYXZiYXIgdXRpbGl0aWVzIHRvIGF2b2lkIHNwZWNpZmljaXR5XG4vLyBpc3N1ZXMgd2l0aCBwYXJlbnRzIGFuZCBjaGFpbmluZy4gT25seSBkbyB0aGlzIHdoZW4gdGhlIG5hdmJhciBpcyB1bmNvbGxhcHNlZFxuLy8gdGhvdWdoIHNvIHRoYXQgbmF2YmFyIGNvbnRlbnRzIHByb3Blcmx5IHN0YWNrIGFuZCBhbGlnbiBpbiBtb2JpbGUuXG4vL1xuLy8gRGVjbGFyZWQgYWZ0ZXIgdGhlIG5hdmJhciBjb21wb25lbnRzIHRvIGVuc3VyZSBtb3JlIHNwZWNpZmljaXR5IG9uIHRoZSBtYXJnaW5zLlxuXG5AbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAubmF2YmFyLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuXG4gICAgfiAubmF2YmFyLXJpZ2h0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBBbHRlcm5hdGUgbmF2YmFyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRGVmYXVsdCBuYXZiYXJcbi5uYXZiYXItZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1iZztcbiAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYm9yZGVyO1xuXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYnJhbmQtY29sb3I7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYnJhbmQtaG92ZXItY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYnJhbmQtaG92ZXItYmc7XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci10ZXh0IHtcbiAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWNvbG9yO1xuICB9XG5cbiAgLm5hdmJhci1uYXYge1xuICAgID4gbGkgPiBhIHtcbiAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1jb2xvcjtcblxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWJnO1xuICAgICAgfVxuICAgIH1cbiAgICA+IC5hY3RpdmUgPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgPiAuZGlzYWJsZWQgPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtYmc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci10b2dnbGUge1xuICAgIGJvcmRlci1jb2xvcjogJG5hdmJhci1kZWZhdWx0LXRvZ2dsZS1ib3JkZXItY29sb3I7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC10b2dnbGUtaG92ZXItYmc7XG4gICAgfVxuICAgIC5pY29uLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtdG9nZ2xlLWljb24tYmFyLWJnO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItY29sbGFwc2UsXG4gIC5uYXZiYXItZm9ybSB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYm9yZGVyO1xuICB9XG5cbiAgLy8gRHJvcGRvd24gbWVudSBpdGVtc1xuICAubmF2YmFyLW5hdiB7XG4gICAgLy8gUmVtb3ZlIGJhY2tncm91bmQgY29sb3IgZnJvbSBvcGVuIGRyb3Bkb3duXG4gICAgPiAub3BlbiA+IGEge1xuICAgICAgJixcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWJnO1xuICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50LW1heCkge1xuICAgICAgLy8gRHJvcGRvd25zIGdldCBjdXN0b20gZGlzcGxheSB3aGVuIGNvbGxhcHNlZFxuICAgICAgLm9wZW4gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICA+IGxpID4gYSB7XG4gICAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yO1xuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1ob3Zlci1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgPiAuYWN0aXZlID4gYSB7XG4gICAgICAgICAgJixcbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgPiAuZGlzYWJsZWQgPiBhIHtcbiAgICAgICAgICAmLFxuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8vIExpbmtzIGluIG5hdmJhcnNcbiAgLy9cbiAgLy8gQWRkIGEgY2xhc3MgdG8gZW5zdXJlIGxpbmtzIG91dHNpZGUgdGhlIG5hdmJhciBuYXYgYXJlIGNvbG9yZWQgY29ycmVjdGx5LlxuXG4gIC5uYXZiYXItbGluayB7XG4gICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tbGluayB7XG4gICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I7XG4gICAgfVxuICAgICZbZGlzYWJsZWRdLFxuICAgIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBJbnZlcnNlIG5hdmJhclxuXG4ubmF2YmFyLWludmVyc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtYmc7XG4gIGJvcmRlci1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWJvcmRlcjtcblxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWJyYW5kLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWJyYW5kLWhvdmVyLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWJyYW5kLWhvdmVyLWJnO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItdGV4dCB7XG4gICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1jb2xvcjtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IHtcbiAgICA+IGxpID4gYSB7XG4gICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3I7XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgPiAuYWN0aXZlID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtYmc7XG4gICAgICB9XG4gICAgfVxuICAgID4gLmRpc2FibGVkID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWJnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERhcmtlbiB0aGUgcmVzcG9uc2l2ZSBuYXYgdG9nZ2xlXG4gIC5uYXZiYXItdG9nZ2xlIHtcbiAgICBib3JkZXItY29sb3I6ICRuYXZiYXItaW52ZXJzZS10b2dnbGUtYm9yZGVyLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtdG9nZ2xlLWhvdmVyLWJnO1xuICAgIH1cbiAgICAuaWNvbi1iYXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1pY29uLWJhci1iZztcbiAgICB9XG4gIH1cblxuICAubmF2YmFyLWNvbGxhcHNlLFxuICAubmF2YmFyLWZvcm0ge1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRuYXZiYXItaW52ZXJzZS1iZywgNyUpO1xuICB9XG5cbiAgLy8gRHJvcGRvd25zXG4gIC5uYXZiYXItbmF2IHtcbiAgICA+IC5vcGVuID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtYmc7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQtbWF4KSB7XG4gICAgICAvLyBEcm9wZG93bnMgZ2V0IGN1c3RvbSBkaXNwbGF5XG4gICAgICAub3BlbiAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgID4gLmRyb3Bkb3duLWhlYWRlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtYm9yZGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtYm9yZGVyO1xuICAgICAgICB9XG4gICAgICAgID4gbGkgPiBhIHtcbiAgICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3I7XG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA+IC5hY3RpdmUgPiBhIHtcbiAgICAgICAgICAmLFxuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA+IC5kaXNhYmxlZCA+IGEge1xuICAgICAgICAgICYsXG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItbGluayB7XG4gICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tbGluayB7XG4gICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItY29sb3I7XG4gICAgfVxuICAgICZbZGlzYWJsZWRdLFxuICAgIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIEJyZWFkY3J1bWJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi5icmVhZGNydW1iIHtcbiAgcGFkZGluZzogJGJyZWFkY3J1bWItcGFkZGluZy12ZXJ0aWNhbCAkYnJlYWRjcnVtYi1wYWRkaW5nLWhvcml6b250YWw7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJyZWFkY3J1bWItYmc7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XG5cbiAgPiBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgKyBsaTpiZWZvcmUge1xuICAgICAgLy8gW2NvbnZlcnRlcl0gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3Nhc3MvbGlic2Fzcy9pc3N1ZXMvMTExNVxuICAgICAgJG5ic3A6IFwiXFwwMGEwXCI7XG4gICAgICBjb250ZW50OiBcIiN7JGJyZWFkY3J1bWItc2VwYXJhdG9yfSN7JG5ic3B9XCI7IC8vIFVuaWNvZGUgc3BhY2UgYWRkZWQgc2luY2UgaW5saW5lLWJsb2NrIG1lYW5zIG5vbi1jb2xsYXBzaW5nIHdoaXRlLXNwYWNlXG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIGNvbG9yOiAkYnJlYWRjcnVtYi1jb2xvcjtcbiAgICB9XG4gIH1cblxuICA+IC5hY3RpdmUge1xuICAgIGNvbG9yOiAkYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I7XG4gIH1cbn1cbiIsIi8vXG4vLyBQYWdpbmF0aW9uIChtdWx0aXBsZSBwYWdlcylcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW46ICRsaW5lLWhlaWdodC1jb21wdXRlZCAwO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG4gID4gbGkge1xuICAgIGRpc3BsYXk6IGlubGluZTsgLy8gUmVtb3ZlIGxpc3Qtc3R5bGUgYW5kIGJsb2NrLWxldmVsIGRlZmF1bHRzXG4gICAgPiBhLFxuICAgID4gc3BhbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmbG9hdDogbGVmdDsgLy8gQ29sbGFwc2Ugd2hpdGUtc3BhY2VcbiAgICAgIHBhZGRpbmc6ICRwYWRkaW5nLWJhc2UtdmVydGljYWwgJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24tYmc7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkcGFnaW5hdGlvbi1ib3JkZXI7XG4gICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKCRib3JkZXItcmFkaXVzLWJhc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygkYm9yZGVyLXJhZGl1cy1iYXNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA+IGxpID4gYSxcbiAgPiBsaSA+IHNwYW4ge1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24taG92ZXItYmc7XG4gICAgICBib3JkZXItY29sb3I6ICRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICA+IC5hY3RpdmUgPiBhLFxuICA+IC5hY3RpdmUgPiBzcGFuIHtcbiAgICAmLFxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICB6LWluZGV4OiAzO1xuICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWFjdGl2ZS1iZztcbiAgICAgIGJvcmRlci1jb2xvcjogJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlcjtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG4gIH1cblxuICA+IC5kaXNhYmxlZCB7XG4gICAgPiBzcGFuLFxuICAgID4gc3Bhbjpob3ZlcixcbiAgICA+IHNwYW46Zm9jdXMsXG4gICAgPiBhLFxuICAgID4gYTpob3ZlcixcbiAgICA+IGE6Zm9jdXMge1xuICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc7XG4gICAgICBib3JkZXItY29sb3I6ICRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlcjtcbiAgICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gU2l6aW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBMYXJnZVxuLnBhZ2luYXRpb24tbGcge1xuICBAaW5jbHVkZSBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctbGFyZ2UtdmVydGljYWwsICRwYWRkaW5nLWxhcmdlLWhvcml6b250YWwsICRmb250LXNpemUtbGFyZ2UsICRsaW5lLWhlaWdodC1sYXJnZSwgJGJvcmRlci1yYWRpdXMtbGFyZ2UpO1xufVxuXG4vLyBTbWFsbFxuLnBhZ2luYXRpb24tc20ge1xuICBAaW5jbHVkZSBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctc21hbGwtdmVydGljYWwsICRwYWRkaW5nLXNtYWxsLWhvcml6b250YWwsICRmb250LXNpemUtc21hbGwsICRsaW5lLWhlaWdodC1zbWFsbCwgJGJvcmRlci1yYWRpdXMtc21hbGwpO1xufVxuIiwiLy9cbi8vIFBhZ2VyIHBhZ2luYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLnBhZ2VyIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW46ICRsaW5lLWhlaWdodC1jb21wdXRlZCAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xuICBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgID4gYSxcbiAgICA+IHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogNXB4IDE0cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZXItYmc7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkcGFnZXItYm9yZGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogJHBhZ2VyLWJvcmRlci1yYWRpdXM7XG4gICAgfVxuXG4gICAgPiBhOmhvdmVyLFxuICAgID4gYTpmb2N1cyB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZXItaG92ZXItYmc7XG4gICAgfVxuICB9XG5cbiAgLm5leHQge1xuICAgID4gYSxcbiAgICA+IHNwYW4ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC5wcmV2aW91cyB7XG4gICAgPiBhLFxuICAgID4gc3BhbiB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gIH1cblxuICAuZGlzYWJsZWQge1xuICAgID4gYSxcbiAgICA+IGE6aG92ZXIsXG4gICAgPiBhOmZvY3VzLFxuICAgID4gc3BhbiB7XG4gICAgICBjb2xvcjogJHBhZ2VyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2VyLWJnO1xuICAgICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIExhYmVsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAuMmVtIC42ZW0gLjNlbTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xuXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBhJiB0byBhLmxhYmVsXG5cbiAgLy8gRW1wdHkgbGFiZWxzIGNvbGxhcHNlIGF1dG9tYXRpY2FsbHkgKG5vdCBhdmFpbGFibGUgaW4gSUU4KVxuICAmOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLy8gUXVpY2sgZml4IGZvciBsYWJlbHMgaW4gYnV0dG9uc1xuICAuYnRuICYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xcHg7XG4gIH1cbn1cblxuLy8gQWRkIGhvdmVyIGVmZmVjdHMsIGJ1dCBvbmx5IGZvciBsaW5rc1xuYS5sYWJlbCB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkbGFiZWwtbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi8vIENvbG9yc1xuLy8gQ29udGV4dHVhbCB2YXJpYXRpb25zIChsaW5rZWQgbGFiZWxzIGdldCBkYXJrZXIgb24gOmhvdmVyKVxuXG4ubGFiZWwtZGVmYXVsdCB7XG4gIEBpbmNsdWRlIGxhYmVsLXZhcmlhbnQoJGxhYmVsLWRlZmF1bHQtYmcpO1xufVxuXG4ubGFiZWwtcHJpbWFyeSB7XG4gIEBpbmNsdWRlIGxhYmVsLXZhcmlhbnQoJGxhYmVsLXByaW1hcnktYmcpO1xufVxuXG4ubGFiZWwtc3VjY2VzcyB7XG4gIEBpbmNsdWRlIGxhYmVsLXZhcmlhbnQoJGxhYmVsLXN1Y2Nlc3MtYmcpO1xufVxuXG4ubGFiZWwtaW5mbyB7XG4gIEBpbmNsdWRlIGxhYmVsLXZhcmlhbnQoJGxhYmVsLWluZm8tYmcpO1xufVxuXG4ubGFiZWwtd2FybmluZyB7XG4gIEBpbmNsdWRlIGxhYmVsLXZhcmlhbnQoJGxhYmVsLXdhcm5pbmctYmcpO1xufVxuXG4ubGFiZWwtZGFuZ2VyIHtcbiAgQGluY2x1ZGUgbGFiZWwtdmFyaWFudCgkbGFiZWwtZGFuZ2VyLWJnKTtcbn1cbiIsIi8vXG4vLyBCYWRnZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBjbGFzc1xuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEwcHg7XG4gIHBhZGRpbmc6IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgZm9udC13ZWlnaHQ6ICRiYWRnZS1mb250LXdlaWdodDtcbiAgY29sb3I6ICRiYWRnZS1jb2xvcjtcbiAgbGluZS1oZWlnaHQ6ICRiYWRnZS1saW5lLWhlaWdodDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFkZ2UtYmc7XG4gIGJvcmRlci1yYWRpdXM6ICRiYWRnZS1ib3JkZXItcmFkaXVzO1xuXG4gIC8vIEVtcHR5IGJhZGdlcyBjb2xsYXBzZSBhdXRvbWF0aWNhbGx5IChub3QgYXZhaWxhYmxlIGluIElFOClcbiAgJjplbXB0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8vIFF1aWNrIGZpeCBmb3IgYmFkZ2VzIGluIGJ1dHRvbnNcbiAgLmJ0biAmIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMXB4O1xuICB9XG5cbiAgLmJ0bi14cyAmLFxuICAuYnRuLWdyb3VwLXhzID4gLmJ0biAmIHtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZzogMXB4IDVweDtcbiAgfVxuXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBhJiB0byBhLmJhZGdlXG5cbiAgLy8gQWNjb3VudCBmb3IgYmFkZ2VzIGluIG5hdnNcbiAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgPiAmLFxuICAubmF2LXBpbGxzID4gLmFjdGl2ZSA+IGEgPiAmIHtcbiAgICBjb2xvcjogJGJhZGdlLWFjdGl2ZS1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFkZ2UtYWN0aXZlLWJnO1xuICB9XG5cbiAgLmxpc3QtZ3JvdXAtaXRlbSA+ICYge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuXG4gIC5saXN0LWdyb3VwLWl0ZW0gPiAmICsgJiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuICAubmF2LXBpbGxzID4gbGkgPiBhID4gJiB7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgfVxufVxuXG4vLyBIb3ZlciBzdGF0ZSwgYnV0IG9ubHkgZm9yIGxpbmtzXG5hLmJhZGdlIHtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICRiYWRnZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiIsIi8vXG4vLyBKdW1ib3Ryb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmctdG9wOiAgICAkanVtYm90cm9uLXBhZGRpbmc7XG4gIHBhZGRpbmctYm90dG9tOiAkanVtYm90cm9uLXBhZGRpbmc7XG4gIG1hcmdpbi1ib3R0b206ICRqdW1ib3Ryb24tcGFkZGluZztcbiAgY29sb3I6ICRqdW1ib3Ryb24tY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRqdW1ib3Ryb24tYmc7XG5cbiAgaDEsXG4gIC5oMSB7XG4gICAgY29sb3I6ICRqdW1ib3Ryb24taGVhZGluZy1jb2xvcjtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206ICgkanVtYm90cm9uLXBhZGRpbmcgLyAyKTtcbiAgICBmb250LXNpemU6ICRqdW1ib3Ryb24tZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cblxuICA+IGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZW4oJGp1bWJvdHJvbi1iZywgMTAlKTtcbiAgfVxuXG4gIC5jb250YWluZXIgJixcbiAgLmNvbnRhaW5lci1mbHVpZCAmIHtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sYXJnZTsgLy8gT25seSByb3VuZCBjb3JuZXJzIGF0IGhpZ2hlciByZXNvbHV0aW9ucyBpZiBjb250YWluZWQgaW4gYSBjb250YWluZXJcbiAgICBwYWRkaW5nLWxlZnQ6ICAoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMik7XG4gICAgcGFkZGluZy1yaWdodDogKCRncmlkLWd1dHRlci13aWR0aCAvIDIpO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBwYWRkaW5nLXRvcDogICAgKCRqdW1ib3Ryb24tcGFkZGluZyAqIDEuNik7XG4gICAgcGFkZGluZy1ib3R0b206ICgkanVtYm90cm9uLXBhZGRpbmcgKiAxLjYpO1xuXG4gICAgLmNvbnRhaW5lciAmLFxuICAgIC5jb250YWluZXItZmx1aWQgJiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICAoJGp1bWJvdHJvbi1wYWRkaW5nICogMik7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAoJGp1bWJvdHJvbi1wYWRkaW5nICogMik7XG4gICAgfVxuXG4gICAgaDEsXG4gICAgLmgxIHtcbiAgICAgIGZvbnQtc2l6ZTogJGp1bWJvdHJvbi1oZWFkaW5nLWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBUaHVtYm5haWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIE1peGluIGFuZCBhZGp1c3QgdGhlIHJlZ3VsYXIgaW1hZ2UgY2xhc3Ncbi50aHVtYm5haWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogJHRodW1ibmFpbC1wYWRkaW5nO1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRodW1ibmFpbC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJHRodW1ibmFpbC1ib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6ICR0aHVtYm5haWwtYm9yZGVyLXJhZGl1cztcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihib3JkZXIgLjJzIGVhc2UtaW4tb3V0KTtcblxuICA+IGltZyxcbiAgYSA+IGltZyB7XG4gICAgQGluY2x1ZGUgaW1nLXJlc3BvbnNpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGEmOmhvdmVyLCBhJjpmb2N1cywgYSYuYWN0aXZlIHRvIGEudGh1bWJuYWlsOmhvdmVyLCBhLnRodW1ibmFpbDpmb2N1cywgYS50aHVtYm5haWwuYWN0aXZlXG5cbiAgLy8gSW1hZ2UgY2FwdGlvbnNcbiAgLmNhcHRpb24ge1xuICAgIHBhZGRpbmc6ICR0aHVtYm5haWwtY2FwdGlvbi1wYWRkaW5nO1xuICAgIGNvbG9yOiAkdGh1bWJuYWlsLWNhcHRpb24tY29sb3I7XG4gIH1cbn1cblxuLy8gQWRkIGEgaG92ZXIgc3RhdGUgZm9yIGxpbmtlZCB2ZXJzaW9ucyBvbmx5XG5hLnRodW1ibmFpbDpob3ZlcixcbmEudGh1bWJuYWlsOmZvY3VzLFxuYS50aHVtYm5haWwuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAkbGluay1jb2xvcjtcbn1cbiIsIi8vXG4vLyBBbGVydHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBzdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmFsZXJ0IHtcbiAgcGFkZGluZzogJGFsZXJ0LXBhZGRpbmc7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6ICRhbGVydC1ib3JkZXItcmFkaXVzO1xuXG4gIC8vIEhlYWRpbmdzIGZvciBsYXJnZXIgYWxlcnRzXG4gIGg0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIC8vIFNwZWNpZmllZCBmb3IgdGhlIGg0IHRvIHByZXZlbnQgY29uZmxpY3RzIG9mIGNoYW5naW5nICRoZWFkaW5ncy1jb2xvclxuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLy8gUHJvdmlkZSBjbGFzcyBmb3IgbGlua3MgdGhhdCBtYXRjaCBhbGVydHNcbiAgLmFsZXJ0LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiAkYWxlcnQtbGluay1mb250LXdlaWdodDtcbiAgfVxuXG4gIC8vIEltcHJvdmUgYWxpZ25tZW50IGFuZCBzcGFjaW5nIG9mIGlubmVyIGNvbnRlbnRcbiAgPiBwLFxuICA+IHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgPiBwICsgcCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG59XG5cbi8vIERpc21pc3NpYmxlIGFsZXJ0c1xuLy9cbi8vIEV4cGFuZCB0aGUgcmlnaHQgcGFkZGluZyBhbmQgYWNjb3VudCBmb3IgdGhlIGNsb3NlIGJ1dHRvbidzIHBvc2l0aW9uaW5nLlxuXG4uYWxlcnQtZGlzbWlzc2FibGUsIC8vIFRoZSBtaXNzcGVsbGVkIC5hbGVydC1kaXNtaXNzYWJsZSB3YXMgZGVwcmVjYXRlZCBpbiAzLjIuMC5cbi5hbGVydC1kaXNtaXNzaWJsZSB7XG4gIHBhZGRpbmctcmlnaHQ6ICgkYWxlcnQtcGFkZGluZyArIDIwKTtcblxuICAvLyBBZGp1c3QgY2xvc2UgbGluayBwb3NpdGlvblxuICAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0ycHg7XG4gICAgcmlnaHQ6IC0yMXB4O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIEFsdGVybmF0ZSBzdHlsZXNcbi8vXG4vLyBHZW5lcmF0ZSBjb250ZXh0dWFsIG1vZGlmaWVyIGNsYXNzZXMgZm9yIGNvbG9yaXppbmcgdGhlIGFsZXJ0LlxuXG4uYWxlcnQtc3VjY2VzcyB7XG4gIEBpbmNsdWRlIGFsZXJ0LXZhcmlhbnQoJGFsZXJ0LXN1Y2Nlc3MtYmcsICRhbGVydC1zdWNjZXNzLWJvcmRlciwgJGFsZXJ0LXN1Y2Nlc3MtdGV4dCk7XG59XG5cbi5hbGVydC1pbmZvIHtcbiAgQGluY2x1ZGUgYWxlcnQtdmFyaWFudCgkYWxlcnQtaW5mby1iZywgJGFsZXJ0LWluZm8tYm9yZGVyLCAkYWxlcnQtaW5mby10ZXh0KTtcbn1cblxuLmFsZXJ0LXdhcm5pbmcge1xuICBAaW5jbHVkZSBhbGVydC12YXJpYW50KCRhbGVydC13YXJuaW5nLWJnLCAkYWxlcnQtd2FybmluZy1ib3JkZXIsICRhbGVydC13YXJuaW5nLXRleHQpO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgQGluY2x1ZGUgYWxlcnQtdmFyaWFudCgkYWxlcnQtZGFuZ2VyLWJnLCAkYWxlcnQtZGFuZ2VyLWJvcmRlciwgJGFsZXJ0LWRhbmdlci10ZXh0KTtcbn1cbiIsIi8vXG4vLyBQcm9ncmVzcyBiYXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEJhciBhbmltYXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFdlYktpdFxuQC13ZWJraXQta2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzIHtcbiAgZnJvbSAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MHB4IDA7IH1cbiAgdG8gICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cbn1cblxuLy8gU3BlYyBhbmQgSUUxMCtcbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXMge1xuICBmcm9tICB7IGJhY2tncm91bmQtcG9zaXRpb246IDQwcHggMDsgfVxuICB0byAgICB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxufVxuXG5cbi8vIEJhciBpdHNlbGZcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gT3V0ZXIgY29udGFpbmVyXG4ucHJvZ3Jlc3Mge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJvZ3Jlc3MtYmc7XG4gIGJvcmRlci1yYWRpdXM6ICRwcm9ncmVzcy1ib3JkZXItcmFkaXVzO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgMXB4IDJweCByZ2JhKDAsMCwwLC4xKSk7XG59XG5cbi8vIEJhciBvZiBwcm9ncmVzc1xuLnByb2dyZXNzLWJhciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBjb2xvcjogJHByb2dyZXNzLWJhci1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJvZ3Jlc3MtYmFyLWJnO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgLTFweCAwIHJnYmEoMCwwLDAsLjE1KSk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24od2lkdGggLjZzIGVhc2UpO1xufVxuXG4vLyBTdHJpcGVkIGJhcnNcbi8vXG4vLyBgLnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhcmAgaXMgZGVwcmVjYXRlZCBhcyBvZiB2My4yLjAgaW4gZmF2b3Igb2YgdGhlXG4vLyBgLnByb2dyZXNzLWJhci1zdHJpcGVkYCBjbGFzcywgd2hpY2ggeW91IGp1c3QgYWRkIHRvIGFuIGV4aXN0aW5nXG4vLyBgLnByb2dyZXNzLWJhcmAuXG4ucHJvZ3Jlc3Mtc3RyaXBlZCAucHJvZ3Jlc3MtYmFyLFxuLnByb2dyZXNzLWJhci1zdHJpcGVkIHtcbiAgQGluY2x1ZGUgZ3JhZGllbnQtc3RyaXBlZDtcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XG59XG5cbi8vIENhbGwgYW5pbWF0aW9uIGZvciB0aGUgYWN0aXZlIG9uZVxuLy9cbi8vIGAucHJvZ3Jlc3MuYWN0aXZlIC5wcm9ncmVzcy1iYXJgIGlzIGRlcHJlY2F0ZWQgYXMgb2YgdjMuMi4wIGluIGZhdm9yIG9mIHRoZVxuLy8gYC5wcm9ncmVzcy1iYXIuYWN0aXZlYCBhcHByb2FjaC5cbi5wcm9ncmVzcy5hY3RpdmUgLnByb2dyZXNzLWJhcixcbi5wcm9ncmVzcy1iYXIuYWN0aXZlIHtcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKHByb2dyZXNzLWJhci1zdHJpcGVzIDJzIGxpbmVhciBpbmZpbml0ZSk7XG59XG5cblxuLy8gVmFyaWF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4ucHJvZ3Jlc3MtYmFyLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBwcm9ncmVzcy1iYXItdmFyaWFudCgkcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmcpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWluZm8ge1xuICBAaW5jbHVkZSBwcm9ncmVzcy1iYXItdmFyaWFudCgkcHJvZ3Jlc3MtYmFyLWluZm8tYmcpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLXdhcm5pbmcge1xuICBAaW5jbHVkZSBwcm9ncmVzcy1iYXItdmFyaWFudCgkcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmcpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWRhbmdlciB7XG4gIEBpbmNsdWRlIHByb2dyZXNzLWJhci12YXJpYW50KCRwcm9ncmVzcy1iYXItZGFuZ2VyLWJnKTtcbn1cbiIsIi5tZWRpYSB7XG4gIC8vIFByb3BlciBzcGFjaW5nIGJldHdlZW4gaW5zdGFuY2VzIG9mIC5tZWRpYVxuICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cblxuLm1lZGlhLFxuLm1lZGlhLWJvZHkge1xuICB6b29tOiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWVkaWEtYm9keSB7XG4gIHdpZHRoOiAxMDAwMHB4O1xufVxuXG4ubWVkaWEtb2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLy8gRml4IGNvbGxhcHNlIGluIHdlYmtpdCBmcm9tIG1heC13aWR0aDogMTAwJSBhbmQgZGlzcGxheTogdGFibGUtY2VsbC5cbiAgJi5pbWctdGh1bWJuYWlsIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbn1cblxuLm1lZGlhLXJpZ2h0LFxuLm1lZGlhID4gLnB1bGwtcmlnaHQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5tZWRpYS1sZWZ0LFxuLm1lZGlhID4gLnB1bGwtbGVmdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5tZWRpYS1sZWZ0LFxuLm1lZGlhLXJpZ2h0LFxuLm1lZGlhLWJvZHkge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWVkaWEtbWlkZGxlIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1lZGlhLWJvdHRvbSB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi8vIFJlc2V0IG1hcmdpbnMgb24gaGVhZGluZ3MgZm9yIHRpZ2h0ZXIgZGVmYXVsdCBzcGFjaW5nXG4ubWVkaWEtaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLy8gTWVkaWEgbGlzdCB2YXJpYXRpb25cbi8vXG4vLyBVbmRvIGRlZmF1bHQgdWwvb2wgc3R5bGVzXG4ubWVkaWEtbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbiIsIi8vXG4vLyBMaXN0IGdyb3Vwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIGNsYXNzXG4vL1xuLy8gRWFzaWx5IHVzYWJsZSBvbiA8dWw+LCA8b2w+LCBvciA8ZGl2Pi5cblxuLmxpc3QtZ3JvdXAge1xuICAvLyBObyBuZWVkIHRvIHNldCBsaXN0LXN0eWxlOiBub25lOyBzaW5jZSAubGlzdC1ncm91cC1pdGVtIGlzIGJsb2NrIGxldmVsXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMDsgLy8gcmVzZXQgcGFkZGluZyBiZWNhdXNlIHVsIGFuZCBvbFxufVxuXG5cbi8vIEluZGl2aWR1YWwgbGlzdCBpdGVtc1xuLy9cbi8vIFVzZSBvbiBgbGlgcyBvciBgZGl2YHMgd2l0aGluIHRoZSBgLmxpc3QtZ3JvdXBgIHBhcmVudC5cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgLy8gUGxhY2UgdGhlIGJvcmRlciBvbiB0aGUgbGlzdCBpdGVtcyBhbmQgbmVnYXRpdmUgbWFyZ2luIHVwIGZvciBiZXR0ZXIgc3R5bGluZ1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1ncm91cC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJGxpc3QtZ3JvdXAtYm9yZGVyO1xuXG4gIC8vIFJvdW5kIHRoZSBmaXJzdCBhbmQgbGFzdCBpdGVtc1xuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygkbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzKTtcbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1cyk7XG4gIH1cbn1cblxuXG4vLyBJbnRlcmFjdGl2ZSBsaXN0IGl0ZW1zXG4vL1xuLy8gVXNlIGFuY2hvciBvciBidXR0b24gZWxlbWVudHMgaW5zdGVhZCBvZiBgbGlgcyBvciBgZGl2YHMgdG8gY3JlYXRlIGludGVyYWN0aXZlIGl0ZW1zLlxuLy8gSW5jbHVkZXMgYW4gZXh0cmEgYC5hY3RpdmVgIG1vZGlmaWVyIGNsYXNzIGZvciBzaG93aW5nIHNlbGVjdGVkIGl0ZW1zLlxuXG5hLmxpc3QtZ3JvdXAtaXRlbSxcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBjb2xvcjogJGxpc3QtZ3JvdXAtbGluay1jb2xvcjtcblxuICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICAgIGNvbG9yOiAkbGlzdC1ncm91cC1saW5rLWhlYWRpbmctY29sb3I7XG4gIH1cblxuICAvLyBIb3ZlciBzdGF0ZVxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICRsaXN0LWdyb3VwLWxpbmstaG92ZXItY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3QtZ3JvdXAtaG92ZXItYmc7XG4gIH1cbn1cblxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgLy8gRGlzYWJsZWQgc3RhdGVcbiAgJi5kaXNhYmxlZCxcbiAgJi5kaXNhYmxlZDpob3ZlcixcbiAgJi5kaXNhYmxlZDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc7XG4gICAgY29sb3I6ICRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yO1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcblxuICAgIC8vIEZvcmNlIGNvbG9yIHRvIGluaGVyaXQgZm9yIGN1c3RvbSBjb250ZW50XG4gICAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICAubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICAgICAgY29sb3I6ICRsaXN0LWdyb3VwLWRpc2FibGVkLXRleHQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLy8gQWN0aXZlIGNsYXNzIG9uIGl0ZW0gaXRzZWxmLCBub3QgcGFyZW50XG4gICYuYWN0aXZlLFxuICAmLmFjdGl2ZTpob3ZlcixcbiAgJi5hY3RpdmU6Zm9jdXMge1xuICAgIHotaW5kZXg6IDI7IC8vIFBsYWNlIGFjdGl2ZSBpdGVtcyBhYm92ZSB0aGVpciBzaWJsaW5ncyBmb3IgcHJvcGVyIGJvcmRlciBzdHlsaW5nXG4gICAgY29sb3I6ICRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1ncm91cC1hY3RpdmUtYmc7XG4gICAgYm9yZGVyLWNvbG9yOiAkbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyO1xuXG4gICAgLy8gRm9yY2UgY29sb3IgdG8gaW5oZXJpdCBmb3IgY3VzdG9tIGNvbnRlbnRcbiAgICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsXG4gICAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gc21hbGwsXG4gICAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gLnNtYWxsIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICAubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICAgICAgY29sb3I6ICRsaXN0LWdyb3VwLWFjdGl2ZS10ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIENvbnRleHR1YWwgdmFyaWFudHNcbi8vXG4vLyBBZGQgbW9kaWZpZXIgY2xhc3NlcyB0byBjaGFuZ2UgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvciBvbiBpbmRpdmlkdWFsIGl0ZW1zLlxuLy8gT3JnYW5pemF0aW9uYWxseSwgdGhpcyBtdXN0IGNvbWUgYWZ0ZXIgdGhlIGA6aG92ZXJgIHN0YXRlcy5cblxuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoc3VjY2VzcywgJHN0YXRlLXN1Y2Nlc3MtYmcsICRzdGF0ZS1zdWNjZXNzLXRleHQpO1xuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoaW5mbywgJHN0YXRlLWluZm8tYmcsICRzdGF0ZS1pbmZvLXRleHQpO1xuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQod2FybmluZywgJHN0YXRlLXdhcm5pbmctYmcsICRzdGF0ZS13YXJuaW5nLXRleHQpO1xuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoZGFuZ2VyLCAkc3RhdGUtZGFuZ2VyLWJnLCAkc3RhdGUtZGFuZ2VyLXRleHQpO1xuXG5cbi8vIEN1c3RvbSBjb250ZW50IG9wdGlvbnNcbi8vXG4vLyBFeHRyYSBjbGFzc2VzIGZvciBjcmVhdGluZyB3ZWxsLWZvcm1hdHRlZCBjb250ZW50IHdpdGhpbiBgLmxpc3QtZ3JvdXAtaXRlbWBzLlxuXG4ubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuIiwiLy9cbi8vIFBhbmVsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIGNsYXNzXG4ucGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwYW5lbC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6ICRwYW5lbC1ib3JkZXItcmFkaXVzO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSkpO1xufVxuXG4vLyBQYW5lbCBjb250ZW50c1xuLnBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAkcGFuZWwtYm9keS1wYWRkaW5nO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcbn1cblxuLy8gT3B0aW9uYWwgaGVhZGluZ1xuLnBhbmVsLWhlYWRpbmcge1xuICBwYWRkaW5nOiAkcGFuZWwtaGVhZGluZy1wYWRkaW5nO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKCgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpKTtcblxuICA+IC5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBXaXRoaW4gaGVhZGluZywgc3RyaXAgYW55IGBoKmAgdGFnIG9mIGl0cyBkZWZhdWx0IG1hcmdpbnMgZm9yIHNwYWNpbmcuXG4ucGFuZWwtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDEuMTI1KSk7XG4gIGNvbG9yOiBpbmhlcml0O1xuXG4gID4gYSxcbiAgPiBzbWFsbCxcbiAgPiAuc21hbGwsXG4gID4gc21hbGwgPiBhLFxuICA+IC5zbWFsbCA+IGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIE9wdGlvbmFsIGZvb3RlciAoc3RheXMgZ3JheSBpbiBldmVyeSBtb2RpZmllciBjbGFzcylcbi5wYW5lbC1mb290ZXIge1xuICBwYWRkaW5nOiAkcGFuZWwtZm9vdGVyLXBhZGRpbmc7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwYW5lbC1mb290ZXItYmc7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkcGFuZWwtaW5uZXItYm9yZGVyO1xuICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKSk7XG59XG5cblxuLy8gTGlzdCBncm91cHMgaW4gcGFuZWxzXG4vL1xuLy8gQnkgZGVmYXVsdCwgc3BhY2Ugb3V0IGxpc3QgZ3JvdXAgY29udGVudCBmcm9tIHBhbmVsIGhlYWRpbmdzIHRvIGFjY291bnQgZm9yXG4vLyBhbnkga2luZCBvZiBjdXN0b20gY29udGVudCBiZXR3ZWVuIHRoZSB0d28uXG5cbi5wYW5lbCB7XG4gID4gLmxpc3QtZ3JvdXAsXG4gID4gLnBhbmVsLWNvbGxhcHNlID4gLmxpc3QtZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC8vIEFkZCBib3JkZXIgdG9wIHJhZGl1cyBmb3IgZmlyc3Qgb25lXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBib3JkZXIgYm90dG9tIHJhZGl1cyBmb3IgbGFzdCBvbmVcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICA+IC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLmxpc3QtZ3JvdXAge1xuICAgIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoMCk7XG4gICAgfVxuICB9XG59XG4vLyBDb2xsYXBzZSBzcGFjZSBiZXR3ZWVuIHdoZW4gdGhlcmUncyBubyBhZGRpdGlvbmFsIGNvbnRlbnQuXG4ucGFuZWwtaGVhZGluZyArIC5saXN0LWdyb3VwIHtcbiAgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgfVxufVxuLmxpc3QtZ3JvdXAgKyAucGFuZWwtZm9vdGVyIHtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbn1cblxuLy8gVGFibGVzIGluIHBhbmVsc1xuLy9cbi8vIFBsYWNlIGEgbm9uLWJvcmRlcmVkIGAudGFibGVgIHdpdGhpbiBhIHBhbmVsIChub3Qgd2l0aGluIGEgYC5wYW5lbC1ib2R5YCkgYW5kXG4vLyB3YXRjaCBpdCBnbyBmdWxsIHdpZHRoLlxuXG4ucGFuZWwge1xuICA+IC50YWJsZSxcbiAgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSxcbiAgPiAucGFuZWwtY29sbGFwc2UgPiAudGFibGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICBjYXB0aW9uIHtcbiAgICAgIHBhZGRpbmctbGVmdDogJHBhbmVsLWJvZHktcGFkZGluZztcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICRwYW5lbC1ib2R5LXBhZGRpbmc7XG4gICAgfVxuICB9XG4gIC8vIEFkZCBib3JkZXIgdG9wIHJhZGl1cyBmb3IgZmlyc3Qgb25lXG4gID4gLnRhYmxlOmZpcnN0LWNoaWxkLFxuICA+IC50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkID4gLnRhYmxlOmZpcnN0LWNoaWxkIHtcbiAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKSk7XG5cbiAgICA+IHRoZWFkOmZpcnN0LWNoaWxkLFxuICAgID4gdGJvZHk6Zmlyc3QtY2hpbGQge1xuICAgICAgPiB0cjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSk7XG5cbiAgICAgICAgdGQ6Zmlyc3QtY2hpbGQsXG4gICAgICAgIHRoOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICB0ZDpsYXN0LWNoaWxkLFxuICAgICAgICB0aDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gQWRkIGJvcmRlciBib3R0b20gcmFkaXVzIGZvciBsYXN0IG9uZVxuICA+IC50YWJsZTpsYXN0LWNoaWxkLFxuICA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSkpO1xuXG4gICAgPiB0Ym9keTpsYXN0LWNoaWxkLFxuICAgID4gdGZvb3Q6bGFzdC1jaGlsZCB7XG4gICAgICA+IHRyOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpO1xuXG4gICAgICAgIHRkOmZpcnN0LWNoaWxkLFxuICAgICAgICB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGQ6bGFzdC1jaGlsZCxcbiAgICAgICAgdGg6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gID4gLnBhbmVsLWJvZHkgKyAudGFibGUsXG4gID4gLnBhbmVsLWJvZHkgKyAudGFibGUtcmVzcG9uc2l2ZSxcbiAgPiAudGFibGUgKyAucGFuZWwtYm9keSxcbiAgPiAudGFibGUtcmVzcG9uc2l2ZSArIC5wYW5lbC1ib2R5IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgfVxuICA+IC50YWJsZSA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGgsXG4gID4gLnRhYmxlID4gdGJvZHk6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuICA+IC50YWJsZS1ib3JkZXJlZCxcbiAgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgYm9yZGVyOiAwO1xuICAgID4gdGhlYWQsXG4gICAgPiB0Ym9keSxcbiAgICA+IHRmb290IHtcbiAgICAgID4gdHIge1xuICAgICAgICA+IHRoOmZpcnN0LWNoaWxkLFxuICAgICAgICA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICA+IHRoOmxhc3QtY2hpbGQsXG4gICAgICAgID4gdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgID4gdGhlYWQsXG4gICAgPiB0Ym9keSB7XG4gICAgICA+IHRyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgPiB0ZCxcbiAgICAgICAgPiB0aCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICA+IHRib2R5LFxuICAgID4gdGZvb3Qge1xuICAgICAgPiB0cjpsYXN0LWNoaWxkIHtcbiAgICAgICAgPiB0ZCxcbiAgICAgICAgPiB0aCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICA+IC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG5cbi8vIENvbGxhcHNpYmxlIHBhbmVscyAoYWthLCBhY2NvcmRpb24pXG4vL1xuLy8gV3JhcCBhIHNlcmllcyBvZiBwYW5lbHMgaW4gYC5wYW5lbC1ncm91cGAgdG8gdHVybiB0aGVtIGludG8gYW4gYWNjb3JkaW9uIHdpdGhcbi8vIHRoZSBoZWxwIG9mIG91ciBjb2xsYXBzZSBKYXZhU2NyaXB0IHBsdWdpbi5cblxuLnBhbmVsLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuXG4gIC8vIFRpZ2h0ZW4gdXAgbWFyZ2luIHNvIGl0J3Mgb25seSBiZXR3ZWVuIHBhbmVsc1xuICAucGFuZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYm9yZGVyLXJhZGl1czogJHBhbmVsLWJvcmRlci1yYWRpdXM7XG5cbiAgICArIC5wYW5lbCB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICB9XG5cbiAgLnBhbmVsLWhlYWRpbmcge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG5cbiAgICArIC5wYW5lbC1jb2xsYXBzZSA+IC5wYW5lbC1ib2R5LFxuICAgICsgLnBhbmVsLWNvbGxhcHNlID4gLmxpc3QtZ3JvdXAge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRwYW5lbC1pbm5lci1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLnBhbmVsLWZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICArIC5wYW5lbC1jb2xsYXBzZSAucGFuZWwtYm9keSB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHBhbmVsLWlubmVyLWJvcmRlcjtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBDb250ZXh0dWFsIHZhcmlhdGlvbnNcbi5wYW5lbC1kZWZhdWx0IHtcbiAgQGluY2x1ZGUgcGFuZWwtdmFyaWFudCgkcGFuZWwtZGVmYXVsdC1ib3JkZXIsICRwYW5lbC1kZWZhdWx0LXRleHQsICRwYW5lbC1kZWZhdWx0LWhlYWRpbmctYmcsICRwYW5lbC1kZWZhdWx0LWJvcmRlcik7XG59XG4ucGFuZWwtcHJpbWFyeSB7XG4gIEBpbmNsdWRlIHBhbmVsLXZhcmlhbnQoJHBhbmVsLXByaW1hcnktYm9yZGVyLCAkcGFuZWwtcHJpbWFyeS10ZXh0LCAkcGFuZWwtcHJpbWFyeS1oZWFkaW5nLWJnLCAkcGFuZWwtcHJpbWFyeS1ib3JkZXIpO1xufVxuLnBhbmVsLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBwYW5lbC12YXJpYW50KCRwYW5lbC1zdWNjZXNzLWJvcmRlciwgJHBhbmVsLXN1Y2Nlc3MtdGV4dCwgJHBhbmVsLXN1Y2Nlc3MtaGVhZGluZy1iZywgJHBhbmVsLXN1Y2Nlc3MtYm9yZGVyKTtcbn1cbi5wYW5lbC1pbmZvIHtcbiAgQGluY2x1ZGUgcGFuZWwtdmFyaWFudCgkcGFuZWwtaW5mby1ib3JkZXIsICRwYW5lbC1pbmZvLXRleHQsICRwYW5lbC1pbmZvLWhlYWRpbmctYmcsICRwYW5lbC1pbmZvLWJvcmRlcik7XG59XG4ucGFuZWwtd2FybmluZyB7XG4gIEBpbmNsdWRlIHBhbmVsLXZhcmlhbnQoJHBhbmVsLXdhcm5pbmctYm9yZGVyLCAkcGFuZWwtd2FybmluZy10ZXh0LCAkcGFuZWwtd2FybmluZy1oZWFkaW5nLWJnLCAkcGFuZWwtd2FybmluZy1ib3JkZXIpO1xufVxuLnBhbmVsLWRhbmdlciB7XG4gIEBpbmNsdWRlIHBhbmVsLXZhcmlhbnQoJHBhbmVsLWRhbmdlci1ib3JkZXIsICRwYW5lbC1kYW5nZXItdGV4dCwgJHBhbmVsLWRhbmdlci1oZWFkaW5nLWJnLCAkcGFuZWwtZGFuZ2VyLWJvcmRlcik7XG59XG4iLCIvL1xuLy8gV2VsbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBjbGFzc1xuLndlbGwge1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2VsbC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJHdlbGwtYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSkpO1xuICBibG9ja3F1b3RlIHtcbiAgICBib3JkZXItY29sb3I6ICNkZGQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLC4xNSk7XG4gIH1cbn1cblxuLy8gU2l6ZXNcbi53ZWxsLWxnIHtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGFyZ2U7XG59XG4ud2VsbC1zbSB7XG4gIHBhZGRpbmc6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc21hbGw7XG59XG4iLCIvLyBFbWJlZHMgcmVzcG9uc2l2ZVxuLy9cbi8vIENyZWRpdDogTmljb2xhcyBHYWxsYWdoZXIgYW5kIFNVSVQgQ1NTLlxuXG4uZW1iZWQtcmVzcG9uc2l2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtLFxuICBpZnJhbWUsXG4gIGVtYmVkLFxuICBvYmplY3QsXG4gIHZpZGVvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuLy8gTW9kaWZpZXIgY2xhc3MgZm9yIDE2OjkgYXNwZWN0IHJhdGlvXG4uZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OSB7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG59XG5cbi8vIE1vZGlmaWVyIGNsYXNzIGZvciA0OjMgYXNwZWN0IHJhdGlvXG4uZW1iZWQtcmVzcG9uc2l2ZS00YnkzIHtcbiAgcGFkZGluZy1ib3R0b206IDc1JTtcbn1cbiIsIi8vXG4vLyBDbG9zZSBpY29uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4uY2xvc2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogKCRmb250LXNpemUtYmFzZSAqIDEuNSk7XG4gIGZvbnQtd2VpZ2h0OiAkY2xvc2UtZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogJGNsb3NlLWNvbG9yO1xuICB0ZXh0LXNoYWRvdzogJGNsb3NlLXRleHQtc2hhZG93O1xuICBAaW5jbHVkZSBvcGFjaXR5KC4yKTtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogJGNsb3NlLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgQGluY2x1ZGUgb3BhY2l0eSguNSk7XG4gIH1cblxuICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYnV0dG9uJiB0byBidXR0b24uY2xvc2Vcbn1cblxuLy8gQWRkaXRpb25hbCBwcm9wZXJ0aWVzIGZvciBidXR0b24gdmVyc2lvblxuLy8gaU9TIHJlcXVpcmVzIHRoZSBidXR0b24gZWxlbWVudCBpbnN0ZWFkIG9mIGFuIGFuY2hvciB0YWcuXG4vLyBJZiB5b3Ugd2FudCB0aGUgYW5jaG9yIHZlcnNpb24sIGl0IHJlcXVpcmVzIGBocmVmPVwiI1wiYC5cbi8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvY2xpY2sjU2FmYXJpX01vYmlsZVxuYnV0dG9uLmNsb3NlIHtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG4iLCIvL1xuLy8gTW9kYWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAubW9kYWwtb3BlbiAgICAgIC0gYm9keSBjbGFzcyBmb3Iga2lsbGluZyB0aGUgc2Nyb2xsXG4vLyAubW9kYWwgICAgICAgICAgIC0gY29udGFpbmVyIHRvIHNjcm9sbCB3aXRoaW5cbi8vIC5tb2RhbC1kaWFsb2cgICAgLSBwb3NpdGlvbmluZyBzaGVsbCBmb3IgdGhlIGFjdHVhbCBtb2RhbFxuLy8gLm1vZGFsLWNvbnRlbnQgICAtIGFjdHVhbCBtb2RhbCB3LyBiZyBhbmQgY29ybmVycyBhbmQgc2hpdFxuXG4vLyBLaWxsIHRoZSBzY3JvbGwgb24gdGhlIGJvZHlcbi5tb2RhbC1vcGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLy8gQ29udGFpbmVyIHRoYXQgdGhlIG1vZGFsIHNjcm9sbHMgd2l0aGluXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1tb2RhbDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gIC8vIFByZXZlbnQgQ2hyb21lIG9uIFdpbmRvd3MgZnJvbSBhZGRpbmcgYSBmb2N1cyBvdXRsaW5lLiBGb3IgZGV0YWlscywgc2VlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzEwOTUxLlxuICBvdXRsaW5lOiAwO1xuXG4gIC8vIFdoZW4gZmFkaW5nIGluIHRoZSBtb2RhbCwgYW5pbWF0ZSBpdCB0byBzbGlkZSBkb3duXG4gICYuZmFkZSAubW9kYWwtZGlhbG9nIHtcbiAgICBAaW5jbHVkZSB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbi10cmFuc2Zvcm0oMC4zcyBlYXNlLW91dCk7XG4gIH1cbiAgJi5pbiAubW9kYWwtZGlhbG9nIHsgQGluY2x1ZGUgdHJhbnNsYXRlKDAsIDApIH1cbn1cbi5tb2RhbC1vcGVuIC5tb2RhbCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLy8gU2hlbGwgZGl2IHRvIHBvc2l0aW9uIHRoZSBtb2RhbCB3aXRoIGJvdHRvbSBwYWRkaW5nXG4ubW9kYWwtZGlhbG9nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4vLyBBY3R1YWwgbW9kYWxcbi5tb2RhbC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW9kYWwtY29udGVudC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJG1vZGFsLWNvbnRlbnQtZmFsbGJhY2stYm9yZGVyLWNvbG9yOyAvL29sZCBicm93c2VycyBmYWxsYmFjayAoaWU4IGV0YylcbiAgYm9yZGVyOiAxcHggc29saWQgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sYXJnZTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygwIDNweCA5cHggcmdiYSgwLDAsMCwuNSkpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvLyBSZW1vdmUgZm9jdXMgb3V0bGluZSBmcm9tIG9wZW5lZCBtb2RhbFxuICBvdXRsaW5lOiAwO1xufVxuXG4vLyBNb2RhbCBiYWNrZ3JvdW5kXG4ubW9kYWwtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1tb2RhbC1iYWNrZ3JvdW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW9kYWwtYmFja2Ryb3AtYmc7XG4gIC8vIEZhZGUgZm9yIGJhY2tkcm9wXG4gICYuZmFkZSB7IEBpbmNsdWRlIG9wYWNpdHkoMCk7IH1cbiAgJi5pbiB7IEBpbmNsdWRlIG9wYWNpdHkoJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHkpOyB9XG59XG5cbi8vIE1vZGFsIGhlYWRlclxuLy8gVG9wIHNlY3Rpb24gb2YgdGhlIG1vZGFsIHcvIHRpdGxlIGFuZCBkaXNtaXNzXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogJG1vZGFsLXRpdGxlLXBhZGRpbmc7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG4vLyBDbG9zZSBpY29uXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi8vIFRpdGxlIHRleHQgd2l0aGluIGhlYWRlclxuLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0O1xufVxuXG4vLyBNb2RhbCBib2R5XG4vLyBXaGVyZSBhbGwgbW9kYWwgY29udGVudCByZXNpZGVzIChzaWJsaW5nIG9mIC5tb2RhbC1oZWFkZXIgYW5kIC5tb2RhbC1mb290ZXIpXG4ubW9kYWwtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogJG1vZGFsLWlubmVyLXBhZGRpbmc7XG59XG5cbi8vIEZvb3RlciAoZm9yIGFjdGlvbnMpXG4ubW9kYWwtZm9vdGVyIHtcbiAgcGFkZGluZzogJG1vZGFsLWlubmVyLXBhZGRpbmc7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyAvLyByaWdodCBhbGlnbiBidXR0b25zXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7IC8vIGNsZWFyIGl0IGluIGNhc2UgZm9sa3MgdXNlIC5wdWxsLSogY2xhc3NlcyBvbiBidXR0b25zXG5cbiAgLy8gUHJvcGVybHkgc3BhY2Ugb3V0IGJ1dHRvbnNcbiAgLmJ0biArIC5idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDsgLy8gYWNjb3VudCBmb3IgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB3aGljaCBnZXRzIHRoZSBib3R0b20gbWFyZ2luIGxpa2UgYWxsIG90aGVyIGlucHV0c1xuICB9XG4gIC8vIGJ1dCBvdmVycmlkZSB0aGF0IGZvciBidXR0b24gZ3JvdXBzXG4gIC5idG4tZ3JvdXAgLmJ0biArIC5idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB9XG4gIC8vIGFuZCBvdmVycmlkZSBpdCBmb3IgYmxvY2sgYnV0dG9ucyBhcyB3ZWxsXG4gIC5idG4tYmxvY2sgKyAuYnRuLWJsb2NrIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4vLyBNZWFzdXJlIHNjcm9sbGJhciB3aWR0aCBmb3IgcGFkZGluZyBib2R5IGR1cmluZyBtb2RhbCBzaG93L2hpZGVcbi5tb2RhbC1zY3JvbGxiYXItbWVhc3VyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4vLyBTY2FsZSB1cCB0aGUgbW9kYWxcbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAvLyBBdXRvbWF0aWNhbGx5IHNldCBtb2RhbCdzIHdpZHRoIGZvciBsYXJnZXIgdmlld3BvcnRzXG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIHdpZHRoOiAkbW9kYWwtbWQ7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIH1cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMCA1cHggMTVweCByZ2JhKDAsMCwwLC41KSk7XG4gIH1cblxuICAvLyBNb2RhbCBzaXplc1xuICAubW9kYWwtc20geyB3aWR0aDogJG1vZGFsLXNtOyB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikge1xuICAubW9kYWwtbGcgeyB3aWR0aDogJG1vZGFsLWxnOyB9XG59XG4iLCIvL1xuLy8gVG9vbHRpcHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBjbGFzc1xuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6ICR6aW5kZXgtdG9vbHRpcDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIE91ciBwYXJlbnQgZWxlbWVudCBjYW4gYmUgYXJiaXRyYXJ5IHNpbmNlIHRvb2x0aXBzIGFyZSBieSBkZWZhdWx0IGluc2VydGVkIGFzIGEgc2libGluZyBvZiB0aGVpciB0YXJnZXQgZWxlbWVudC5cbiAgLy8gU28gcmVzZXQgb3VyIGZvbnQgYW5kIHRleHQgcHJvcGVydGllcyB0byBhdm9pZCBpbmhlcml0aW5nIHdlaXJkIHZhbHVlcy5cbiAgQGluY2x1ZGUgcmVzZXQtdGV4dDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuXG4gIEBpbmNsdWRlIG9wYWNpdHkoMCk7XG5cbiAgJi5pbiAgICAgeyBAaW5jbHVkZSBvcGFjaXR5KCR0b29sdGlwLW9wYWNpdHkpOyB9XG4gICYudG9wICAgIHsgbWFyZ2luLXRvcDogIC0zcHg7IHBhZGRpbmc6ICR0b29sdGlwLWFycm93LXdpZHRoIDA7IH1cbiAgJi5yaWdodCAgeyBtYXJnaW4tbGVmdDogIDNweDsgcGFkZGluZzogMCAkdG9vbHRpcC1hcnJvdy13aWR0aDsgfVxuICAmLmJvdHRvbSB7IG1hcmdpbi10b3A6ICAgM3B4OyBwYWRkaW5nOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAwOyB9XG4gICYubGVmdCAgIHsgbWFyZ2luLWxlZnQ6IC0zcHg7IHBhZGRpbmc6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGg7IH1cbn1cblxuLy8gV3JhcHBlciBmb3IgdGhlIHRvb2x0aXAgY29udGVudFxuLnRvb2x0aXAtaW5uZXIge1xuICBtYXgtd2lkdGg6ICR0b29sdGlwLW1heC13aWR0aDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgY29sb3I6ICR0b29sdGlwLWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0b29sdGlwLWJnO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xufVxuXG4vLyBBcnJvd3Ncbi50b29sdGlwLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLy8gTm90ZTogRGVwcmVjYXRlZCAudG9wLWxlZnQsIC50b3AtcmlnaHQsIC5ib3R0b20tbGVmdCwgYW5kIC5ib3R0b20tcmlnaHQgYXMgb2YgdjMuMy4xXG4udG9vbHRpcCB7XG4gICYudG9wIC50b29sdGlwLWFycm93IHtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aCAwO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYudG9wLWxlZnQgLnRvb2x0aXAtYXJyb3cge1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgbWFyZ2luLWJvdHRvbTogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggMDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLnRvcC1yaWdodCAudG9vbHRpcC1hcnJvdyB7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6ICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIG1hcmdpbi1ib3R0b206IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6ICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoIDA7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi5yaWdodCAudG9vbHRpcC1hcnJvdyB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aCAwO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi5sZWZ0IC50b29sdGlwLWFycm93IHtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAwICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLmJvdHRvbSAudG9vbHRpcC1hcnJvdyB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogMCAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLmJvdHRvbS1sZWZ0IC50b29sdGlwLWFycm93IHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6ICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIG1hcmdpbi10b3A6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi5ib3R0b20tcmlnaHQgLnRvb2x0aXAtYXJyb3cge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBtYXJnaW4tdG9wOiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAwICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG59XG4iLCIvL1xuLy8gUG9wb3ZlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLnBvcG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1wb3BvdmVyO1xuICBkaXNwbGF5OiBub25lO1xuICBtYXgtd2lkdGg6ICRwb3BvdmVyLW1heC13aWR0aDtcbiAgcGFkZGluZzogMXB4O1xuICAvLyBPdXIgcGFyZW50IGVsZW1lbnQgY2FuIGJlIGFyYml0cmFyeSBzaW5jZSBwb3BvdmVycyBhcmUgYnkgZGVmYXVsdCBpbnNlcnRlZCBhcyBhIHNpYmxpbmcgb2YgdGhlaXIgdGFyZ2V0IGVsZW1lbnQuXG4gIC8vIFNvIHJlc2V0IG91ciBmb250IGFuZCB0ZXh0IHByb3BlcnRpZXMgdG8gYXZvaWQgaW5oZXJpdGluZyB3ZWlyZCB2YWx1ZXMuXG4gIEBpbmNsdWRlIHJlc2V0LXRleHQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3BvdmVyLWJnO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAkcG9wb3Zlci1mYWxsYmFjay1ib3JkZXItY29sb3I7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRwb3BvdmVyLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGFyZ2U7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMCA1cHggMTBweCByZ2JhKDAsMCwwLC4yKSk7XG5cbiAgLy8gT2Zmc2V0IHRoZSBwb3BvdmVyIHRvIGFjY291bnQgZm9yIHRoZSBwb3BvdmVyIGFycm93XG4gICYudG9wICAgICB7IG1hcmdpbi10b3A6IC0kcG9wb3Zlci1hcnJvdy13aWR0aDsgfVxuICAmLnJpZ2h0ICAgeyBtYXJnaW4tbGVmdDogJHBvcG92ZXItYXJyb3ctd2lkdGg7IH1cbiAgJi5ib3R0b20gIHsgbWFyZ2luLXRvcDogJHBvcG92ZXItYXJyb3ctd2lkdGg7IH1cbiAgJi5sZWZ0ICAgIHsgbWFyZ2luLWxlZnQ6IC0kcG9wb3Zlci1hcnJvdy13aWR0aDsgfVxufVxuXG4ucG9wb3Zlci10aXRsZSB7XG4gIG1hcmdpbjogMDsgLy8gcmVzZXQgaGVhZGluZyBtYXJnaW5cbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9wb3Zlci10aXRsZS1iZztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtlbigkcG9wb3Zlci10aXRsZS1iZywgNSUpO1xuICBib3JkZXItcmFkaXVzOiAoJGJvcmRlci1yYWRpdXMtbGFyZ2UgLSAxKSAoJGJvcmRlci1yYWRpdXMtbGFyZ2UgLSAxKSAwIDA7XG59XG5cbi5wb3BvdmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA5cHggMTRweDtcbn1cblxuLy8gQXJyb3dzXG4vL1xuLy8gLmFycm93IGlzIG91dGVyLCAuYXJyb3c6YWZ0ZXIgaXMgaW5uZXJcblxuLnBvcG92ZXIgPiAuYXJyb3cge1xuICAmLFxuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgfVxufVxuLnBvcG92ZXIgPiAuYXJyb3cge1xuICBib3JkZXItd2lkdGg6ICRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xufVxuLnBvcG92ZXIgPiAuYXJyb3c6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6ICRwb3BvdmVyLWFycm93LXdpZHRoO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4ucG9wb3ZlciB7XG4gICYudG9wID4gLmFycm93IHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICRwb3BvdmVyLWFycm93LW91dGVyLWZhbGxiYWNrLWNvbG9yOyAvLyBJRTggZmFsbGJhY2tcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjtcbiAgICBib3R0b206IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgYm90dG9tOiAxcHg7XG4gICAgICBtYXJnaW4tbGVmdDogLSRwb3BvdmVyLWFycm93LXdpZHRoO1xuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICRwb3BvdmVyLWFycm93LWNvbG9yO1xuICAgIH1cbiAgfVxuICAmLnJpZ2h0ID4gLmFycm93IHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgbWFyZ2luLXRvcDogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItZmFsbGJhY2stY29sb3I7IC8vIElFOCBmYWxsYmFja1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIGxlZnQ6IDFweDtcbiAgICAgIGJvdHRvbTogLSRwb3BvdmVyLWFycm93LXdpZHRoO1xuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6ICRwb3BvdmVyLWFycm93LWNvbG9yO1xuICAgIH1cbiAgfVxuICAmLmJvdHRvbSA+IC5hcnJvdyB7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1mYWxsYmFjay1jb2xvcjsgLy8gSUU4IGZhbGxiYWNrXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I7XG4gICAgdG9wOiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIHRvcDogMXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IC0kcG9wb3Zlci1hcnJvdy13aWR0aDtcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmLmxlZnQgPiAuYXJyb3cge1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgbWFyZ2luLXRvcDogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItZmFsbGJhY2stY29sb3I7IC8vIElFOCBmYWxsYmFja1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgcmlnaHQ6IDFweDtcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1jb2xvcjtcbiAgICAgIGJvdHRvbTogLSRwb3BvdmVyLWFycm93LXdpZHRoO1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIENhcm91c2VsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIFdyYXBwZXIgZm9yIHRoZSBzbGlkZSBjb250YWluZXIgYW5kIGluZGljYXRvcnNcbi5jYXJvdXNlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcblxuICA+IC5pdGVtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC42cyBlYXNlLWluLW91dCBsZWZ0KTtcblxuICAgIC8vIEFjY291bnQgZm9yIGphbmtpdHVkZSBvbiBpbWFnZXNcbiAgICA+IGltZyxcbiAgICA+IGEgPiBpbWcge1xuICAgICAgQGluY2x1ZGUgaW1nLXJlc3BvbnNpdmU7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG5cbiAgICAvLyBXZWJLaXQgQ1NTMyB0cmFuc2Zvcm1zIGZvciBzdXBwb3J0ZWQgZGV2aWNlc1xuICAgIEBtZWRpYSBhbGwgYW5kICh0cmFuc2Zvcm0tM2QpLCAoLXdlYmtpdC10cmFuc2Zvcm0tM2QpIHtcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tdHJhbnNmb3JtKDAuNnMgZWFzZS1pbi1vdXQpO1xuICAgICAgQGluY2x1ZGUgYmFja2ZhY2UtdmlzaWJpbGl0eShoaWRkZW4pO1xuICAgICAgQGluY2x1ZGUgcGVyc3BlY3RpdmUoMTAwMHB4KTtcblxuICAgICAgJi5uZXh0LFxuICAgICAgJi5hY3RpdmUucmlnaHQge1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgICYucHJldixcbiAgICAgICYuYWN0aXZlLmxlZnQge1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgICAmLm5leHQubGVmdCxcbiAgICAgICYucHJldi5yaWdodCxcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgPiAuYWN0aXZlLFxuICA+IC5uZXh0LFxuICA+IC5wcmV2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gID4gLmFjdGl2ZSB7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gID4gLm5leHQsXG4gID4gLnByZXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICA+IC5uZXh0IHtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG4gID4gLnByZXYge1xuICAgIGxlZnQ6IC0xMDAlO1xuICB9XG4gID4gLm5leHQubGVmdCxcbiAgPiAucHJldi5yaWdodCB7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gID4gLmFjdGl2ZS5sZWZ0IHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgfVxuICA+IC5hY3RpdmUucmlnaHQge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cblxufVxuXG4vLyBMZWZ0L3JpZ2h0IGNvbnRyb2xzIGZvciBuYXZcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uY2Fyb3VzZWwtY29udHJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAkY2Fyb3VzZWwtY29udHJvbC13aWR0aDtcbiAgQGluY2x1ZGUgb3BhY2l0eSgkY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5KTtcbiAgZm9udC1zaXplOiAkY2Fyb3VzZWwtY29udHJvbC1mb250LXNpemU7XG4gIGNvbG9yOiAkY2Fyb3VzZWwtY29udHJvbC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogJGNhcm91c2VsLXRleHQtc2hhZG93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApOyAvLyBGaXggSUU5IGNsaWNrLXRocnUgYnVnXG4gIC8vIFdlIGNhbid0IGhhdmUgdGhpcyB0cmFuc2l0aW9uIGhlcmUgYmVjYXVzZSBXZWJLaXQgY2FuY2VscyB0aGUgY2Fyb3VzZWxcbiAgLy8gYW5pbWF0aW9uIGlmIHlvdSB0cmlwIHRoaXMgd2hpbGUgaW4gdGhlIG1pZGRsZSBvZiBhbm90aGVyIGFuaW1hdGlvbi5cblxuICAvLyBTZXQgZ3JhZGllbnRzIGZvciBiYWNrZ3JvdW5kc1xuICAmLmxlZnQge1xuICAgIEBpbmNsdWRlIGdyYWRpZW50LWhvcml6b250YWwoJHN0YXJ0LWNvbG9yOiByZ2JhKDAsMCwwLC41KSwgJGVuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDAwMSkpO1xuICB9XG4gICYucmlnaHQge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDA7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6IHJnYmEoMCwwLDAsLjAwMDEpLCAkZW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KSk7XG4gIH1cblxuICAvLyBIb3Zlci9mb2N1cyBzdGF0ZVxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGNvbG9yOiAkY2Fyb3VzZWwtY29udHJvbC1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgQGluY2x1ZGUgb3BhY2l0eSguOSk7XG4gIH1cblxuICAvLyBUb2dnbGVzXG4gIC5pY29uLXByZXYsXG4gIC5pY29uLW5leHQsXG4gIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0LFxuICAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICB6LWluZGV4OiA1O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuaWNvbi1wcmV2LFxuICAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCB7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgfVxuICAuaWNvbi1uZXh0LFxuICAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQge1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgfVxuICAuaWNvbi1wcmV2LFxuICAuaWNvbi1uZXh0IHtcbiAgICB3aWR0aDogIDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgfVxuXG5cbiAgLmljb24tcHJldiB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1xcMjAzOSc7Ly8gU0lOR0xFIExFRlQtUE9JTlRJTkcgQU5HTEUgUVVPVEFUSU9OIE1BUksgKFUrMjAzOSlcbiAgICB9XG4gIH1cbiAgLmljb24tbmV4dCB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1xcMjAzYSc7Ly8gU0lOR0xFIFJJR0hULVBPSU5USU5HIEFOR0xFIFFVT1RBVElPTiBNQVJLIChVKzIwM0EpXG4gICAgfVxuICB9XG59XG5cbi8vIE9wdGlvbmFsIGluZGljYXRvciBwaXBzXG4vL1xuLy8gQWRkIGFuIHVub3JkZXJlZCBsaXN0IHdpdGggdGhlIGZvbGxvd2luZyBjbGFzcyBhbmQgYWRkIGEgbGlzdCBpdGVtIGZvciBlYWNoXG4vLyBzbGlkZSB5b3VyIGNhcm91c2VsIGhvbGRzLlxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDE1O1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tbGVmdDogLTMwJTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogIDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbjogMXB4O1xuICAgIHRleHQtaW5kZW50OiAtOTk5cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNhcm91c2VsLWluZGljYXRvci1ib3JkZXItY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAvLyBJRTgtOSBoYWNrIGZvciBldmVudCBoYW5kbGluZ1xuICAgIC8vXG4gICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgOC05IGRvZXMgbm90IHN1cHBvcnQgY2xpY2tzIG9uIGVsZW1lbnRzIHdpdGhvdXQgYSBzZXRcbiAgICAvLyBgYmFja2dyb3VuZC1jb2xvcmAuIFdlIGNhbm5vdCB1c2UgYGZpbHRlcmAgc2luY2UgdGhhdCdzIG5vdCB2aWV3ZWQgYXMgYVxuICAgIC8vIGJhY2tncm91bmQgY29sb3IgYnkgdGhlIGJyb3dzZXIuIFRodXMsIGEgaGFjayBpcyBuZWVkZWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9jbGljayNJbnRlcm5ldF9FeHBsb3JlclxuICAgIC8vXG4gICAgLy8gRm9yIElFOCwgd2Ugc2V0IHNvbGlkIGJsYWNrIGFzIGl0IGRvZXNuJ3Qgc3VwcG9ydCBgcmdiYSgpYC4gRm9yIElFOSwgd2VcbiAgICAvLyBzZXQgYWxwaGEgdHJhbnNwYXJlbmN5IGZvciB0aGUgYmVzdCByZXN1bHRzIHBvc3NpYmxlLlxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgXFw5OyAvLyBJRThcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApOyAvLyBJRTlcbiAgfVxuICAuYWN0aXZlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6ICAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZztcbiAgfVxufVxuXG4vLyBPcHRpb25hbCBjYXB0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEhpZGRlbiBieSBkZWZhdWx0IGZvciBzbWFsbGVyIHZpZXdwb3J0c1xuLmNhcm91c2VsLWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1JTtcbiAgcmlnaHQ6IDE1JTtcbiAgYm90dG9tOiAyMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBjb2xvcjogJGNhcm91c2VsLWNhcHRpb24tY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6ICRjYXJvdXNlbC10ZXh0LXNoYWRvdztcbiAgJiAuYnRuIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTsgLy8gTm8gc2hhZG93IGZvciBidXR0b24gZWxlbWVudHMgaW4gY2Fyb3VzZWwtY2FwdGlvblxuICB9XG59XG5cblxuLy8gU2NhbGUgdXAgY29udHJvbHMgZm9yIHRhYmxldHMgYW5kIHVwXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuXG4gIC8vIFNjYWxlIHVwIHRoZSBjb250cm9scyBhIHNtaWRnZVxuICAuY2Fyb3VzZWwtY29udHJvbCB7XG4gICAgLmdseXBoaWNvbi1jaGV2cm9uLWxlZnQsXG4gICAgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0LFxuICAgIC5pY29uLXByZXYsXG4gICAgLmljb24tbmV4dCB7XG4gICAgICB3aWR0aDogKCRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZSAqIDEuNSk7XG4gICAgICBoZWlnaHQ6ICgkY2Fyb3VzZWwtY29udHJvbC1mb250LXNpemUgKiAxLjUpO1xuICAgICAgbWFyZ2luLXRvcDogKCRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZSAvIC0yKTtcbiAgICAgIGZvbnQtc2l6ZTogKCRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZSAqIDEuNSk7XG4gICAgfVxuICAgIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0LFxuICAgIC5pY29uLXByZXYge1xuICAgICAgbWFyZ2luLWxlZnQ6ICgkY2Fyb3VzZWwtY29udHJvbC1mb250LXNpemUgLyAtMik7XG4gICAgfVxuICAgIC5nbHlwaGljb24tY2hldnJvbi1yaWdodCxcbiAgICAuaWNvbi1uZXh0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogKCRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZSAvIC0yKTtcbiAgICB9XG4gIH1cblxuICAvLyBTaG93IGFuZCBsZWZ0IGFsaWduIHRoZSBjYXB0aW9uc1xuICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgbGVmdDogMjAlO1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cblxuICAvLyBNb3ZlIHVwIHRoZSBpbmRpY2F0b3JzXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbn1cbiIsIi8vXG4vLyBVdGlsaXR5IGNsYXNzZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gRmxvYXRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5jbGVhcmZpeCB7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xufVxuLmNlbnRlci1ibG9jayB7XG4gIEBpbmNsdWRlIGNlbnRlci1ibG9jaztcbn1cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4ucHVsbC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuXG4vLyBUb2dnbGluZyBjb250ZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE5vdGU6IERlcHJlY2F0ZWQgLmhpZGUgaW4gZmF2b3Igb2YgLmhpZGRlbiBvciAuc3Itb25seSAoYXMgYXBwcm9wcmlhdGUpIGluIHYzLjAuMVxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4uaW52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnRleHQtaGlkZSB7XG4gIEBpbmNsdWRlIHRleHQtaGlkZTtcbn1cblxuXG4vLyBIaWRlIGZyb20gc2NyZWVucmVhZGVycyBhbmQgYnJvd3NlcnNcbi8vXG4vLyBDcmVkaXQ6IEhUTUw1IEJvaWxlcnBsYXRlXG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gRm9yIEFmZml4IHBsdWdpblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYWZmaXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4iLCIvL1xuLy8gUmVzcG9uc2l2ZTogVXRpbGl0eSBjbGFzc2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIElFMTAgaW4gV2luZG93cyAoUGhvbmUpIDhcbi8vXG4vLyBTdXBwb3J0IGZvciByZXNwb25zaXZlIHZpZXdzIHZpYSBtZWRpYSBxdWVyaWVzIGlzIGtpbmQgb2YgYm9ya2VkIGluIElFMTAsIGZvclxuLy8gU3VyZmFjZS9kZXNrdG9wIGluIHNwbGl0IHZpZXcgYW5kIGZvciBXaW5kb3dzIFBob25lIDguIFRoaXMgcGFydGljdWxhciBmaXhcbi8vIG11c3QgYmUgYWNjb21wYW5pZWQgYnkgYSBzbmlwcGV0IG9mIEphdmFTY3JpcHQgdG8gc25pZmYgdGhlIHVzZXIgYWdlbnQgYW5kXG4vLyBhcHBseSBzb21lIGNvbmRpdGlvbmFsIENTUyB0byAqb25seSogdGhlIFN1cmZhY2UvZGVza3RvcCBXaW5kb3dzIDguIExvb2sgYXRcbi8vIG91ciBHZXR0aW5nIFN0YXJ0ZWQgcGFnZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGlzIGJ1Zy5cbi8vXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBmb2xsb3dpbmc6XG4vL1xuLy8gSXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTA0OTdcbi8vIERvY3M6IGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2dldHRpbmctc3RhcnRlZC8jc3VwcG9ydC1pZTEwLXdpZHRoXG4vLyBTb3VyY2U6IGh0dHA6Ly90aW1rYWRsZWMuY29tLzIwMTMvMDEvd2luZG93cy1waG9uZS04LWFuZC1kZXZpY2Utd2lkdGgvXG4vLyBTb3VyY2U6IGh0dHA6Ly90aW1rYWRsZWMuY29tLzIwMTIvMTAvaWUxMC1zbmFwLW1vZGUtYW5kLXJlc3BvbnNpdmUtZGVzaWduL1xuXG5AYXQtcm9vdCB7XG4gIEAtbXMtdmlld3BvcnQge1xuICAgIHdpZHRoOiBkZXZpY2Utd2lkdGg7XG4gIH1cbn1cblxuXG4vLyBWaXNpYmlsaXR5IHV0aWxpdGllc1xuLy8gTm90ZTogRGVwcmVjYXRlZCAudmlzaWJsZS14cywgLnZpc2libGUtc20sIC52aXNpYmxlLW1kLCBhbmQgLnZpc2libGUtbGcgYXMgb2YgdjMuMi4wXG5cbkBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcudmlzaWJsZS14cycpO1xuQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy52aXNpYmxlLXNtJyk7XG5AaW5jbHVkZSByZXNwb25zaXZlLWludmlzaWJpbGl0eSgnLnZpc2libGUtbWQnKTtcbkBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcudmlzaWJsZS1sZycpO1xuXG4udmlzaWJsZS14cy1ibG9jayxcbi52aXNpYmxlLXhzLWlubGluZSxcbi52aXNpYmxlLXhzLWlubGluZS1ibG9jayxcbi52aXNpYmxlLXNtLWJsb2NrLFxuLnZpc2libGUtc20taW5saW5lLFxuLnZpc2libGUtc20taW5saW5lLWJsb2NrLFxuLnZpc2libGUtbWQtYmxvY2ssXG4udmlzaWJsZS1tZC1pbmxpbmUsXG4udmlzaWJsZS1tZC1pbmxpbmUtYmxvY2ssXG4udmlzaWJsZS1sZy1ibG9jayxcbi52aXNpYmxlLWxnLWlubGluZSxcbi52aXNpYmxlLWxnLWlubGluZS1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtdmlzaWJpbGl0eSgnLnZpc2libGUteHMnKTtcbn1cbi52aXNpYmxlLXhzLWJsb2NrIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuLnZpc2libGUteHMtaW5saW5lIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLXhzLWlubGluZS1ibG9jayB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXhzLW1heCkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc20tbWF4KSB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtdmlzaWJpbGl0eSgnLnZpc2libGUtc20nKTtcbn1cbi52aXNpYmxlLXNtLWJsb2NrIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbS1tYXgpIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1zbS1pbmxpbmUge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1zbS1pbmxpbmUtYmxvY2sge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQtbWF4KSB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtdmlzaWJpbGl0eSgnLnZpc2libGUtbWQnKTtcbn1cbi52aXNpYmxlLW1kLWJsb2NrIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1tZC1tYXgpIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1tZC1pbmxpbmUge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLW1kLW1heCkge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1tZC1pbmxpbmUtYmxvY2sge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLW1kLW1heCkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLXZpc2liaWxpdHkoJy52aXNpYmxlLWxnJyk7XG59XG4udmlzaWJsZS1sZy1ibG9jayB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLWxnLWlubGluZSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1sZy1pbmxpbmUtYmxvY2sge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi14cy1tYXgpIHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy5oaWRkZW4teHMnKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbS1tYXgpIHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy5oaWRkZW4tc20nKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1tZC1tYXgpIHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy5oaWRkZW4tbWQnKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcuaGlkZGVuLWxnJyk7XG59XG5cblxuLy8gUHJpbnQgdXRpbGl0aWVzXG4vL1xuLy8gTWVkaWEgcXVlcmllcyBhcmUgcGxhY2VkIG9uIHRoZSBpbnNpZGUgdG8gYmUgbWl4aW4tZnJpZW5kbHkuXG5cbi8vIE5vdGU6IERlcHJlY2F0ZWQgLnZpc2libGUtcHJpbnQgYXMgb2YgdjMuMi4wXG5cbkBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcudmlzaWJsZS1wcmludCcpO1xuXG5AbWVkaWEgcHJpbnQge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLXZpc2liaWxpdHkoJy52aXNpYmxlLXByaW50Jyk7XG59XG4udmlzaWJsZS1wcmludC1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblxuICBAbWVkaWEgcHJpbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLXByaW50LWlubGluZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblxuICBAbWVkaWEgcHJpbnQge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1wcmludC1pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIHByaW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgcHJpbnQge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLWludmlzaWJpbGl0eSgnLmhpZGRlbi1wcmludCcpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QWlDQUEsNEVBQTRFO0FBUTVFLEFBQUEsSUFBSSxDQUFDO0VBQ0gsV0FBVyxFQUFFLFVBQVU7RUFDdkIsb0JBQW9CLEVBQUUsSUFBSTtFQUMxQix3QkFBd0IsRUFBRSxJQUFJLEdBQy9COztBQU1ELEFBQUEsSUFBSSxDQUFDO0VBQ0gsTUFBTSxFQUFFLENBQUMsR0FDVjs7QUFZRCxBQUFBLE9BQU87QUFDUCxBQUFBLEtBQUs7QUFDTCxBQUFBLE9BQU87QUFDUCxBQUFBLFVBQVU7QUFDVixBQUFBLE1BQU07QUFDTixBQUFBLE1BQU07QUFDTixBQUFBLE1BQU07QUFDTixBQUFBLE1BQU07QUFDTixBQUFBLElB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 */", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "h1 {\n  color: #000; }\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js!../resolve-url-loader/index.js!../sass-loader/lib/loader.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"useCustomIconFontPath\":false,\"extractStyles\":false,\"styleLoaders\":[\"style\",\"css\",\"sass\"],\"styles\":[\"mixins\",\"normalize\",\"print\",\"scaffolding\",\"type\",\"code\",\"grid\",\"tables\",\"forms\",\"buttons\",\"component-animations\",\"dropdowns\",\"button-groups\",\"input-groups\",\"navs\",\"navbar\",\"breadcrumbs\",\"pagination\",\"pager\",\"labels\",\"badges\",\"jumbotron\",\"thumbnails\",\"alerts\",\"progress-bars\",\"media\",\"list-group\",\"panels\",\"wells\",\"responsive-embed\",\"close\",\"modals\",\"tooltip\",\"popovers\",\"carousel\",\"utilities\",\"responsive-utilities\"],\"scripts\":[\"transition\",\"alert\",\"button\",\"carousel\",\"collapse\",\"dropdown\",\"modal\",\"tooltip\",\"popover\",\"scrollspy\",\"tab\",\"affix\"],\"configFilePath\":\"/Users/ross/Documents/projects-ross/wa/react-ross/reactjs/.bootstraprc\",\"bootstrapPath\":\"/Users/ross/Documents/projects-ross/wa/react-ross/reactjs/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!./no-op.js", function() {
			var newContent = require("!!../css-loader/index.js!../resolve-url-loader/index.js!../sass-loader/lib/loader.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"useCustomIconFontPath\":false,\"extractStyles\":false,\"styleLoaders\":[\"style\",\"css\",\"sass\"],\"styles\":[\"mixins\",\"normalize\",\"print\",\"scaffolding\",\"type\",\"code\",\"grid\",\"tables\",\"forms\",\"buttons\",\"component-animations\",\"dropdowns\",\"button-groups\",\"input-groups\",\"navs\",\"navbar\",\"breadcrumbs\",\"pagination\",\"pager\",\"labels\",\"badges\",\"jumbotron\",\"thumbnails\",\"alerts\",\"progress-bars\",\"media\",\"list-group\",\"panels\",\"wells\",\"responsive-embed\",\"close\",\"modals\",\"tooltip\",\"popovers\",\"carousel\",\"utilities\",\"responsive-utilities\"],\"scripts\":[\"transition\",\"alert\",\"button\",\"carousel\",\"collapse\",\"dropdown\",\"modal\",\"tooltip\",\"popover\",\"scrollspy\",\"tab\",\"affix\"],\"configFilePath\":\"/Users/ross/Documents/projects-ross/wa/react-ross/reactjs/.bootstraprc\",\"bootstrapPath\":\"/Users/ross/Documents/projects-ross/wa/react-ross/reactjs/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!./no-op.js");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(3);
__webpack_require__(4);

$("h1").click(function () {});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);