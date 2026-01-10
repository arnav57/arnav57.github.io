---
title: ECE 3336 Example 4
tags:
  - ece3336
  - example
date: 2025-01-09
---
>[!example]
>Suppose we have a point charge $Q_1$ at $(1,3,0)$ with 37 $\mu \text{C}$, and another point charge $Q_2$ at $(0,0,2)$. What is the electric force $\vec{F_{12}}$?

---
Lets start by determining our position vectors to each point.
- $\vec{r_{1}} =(1,3,0)$
- $\vec{r_{2}}=(0,0,2)$

Using [[Coulombs Force Law]], we know we need to calculate the squared distance, as well as the unit vector $\hat{R_{12}}$. we can start with that.

The squared distance is just the squared magnitude of $\vec{r_{2}} -  \vec{r_{1}}$, since we are in cartesian this is quite simple.

$$
|R_{12}|^2 = 1^2 + 3^2 + 2^2 = 13
$$
The unit vector $\hat{R_{12}}$ is also easily calculable now
$$
\hat{R_{12}} = \frac{\vec{r_{2}} - \vec{r_{1}}}{|R_{12}|} = \frac{(-1, -3, 2)}{\sqrt{13 }}
$$

We can then plug these values into coulombs law to get the force.