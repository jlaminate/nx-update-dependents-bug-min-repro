import typescript from '@rollup/plugin-typescript';
import _typescript from 'typescript';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

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
        resolve({ preferBuiltins: true }),
        commonjs({
            include: /node_modules/,
        }),
        typescript({
            typescript: _typescript,
            sourceMap: false,
        }),
    ],
};
