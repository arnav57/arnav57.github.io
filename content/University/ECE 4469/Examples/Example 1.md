---
title: ECE 4469 Example 1
tags:
  - ece4469
  - example
---
---
>[!example]
>Predict the step response for the following loop transfer function (open loop) bode plot
> $$
> \frac{5(s+15)}{(s+3)(s+2+2j)(s+2-2j)}
> $$
> ![[Pasted image 20260120090603.png]]

---

To do this lets start by finding the gain/phase margin by reading it off the plots
- $\phi_{M} = 30.9$ deg
- $G_M = 9.26$ dB

Note that because the phase margin is lower than 70 degrees, this also gives us the damping regime $\zeta$
$$
\zeta = \frac{\phi_{M}}{100} = 0.309
$$
We also see the crossover frequency $w_{c} = 3.74$ rad/s, this allows us to get the system bandwidth as shown below
$$
w_{BW} = \sqrt{ 2 } \cdot w_{c} = 5.29 \text{ rad/s}
$$

Now with the $\zeta$ and $w_{BW}$ known we can predict anything to do with rise/settle/peak times. To find the overshoot, and completely characterize the response we first need to find the steady-state error $e_{ss}$ for our type 0 system.

Note that our DC Gain, $K_{dB}$ is 10 dB here, we must convert it to a unitless gain first to get $K$.
$$
K_{dB} = 20\log(K) \implies K = 10^{K_{dB}/20}
$$

This gives $K = 3.16$, which we can use to find the steady-state error of 0.24, this means our system settles at  a value of $y_{ss}  = 1-e_{ss} = 0.76$.
$$
e_{ss} = \frac{1}{1+K} = 0.24
$$

Now we can directly read off our settle/rise/peak times, and overshoot can be found as shown below
$$
\%O_{s} = \exp\left( - \frac{\zeta \pi}{\sqrt{ 1 - \zeta^2 }} \right) = 37.2\%
$$
We can find the peak value as
$$
y_{p} = y_{ss} \cdot (1 + \%O_{s}) = 1.05
$$

Using these values above we are able to characterize the transient response of this system!