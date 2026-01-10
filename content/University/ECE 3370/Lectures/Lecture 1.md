---
title: Lecture 1
date: Jan 9th, 2025
tags:
  - lecture
---
---

## Communication Systems

what is the basic setup of a modern comms system (AFE, DBE)
Multiplexing and Demultiplexing aka Intro SerDes :)
- take a bunch of things from (potentially many sources, and put it into a transmittable form)
what is a broadcast/multicast setup
what is a bandwidth? what does it represent
full duplex vs half duplex vs simplex setups

## Something Else

derive formula that equates some series R + reactance to some parallel R + reactance
Rp and Xp in terms of others.
show that changing from series to parallel doesnt change the reactance from capactive to inductance
show that parallel resistance is higher than the series resistance
these  should be calculable for certain frequencies.

optimal power transfer:
usually we design things in modules (hierarchy)
how can we ensure that when connecting blocks together we transfer max power from block to block

We can model a block as a voltage source in series with some impedance Z. Max power transfer occurs when the impedance of the source is the **complex conjugate** of the load impedance. This concept is called the load matching / matched load.

if this is not true (mostly is true) we can do this by adding a matching circuit in between the blocks, which we can use to fix this situation

The Z_in seen from the matching circuit should be conj z load. We are trying to maximize power to the load though, not incl the matching circuit, so our matching circuit should ONLY be reactances, no resistances as it should not steal any power from the load.