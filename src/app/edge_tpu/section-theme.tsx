'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function SectionTheme() {
  const pathname = usePathname();

  useEffect(() => {
    // Grabs "architecture" from "/edge_tpu/architecture/data-flow"
    const match = pathname.match(/^\/edge_tpu\/([^/]+)/);
    document.documentElement.dataset.section = match?.[1] ?? '';
  }, [pathname]);

  return null; // renders nothing, just sets the attribute
}