---
title: ECE 3336 Lecture 2
tags:
  - ece3336
  - lecture
date: 2025-01-08
---
---
# Coulomb's Law

[[Coulombs Force Law|Coulombs Law]] is the governing law for how any charges interact with each other. Its also sometimes referred to as **Coulombs Force Law**, or the **Law of Action**.

This law states that the Electric Force on any two point charges $Q_1$ and $Q_2$ is proportional to the amount of charge on each point, and the square distance between these two point charges.

We can represent the electric force as a [[Vector|vector]] quantity with direction and magnitude. To see how this looks lets consider the basic vector case with two point charges.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  % 1. The Origin O
  \draw[white, thick] (0,0) circle (0.05);
  \node[white, below left] at (0,0) {Origin};
  % Small axis markers
  \draw[->, white, thin] (0,0) -- (0.5, 0);
  \draw[->, white, thin] (0,0) -- (0, 0.5);

  % 2. Charge Q1 (Top Left)
  \draw[white, thick, fill=black] (2, 4) circle (0.3);
  \node[white] at (2, 4) {+};
  \node[white, above] at (2, 4.4) {$P_1$};
  \node[white, right] at (2.4, 4) {$Q_1$};

  % 3. Charge Q2 (Bottom Right)
  \draw[white, thick, fill=black] (6, 2.5) circle (0.3);
  \node[white] at (6, 2.5) {+};
  \node[white, above] at (6, 2.9) {$P_2$};
  \node[white, right] at (6.4, 2.5) {$Q_2$};

  % 4. Position Vectors (r1, r2)
  % r1: Origin to Q1
  \draw[->, white, thick] (0.1, 0.1) -- (1.8, 3.8);
  \node[white, left] at (1, 2) {$\overrightarrow{r}_1$};

  % r2: Origin to Q2
  \draw[->, white, thick] (0.1, 0.1) -- (5.7, 2.4);
  \node[white, below] at (3, 1.2) {$\overrightarrow{r}_2$};

  % 5. Displacement Vector R
  % From Q1 surface to Q2 surface
  \draw[->, white, thick] (2.3, 3.9) -- (5.7, 2.6);
  \node[white, above] at (4, 3.3) {$\overrightarrow{R}$};

  % 6. Forces (F12, F21)
  % Force on Q2 (Pushing away to the right)
  \draw[->, white, very thick] (6.3, 2.4) -- (8, 1.8);
  \node[white, right] at (8, 1.8) {$\overrightarrow{F}_{12}$};

  % Force on Q1 (Pushing away to the left)
  \draw[->, white, very thick] (1.7, 4.1) -- (0, 4.7);
  \node[white, left] at (0, 4.7) {$\overrightarrow{F}_{21}$};

\end{tikzpicture}
\end{document}
```
In this case we define the electric force as $F_{12}$ which means *the force of point charge 1, on point charge 2*. We can calculate the vector quantity as shown below

$$
F_{12} = k \cdot \frac{Q_{1}Q_{2}}{|R|^2} \cdot \hat{R}
$$
Note that $k$ is the [[Proportionality Constant|proportionality constant]], here it represents the permittivity of the medium these charges are inside. More specifically we can define the **permittivity of free space** as $\epsilon_{0}$ and the **relative permittivity** as $\epsilon_{r}$. Note that in free space $\epsilon_{r} = 1$.
$$
k = \frac{1}{4\pi\epsilon_{0}\epsilon_{r}}
$$

# Examples

In this lecture the following examples were done:
- [[Example 2]]
- [[Example 3]]
