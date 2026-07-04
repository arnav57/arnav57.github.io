import { EdgeTpuSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { SectionTheme } from './section-theme';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={EdgeTpuSource.getPageTree()} {...baseOptions()}>
      <SectionTheme/>
      {children}
    </DocsLayout>
  );
}

