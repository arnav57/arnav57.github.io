---
title: ECE 3336 Example 1
date: 2025-01-08
tags:
  - ece3336
  - example
---
---
>[!example]
>Consider a Cylinder with radius $r=3 \text{ cm}$. With a charge density that increases linearly from the middle of the cylinder to the edge. The edge has a charge density of 6 $\frac{\text{C}}{\text{m}^2}$.  

---

In order to solve this, we must first define our geometry using [[Cylindrical Coordinates|cylindrical coordinates]]. Here we have a complete cylinder with radius 3 cm, thus our integration domains become

$$
r \in \left[ 0, 0.03 \right]
$$
$$
\theta \in \left[0, 2\pi\right]
$$
The next thing to find is our surface charge density, which increases linearly from center to the edge. Thus this becomes
$$
\rho_{s}(r) = \frac{6}{0.03}r
$$

Then to find the total surface charge we setup the following integral

$$
\int_{0}^{2\pi} \int_{0}^{0.03} \rho_{s}(r) \ r \ dr \ d \theta
$$