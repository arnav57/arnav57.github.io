---
title: ECE 3336 Lecture 1
date: 2025-01-08
tags:
  - ece3336
  - lecture
---
---
# Electrostatics

Electrostatics deals with the study of [[Electric Charge]] at rest, it deals with other mathematical formulations created from [[Coulombs Force Law]]. 

Some applications of electrostatics are:
- Spray Painting
- Nanoscale element sorting
- Inkjet Printers
- Capacitances in circuits

# Electric Charge

A long time ago people much smarter than me did a bunch of experiments to verify that electric charges exist, and to figure out the general way that they behave. They saw that these charges result in **friction**, that these charges can be **induced**, and they these charges can be **conducted**

These experiments eventually resulted in [[Faraday's Gold Foil Experiment]]. Which helped to understand how charges interact with each other, mainly the items below:
- There are two **types** of charge (positive, and negative)
- The **amount** of charge matters
- The **distance** between charges also matters

We learned that there is a fundamental building blocks of electric charge, called the [[Proton]], and [[Electron]], which means that technically all electric charge is **quantized** by integer amounts of the charges of a proton and electron, which will be denoted as $q^+$ and  $q^-$ respectively.

This means that we can define the net charge $N$ as shown below

$$
N = N^+ q^+ - N^- q^- = (N^+ - N^-) \cdot |q|
$$

This equation shows that if the number of positive charge elements (protons), $N^+$ is greater than the number of negative charge elements (electrons), $N^-$. Our object has a net positive charge. In the opposite case we have a net negative charge. However it is also possible to have a net neutral charge if $N^+ = N^-$.

Next we will be going through mathematically formulating equations and tools we can use to work with electric charges. Note that even though charges are discrete in nature, we assume that they are continuous values going forward.

## Point Charges

In order to build up to more useful things, we must start at the 0-dimensional case, where we have a single point that takes up no svolume, that features some charge in this infinitely small location. This is called a **point charge**. We define a point charge with a location and a quantity of charge. 

```tikz
\begin{document}
\begin{tikzpicture}
  % Define coordinates
  \coordinate (P1) at (0, 0);
  \coordinate (P2) at (3, 0);

  % Draw points and labels
  \filldraw[fill=white, draw=black, thick] (P1) circle (10pt);
  \filldraw[fill=white, draw=black, thick] (P2) circle (10pt);

  % Draw the purple curved arrow
  \draw[->, thick, bend left=30] (P1) to (5, 2);
  \draw[->, thick, bend left=-40] (P2) to (5, -2);

  % Add the description text
  \node[right, fill=white] at (5, 2) {Some charge $Q_1$ occupying point $P_1$};
  \node[right, fill=white] at (5, -2) {Some charge $Q_2$ occupying point $P_2$};

\end{tikzpicture}
\end{document}
```

## Continuity of Charge

In order to eventually use calculus on these objects, we we ignore the discrete nature, and assume charge can be represented as a continuous value. With this we can say that net charge of an object $Q$, is basically the summation of individual **charge segments** $Q_k$

$$
Q = \sum_{k=1}^{N} Q_{k}
$$

## Line Charges

Using our point charges, we can create a 1D case of charge called the **line charge**, its essentially a bunch of point charges put infinitely close together such that it makes up a line. To start we can define a line segment $\ell$, with endpoints $\ell_1$ and $\ell_2$ holding a net charge $Q$. 

```tikz
\begin{document}
\begin{tikzpicture}
% Config
\def\len{6} 

% 1. The Line and Glow
% Simple opacity works in almost all versions
\draw[opacity=0.3, line width=4pt] (0,0) -- (\len,0);
\draw[thick] (0,0) -- (\len,0);

% 2. The Point Charges (The "dots")
\foreach \x in {0.2, 0.6, ..., 5.8} {
\fill[white] (\x, 0) circle (1.5pt);
}

% 3. Endpoints labels
\fill[] (0,0) circle (2pt) node[below=0.3cm, text=white] {$\ell_1$};
\fill[] (\len,0) circle (2pt) node[below=0.3cm, text=white] {$\ell_2$};

% 4. Top Label
\node[text=cyan!80, above=0.2cm] at (\len/2, 0) {Line Segment $\ell$};

% 5. The "Manual" Brace
% We draw the bracket using simple curves instead of the library
\draw[white, thick] (0,-0.8) -- (0,-0.9) to[out=270, in=180] (\len/2, -1.1) to[out=0, in=270] (\len,-0.9) -- (\len,-0.8);

% 6. Net Charge Label
\node[text=white, font=\large] at (\len/2, -1.5) {Net Charge $Q$};

\end{tikzpicture}
\end{document}

```
Then we can divide up this line into $N$ small segments indexed with the subscript $k$, $\Delta \ell_k$. Using continuity of charge we can then say each segment holds some charge $Q_k$. This means that we can formulate our complete line, and total charge as shown below

$$
\ell = \sum \Delta\ell_{k}
$$
$$
Q = \sum Q_{k}
$$
Now we want an infinite number of line segments, this will result in each segment becoming a point charge. When we take the limit, we see that our line segment $\Delta \ell_k$ becomes a differential line element $d\ell$. Thus we replace our sum with an integral and our new line formulation becomes

$$
\ell = \int d\ell
$$
We can do the same for charge, but instead of assuming the charge segments are uniformly distributed, we can say that that we have some arbitrary **Line Charge Density** $\rho_l$ which depends on the position vector $\vec{r}$ . Thus our total charge formulation also becomes an integral. Note that $\rho_{l}(\vec{r})$ has units of $\frac{\text{C}}{\text{m}}$

$$
Q = \int \rho_{l}(\vec{r}) \ d \ell
$$
## Surface Charges

Now we move onto the 2D case. We say that a **surface charge** is just some distribution of a net charge $Q$ onto some surface $S$. We can do this by splitting up our large surface into differential elements $dS$. 

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  % 1. Define the Blob Shape (Surface S)
  % We define this path once so we can use it for clipping AND drawing
  \def\blob{(3, 2) .. controls (2, 4) and (4, 5) .. (6, 4.5) 
             .. controls (7, 3) and (6, 1) .. (5, 1) 
             .. controls (4, 1.5) and (3.5, 1.5) .. (3, 2)}

  % 2. Draw the Purple Stripes (Manual Clipping)
  \begin{scope}
    \clip \blob; % Cut everything outside the blob
    % Draw simple slanted lines
    \foreach \y in {0, 0.5, ..., 6} {
       \draw[magenta, thin] (1, \y) -- (7, \y+1);
    }
  \end{scope}

  % 3. Draw the White Outline
  \draw[white, thick] \blob;
  \node[magenta] at (3, 4.8) {SURFACE S};

  % 4. Draw Origin (O)
  \draw[white, thick] (0,0) circle (0.1);
  \node[white, below=0.1cm] at (0,0) {O};
  % Simple rotation arrow
  \draw[->, white] (-0.3, 0.3) arc (135:45:0.4);

  % 5. Draw Vector r_k (Red)
  % Pointing to a specific spot inside the blob
  \draw[->, red, thick] (0.1, 0.1) -- (4.2, 2.8);
  \node[red, above, rotate=28] at (2, 1.5) {$\overrightarrow{r}_k$};

  % 6. Small Surface Element (Blue/Red)
  % The dot
  \fill[red] (4.2, 2.8) circle (0.08);
  
  % The Label
  \node[blue, right] at (4.5, 0.5) {$\Delta S_k$ (small surface)};
  \draw[->, blue, thick] (5.5, 0.8) to[out=90, in=-45] (4.3, 2.7);

\end{tikzpicture}
\end{document}
```
We also give this a charge distribution $\rho_s(\vec{r})$, but this time it has units of $\frac{\text{C}}{\text{m}^2}$. We can then write

$$
Q = \iint_{S} \rho_{s}(\vec{r}) \ dS
$$
## Volume Charges

Similarly, we can define a **volume charge** as a distribution of a net charge $Q$ onto some volume $V$, Splitting up our volume gives us some differential volume segment $dV$. 
```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  % 1. Define Volume V (The Blob)
  % Using standard curves instead of 'plot' for safety
  \draw[white, thick] (3, 2) to[out=90, in=180] (5, 5) 
                      to[out=0, in=90] (7, 3.5) 
                      to[out=-90, in=0] (5.5, 1) 
                      to[out=180, in=-90] (3, 2);

  % 2. Charge Density (Manual Dots)
  % Loops often fail in TikzJax, so we place these manually for safety.
  \fill[magenta] (3.5, 2.5) circle (0.05);
  \fill[magenta] (4.0, 4.0) circle (0.05);
  \fill[magenta] (4.5, 3.2) circle (0.05);
  \fill[magenta] (5.0, 4.5) circle (0.05);
  \fill[magenta] (5.5, 2.5) circle (0.05);
  \fill[magenta] (6.0, 3.8) circle (0.05);
  \fill[magenta] (6.2, 2.0) circle (0.05);
  \fill[magenta] (5.2, 1.8) circle (0.05);
  \fill[magenta] (4.2, 2.0) circle (0.05);
  \fill[magenta] (3.8, 3.5) circle (0.05);
  \fill[magenta] (4.8, 3.8) circle (0.05);
  \fill[magenta] (5.8, 3.0) circle (0.05);

  % Labels
  \node[magenta] at (3.2, 5.0) {Volume $V$};
  \node[magenta, font=\footnotesize] at (6.5, 1.5) {Charge $\rho$};

  % 3. The Origin O
  \draw[white, thick] (0,0) circle (0.1);
  \node[white, below] at (0,-0.1) {O};
  % Rotation arrow
  \draw[->, white] (-0.3, 0.3) arc (135:45:0.4);

  % 4. Vector r (Red)
  % Points to the center of our small cube
  \draw[->, red, thick] (0.1, 0.1) -- (5.0, 3.0);
  \node[red, above, rotate=25] at (2.5, 1.5) {$\overrightarrow{r}$};

  % 5. Small Volume Element (Red Cube)
  % Drawn manually face-by-face to look 3D
  
  % Front face
  \filldraw[red, draw=white] (5.0, 3.0) rectangle (5.4, 3.4);
  
  % Top face
  \filldraw[red!80!black, draw=white] (5.0, 3.4) -- (5.2, 3.6) -- (5.6, 3.6) -- (5.4, 3.4) -- cycle;
  
  % Side face
  \filldraw[red!60!black, draw=white] (5.4, 3.0) -- (5.6, 3.2) -- (5.6, 3.6) -- (5.4, 3.4) -- cycle;

  % 6. Label for Volume Element
  \node[blue, right] at (6.5, 0.5) {$\Delta V_k$ (small volume)};
  \draw[->, blue, thick] (6.5, 0.8) to[out=90, in=-45] (5.7, 3.0);

\end{tikzpicture}
\end{document}
```
Our charge distribution is now $\rho_{v}(\vec{r})$ with units of $\frac{\text{C}}{\text{m}^3}$. Our charge formulation becomes

$$
Q = \iiint_{V} \rho_{v}(\vec{r}) \ dV
$$

# Examples

In this lecture the following examples were done:
- [[University/ECE 3336/Examples/Example 1]]