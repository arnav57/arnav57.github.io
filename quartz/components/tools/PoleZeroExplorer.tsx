import { useEffect, useRef } from "preact/hooks"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// We load JSXGraph from CDN to avoid complex build configurations for a single component
// If you prefer npm: import JXG from 'jsxgraph' and include css in your global styles.

const PoleZeroExplorer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
      const boxRef = useRef<HTMLDivElement>(null)
      const boardRef = useRef<any>(null)

      useEffect(() => {
        if (!boxRef.current || typeof window === "undefined") return

        // Dynamic import logic or check if JXG is available
        // For simplicity in Quartz, we can inject the script/css or assume it's loaded.
        // Ideally, add the CDN links to your head.tsx, but here is a self-contained loader:
        
        const loadLib = async () => {
          if (!(window as any).JXG) {
            await new Promise((resolve) => {
              const script = document.createElement("script")
              script.src = "https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"
              script.onload = resolve
              document.head.appendChild(script)
              
              const link = document.createElement("link")
              link.rel = "stylesheet"
              link.href = "https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css"
              document.head.appendChild(link)
            })
          }
          initGraph()
        }

        const initGraph = () => {
            const JXG = (window as any).JXG
            
            // Prevent double initialization
            if (boardRef.current) JXG.JSXGraph.freeBoard(boardRef.current)

            // Initialize Board (S-Plane on Left, Time Domain on Right)
            const board = JXG.JSXGraph.initBoard(boxRef.current!.id, {
                boundingbox: [-5, 2, 8, -2], 
                axis: true,
                showCopyright: false,
                pan: { enabled: false },
                zoom: { enabled: false }
            })
            boardRef.current = board

            // --- VISUAL SETUP ---
            // Divider line between S-Plane and Time Domain
            board.create('line', [[1.5, -10], [1.5, 10]], { strokeColor: 'black', strokeWidth: 1, dash: 2, fixed:true })
            board.create('text', [-2, 1.8, "S-Plane (Drag Red X)"], { fontSize: 16, anchorX:'middle' })
            board.create('text', [5, 1.8, "Step Response"], { fontSize: 16, anchorX:'middle' })

            // --- S-PLANE CONTROLS ---
            // The Pole (User Draggable)
            const p1 = board.create('point', [-1, 1], { 
                name: 'x', style: 5, color: 'red', size: 5, 
                label: { offset: [5, 5] }
            })

            // The Conjugate (Follower)
            board.create('point', [
                () => p1.X(), 
                () => -p1.Y() 
            ], { 
                name: 'x*', style: 5, color: 'red', size: 5, fixed: true, opacity: 0.6 
            })

            // Damping Line (Visual Aid)
            board.create('segment', [[0,0], p1], { strokeColor: '#aaa', dash: 2 })

            // --- MATH LOGIC ---
            const getStepResponse = (t: number) => {
                // Offset time so the graph starts at x = 2 on our canvas
                const t_start = 2
                const time = t - t_start
                
                if (time < 0) return 0

                // Physics
                const sigma = -p1.X() // Real part (Decay rate)
                const omega_d = p1.Y() // Imaginary part (Oscillation freq)
                
                // Limit to valid Left Half Plane for sanity
                if (sigma < 0) return 0 // Unstable (could show explosion if you want!)

                // Case 1: Real Axis (Overdamped/First order-ish)
                if (Math.abs(omega_d) < 0.1) {
                     return 1 - Math.exp(-sigma * time) * (1 + sigma * time)
                }

                // Case 2: Underdamped Second Order
                const omega_n = Math.sqrt(sigma*sigma + omega_d*omega_d)
                const zeta = sigma / omega_n
                
                const A = Math.exp(-zeta * omega_n * time) / Math.sqrt(1 - zeta*zeta)
                const B = Math.sin(omega_n * Math.sqrt(1 - zeta*zeta) * time + Math.acos(zeta))
                
                return 1 - A * B
            }

            // --- TIME DOMAIN PLOT ---
            board.create('functiongraph', [getStepResponse, 2, 8], {
                strokeColor: '#0074D9', strokeWidth: 3
            })
        }

        loadLib()
        
        // Cleanup on unmount
        return () => {
            if (boardRef.current && (window as any).JXG) {
                (window as any).JXG.JSXGraph.freeBoard(boardRef.current)
            }
        }
      }, [])

      return (
        <div className={displayClass}>
          <div 
            id="pole-zero-board" 
            ref={boxRef} 
            style={{ width: "100%", height: "400px", border: "1px solid #ccc", borderRadius: "8px", background: "white" }} 
          />
          <p style={{ textAlign: "center", fontSize: "0.9em", color: "#666" }}>
            Move the <b>Red X</b>. Left/Right = Speed. Up/Down = Oscillation.
          </p>
        </div>
      )
    }

    export default ((opts?: any) => PoleZeroExplorer) satisfies QuartzComponentConstructor