---
title: Parts List
---
---


| Label              | Description         | Component                | Justification                                                                                                                                                                                                                                                      |
| ------------------ | ------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| $Q_{a}$ , $Q_{x}$  | P-Channel Power FET | 1.IRF9540<br>2.FQP27P06  | Voltage tolerance, (1) can handle a Vgs of ~20V, This is needed due to level shifters/high-side switching                                                                                                                                                          |
| $Q_b$ , $Q_y$      | N-Channel Power FET | 1.IRLZ44N<br>2.FQP30N06L | Logic Level Drive, These are driven directly by GPIO, These essentiaally saturate at 5V on the Vgs, allowing the arduino to run them effectively                                                                                                                   |
| $Q_1$ , $Q_2$      | NFET/NPN            | 1. 2N7000<br>2. 2N3904   | Just a regular NPN or NFET that can handle 12V across it, and a small current flowing through it used for level shifters.                                                                                                                                          |
| $R_{\text{sense}}$ | Power Resistor      | 0.25$\Omega$ 3W          | Generates ~0.7 V @ 3A, which can be read directly by arduino at low res, or can be read through an amp. Also low resistance enough to ensure motor doesnt have substantial power stolen from it. Cant use standard resistor here due to wattage, we need a big boy |
| $X_1$              | Rail to Rail OpAmp  | 1. MCP6002<br>2. TLV2462 | Single Supply Opamp, something that can output a full 0-5V range when given a single 5V supply from Arduino 5v pin.                                                                                                                                                |

we will also probably need a bunch of caps to place in parallel with the supply cuz motors are kinda just inductors.