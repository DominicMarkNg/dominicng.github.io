---
Title: Second Partial Derivatives
sidebar_position: 3
---

### Second Partial Derivatives

In the context of functions of multiple variables, we often want to determine how the function's rate of change itself is changing with respect to a particular variable. This leads to the concept of second partial derivatives.

Given a function $ f(x,y) $, the second partial derivative with respect to $ x $ is represented as:

$$
\frac{\partial^2 f}{\partial x^2}
$$

This notation represents the derivative of $ \frac{\partial f}{\partial x} $ with respect to $ x $. Similarly, the second partial derivative of $ f $ with respect to $ y $ is denoted as:

$$
\frac{\partial^2 f}{\partial y^2}
$$

### Mixed Partial Derivatives

While second partial derivatives measure the change in the rate of change along the same variable, mixed partial derivatives investigate the change in the rate of the function's change across different variables. 

For instance, the mixed partial derivative of $ f $ with respect to $ x $ and then $ y $ is denoted as:

$$
\frac{\partial^2 f}{\partial x \partial y}
$$

It measures how $ \frac{\partial f}{\partial x} $ varies as $ y $ changes. Similarly, the mixed partial derivative with respect to $ y $ and then $ x $ is:

$$
\frac{\partial^2 f}{\partial y \partial x}
$$

### Symmetry of Mixed Partial Derivatives

One of the remarkable properties of most functions encountered in practice is that the order of differentiation doesn't matter for mixed partial derivatives. This means:

$$
\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}
$$

This symmetry, known as the equality of mixed partial derivatives, is often taken as an assumption for functions that are twice differentiable and continuous over their domain.

### Interpretation

Mixed partial derivatives provide valuable insights into the nature of a function. If both $ \frac{\partial^2 f}{\partial x^2} $ and $ \frac{\partial^2 f}{\partial y^2} $ are positive, then $ f $ is concave upwards along both axes. On the other hand, if they're both negative, $ f $ is concave downwards.

The mixed partial derivatives tell us how the function's curvature changes as we move between the $ x $ and $ y $ axes. If the mixed partial derivative is positive, the function's curvature is similar in both the $ x $ and $ y $ directions. If negative, the curvature in the $ x $ direction opposes that in the $ y $ direction.

### Potential Figure

A visual representation could depict the surface of a function $ f(x,y) $. Highlighting the curvatures corresponding to $ \frac{\partial^2 f}{\partial x^2} $, $ \frac{\partial^2 f}{\partial y^2} $, $ \frac{\partial^2 f}{\partial x \partial y} $, and $ \frac{\partial^2 f}{\partial y \partial x} $ will help to visually distinguish between second and mixed partial derivatives. This will showcase the curvature of the function in relation to the $ x $ and $ y $ axes, and how the function behaves in between these axes.