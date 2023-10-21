---
Title: Slope
sidebar_position: 5
---

## Slope and the Directional Derivative

In the realm of calculus and vector fields, the slope of a function at a specific point often emerges as a primary concern. Analogously, in higher dimensions, the concept of slope extends to what we call the "directional derivative". In this article, we will delve deeper into the relationship between slope and directional derivatives.

### Understanding Slope

When dealing with a single-variable function, $f(x)$, the slope at any point $x_0$ is simply the derivative, $f'(x_0)$. It gives us an indication of how steeply the function is rising or falling at that point. The steeper the function, the larger the absolute value of its slope.

For a line in the plane, the slope $m$ is the change in $y$ (rise) divided by the change in $x$ (run). Mathematically:
$$
m = \frac{\Delta y}{\Delta x}
$$

### Enter the Directional Derivative

When we move to functions of multiple variables, like $f(x, y)$, determining the "slope" becomes a bit more intricate because there are infinitely many directions in which we can look. Here, instead of a simple derivative, we turn to the directional derivative. 

The directional derivative of $f$ at a point $(x_0, y_0)$ in the direction of a unit vector $\mathbf{v}$ (often denoted as $D_{\mathbf{v}}f(x_0, y_0)$) measures the rate at which $f$ changes as one moves from $(x_0, y_0)$ in the direction of $\mathbf{v}$. In other words, it represents the slope of $f$ in the direction of $\mathbf{v}$.

### A formal definition

The following equation expresses the relationship between a directional derivative and the slope and why normalising makes intuitive sense.

$$
\frac{h \nabla f(x_0, y_0)}{|h| ||\mathbf{v}||} = \frac{\nabla f(x_0, y_0)}{||\mathbf{v}||}
$$

This equation is giving us a normalized view of the directional derivative. On the left-hand side, we're taking the dot product of a direction vector $h$ with the gradient of $f$, then dividing by the magnitude of both $h$ and the gradient vector $\mathbf{v}$, effectively calculating the unit vector. This normalization process ensures that our result is independent of the magnitudes of the vectors involved, giving us a pure measure of direction.

The right-hand side simplifies this by showing the gradient of $f$ divided by its magnitude, representing the unit gradient direction. This is the "unit" slope in the direction of steepest ascent.


:::info

Both of these equations are the same but the left hand side is slightly more generalisable.

:::

### Why Normalize?

Normalizing, or converting our direction vector to a unit vector, is crucial for a few reasons:

1. **Standardization**: It allows us to standardize our measurement. When discussing the slope or rate of change in a particular direction, it's helpful if we can ensure that the direction has a standard length, like 1, so that comparisons are meaningful.
   
2. **Interpretability**: A unit vector maintains the direction of the original vector but has a magnitude of 1. This means the directional derivative using a unit vector directly gives us the rate of change per unit length in that direction.

3. **Removal of Magnitude Ambiguities**: Without normalization, larger vectors would lead to larger directional derivatives, not because the function is steeper in that direction, but simply because of the vector's magnitude.

In conclusion, the concept of slope in multivariable functions becomes richer and more nuanced. The directional derivative, especially when approached with unit vectors, provides a powerful tool for understanding the behavior of functions in different directions.

Certainly. Let's delve into a concrete example to elucidate the concepts of slope and the directional derivative in a multivariable context.

### The Function

Consider the function:
$$
f(x, y) = x^2 + y^2
$$

This represents a paraboloid opening upwards, with its vertex at the origin.

### Computing the Gradient

The gradient of $f$, denoted $\nabla f$, is a vector that points in the direction of the steepest ascent of the function. Its components are the partial derivatives of the function with respect to each variable.

For our function $f(x, y) = x^2 + y^2$:
$$
\frac{\partial f}{\partial x} = 2x \quad \text{and} \quad \frac{\partial f}{\partial y} = 2y
$$

So, the gradient at any point $(x, y)$ is:
$$
\nabla f(x, y) = \begin{bmatrix} 2x \\ 2y \end{bmatrix}
$$

### Directional Derivative

Suppose we want to find the rate of change of $f$ at the point $(1, 1)$ in the direction of the vector $\mathbf{v} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$. 

First, we normalize the direction vector:
Magnitude of $\mathbf{v}$: 
$$
||\mathbf{v}|| = \sqrt{1^2 + 2^2} = \sqrt{5}
$$

Unit vector in the direction of $\mathbf{v}$:
$$
\mathbf{u} = \frac{\mathbf{v}}{||\mathbf{v}||} = \begin{bmatrix} \frac{1}{\sqrt{5}} \\ \frac{2}{\sqrt{5}} \end{bmatrix}
$$

The directional derivative of $f$ at the point $(1,1)$ in the direction of $\mathbf{u}$ is given by the dot product of the gradient of $f$ at $(1,1)$ and the unit vector $\mathbf{u}$:
$$
D_{\mathbf{u}}f(1, 1) = \nabla f(1, 1) \cdot \mathbf{u} = \begin{bmatrix} 2 \\ 2 \end{bmatrix} \cdot \begin{bmatrix} \frac{1}{\sqrt{5}} \\ \frac{2}{\sqrt{5}} \end{bmatrix} = \frac{2}{\sqrt{5}} + \frac{4}{\sqrt{5}} = \frac{6}{\sqrt{5}}
$$

### Interpretation

The value $\frac{6}{\sqrt{5}}$ gives the rate at which the function $f(x, y) = x^2 + y^2$ changes at the point $(1, 1)$ as we move in the direction of the vector $\begin{bmatrix} 1 \\ 2 \end{bmatrix}$. It tells us that for every unit length we move in this direction, the function value increases by $\frac{6}{\sqrt{5}}$.