import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
	// browser-friendly UMD build
		input: 'src/index.ts',
        output: [{
            file: pkg.main,
            format: 'cjs'
        },{
            file: pkg.module,
            format: 'es'
        },{
            name: 'MultiCamera',
            file: pkg.browser,
            format: 'iife'
        }],
		plugins: [
            typescript({typescript: require('typescript')})
		]
};
