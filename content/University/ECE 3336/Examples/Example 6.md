---
title: ECE 3336 Example 6
tags:
  - ece3336
  - example
date: 2025-01-09
---
---
>[!example]
>If a charge $Q_1$ is at (-1, 0) with 2 nC of charge, and another charge $Q_2$ is at (+1, 0) with 1 nC of charge, where do we place a test-charge $Q_x$ with 1nC of charge such that it experiences no net force?

---

The kicker here is that we need to realize that all three charges must be colinear in order for the middle one to experience no force in the y-direction. Picking how close it is to each charge is solvable through expressing the forces in either direction equal but opposite in magnitude, we dont care about direction here, just magnitudes.

$$
F_{1x} + F_{2x} = 0
$$
We start by writing out $|F_{1x}|$ and $|F_{2x}|$

$$
|F_{1x}| = \frac{kQ_{1}Q_{x}}{R_{1x}} = \frac{kQ_{2}Q_{x}}{(1-x)^2}
$$
$$
|F_{2x}| = \frac{kQ_{2}Q_{x}}{R_{2x}} = \frac{kQ_{1}Q_{x}}{(x-1)^2}
$$
Then we simply solve for $x$ to get our answer!