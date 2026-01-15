---
title: Analog Design
---
---
This page goes over the proposed analog design of this project. It currently features two main components.
1. H-Bridge
2. Level Switchers
3. Force Shunt
## H-Bridge

The provided motor specifications list it as a 12V DC Motor with a stall current of 2.2 A. We will design the circuit to safely dissipate 3 A of current through any path involving the motor for safe operation. A functional schematic of the H-Bridge is given below.


We label the forward direction containing FETs $Q_a$ and $Q_b$ The reverse direction contains FETs $Q_x$ and $Q_y$ 

The goal is for the Arduino GPIO to properly control the gates of the four transistors in this bridge, and properly set the direction of motor rotation, as well as motor speed through PWM.

![[Drawing 2026-01-13 23.24.29.excalidraw.svg|400]]
%%[[Drawing 2026-01-13 23.24.29.excalidraw.md|🖋 Edit in Excalidraw]]%%


### Considerations

Some things to keep in mind when designing this H-Bridge are the following:
1. Voltage Levels
2. Current Levels

The high-end switching rail-voltage is 12 V. Furthermore $Q_a$ and $Q_x$ are PMOS, and are active-low devices. This means their gates must see 12V to shut off, and 0V to turn on. Arduino TTL outputs a 5V signal, thus we will need a **level shifter** for these two gate controllers in order to actually turn off $Q_a$ and $Q_b$ , without this level shifter they will always be on.

This is not a problem for the low-side switching involving $Q_y$ and $Q_b$ since their sources are tied to 0V, we can source a **Logic Level MOSFET** for this task, allowing the MOSFET to fully saturate at $V_{gs} = 5$V. This will allow current to flow through properly directly from the Arduino control signals.

We also need to consider that the stall current is 2.2A, this is the theoretical max current that can flow through any two diagonal pairs on this H-bridge, to give us a safe margin we can source transistors that are rated for any current > 3A.

## Level Switchers

As noted in the H-Bridge section, we will require two level switchers to properly facilitate the disabling of transistors $Q_a$ and $Q_x$ . We can do this with the simple **Inverted Common Source** configuration shown below

![[Drawing 2026-01-13 23.49.31.excalidraw.svg|400]]
%%[[Drawing 2026-01-13 23.49.31.excalidraw.md|🖋 Edit in Excalidraw]]%%

This configuration works in a simple way. When $V_i$ is low, the MOSFET acts as an open circuit, providing $V_o = 12$ V. However, when $V_i > V_{th}$ the MOSFET conducts and effectively "shorts" its drain to ground, leaving a very low voltage on $V_o$ . This allows us to drive the high-level PMOS switches in the H-Bridge directly with some Arduino GPIO input of 5V on $V_i$

## Force Shunt

In order to measure the force provided by the motor, we can measure the motor current going to ground by placing some resistor $R_{\text{sense}}$ at the bottom of the H Bridge between the sources of $Q_y$ $Q_b$ and ground. We know the resistance, thus we can easily find the current flowing through that resistor by reading the voltage from the Arduino ADC.

A note here is that this resistor will have 3A flowing through it in the worst-case (stall), thus we need to make sure its resistance is low enough to not dissipate too much power, and also low enough that the sources of $Q_y$ and $Q_b$ are not pulled too high!

The Arduino ADC reads in 5V range with a 10 bit ADC, (1024 levels), thus we will eventually need to amplify this extremely small voltage to get it in the 0-5v range, which will let us use the full scale of our Arduino ADC.

We can hook up a small non-inverting op-amp configuration to deal with this. We label the op-amp as $X_1$