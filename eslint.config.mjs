import globals from "globals";
import parser from "@babel/eslint-parser";
import importPlugin from "eslint-plugin-import";
import specificSortPlugin from "eslint-plugin-specific-sort";
import sortClassMembers from "eslint-plugin-sort-class-members";

export default [
	{
		ignores: [
			"*.sublime-project",
			"*.sublime-workspace",
			"npm-debug.log",
			"node_modules/",
			"**/node_modules/**",
			".eslint-rules/",
			"node_modules/**",
			".idea",
			"test/spec/output.docx",
			"/output.docx",
			"tags",
			"/docs/build",
			"*.spec.js",
			"*.spec.map",
			"*.log",
			"/js",
			"es6/tests/filenames.js",
			"es6/tests/__snapshots.js",
			"/build",
			"/browser",
			"/browser-demo",
			"examples/index.html",
			"*.es5",
			".babel.json",
			"browser/",
			"build/",
			"vendor/",
			"js/",
			"test/",
			"coverage/",
			"prof/",
			".git",
			"text.js",
		],
	},
	{
		languageOptions: {
			parserOptions: {
				ecmaVersion: 7,
			},
			parser,
			globals: {
				Uint8Array: true,
				saveAs: true,
				Promise: true,
				Proxy: true,
				PizZipUtils: true,
				ArrayBuffer: true,
				...globals.node,
				...globals.browser,
				...globals.mocha,
			},
		},
		plugins: {
			import: importPlugin,
			"specific-sort": specificSortPlugin,
			"sort-class-members": sortClassMembers,
		},
		rules: {
			"sort-class-members/sort-class-members": [
				2,
				{
					order: [
						"constructor",
						"name",
						"optionsTransformer",
						"set",
						"on",
						"getFileType",
						"getRenderedMap",
						"preparse",
						"matchers",
						"parse",
						"postparse",
						"getTraits",
						"postparse",
						"resolve",
						"render",
					],
				},
			],
			"specific-sort/specific-sort": 2,
			"accessor-pairs": 2,
			"array-bracket-spacing": [2, "never"],
			"arrow-parens": 0,
			"arrow-spacing": [2, { before: true, after: true }],
			"block-scoped-var": 2,
			"block-spacing": [2, "always"],
			"brace-style": 0,
			"callback-return": 2,
			camelcase: [2, { properties: "never" }],
			"comma-dangle": [
				2,
				{
					functions: "never",
					arrays: "only-multiline",
					objects: "only-multiline",
					imports: "only-multiline",
					exports: "only-multiline",
				},
			],
			"comma-spacing": [2, { before: false, after: true }],
			"comma-style": [2, "last"],
			complexity: [2, 15],
			"computed-property-spacing": [2, "never"],
			"consistent-return": 0,
			"consistent-this": [2, "self"],
			"constructor-super": 2,
			curly: [2, "all"],
			"default-case": 0,
			"import/no-cycle": 2,
			"import/no-unresolved": 2,
			"import/extensions": [2, "always"],
			"dot-location": [2, "property"],
			"dot-notation": 2,
			"eol-last": 2,
			eqeqeq: [2, "smart"],
			"func-names": 0,
			"func-style": [2, "declaration"],
			"generator-star-spacing": [2, { before: false, after: true }],
			"global-require": 0,
			"guard-for-in": 2,
			"handle-callback-err": 2,
			"id-length": 0,
			"id-match": 0,
			"init-declarations": 0,
			"key-spacing": [
				2,
				{ beforeColon: false, afterColon: true, mode: "strict" },
			],
			"linebreak-style": 0,
			"lines-around-comment": 0,
			"max-nested-callbacks": 0,
			"new-cap": [
				2,
				{
					newIsCapExceptions: [
						"Boom.badRequest",
						"Boom.forbidden",
						"Boom.unauthorized",
						"Boom.wrap",
					],
					capIsNewExceptions: ["squeeze.Squeeze"],
				},
			],
			"new-parens": 2,
			"newline-after-var": 0,
			"no-alert": 2,
			"no-array-constructor": 2,
			"no-caller": 2,
			"no-catch-shadow": 0,
			"no-class-assign": 2,
			"no-console": 2,
			"no-const-assign": 2,
			"no-constant-condition": [2, { checkLoops: false }],
			"no-continue": 0,
			"no-control-regex": 0,
			"no-debugger": 2,
			"no-delete-var": 2,
			"no-div-regex": 2,
			"no-dupe-args": 2,
			"no-dupe-class-members": 2,
			"no-dupe-keys": 2,
			"no-duplicate-case": 2,
			"no-else-return": 2,
			"no-empty": 2,
			"no-empty-character-class": 2,
			"no-eval": 2,
			"no-ex-assign": 2,
			"no-extend-native": 2,
			"no-extra-bind": 2,
			"no-extra-boolean-cast": 2,
			"no-extra-parens": [2, "functions"],
			"no-extra-semi": 2,
			"no-fallthrough": 2,
			"no-floating-decimal": 2,
			"no-func-assign": 2,
			"no-implicit-coercion": 0,
			"no-implied-eval": 2,
			"no-inline-comments": 0,
			"no-inner-declarations": 2,
			"no-invalid-regexp": 2,
			"no-irregular-whitespace": 2,
			"no-iterator": 2,
			"no-label-var": 2,
			"no-labels": 0,
			"no-lone-blocks": 2,
			"no-lonely-if": 2,
			"no-loop-func": 2,
			"no-mixed-requires": 2,
			"no-mixed-spaces-and-tabs": 0,
			"no-multi-spaces": 2,
			"no-multi-str": 2,
			"no-multiple-empty-lines": [2, { max: 1 }],
			"no-native-reassign": 2,
			"no-negated-in-lhs": 2,
			"no-new": 2,
			"no-new-func": 2,
			"no-new-object": 2,
			"no-new-require": 2,
			"no-new-wrappers": 2,
			"no-obj-calls": 2,
			"no-octal": 2,
			"no-octal-escape": 2,
			"no-param-reassign": 0,
			"no-path-concat": 2,
			"no-process-env": 2,
			"no-process-exit": 2,
			"no-proto": 2,
			"no-redeclare": 2,
			"no-regex-spaces": 2,
			"no-restricted-modules": 0,
			"no-restricted-syntax": 0,
			"no-return-assign": 0,
			"no-script-url": 2,
			"no-self-compare": 2,
			"no-sequences": 2,
			"no-shadow": 0,
			"no-shadow-restricted-names": 2,
			"no-spaced-func": 2,
			"no-sparse-arrays": 2,
			"no-ternary": 0,
			"no-this-before-super": 2,
			"no-throw-literal": 2,
			"no-trailing-spaces": 2,
			"no-undef": 2,
			"no-undef-init": 0,
			"no-undefined": 0,
			"no-underscore-dangle": 0,
			"no-unexpected-multiline": 2,
			"no-unneeded-ternary": 2,
			"no-unreachable": 2,
			"no-unused-expressions": 2,
			"no-unused-vars": 2,
			"no-use-before-define": [2, "nofunc"],
			"no-useless-call": 2,
			"no-useless-concat": 2,
			"no-useless-escape": 2,
			"no-var": 2,
			"no-void": 2,
			"no-warning-comments": [
				2,
				{ terms: ["todo", "fixme"], location: "anywhere" },
			],
			"no-with": 2,
			"object-curly-spacing": 0,
			"object-shorthand": 2,
			"one-var": 0,
			"operator-assignment": [2, "always"],
			"operator-linebreak": 0,
			"padded-blocks": [2, "never"],
			"prefer-arrow-callback": 0,
			"prefer-const": 2,
			"prefer-destructuring": [
				2,
				{
					AssignmentExpression: {
						array: true,
						object: false,
					},
				},
			],
			"prefer-reflect": 0,
			"prefer-spread": 0,
			"prefer-template": 0,
			quotes: [2, "double", { avoidEscape: true }],
			"quote-props": [2, "as-needed"],
			radix: 2,
			"require-jsdoc": 0,
			"require-yield": 2,
			semi: [2, "always"],
			"semi-spacing": [2, { before: false, after: true }],
			"sort-vars": 0,
			"use-isnan": 2,
			"valid-jsdoc": 0,
			"valid-typeof": 2,
			"vars-on-top": 0,
			"wrap-iife": [2, "inside"],
			"wrap-regex": 0,
			yoda: [2, "never"],
		},
	},
];
