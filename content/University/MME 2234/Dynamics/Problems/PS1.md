---
title: Problem Set 1
tags:
  - mme2234
  - problems
---
---
# Question 1

![[Pasted image 20260118113751.png]]

We know that velocity and acceleration are time derivatives of position, we can d/dt $x(t)$ to find these.

$$
x(t) = 10\sin(2t) + 15\cos(2t) +  100
$$

$$
v(t) = \frac{dx}{dt} = 20\cos(2t) - 30\sin(2t)
$$

$$
a(t) = \frac{d^2x}{dt^2} = -40\sin(2t) -60\cos(2t)
$$

To find the values at $t=1$, we simply sub in the values, to find the maximum value of each we take the the derivative and find the $t$ that makes the original function 0, then we sub that in to the original functions to find its maximum.

$$
v_{\text{max}} = v(t_{k}), \text{ where } a(t_{k}) = 0
$$
$$
a_{\text{max}} = a(t_{k}), \text{ where } \frac{da(t_{k})}{dt} = 0
$$

---
# Question 2

![[Pasted image 20260118114702.png]]

We know that velocity and displacement are time integrals of acceleration

$$
v(t) = \int_{0}^{t} a(\mu)\ d\mu
$$

$$
x(t) = \int_{0}^{t} v(\mu)\ d\mu
$$

Lets integrate once to find velocity

$$
v(t) = \int_{0}^t -1.8\sin(k\mu) \ d\mu = 1.8\int -\sin(k\mu) \ d\mu = \frac{1.8}{k}\cos(kt) + v_{0}
$$

Here $k=3$, and the initial velocity $v_0$ is given by the question to be $0.6$ m/s. Thus we can simplfy this as seen below since our cosine is already equal to this value at $t=0$.

$$
v(t) = \frac{3}{5}\cos(3t)
$$

Then we can integrate this guy to find displacement

$$
x(t) = \frac{3}{5}\int_{0}^t \cos(3\mu) \ d\mu = \frac{3}{5} \frac{1}{3}\sin(3t)  + x_{0}
$$


This can be simplified, and the question also gives the initial position $x_0$ as $0$. Our sine is already 0 at initial time, so the constant disappears.

$$
x(t) = \frac{1}{5}\sin(3t)
$$

The rest of this question is finding $v(0.5)$ and $x(0.5)$, which is easy and wont be typed here. 

---
# Question 3

![[Pasted image 20260118120642.png]]


Here we have acceleration as a function of velocity. They are related like this

$$
a = v \cdot \frac{dv}{dx}
$$
We also know everything in the equation provided except the acceleration at the 260 m mark. Thus we need to find acceleration as a function of position $a(x)$, then we will have everything we need to solve for $A$. To find $a(x)$ we can do the following through *separation* of variables

$$
v \cdot \frac{dv}{dx} = A - Cv^2
$$

$$
\frac{v}{A-Cv^2} \ dv = dx
$$

$$
\int \frac{v}{A-Cv^2} \ dv = \int dx
$$

To get the limits we convert km/h to m/s

$$
\frac{100 \text{ km}}{1 \text{ h}} \cdot \frac{1000 \text{ m}}{1 \text{ km}} \cdot \frac{1 \text{ h}}{60 \text{ s}} = \frac{100,000 \text{ m}}{3600 \text{ s}} = 27.78 \ \frac{\text{m}}{\text{s}}
$$



This  means we integrate velocity from 0 to 27.78 for velocity and 0 to 260 for displacement. Our final integral equation becomes

$$
\int_{0}^{27.78} \frac{v}{A-Cv^2} \ dv = \int_{0}^{260} dx
$$

The LHS is a simple $u$-sub where $u = A-Cv^2$, then $du = -2Cv\ dv$. We can use this to find the general antiderivative of the LHS

$$
\int \frac{v}{A-Cv^2} \ dv = \int \frac{v}{u} \cdot -\frac{1}{2Cv} \ du = -\frac{1}{2C} \int \frac{1}{u} \ du = -\frac{1}{2C}\ln(u) + K = -\frac{1}{2C}\ln(A-Cv^2) + K
$$

Now we can evaulate this antiderivative according to the LHS integral limits

$$
 -\frac{1}{2C} \cdot [\ln(A-C(27.78)^2) - \ln(A)] = -\frac{1}{2C} \cdot \ln\left(\frac{A-27.78^2C}{A}\right)
$$
The RHS integral just becomes $x$ (shocker!).

We can then solve the following to find the value of $A$.

$$
-\frac{1}{2C} \cdot \ln\left(\frac{A-27.78^2C}{A}\right) = 260
$$

---
# Question 4

![[Pasted image 20260118123941.png]]

