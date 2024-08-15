import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { readFileSync } from 'fs';
import _typescript from 'typescript';
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            interop: 'auto',
            esModule: true,
        },
        {
            file: pkg.module,
            format: 'es',
            compact: true,
        },
    ],
    plugins: [
        resolve(),
        commonjs({
            include: /node_modules/,
        }),
        typescript({
            typescript: _typescript,
            sourceMap: false,
        }),
    ],
};
