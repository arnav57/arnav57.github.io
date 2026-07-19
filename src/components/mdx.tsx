import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

import { PESymbol } from './pe-symbol';
import { PESymbolHW } from './pe-symbol-hw'; 
import { SystolicArray } from './systolic-array';
import { Waveform } from './waveform';

import { Mermaid } from 'fumadocs-mermaid/ui';

import * as TabsComponents from 'fumadocs-ui/components/tabs';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    PESymbol,
    PESymbolHW,
    SystolicArray,
    Waveform,
    Mermaid,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
