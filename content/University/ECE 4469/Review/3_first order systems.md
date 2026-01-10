---
title: First Order Systems
tags:
  - ece4469
  - review
date: 2026-01-10
---
---
# Standard Form

The standard form of a first order system is given below

$$
H(s) = \frac{A}{s + a} = \frac{K}{1+\tau s }
$$
Here $K$ is the gain, and $\tau$ is the [[Time Constant|time-constant]] of the system.

# Metrics of a First Order System

We can find initial speed, rise time, and settling time of a first order system as shown below.

The step response of a first order system is, with the final value being K
$$
{K}\cdot(1-\exp(-{t/\tau}))
$$
$$
y(\infty) = K 
$$

Then the metrics are determined to be.

$$
v_{0} = \frac{K}{\tau}
$$
$$
T_{r} = 2.2\tau 
$$
$$
T_{s} = 3.91 \tau 
$$
