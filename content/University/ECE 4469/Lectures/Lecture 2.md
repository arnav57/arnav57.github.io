---
title: 2. Lead-Lag Controllers
tags:
  - ece4469
  - lecture
---
---

## Lead-Lag Controllers

The lead-lag controller can be parametrized as shown below:

$$
C(s) = K \cdot \frac{1}{\sqrt{ \beta }} \frac{s + \frac{1}{\tau_{f}}}{s + \frac{1}{\beta\tau_{f}}} \cdot \frac{s + \frac{1}{\alpha\tau_{r}}}{s+\frac{1}{\tau_{r}}}
$$

Here we have 5 parameters for the controller
- $\tau_f$  -> The time constant of the lead controller
- $\tau_r$  -> The time constant of the lag controller
- $K$  -> The proportional value
- $\alpha$   -> The parameter of the lag controller
- $\beta$   -> The parameter of the lead controller

## Steady State 

Some handy steady state relations are given below, these can be used in the design procedure

$$
C(s=0) = \frac{K\sqrt{ \beta }}{\alpha}
$$

We also know that this is a controller, thus an open-loop transfer function $L(s) = C(s) \cdot G(s)$. Consequently $L(0) = C(0) \cdot G(0)$. Which means we can write

$$
L(0) = \frac{K\sqrt{ \beta }}{\alpha} \cdot G(0)
$$

## Lead Controller Design

Some useful equations can help us relate the [[Phase Margin]] we want to the parameter $\beta$ in the lead controller. We also can relate the [[Crossover Frequency]] to this as well

$$
\phi_{M} = \arcsin\left(\frac{1-\beta}{1+\beta} \right)
$$
$$
\beta = \frac{1-\sin(\phi_{M})}{1+\sin(\phi_{M})}
$$

$$
\omega_{c} = \frac{1}{\tau_{f}\sqrt{ \beta }}
$$

## Lag Controller Design

The lag controller usually introduces a maximum of a 7 degree reduction in phase margin, so we typically want to introduce an extra 7 degrees when initially choosing the desired phase margin in the lead controller.

the lag controller determines the steady-state conditions, using our steady state equations we can solve for alpha as
$$
\alpha = \frac{K\sqrt{ \beta }}{L(0)}\cdot G(0)
$$

We also need to ensure that $10/\alpha\tau_r < \omega_c$, this means we can find some lag time constant as

$$
\tau_{r} > \frac{10}{\alpha\omega_{c}} \implies \frac{10}{\alpha\tau_{r}} < \omega_{c}
$$

## General Procedure

In order to design a general lead-lag controller we can use the following procedure.
1. Read off G(0), the DC Gain (or asymptotic DC Gain) of the plant.
2. Read off the gain and phase at the new desired [[Crossover Frequency]]
	- This is denoted as $|G_{wc}|\angle G_{wc}$
3. To set this as the new crossover frequency
	- Let $K = 1/|G_{wc}|$
	- This also changes the phase margin to be $180 + \angle G_{wc}$ 
4. To get a desired phase margin
	- $\phi_{M} = \phi_{M, \text{ desired}} - (180 + \angle G_{wc}) + 7$
	- The extra 7 degrees compensates for the lag controller we design in steps 6-7
5. Use $\phi_M$ to solve for the entire lead controller
	- $\beta = \frac{1-\sin(\phi_{M})}{1+\sin(\phi_{M})}$
	- $\tau_{f} = \frac{1}{\omega_{c}\sqrt{ \beta }}$
6. Solve for alpha using the desired steady state error
	- $\alpha = \frac{K\sqrt{ \beta }G(0)}{L(0)}$
7. Set a reverse time constant for the lag controller such that
	- $\tau_{r} > \frac{10}{\alpha\omega_{c}} \implies \frac{10}{\alpha\tau_{r}} < \omega_{c}$