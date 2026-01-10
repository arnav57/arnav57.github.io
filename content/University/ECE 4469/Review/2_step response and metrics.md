---
title: Step Response, Metrics
tags:
  - ece4469
  - review
date: 2026-01-10
---
---
# The Step Response

The step response of a system is the output a system provides when the input is a step function. In terms of the s-domain we write the step response as $1 / s$. Thus our step output $Y(s)$ becomes:

$$
Y(s) = H(s) \cdot \frac{1}{s}
$$
$$
y(t) = \mathcal{L}^{-1} \{ \  Y(s) \  \}
$$
# Metrics

Analyzing the step response lets us come up with a few key metrics we can use to define the time-domain response of a system.
- Initial Speed, $v_{0}$
- Rise Time, $T_{r}$
- Settling Time, $T_{s}$
- Peak Time, $T_p$
- Overshoot, $O_{s}$

## Initial Speed, $v_0$

Represented as $v_0$, it can be found by finding the slope at $t=0$ of the step-response in the time domain. This gives us the initial speed of the system when a step response is applied.

$$
v_{0} = y'(0)
$$

## Rise Time, $T_{r}$

Represented as $T_r$, the rise time is defined as the time it takes the system to go from 10% to 90% of its final value
$$
T_{r} = t_{90} - t_{10}
$$
## Settling Time, $T_{s}$

Represented as $T_s$ the settling time is defined as the time it takes for the system to reach, and then stay within 2% of its final value.

## Peak Time, $T_p$

Represented as $T_p$ the peak time is deifned as the time it takes for the system to reach its peak value. This can be obtained as
$$
y'(T_{p}) = 0
$$

## Overshoot, $O_{s}$

Defined as the amount the system overshoots at the peak time, when compared to the final value.

$$
O_{s} = y(T_{p}) - y(\infty)
$$