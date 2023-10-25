---
Title: Depth and the problems it comes with
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## The Impact of Gradient Ratios in Deep Learning

Deep learning models, particularly when they are deep, present a series of optimization challenges that are not usually encountered in shallower models or traditional machine learning. One of the primary reasons for this is the complexity of the loss function, which increases due to recursive composition. As a result, the gradient descent optimization algorithm, which is widely used in training neural networks, can often behave in unexpected and non-intuitive ways.

### The Misleading Nature of the Steepest Descent

For most loss functions, the steepest descent provides only an instantaneous idea of the best movement direction. In simpler terms, just because a direction appears to be the most promising at a given moment doesn't mean it will lead to the global (or even a good local) minimum over the long run. There are very few exceptions to this rule.

### The Vanishing Gradient Problem

The notorious "vanishing gradient problem" serves as an illustrative example of these challenges. When a model exhibits this problem, it essentially indicates that the path to the optimum can only be reached through an exceedingly large number of minuscule updates. It's akin to finding your way through a maze with tiny, hesitant steps. Not only is this approach time-consuming, but it is also remarkably inefficient.

### Visualizing the Gradient Descent Behavior

To delve deeper into this behavior, consider two bivariate loss functions given by $L = x^2 + y^2$ and $L = x^2 + 4y^2$. **INSERT FIGURE** showcases the contour plots of these functions. Each line on these plots represents points where the loss function holds an identical value. The steepest descent's direction, interestingly, is always perpendicular to these lines.

As observed in the figures **FIND A FIGURE**, the direction of steepest descent for the elliptical bowl ($L = x^2 + 4y^2$) leads to a zig-zagging path. This is due to the difference in gradient ratios along the X and Y axes. Consequently, following this direction blindly results in an inefficient path to the minimum, underscoring the importance of more advanced optimization techniques or regularization to achieve faster convergence in deep learning.

\section{Understanding the Vanishing and Exploding Gradient Problem in Neural Networks}

Deep neural networks, comprised of numerous parameters, often encounter imbalances in their gradient magnitudes across different layers. This imbalance is a manifestation of the differences in partial derivatives concerning the weights across varying layers. This phenomenon can be attributed to the inherent composition of functions across layers and the multiplicative influence of the chain rule on the gradient during backpropagation.

Consider a deep network with a singular node at each layer and $(m+1)$ layers in total, including a non-computational input layer. The weights linking these layers are represented as $w_1, w_2, \ldots, w_m$. For our discussion, we'll assume the usage of a sigmoid activation function, denoted by $\Phi(\cdot)$. Given input $x$, hidden activations $h_1, \ldots, h_{m-1}$, and final output $o$, the architecture is visually represented in **INSERT FIGURE**.

From the architecture, the output of each hidden layer is established by:

$$ 
h_{t+1} = \Phi(w_{t+1}h_t) 
$$

Using backpropagation, we derive:
$$ 
\frac{\partial L}{\partial h_t} = \Phi'(w_{t+1}h_t) \cdot w_{t+1} \cdot \frac{\partial L}{\partial h_{t+1}} \quad (4.1) 
$$

If we initialize weights from a standard normal distribution, each $w_t$ will average around a magnitude of 1. For the sigmoid activation, its derivative is bounded, peaking at 0.25. As we backpropagate, the gradient concerning the hidden activations decreases rapidly, resulting in extremely small updates for initial layers—a phenomenon termed the "vanishing gradient problem". Pushing these gradients can cause them to explode, the other side of the coin. 

The crux is that repeated scalar or matrix multiplications during backpropagation are inherently unstable, particularly in deep networks. These stability issues, compounded with certain activation functions like the sigmoid, make the gradient problems prevalent.

An example illustrating the complications involves a simple neural network with just one node per layer. But, extending this to networks with multiple nodes in each layer presents similar challenges. During the backpropagation process, a matrix multiplication takes place, akin to scalar multiplication in our single-node example. Such repeated matrix multiplications are inherently unstable. 

The derivatives of the loss in the $(i + 1)^\text{th}$ layer are influenced by a matrix known as the Jacobian. This matrix holds the derivatives of activations in the $(i + 1)^\text{th}$ layer concerning the $i^\text{th}$ layer. 

