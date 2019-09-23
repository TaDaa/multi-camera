import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [{
        input: 'src/index.ts',
        output: [{
                file: pkg.main,
                format: 'cjs',
                sourcemap: 'inline'
        },{
                file: pkg.module,
                format: 'es',
                sourcemap: 'inline'
        },{
                name: 'multicamera',
                file: pkg.browser,
                format: 'umd',
                sourcemap: 'inline'
        },{
                name: 'multicamera',
                file: pkg.iife,
                format: 'iife',
                sourcemap: 'inline'
        }],
        plugins: [
                typescript({
                        typescript: require('typescript'),
                        tsconfig: 'tsconfig.json',
                        useTsconfigDeclarationDir: true
                })
        ]
}];
