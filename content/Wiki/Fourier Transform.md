---
title: Fourier Transform
---
The Fourier Transform is a mathematical transformation that involves mapping functions of the **time** ($t$) domain, into functions of the **frequency** ($\omega$) domain. 

$$
f(t) \mapsto F(\omega )
$$
Intuitively this means that we are essentially decomposing a function of time, into its oscillatory components.

The mapping from $t$ to $\omega$ is:
$$
F(\omega) = \int_{-\infty}^{\infty} f(t) \cdot e^{-j\omega t} \ dt
$$
The mapping from $\omega$ to $t$ is:
$$
f(t) = \frac{1}{2\pi j} \int_{-\infty}^{\infty}F(\omega) \cdot e^{j\omega t} \ d\omega
$$
Intuitively this means that we are essentially decomposing a function of time, into its oscillatory components (similar to the [[Laplace Transform]]). Except this time we DO NOT allow these oscillations to be exponentially damped, or exponentially growing.