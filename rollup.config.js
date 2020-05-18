import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/recoil-persist.js',
    output: {
        file: 'dist/recoil-persist.js',
        format: 'cjs',
        exports: 'named',
    },
    external: ['react'],
    plugins: [
        babel({
            presets: [
                '@babel/preset-react',
                '@babel/preset-flow'
            ],
            plugins: [
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-proposal-class-properties'
            ],
            babelHelpers: 'bundled',
        }),
        {
            resolveId: (source) => {
                if (source === 'React') {
                    return { id: 'react', external: true };
                }
                return null;
            }
        },
        nodeResolve(),
        commonjs(),
    ],
};
