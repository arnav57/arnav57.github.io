---
title: 1. Classical Controls
tags:
  - ece4469
  - lecture
---
---
The goals of this section is to review the basics of classical control systems, specifically involving the two things below:
1. Predicting transient behavior of a system from a bode-plot of the closed-loop transfer function
2. Design lead/lag controllers based on bode-plots of a process

# Extension to Closed-Loop Systems

predicting transient response involves some given transfer function $H(s$), essentially we are trying to predict how the step response (response with input $1/s$) looks in the time-domain. 

We can use the interactive [[Pole Zero Explorer]] in order to help with this, note that we will be focusing primarily on [[4_second order systems|second order systems]]. These review notes on second order systems go over metrics for open-loop transfer functions. Here we will try to extend this metrics concept to closed-loop transfer functions.

## Phase Margin & Damping Regime

The first equation we will need to consider is that for [[Wiki/Phase Margin|phase margin]], $\phi_M$ of a standard second-order system in a closed-loop.

$$
\phi_{M} = \frac{\arctan(2\zeta)}{\sqrt{ -2\zeta^2 + \sqrt{ 1+4\zeta^4 }}}
$$

We should also note that for any $\phi_M > 70^\text{o}$, the damping regime $\zeta = \phi_{M}/100$. This is due to the linear nature of the relationship between phase margin and damping ratio shown below.

![[Pasted image 20260120084652.png]]

## System Bandwidth

Another key thing we will need when trying to predict transient response is the **bandwidth** of our closed-loop system. For now there is one main approximation we will use that depends on the open-loop [[Crossover Frequency]] $\omega_{c}$. Which is the frequency of where the magnitude of the open-loop transfer function reaches 0 dB. This can be read directly off the bode-plot.
$$
\omega_{BW} = \sqrt{ 2 } \cdot \omega_{c}
$$
## Steady State Value

We will also need to find the steady-state value (error) of this system. Recall that we have system types that are determined by the number of free integrators in our open-loop transfer function. (see [[5_steady_state|Steady State Review]] for a refresher).

**Type 0 Systems**

there is no free integrator, this means at low frequencies the gain is basically constant (flat-line). Converting this dB value to a unitless gain, gives us the DC Gain of the system $K$. Then we can find the steady-state error as shown below:

$$
e_{ss} = \frac{1}{1+K}
$$
**Type >=1 System**

This system has one free integrator, thus the slope at DC will follow a -20 dB/decade slope. Since we are on a log axis, the pure DC point of $\omega=0$ is infinitely far to the left, which means the pure DC gain is going to be $\infty$. To deal with this we use the magnitude of the $\omega=1$ point (or where it would cross this point asymptotically), recall that we still need to convert the dB gain to a unitless gain first to get our $K_v$. Then we can find the final value to a ramp input (there is no steady state error to a step input for systems of type >= 1)

$$
e_{ss} = \frac{1}{K_{v}}
$$
$$
y(t=\infty) = 1 + \frac{1}{Kv}
$$

## Predicting Transient Response

With the system bandwidth, $\omega_{BW}$ and the damping regime $\zeta$ known, we can easily get the metrics for rise/settle/peak time from the plots below.

![[Pasted image 20260120090054.png]]

peak value $y_p$ can be determined as the following:
$$
y_{ss} = \text{desired output} - e_{ss}
$$
$$
y_{p} = y_{ss} \cdot (1 + \%O_{s})
$$

# Examples

In this lecture the following examples were done:
- [[University/ECE 4469/Examples/Example 1]]