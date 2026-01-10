---
title: Laplace Transform
---
---
The [[Laplace Transform]] is a mathematical transformation that involves mapping functions of the **time** ($t$) domain, into functions of the **complex frequency** ($s$) domain. 

$$
f(t) \mapsto F(s)
$$
The mapping from $t$ to $s$ is:
$$
F(s) = \int_{0}^{\infty} f(t) \cdot e^{-st} \ dt
$$
The mapping from $s$ to $t$ is:
$$
f(t) = \frac{1}{2\pi j} \int_{\sigma-j\infty}^{\sigma+j\infty}F(s) \cdot e^{st} \ ds
$$
Intuitively this means that we are essentially decomposing a function of time, into its oscillatory components (similar to the [[Fourier Transform]]). Except this time we allow these oscillations to be exponentially damped, or exponentially growing.