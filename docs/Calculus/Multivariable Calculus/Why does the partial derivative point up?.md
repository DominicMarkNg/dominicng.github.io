---
Title: Why does the partial derivative point up?
sidebar_position: 7
---

## An intuitive explanation as to why this might be

This took me a while to understand probably because I have no real formal education in maths. I'm probably not the only one but it rests on two fundamental facts. 

1. That we have **arbitrarily** definined a derivative as having a positive value if as $ x $ increases then $ f(x) $ increases
2. The use of the dot product/ triangle inequality to prove that $ \nabla f $ is maximum value

### Why do partial derivatives point towards the area of steepest ascent?
If we exit the multidimensional domain (a one-dimensional case $ \mathbb{R} \rightarrow \mathbb{R} $), the derivative $ f' $ is positive when the function is increasing and negative when it's decreasing. Here, "increasing" and "decreasing" are defined with respect to a standard orientation of the number line, where right is positive and left is negative. This is a convention, but it's one that has been universally adopted, making it the "natural" choice in most contexts.

When you extend this to higher dimensions, the gradient $ \nabla f $ encapsulates these first-order derivatives in each direction (coordinate axis). If $ f $ increases when you move along a particular axis, the corresponding component of $ \nabla f $ will be positive; if $ f $ decreases, that component will be negative.

This idea carries over from our one-dimensional intuition, guided by our conventions for what "increasing" and "positive" mean. The result is that $ \nabla f $ points in the direction where $ f $ increases the most, based on the way we've defined "increases" and "most" — hence, it points in the direction of steepest ascent. 

In summary, the reason the gradient points in the direction of steepest ascent is indeed based on somewhat arbitrary but widely accepted definitions and conventions, just as you've noted. 

### Why is $ \nabla f $ the vector of steepest descent/ascent?
Alright, let's imagine you're on a hill, and you're blindfolded. You want to go downhill, but you can only take one step at a time. 

When you're standing at a certain point on the hill, you can feel the slope under your feet, right? Your feet tell you which way is steeper and which way is flatter. 

Imagine your left foot feels the slope in the "left-right" direction, and your right foot feels the slope in the "forward-backward" direction. These "feelings" from each foot are like the partial derivatives. Each one tells you how steep the hill is if you only go in that one direction—either left-right or forward-backward.

Now let's talk about the "best" step to take to go down as quickly as possible. You could try to go only left-right, or only forward-backward. But the steepest slope might be somewhere in between, like a diagonal. If you combine what your left foot and your right foot are telling you, you'll know which way to step. That's like the gradient—it combines the partial derivatives to give you the best direction to take a step downhill.

The triangle inequality is like saying, "Hey, if you add up the steepness from both feet, the steepest step you can take is still not going to be more than if you added the steepness under each foot separately."

So, when you combine the directions your feet are telling you to go (left-right and forward-backward), the result (the gradient) is the steepest way downhill. And it will always be that way, no matter where you're standing on the hill.

## More 'mathy'
Certainly, let's consider a simple example using a function of two variables $ f(x, y) $. Let's take $ f(x, y) = -(x^2 + y^2) $, which represents a downward-opening paraboloid. You can visualize this as a "bowl" shape with its lowest point at the origin.

We can find the gradient of $ f(x, y) $, denoted as $ \nabla f $, which is a vector containing all the first-order partial derivatives of $ f $:

$$
\nabla f = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right) = (-2x, -2y)
$$

For the sake of illustration, let's pick a point $(x_1, y_1) = (1, 1)$ on the surface of $ f(x, y) $.

The gradient $ \nabla f $ at this point will be $-2(1, 1) = (-2, -2)$.

Now, consider moving from $(x_1, y_1)$ to another point $(x_2, y_2) = (1 + \Delta x, 1 + \Delta y)$. The change in the function $ f $ is $ \Delta f $.

Using the gradient, we can approximate $ \Delta f $ as follows:

$$
\Delta f \approx \nabla f \cdot (\Delta x, \Delta y) = -2\Delta x - 2\Delta y
$$

The gradient is pointing in the direction of the maximum change in $ f $, which in this example is towards $-\infty$ (i.e., the function is decreasing the fastest in that direction).

Now, let's use the triangle inequality to show this:

The triangle inequality states that for any vectors $ A $ and $ B $,

$$
||A + B|| \leq ||A|| + ||B||
$$

Consider any unit vector $ \hat{u} = (u_x, u_y) $ such that $ ||\hat{u}|| = 1 $. The dot product of $ \nabla f $ and $ \hat{u} $ would be:

$$
\Delta f_{\text{new}} = \nabla f \cdot \hat{u} = -2u_x - 2u_y
$$

Taking the absolute value, we get:

$$
|\Delta f_{\text{new}}| = |-2u_x - 2u_y| \leq |-2u_x| + |-2u_y| = 2|u_x| + 2|u_y|
$$

Now apply the triangle inequality for vectors $ -2u_x $ and $ -2u_y $:

$$
2|u_x| + 2|u_y| \leq 2||\hat{u}|| = 2
$$

Hence,

$$
|\Delta f_{\text{new}}| \leq 2
$$

The above inequality shows that no matter what unit vector $ \hat{u} $ we pick, the absolute change $ |\Delta f_{\text{new}}| $ is bounded by the value 2, which is precisely the magnitude of $ \nabla f $ at the point $(x_1, y_1) = (1, 1)$.

This means that no matter what direction you pick, the rate of change of $ f $ in that direction will be smaller or equal to the rate of change in the direction of $ \nabla f $.

In summary, $ \nabla f $ points in the direction of maximum change in $ f $, and the triangle inequality helps us to mathematically verify this. A figure showing a 3D plot of $ f(x, y) $ with vectors $ \nabla f $ at various points would be useful to visually corroborate this concept. The vectors would be pointing in the directions where the function decreases most rapidly, affirming that $ \nabla f $ points toward the "lowest" point for our example function.