$$
J(f) = 
\begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \dots & \frac{\partial f_1}{\partial x_n} \\
\frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \dots & \frac{\partial f_2}{\partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \dots & \frac{\partial f_m}{\partial x_n}
\end{bmatrix}
$$

This represents the Jacobian matrix $J(f)$ for a vector-valued function $f: \mathbb{R}^n \rightarrow \mathbb{R}^m$. The matrix contains all first-order partial derivatives of the function. Each row corresponds to a component function $f_i$ and each column corresponds to a variable $x_j$.

Especially in models like recurrent neural networks, where the Jacobian is square-shaped, there's a potential to enforce stability by examining the largest eigenvalue of the Jacobian. Yet, this stability is rarely achieved, making the network prone to the well-known vanishing and exploding gradient problems. The use of certain activation functions, such as the sigmoid, further exacerbates the vanishing gradient issue.

In summary, training deep neural networks is challenging due to the unpredictability and instability of gradient magnitudes across layers. This behavior, termed the vanishing and exploding gradient problems, stems from the fundamental operations and compositional nature of these networks.

## Difficulties of Neural Networks: Cliﬀs and Valleys

Gradient descent operates on first-order derivatives. Nonetheless, the steps within gradient descent possess a finite size, and their characteristics evolve throughout the step. The change rate of these first-order derivatives can be encapsulated by the second-order derivatives, colloquially known as the curvature. An especially challenging topology from the viewpoint of gradient descent is exemplified by a cliff.

Refer to **INSERT FIGURE** for an illustration of a loss surface. Here, a gentle gradient abruptly transitions into a sharp descent, defining what we term as a 'cliff'. Yet, if one was to compute only the first-order partial derivative in relation to the variable $x$ depicted in the figure, a mere slight slope would be discernible. Consequently, a diminutive learning rate results in agonizingly slow learning. Conversely, amplifying the learning rate can inadvertently result in overshooting, landing at a position considerably distant from the optimal solution. This issue arises from the intrinsic curvature nature, wherein the first-order gradient lacks the necessary information to regulate the update magnitude. In several scenarios, the gradient's change rate can be determined using the second-order derivative, furnishing invaluable supplementary data.

Cliffs are unfavorable due to the inherent instability they introduce into the loss function. This insinuates that a minuscule alteration in certain neural network weights can either slightly adjust the loss or drastically modify the loss to such an extent that the ensuing solution is vastly more remote from the true optimum. Consequently, it becomes increasingly feasible to bypass the optimum during a gradient descent step. Such circumstances are typically addressed with methodologies that either adapt the gradient to prefer low-curvature directions or explicitly employ the loss function's curvature (i.e., the second-order derivative). The pronounced impact of curvature is especially apparent when one encounters loss functions that resemble sloping or serpentine valleys. **INSERT FIGURE** illustrates a sloping valley. Valleys represent a treacherous terrain for gradient descent techniques, especially when the valley's base possesses a sharp and swiftly transitioning gradient, crafting a narrow valley. Clearly, this isn't the situation in **INSERT FIGURE**, representing a comparably straightforward scenario. Yet, even in this instance, the steepest descent direction tends to ricochet off the valley's boundaries, progressing down the slope at a sluggish pace if the step sizes are inaccurately selected. Within constricted valleys, the gradient descent technique is prone to even more extreme bouncing off the valley's steep edges, all the while making negligible headway in the mildly sloping direction, where the most substantial long-term benefits are attainable. It becomes abundantly clear that solely selecting the steepest descent direction for steps isn't beneficial. Instead, there's a need to also give precedence to low-curvature directions.

Certainly, here's the rewritten content:

---

Certain loss functions possess a unique global minimum, classifying them under convex optimization problems. This category of optimization is one of the most straightforward. A loss function, denoted as $L(w)$ that maps to real numbers, is considered convex if it adheres to the following condition for any weight vectors $w_1$ and $w_2$ and for any $\lambda$ within the range (0,1):
$$L(\lambda w_1 + (1-\lambda) w_2) \leq \lambda L(w_1) + (1-\lambda) L(w_2)$$
Visualize a convex loss function as a bowl, having a single lowest point. In contrast, a non-convex function may appear as a bowl with several dips. For illustration, consider the 2D convex loss function $g(x,y) = x^2 + y^2 -2x -2y +6$, showcased in Figure 4.7(a). This diagram displays two axes representing variables, and a vertical one indicating the loss value. Clearly, this function's unique global minimum lies at $(x,y) = (1,1)$. Conversely, Figure 4.7(b) represents a loss function, $G(x,y)$, that is non-convex and contains several local minima.

Understanding the convexity of functions becomes crucial when discussing gradient descent behaviors. If gradient descent stumbles upon a dip, escaping becomes a challenge as the gradient at such a low point stands at 0, making all potential movement paths detrimental to the loss function. Shallow neural networks, like those covered in Chapter 3, mainly have convex loss functions, avoiding such predicaments. Convexity proofs for numerous loss functions are available in [6]. Typically, such shallow setups can be expressed through a singular composition $g(f(\cdot))$ comprised of a convex nonlinear loss function $g(\cdot)$ and a linear function $f(\cdot)$. This structure ensures the loss function's convexity [6], especially when the convex nonlinear function is the external layer of this composition. For instance, while both the linear function $f(x_1,x_2) = x_1- x_2$ and the quadratic one $g(x) = x^2$ are convex, their composition $g(f(x_1,x_2)) = (x_1-x_2)^2$ also remains convex. However, as depth increases, maintaining convexity becomes challenging. This difficulty arises mainly because, although most activation functions exhibit convexity, combining a linear function with a nonlinear convex function many times or in an unintended sequence doesn't always result in a convex outcome. For instance, both the linear $f(x_1,x_2) = x_1- x_2$ and quadratic $g(x) = x^2$ are convex, but $f(g(x_1),g(x_2)) = x^2_1 - x^2_2$ lacks this property.

In deep neural networks, there's a blend of numerous linear dot products and nonlinear activations. This blend often means that the aggregate function these networks compute loses its convexity, whether considering inputs or weight variables. Thus, gradient descent might not always lead to a global optimum and might end up stuck in the loss function's dips or what's termed as local optima.

Local minima pose a challenge only if their objective function values substantially exceed the global minimum's. However, in real-world neural networks, this seldom appears to be an issue. Multiple studies indicate that real-life network local minima are quite close in objective function values to the global one, making their existence less of a concern. Additionally, some training strategies detailed later can partially circumvent these issues.

---