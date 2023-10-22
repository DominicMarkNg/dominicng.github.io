---
Title: Gradient + Directional Derivatives
sidebar_position: 3
---

### Gradient: Definition

The gradient of a scalar-valued function $ f: \mathbb{R}^n \rightarrow \mathbb{R} $ is a vector-valued function $ \nabla f: \mathbb{R}^n \rightarrow \mathbb{R}^n $ that stores all the partial derivatives of $ f $ with respect to each variable. Formally,

$$
\nabla f(\mathbf{x}) = \left[ \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \ldots, \frac{\partial f}{\partial x_n} \right]^T
$$

Here $ \mathbf{x} = [x_1, x_2, \ldots, x_n]^T $ is a point in $ \mathbb{R}^n $.

### Gradient as a Vector Map

The gradient at each point $ \mathbf{x} $ can be viewed as a vector pointing in the direction of the steepest ascent of the function $ f $ at $ \mathbf{x} $. This means that if you move from $ \mathbf{x} $ to $ \mathbf{x} + \delta \mathbf{x} $ along the direction of $ \nabla f(\mathbf{x}) $, you will achieve the maximum rate of increase for the function $ f $.

### Gradient Mapping for $ (x,y) $

For a function $ f(x, y) $, the gradient $ \nabla f(x, y) $ would be a 2D vector $ [f_x, f_y] $, where $ f_x = \frac{\partial f}{\partial x} $ and $ f_y = \frac{\partial f}{\partial y} $.

In the context of a vector map, each point $ (x, y) $ on the Cartesian coordinate system would map to a vector pointing in the direction of $ \nabla f(x, y) $. If you were to draw these vectors as arrows originating from their corresponding $ (x,y) $ points, you would get a "vector field" that visually represents the gradient across the domain.

### Figures to add later...

A figure illustrating this concept could be a 2D contour plot of $ f(x, y) $ overlaid with arrows representing $ \nabla f(x, y) $ at various points $ (x, y) $. Each arrow would point in the direction of the steepest ascent of $ f $ at its originating point. The length of the arrow would be proportional to the magnitude of $ \nabla f(x, y) $, providing a visual cue for the rate of change at each point.