lets instantly convert 54 km/h to 15 m/s (pain). We can set up a basic x(t) equation using the equations of motion since this is *uniform* acceleration. We know $x$, $x_0$ $t$ and $v_0$, and are solving for $a$, so we can use this one:

$$
x = \frac{1}{2}at^2 + v_{0}t +x_{0}
$$

Solving for $a$ becomes

$$
a = \frac{2 (\Delta x - v_{0}t)}{t^2} = \frac{2(240 - 15(24))}{24^2} = -0.4166

$$

Thus the car would need to uniformly decellerate at -0.4166 m/s/s

Now we can find the final velcoity of the car with the most basic equation

$$
v = v_{0} + at
$$
This gives,
$$
v = 15 -0.4166(24) \approx 5 \text{ m/s}
$$

---
# Question 5

![[Pasted image 20260118131533.png]]

this one is pretty easy as everything is in one direction $y$. We just need to write position equations for each of the two objects, the elevator, and the ball.

The ball is under only gravity, and we can use the main kinematic equation for this since its constant acceleration, Here $y_0 = 0$ which is the position of the man

$$
y_{ball} = \frac{1}{2}at^2 + v_{0}t + y_{0}
$$

The elevator is under constant velocity, so the displacement becomes the below equation, here $y_0$ is the initial position of the elevator 10 meters below the man (the man is our reference)
$$
y_{elev} = y_{0} + vt
$$

Then we literally just solve for the time $t$ for which $y_{ball} = y_{elev}$

$$
-\frac{9.8}{2}t^2 + 3t = 4t - 10
$$

$$
-\frac{9.8}{2}t^2-t+10=0
$$
This gives two solutions one is positive, the other is dismissed as it is negative. The time when these two objects meet is $t=1.33017$. To find the location of this collision we can evaluate it with any of the equations above, we choose the elevator one cuz its simpler

$$
y_{elev} = -10 + 4(1.33017) = -4.679 \text{ m}
$$

So the ball and elevator collide 1.33017 seconds after the ball is thrown, and they collide 4.679 meters below the man

---
# Question 6

![[Pasted image 20260118132547.png]]

To solve pulley problems we write an equation for each rope. Moving forward rope 1 will be the LHS rope, and Rope 2 will be the RHS rope. Note that we are assuming the object $M$ allows for unlimited rope extension on rope 1, which is the only way this problem makes sense.

We also define our reference as the ceiling, assuming this is 0. We define the position of point $C$ as $x_C$, position of the elevator as $x_E$, and position of the weight as $x_W$. $K_1$ and $K_2$ are fixed constants representing the relative displacement between objects staying constant

Rope 1:
$$
x_{C} + 2x_{E} = K_{1}
$$

Rope 2:
$$
x_{E} + x_{W} = K_{2}
$$

The above equations also hold for velocity, we just change the $x$'s to $v$'s and the constant $K$'s disappear. And then we can work with the velocity of point C given by the question. We also define the positive direction as moving downwards.

$$
v_{C} + 2v_{E} = 0
$$
$$
v_{E} + v_{W} = 0
$$
Plugging in $v_E = +4$, we can solve this system of equations

$$
v_{C} + 2(4) = 0 \implies v_{C} = -8
$$
$$
v_{E} = +4 \implies v_{W} = -4
$$

This means our cable $C$ is moving 8 m/s upwards. And the counterweight $W$ is moving 4 m/s upwards as well.

The relative velocity of the cable $C$ wrt the elevator $E$ can be found as shown below

$$
v_{C/E} = v_{C} - v_{E} = -8 - (+4) = -12 \text{ m/s}
$$
Similarly we can find the relative velocity $v_{W/E} = -4 - (+4) = -8 \text{ m/s}$.

---
# Question 7

![[Pasted image 20260118134618.png]]

Another rope/pulley problem so this should also be light, here we've only got one rope, so we have one equation! lets directly write the velocities this time. Note that the horizontal pulling at $A$ doesn't matter, the system functions the same if we pull it downwards or upwards (extending A, vs retracting A), so we will label moving downwards as positive, and moving upwards as negative for B, but for A a positive value means extending A, and a negative value means retracting A.

$$
v_{A} + 4v_{B} = 0
$$
The question then gives us the velocity of $A$ as +0.5 (pulling left means extending $A$). This implies that the velocity of $B$ is -0.125 m/s upwards!

The relative velocities can be found through **vector subtraction**!!
$$
v_{B/A} = v_{B} - v_{A} = 0.125\angle{180} - 0.5\angle{-90} = |K|\angle K
$$

$$
|K| = \sqrt{ 0.125^2 + 0.5^2 } = 0.51538
$$
$$
\angle K = \arctan\left(\frac{0.125}{0.5}\right) = 14.046^\text{o}
$$
