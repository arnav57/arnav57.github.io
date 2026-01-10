---
title: The s-plane
tags:
  - ece4469
  - review
date: 2026-01-10
---
---
# The Laplace Transform

The [[Laplace Transform]] is a mathematical transformation that involves mapping functions of the **time** ($t$) domain, into functions of the **complex frequency** ($s$) domain. 

$$
f(t) \mapsto F(s)
$$
Intuitively this means that we are essentially decomposing a function of time, into its oscillatory components (similar to the [[Fourier Transform]]). Except this time we allow these oscillations to be exponentially damped, or exponentially growing. Mathematically this means we have two degrees of freedom to decompose our function into.
- Oscillation frequency, $\omega$
- Exponential Decay/Growth, $\sigma$

Thus we write the complex frequency $s$ as:
$$
s = \sigma + j \omega 
$$
# The $s$-plane

We define the Laplace transform to have a domain over a 2D plane characterized by values of $\sigma$ and $\omega$. We can also get a sense of how these two parameters effect a time-domain response
- A large *magnitude* of $\sigma$ corresponds to a fast exponential decay or growth
- A large *magnitude* of $\omega$ corresponds to a high frequency of oscillation

The sign also matters for these values though.
- A *positive* $\sigma$ corresponds to a exponential growth, A *negative* value corresponds to exponential decay
- A *positive* $\omega$ corresponds to a counter-clockwise rotation in the s plane, where a *negative* corresponds to a clockwise rotation in the s plane.

However to create any real oscillation, we will need complex conjugate pairs with $\pm \omega$. So the sign doesn't *physically* mean anything here.
# Poles and Zeroes

Supposing we have some $s$-domain transfer function $H(s$), we can write it as the following

$$
H(s) = K\frac{(s-z_{1})(s-z_{2})\dots(s-z_{n})}{(s-p_{1})(s-p_{2})\dots(s-p_{n})}
$$
Here we have denoted the roots of the numerator polynomial as some complex number $z_i$, these roots will determine where the entire transfer function becomes a zero, thus they are called [[zeroes]].

Similarly we have denoted the roots of the denominator polynomial as some complex number $p_{i}$, these will determined where the entire transfer function grows to $\pm \infty$, thus these are called [[poles]].

