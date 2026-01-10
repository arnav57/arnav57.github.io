---
title: ECE 3336 Lecture 3
tags:
  - ece3336
  - lecture
date: 2025-01-09
---
---

# The Electric Field

Previously we saw coulombs force law. Now we want to find some easier way to describe whats happening in a 3d space.

for simplicity we place a charge $q$ at the origin, now we place a charge $q'$ at some location $P$. Coulombs law tells us what happens, and what force the charge $q'$ experiences. It will experience

$$
F_{qq'} = \frac{k q q'}{r^2} \cdot \hat{R}
$$

Instead of thinking about it like this, we consider that each charge emits some electric field $E$, and any charge that is within this field will experience some force from the charge's field. This field has a unit of N/C or V/m

$$
E = \lim_{q' \rightarrow \,0} \frac{F_{qq'}}{q'} = \frac{kq}{r^2} \cdot \hat{R} 
$$

This allows us to find the force on a charge due to another charge by simply writing the following.

$$
F = Eq
$$

Now we defined this electric field in a region of space. This gives us an Electric field distribution

$$
E(\vec{r}) = \frac{kQ}{R^2} \cdot \hat{R}
$$

Note: x' y' z' are usually the coordinates of the charge that emits the field, non-primed coordinates are our variable coordinates that allow us to formulate the field distribution.

# Examples

In this lecture the following examples were done:
 - [[Example 4]]
 - [[Example 5]]
 - [[Example 6]]