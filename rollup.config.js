import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescriptPlugin from 'rollup-plugin-typescript2';

import pkg from './package.json';

const formats = ['cjs', 'esm', 'es'];

// Returns true for any dependency listed in package.json.
const isExternalModule = (() => {
  const deps = new Set(Object.keys(pkg.dependencies ?? {}));
  return id => deps.has(id);
})();

function makeConfig() {
  return {
    input: `src/index.ts`,
    output: formats.map(format => ({
      dir: `dist/${format}`,
      format,
      sourcemap: true
    })),
    external: isExternalModule,
    plugins: [
      commonjs(),
      nodeResolve(),
      typescriptPlugin()
    ]
  };
}

export default makeConfig();
