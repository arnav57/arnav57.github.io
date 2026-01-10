---
title: Second Order Systems
tags:
  - ece4469
  - review
date: 2026-01-10
---
---
# Standard Form

The standard form of a second order system is shown below. Note that it depends on two different things, the **natural frequency**,  $\omega_{0}$ and the **damping factor**, $\zeta$

$$
H(s) = \frac{K}{s^2 + 2\zeta\omega_{0}s + \omega_{0}^2}
$$
The poles can be factored as the following:
$$
p_{1,\ 2} = -\zeta\omega_{0} \pm \omega_{0}\sqrt{ \zeta^2 - 1 }
$$
# Damping Regimes

The damping factor determines if the system is **underdamped**, **overdamped**, **critically damped** or **undamped**.
- When $\zeta = 0$ we get purely *complex* roots on the $\omega$ axis, (Undamped)
- When $\zeta = 1$, we get repeated *real* roots (Critically Damped)
- When $\zeta >1$, we get distinct *real* roots (Overdamped)
- When $\zeta < 1$ we get distinct *mixed* roots (Underdamped)

An undamped system oscillates indefinitely at frequency $\omega_{0}$, and is said to be marginally stable. It typically looks like this:

$$
H(s) = \frac{K}{s^2 + \omega_{0}^2}
$$
An underdamped system oscillates for a bit before settling to its final value, it basically features exponentially damped oscillations.

A critically damped system results in the fastest possible response without any overshoot, that a second order system can possibly provide. It features no oscillations in the output.

A overdamped system also results in no oscillations, but it features two time constants.

# Metrics

Some relevant metrics for second order systems are:
- Peak time
- Overshoot (in %)
- Settling time
- Rise Time

$$
T_{p} = \frac{\pi}{\omega_{0} \sqrt{ 1 - \zeta^2 }}
$$

$$
\%O_{s} = \exp\left( - \frac{\zeta \pi}{\sqrt{ 1 - \zeta^2 }} \right)
$$
$$
T_{s} \approx \frac{4}{\zeta \omega_{0}}
$$
$$
T_{r} \approx \frac{1.8}{\omega_{0}}
$$
