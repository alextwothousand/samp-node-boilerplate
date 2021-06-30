import path from "path";
import typescript from "rollup-plugin-typescript2";

import autoExternal from "rollup-plugin-auto-external";
import resolve from "@rollup/plugin-node-resolve";

import json from "@rollup/plugin-json";
import builtinModules from "builtin-modules";

import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

//import copy from "rollup-plugin-copy";
//import chalk from "chalk";

export default {
	input: path.join(__dirname, "source", "main.ts"),
	output: {
		file: path.join(__dirname, "dist", "main.bundle.js"),
		format: "esm"
	},

	external: [
		"samp",
		...builtinModules
	],

	plugins: [
		commonjs({ sourceMap: false }),
		typescript({
			tsconfig: path.join(__dirname, "../../", "tsconfig.json")
		}),
		autoExternal({
			builtins: false,
			dependencies: true,
			packagePath: path.join(__dirname, "../../", "package.json"),
			peerDependencies: false,
		}),
		resolve({
			preferBuiltins: true,
			extensions: [".ts", ".js", ".json"]
		}),
		json(),
		terser({
			mangle: false
		})
	]
};