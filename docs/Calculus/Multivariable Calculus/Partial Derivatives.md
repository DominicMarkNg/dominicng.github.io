---
Title: Partial Derivatives
sidebar_position: 1
---

### Partial Derivatives: Formal Definition

Given a function $f: \mathbb{R}^n \rightarrow \mathbb{R}$, the partial derivative of $f$ with respect to the $i^{th}$ variable $x_i$ is defined as:

$
\frac{\partial f}{\partial x_i} = \lim_{{\Delta x_i \to 0}} \frac{f(x_1, \ldots, x_i + \Delta x_i, \ldots, x_n) - f(x_1, \ldots, x_i, \ldots, x_n)}{\Delta x_i}
$

provided the limit exists. Here, $\Delta x_i$ is a small change in the $i^{th}$ variable while keeping all other variables constant.

### Notation

The partial derivative of $f$ with respect to $x_i$ is commonly denoted by $\frac{\partial f}{\partial x_i}$ or $f_{x_i}$. When $f$ is a function of more than two variables, the notation becomes particularly useful to specify which variable we are differentiating with respect to.

### Multivariate Functions

For functions $f: \mathbb{R}^n \rightarrow \mathbb{R}^m$ where $m > 1$, the partial derivatives can be organized into the Jacobian matrix:

$
\mathbf{J} = \begin{pmatrix}
\frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_1}{\partial x_n} \\
\vdots & \ddots & \vdots \\
\frac{\partial f_m}{\partial x_1} & \cdots & \frac{\partial f_m}{\partial x_n}
\end{pmatrix}
$

### Figures to add later...

A potential figure illustrating partial derivatives could involve a 3D plot of a function $f(x, y)$. The figure could show tangent planes corresponding to the partial derivatives $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ at a specific point. These planes would illustrate how the function changes when you vary only one variable while keeping the other constant.

