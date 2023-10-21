---
Title: Directional Derivatives
sidebar_position: 4
---

## Directional Derivatives
The directional derivative captures how a function changes as one moves in a specific direction. It's the rate of change of a function in the direction of a particular vector. Given a function $ f $ and a unit vector $ \mathbf{u} = [u_1, u_2, u_3] $, the directional derivative of $ f $ in the direction of $ \mathbf{u} $ at a point $ (x, y, z) $ is computed as:

$$
D_\mathbf{u}f(x,y,z) = \nabla f(x,y,z) \cdot \mathbf{u}
$$

where $ \nabla f $ is the gradient of $ f $ and $ \cdot $ represents the dot product.

To compute the directional derivative:

1. **Find the Gradient of $ f $**
The gradient of $ f $, $ \nabla f $, is a vector whose components are the partial derivatives of $ f $:

$$
\nabla f(x,y,z) = \left[ \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right]
$$


2. **Compute the Dot Product**
Take the dot product between the gradient of $ f $ and the normalized direction vector $ \mathbf{u} $:

$$
D_\mathbf{u}f(x,y,z) = \nabla f(x,y,z) \cdot \mathbf{u}
$$

This value represents the rate of change of $ f $ at the point $ (x, y, z) $ in the direction of $ \mathbf{u} $.

### Example

Consider the function $ f(x,y,z) = x^2 + y^2 + z^2 $. To compute the directional derivative at a point $ (a,b,c) $ in the direction of $ \mathbf{u} = [u_1, u_2, u_3] $:

1. Find the gradient:
$$
\nabla f(a,b,c) = [2a, 2b, 2c]
$$

2. Normalize $ \mathbf{u} $ if not already a unit vector.

3. Compute the dot product:
$$
D_\mathbf{u}f(a,b,c) = [2a, 2b, 2c] \cdot [u_1, u_2, u_3] = 2au_1 + 2bu_2 + 2cu_3
$$

This is the rate of change of $ f $ at $ (a,b,c) $ in the direction of $ \mathbf{u} $.

### Directional Derivatives: Definition

The directional derivative of a function $ f: \mathbb{R}^n \rightarrow \mathbb{R} $ at a point $ \mathbf{x} \in \mathbb{R}^n $ in the direction of a unit vector $ \mathbf{u} \in \mathbb{R}^n $ is defined as the rate at which $ f $ changes at $ \mathbf{x} $ when moving in the direction $ \mathbf{u} $. Formally, the directional derivative $ D_{\mathbf{u}}f(\mathbf{x}) $ is defined as:

$$
D_{\mathbf{u}}f(\mathbf{x}) = \nabla f(\mathbf{x}) \cdot \mathbf{u}
$$

where $ \cdot $ denotes the dot product.

### Connection to Gradient

The gradient $ \nabla f(\mathbf{x}) $ is particularly useful for computing directional derivatives. In fact, the gradient vector points in the direction in which $ f $ increases most rapidly, and its magnitude gives the rate of that increase. Therefore, the directional derivative in the direction of the gradient is the maximum directional derivative, and it is equal to the magnitude of the gradient:

$$
\max_{\| \mathbf{u} \| = 1} D_{\mathbf{u}}f(\mathbf{x}) = \| \nabla f(\mathbf{x}) \|
$$

### Geometrical Interpretation

You can geometrically interpret the directional derivative as the projection of the gradient vector onto the direction vector $ \mathbf{u} $. When $ \mathbf{u} $ is aligned with $ \nabla f(\mathbf{x}) $, the directional derivative reaches its maximum value, which is $ \| \nabla f(\mathbf{x}) \| $.

### Potential Figure

A useful figure could display the gradient vector $ \nabla f(\mathbf{x}) $ at a point $ \mathbf{x} $ on a contour map of $ f(x, y) $. Additionally, several other unit vectors $ \mathbf{u}_i $ could originate from the same point $ \mathbf{x} $. Projections of $ \nabla f(\mathbf{x}) $ onto these unit vectors would illustrate the concept of directional derivatives. The length of each projection would indicate the value of the directional derivative $ D_{\mathbf{u}_i}f(\mathbf{x}) $ in that specific direction.


2. **Normalize the Direction Vector**
Before using the direction vector $ \mathbf{u} $, ensure it's a unit vector. If it's not, normalize it:

$$
\mathbf{u} = \frac{\mathbf{u}}{|\mathbf{u}|}
$$

where $ |\mathbf{u}| $ is the magnitude of $ \mathbf{u} $.