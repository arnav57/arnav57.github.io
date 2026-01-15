---
title: Analog Simulation
---
---
# Level Shifter

In order to simulate the level shifter, and find the appropriate drain resistors $R_1$ and $R_2$ we set up a quick LTSpice simulation that allows us to design for a good rise time. The schematic is shown below. Note that the 1.5 nF capacitance represents the gate capacitance of the high-side PFETs (IRF9540) in the H-Bridge.

![[Pasted image 20260114163528.png]]

## The Drain Resistor

The first simulation sets up a sweep test on the drain resistance from 1k to 2k (in increments of 100). An earlier sweep test with a broader range was done to narrow down this range, ideally we should choose something that allows for a fast rise time, but also enough margin for safe heat dissipation. Below are the voltage and current plots.


![[Pasted image 20260114163545.png]]

![[Pasted image 20260114163646.png]]

We can assume that our standard resistors are rated for about 0.125 W. Since this level shifter is an inverting configuration, when the gate is high, current flows to ground (as shown in the second plot), but when the gate is low there is an exponentially decreasing current (as the gate capacitance of the PFET is filled up). We can find the maximum current these resistors can handle because we know there will be roughly ~12 V across them

$$
I = \frac{P}{V} = \frac{0.125}{12} = 0.01041 = 10.5 \text{ mA}
$$
Looking at the current plots, any resistor value >1.2k works here! If the resistors we source have a stronger power rating (some sources say 0.2 or 0.25 W), we can bump this up to be
about 20 mA, which means we can safely use the 1k resistor as it provides the fastest rise time.

# H-Bridge