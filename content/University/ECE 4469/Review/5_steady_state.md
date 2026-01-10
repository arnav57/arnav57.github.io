---
title: Steady State Error
tags:
  - ece4469
  - review
date: 2026-01-10
---
---

# Steady State Error

Steady state error is the difference between what we want the system to do, and what the system actually does. Its essentially the difference between the input and output as time goes to infinity

We can use [[Final Value Theorem]] in order to find the steady state error easily. Note that here our $e(t)$ and $E(s)$ are the *error* signals in our control system.

$$
e_{ss} = \lim_{ s \to 0 } sE(s) 
$$

# System Types

We can classify systems based on the number of free integrators they have in the open-loop transfer function. Note that a free integrator is a pole at the origin.

$$
G(s) = \frac{K}{s^N (s+p_{1})(s+p_{2})\dots}
$$
We can classify the types as shown below
- Type 0 System - $N=0$
- Type 1 System - $N = 1$
- Type 2 System - $N = 2$

We can use this type to see how well our system can track different input types, like a step, ramp, or parabola. We also define the **static error constants** to help us conceptualize this.

## Static Error Constants

To calculate the specific values in the table above, we define the following static error constants based on the open-loop transfer function $G(s)$:

**1. Position Constant ($K_p$)**
*Used for Step Inputs*
$$
K_p = \lim_{s \to 0} G(s)
$$

**2. Velocity Constant ($K_v$)**
*Used for Ramp Inputs*
$$
K_v = \lim_{s \to 0} s G(s)
$$

**3. Acceleration Constant ($K_a$)**
*Used for Parabolic Inputs*
$$
K_a = \lim_{s \to 0} s^2 G(s)
$$

## System Based Error

The error based on system type and input type is shown below in a table

| Input Waveform                                               |   Type 0 System   |  Type 1 System  |  Type 2 System  |
| :----------------------------------------------------------- | :---------------: | :-------------: | :-------------: |
| **Step** ($u(t)$)<br>$R(s) = 1/s$                            | $\frac{1}{1+K_p}$ |       $0$       |       $0$       |
| **Ramp** ($t \cdot u(t)$)<br>$R(s) = 1/s^2$                  |     $\infty$      | $\frac{1}{K_v}$ |       $0$       |
| **Parabola** ($\frac{1}{2}t^2 \cdot u(t)$)<br>$R(s) = 1/s^3$ |     $\infty$      |    $\infty$     | $\frac{1}{K_a}$ |
