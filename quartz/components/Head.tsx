import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../plugins/emitters/ogImage"

export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    const socialUrl =
      fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug!)

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />

        {/* --- TIKZJAX LIBRARY --- */}
        <link rel="stylesheet" type="text/css" href="https://tikzjax.com/v1/fonts.css" />
<script dangerouslySetInnerHTML={{ __html: `
          // --- 1. LOADER LOGIC (Same as before) ---
          const loadTikzJax = async () => {
              if (window.tikzjax) return;
              
              // Wake up existing script if stuck
              const existingScript = document.querySelector('script[src*="tikzjax.js"]');
              if (existingScript) {
                  window.dispatchEvent(new Event('load'));
                  return waitForGlobal();
              }

              return new Promise((resolve, reject) => {
                  const script = document.createElement('script');
                  script.src = "https://tikzjax.com/v1/tikzjax.js";
                  script.type = "text/javascript";
                  script.defer = true;
                  script.onload = () => {
                      // Dispatch events to trick the library into starting
                      window.dispatchEvent(new Event('load'));
                      document.dispatchEvent(new Event('DOMContentLoaded'));
                      resolve(waitForGlobal());
                  };
                  script.onerror = reject;
                  document.head.appendChild(script);
              });
          };

          const waitForGlobal = () => {
              return new Promise((resolve) => {
                  let attempts = 0;
                  const interval = setInterval(() => {
                      attempts++;
                      if (window.tikzjax) {
                          clearInterval(interval);
                          resolve();
                      } else if (attempts > 20) { 
                          clearInterval(interval);
                          resolve(); // Give up and try anyway
                      }
                  }, 500); 
              });
          };

          // --- 2. CONVERSION LOGIC (Refactored) ---
          // This can now run on the whole page OR just a specific popover
          const convertTikzIn = (rootElement) => {
             // Find code blocks inside the specific root
             const tikzBlocks = rootElement.querySelectorAll('code[data-language="tikz"], code.language-tikz');
             
             if (tikzBlocks.length === 0) return false; // Nothing to do

             let foundNew = false;
             tikzBlocks.forEach(block => {
                // Prevent infinite loops or double-processing
                if (block.closest('.tikz-diagram')) return;

                const code = block.textContent;
                const script = document.createElement('script');
                script.type = 'text/tikz';
                script.textContent = code;
                
                const wrapper = document.createElement('div');
                wrapper.classList.add('tikz-diagram');
                wrapper.appendChild(script);

                const pre = block.parentElement;
                if (pre) {
                   if (pre.tagName === 'PRE') {
                      pre.replaceWith(wrapper);
                   } else if (pre.parentElement && pre.parentElement.tagName === 'FIGURE') {
                      pre.parentElement.replaceWith(wrapper);
                   } else {
                      block.replaceWith(wrapper);
                   }
                   foundNew = true;
                }
             });
             return foundNew;
          };

          // --- 3. THE POPOVER WATCHDOG (New!) ---
          const setupPopoverObserver = () => {
             const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                   mutation.addedNodes.forEach((node) => {
                      if (node instanceof HTMLElement) {
                         // Check if the new node IS a popover or CONTAINS one
                         if (node.classList.contains('popover') || node.querySelector('.popover')) {
                             // 1. Convert TikZ inside this new popover
                             const hasDiagrams = convertTikzIn(node);
                             
                             // 2. If we found diagrams, tell TikZJax to draw them
                             if (hasDiagrams && window.tikzjax) {
                                 // Small delay to ensure the popover is rendered in the DOM
                                 setTimeout(() => window.tikzjax.process(), 50);
                             }
                         }
                      }
                   });
                });
             });
             
             // Watch the body for new popovers
             observer.observe(document.body, { childList: true, subtree: true });
          };

          // --- 4. MAIN EXECUTION ---
          const processTikz = async () => {
             convertTikzIn(document);
             try {
                 await loadTikzJax();
                 if (window.tikzjax) window.tikzjax.process();
             } catch (e) { console.error(e); }
          }

          // Listeners
          document.addEventListener('DOMContentLoaded', () => {
             processTikz();
             setupPopoverObserver(); // Start the watchdog
          });

          document.addEventListener('nav', () => {
             setTimeout(processTikz, 200);
             // Note: The observer stays alive across navigations because it's on document.body,
             // but if Quartz wipes body, we might need to re-attach. 
             // Just in case, we can call setupPopoverObserver() again safely 
             // (assignment creates a new one, old one gets GC'd if detached).
             setupPopoverObserver(); 
          });
        `}} />
        
        {/* --- STYLES --- */}
        <style dangerouslySetInnerHTML={{ __html: `
          .tikz-diagram {
            display: flex;
            text-align: center;
            justify-content: center;
            margin: 1.5rem 0;
            width: 100%;
            min-height: 50px;
            overflow-x: auto;
          }
          .tikz-diagram path, .tikz-diagram rect, .tikz-diagram circle {
             stroke: black;
             fill: none;
             stroke-width: 1.2px;
          }
          .tikz-diagram text {
             fill: black;
             stroke: none;
             font-family: inherit;
          }
          .tikz-diagram [fill="white"] {
             fill: white !important;
             stroke: black;
          }
          html[data-theme="dark"] .tikz-diagram path,
          html[data-theme="dark"] .tikz-diagram rect,
          html[data-theme="dark"] .tikz-diagram circle,
          :root[saved-theme="dark"] .tikz-diagram path {
             stroke: white;
          }
          html[data-theme="dark"] .tikz-diagram text,
          :root[saved-theme="dark"] .tikz-diagram text {
             fill: white;
          }
          html[data-theme="dark"] .tikz-diagram [fill="white"],
          :root[saved-theme="dark"] .tikz-diagram [fill="white"] {
             fill: #161618 !important;
             stroke: white;
          }
          @media (prefers-color-scheme: dark) {
             :root[saved-theme="auto"] .tikz-diagram path { stroke: white; }
             :root[saved-theme="auto"] .tikz-diagram text { fill: white; }
             :root[saved-theme="auto"] .tikz-diagram [fill="white"] { 
                 fill: #161618 !important; 
                 stroke: white;
             }
          }
        `}} />

        <script dangerouslySetInnerHTML={{ __html: `
          const processTikz = async () => {
             // 1. Performance: Yield to the browser first
             // This ensures the slide animation finishes BEFORE we do heavy work.
             await new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 200)));

             const tikzBlocks = document.querySelectorAll('code[data-language="tikz"], code.language-tikz');
             if (tikzBlocks.length === 0) return;

             // 2. Convert blocks (Fast DOM check first)
             let needsRender = false;
             tikzBlocks.forEach(block => {
                if (block.closest('.tikz-diagram')) return;

                const code = block.textContent;
                const script = document.createElement('script');
                script.type = 'text/tikz';
                script.textContent = code;
                
                const wrapper = document.createElement('div');
                wrapper.classList.add('tikz-diagram');
                wrapper.appendChild(script);

                const pre = block.parentElement;
                if (pre && pre.parentNode) {
                   // Replace logic
                   if (pre.tagName === 'PRE') {
                      if (pre.parentElement?.tagName === 'FIGURE') {
                          pre.parentElement.replaceWith(wrapper);
                      } else {
                          pre.replaceWith(wrapper);
                      }
                   } else {
                      block.replaceWith(wrapper);
                   }
                   needsRender = true;
                }
             });

             if (!needsRender) return;

             // 3. Load Library (Only if needed)
             if (!window.tikzjax) {
                 const script = document.createElement('script');
                 script.src = "https://tikzjax.com/v1/tikzjax.js";
                 script.type = "text/javascript";
                 script.defer = true;
                 document.head.appendChild(script);
                 // We don't wait here; we let it load naturally to avoid freezing the main thread
                 return;
             }

             // 4. Render (Low Priority)
             // We use requestIdleCallback if available, or a timeout to run this
             // when the CPU is effectively idle.
             const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 50));
             idleCallback(() => {
                 if (window.tikzjax) window.tikzjax.process();
             });
          }

          document.addEventListener('DOMContentLoaded', processTikz);
          
          // The 'nav' event is where the stutter happens.
          // We intentionally don't run immediately.
          document.addEventListener('nav', () => {
             processTikz();
          });
        `}} />

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor