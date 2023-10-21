---
Title: Partial Derivatives/Slope - Proof
sidebar_position: 6
---

The concept of partial derivatives can be beautifully elucidated by considering how a function changes as we vary one of its input variables while keeping others fixed. This idea is especially intuitive in the realm of multivariable functions, where different directions of change give rise to unique behavior in the function's output.

## Formal Definition of Partial Derivative

Given a multivariable function $ f(x,y) $, the partial derivative of $ f $ with respect to $ x $ at a point $ (x_0, y_0) $ is given by:
$$
\frac{\partial f}{\partial x}(x_0, y_0) = \lim_{{h \to 0}} \frac{f(x_0+h, y_0) - f(x_0, y_0)}{h}
$$

This equation gives a precise meaning to the rate of change of the function in the $ x $-direction at the point $ (x_0, y_0) $.

## Intuitive Explanation

Let's try to build an understanding of this definition:

1. **Starting Point**: We begin at a point $ (x_0, y_0) $ in the domain of $ f $.

2. **Tiny Step in $ x $-direction**: Choose a minuscule value, $ h $. Add $ h\blueE{v_1} $ to $ x_0 $, translating to the point $ (x_0 + h\blueE{v_1}, y_0) $. From our understanding of partial derivatives, the function's output will now change by approximately:
   $$
   h\blueE{v_1} \left(\frac{\partial f}{\partial x}(x_0, y_0) \right)
   $$

:::tip

**Why are we multiplying by $ h\blueE{v_1} $?
See at the bottom of the article for a more in-depth explanation.

:::

3. **Tiny Step in $ y $-direction**: Now, introduce a small increment, $ h\greenE{v_2} $, to $ y_0 $, which moves us to the point $ (x_0 + h\blueE{v_1}, y_0 + h\greenE{v_2}) $. The ensuing change in $ f $ is approximately:
   $$
   h\greenE{v_2}\left( \frac{\partial f}{\partial y}(x_0 + h\blueE{v_1}, y_0) \right)
   $$

4. **Combining the Effects**: The cumulative alteration to the function, stemming from the movements in both the $ x $ and $ y $ directions, is close to:
   $$
   h\blueE{v_1} \left(\frac{\partial f}{\partial x}(x_0, y_0) \right) + h\greenE{v_2}\left( \frac{\partial f}{\partial y}(x_0 + h\blueE{v_1}, y_0) \right)
   $$

5. **Relating to Directional Derivative**: The expression above is reminiscent of the definition of the directional derivative, which encapsulates the change in $ f $ due to the step $ h \mathbf{v} $:
   $$
   h \nabla_{\mathbf{v}} f(x_0, y_0) = h \mathbf{v} \cdot \nabla f(x_0, y_0) = h\blueE{v_1}\frac{\partial f}{\partial x}(x_0, y_0) + h\greenE{v_2}\frac{\partial f}{\partial y}(x_0, y_0)
   $$

6. **Limiting Behavior**: The above explanation has a minor discrepancy: the partial derivative concerning $ y $ is evaluated at $ (x_0 + h\blueE{v_1}, y_0) $, not $ (x_0, y_0) $. But remember, $ h $ is infinitesimally small, and we're technically pondering the limit as $ h \to 0 $. If $ f $ is continuous, then evaluating $ \frac{\partial f}{\partial y} $ at points arbitrarily close to each other, like $ (x_0 + h\blueE{v_1}, y_0) $ and $ (x_0, y_0) $, will yield almost identical results. As $ h $ inches towards zero, this difference vanishes.

In essence, partial derivatives offer a lens through which we can observe and quantify the nuanced ways in which functions transform as their input variables undergo minute changes. They serve as foundational building blocks in understanding the more intricate behaviors of multivariable functions.

##Step 2 Explanation

Imagine the $ \blueE{v_1} $ and $ \greenE{v_2} $ represent the components of a directional vector $ \vec{\textbf{v}} $ in the $ x $ and $ y $ directions, respectively. Specifically, if $ \vec{\textbf{v}} = \begin{bmatrix} \blueE{v_1} \\ \greenE{v_2} \end{bmatrix} $, then $ \blueE{v_1} $ is how much we move in the $ x $-direction for a unit step in the direction of $ \vec{\textbf{v}} $, and $ \greenE{v_2} $ is the corresponding movement in the $ y $-direction.

To clarify further: 
- $ h $ represents a small scalar value used to denote a tiny step's magnitude.
- $ \blueE{v_1} $ is a **scalar component** of the directional vector $ \vec{\textbf{v}} $, indicating the amount of movement in the $ x $-direction for a unit step in the direction of $ \vec{\textbf{v}} $.
  
Their product, $ h\blueE{v_1} $, gives the actual displacement in the $ x $-direction when moving a tiny step of size $ h $ in the direction of $ \vec{\textbf{v}} $. This displacement is a scalar value that we add to the $ x $-coordinate of the starting point to determine our new position.

###Partial Derivatives * $ h\blueE{v_1} $?

OK - Now we understand that $ h\blueE{v_1} $ represents we can talk about why the multiplication of $ h\blueE{v_1} $ to the partial derivative starting from it's definition.

**1. Definition of Partial Derivative:**  
The partial derivative $ \frac{\partial f}{\partial x} $ at a point $ (x_0, y_0) $ represents the rate of change of the function $ f $ with respect to the $ x $-variable, while keeping $ y $ constant. In simple terms, it tells us how much $ f $ changes for a tiny change in $ x $.

**2. Intuition of Multiplication:**  
Imagine you know that for every meter you walk eastwards, you ascend 5 meters in altitude. If you decide to walk 2 meters eastwards, you'd expect to ascend $ 5 \times 2 = 10 $ meters. The rate of ascent (5 meters per meter walked) is analogous to the partial derivative, and the distance you decide to walk (2 meters) is analogous to $ h\blueE{v_1} $. 

**3. Using the Rate of Change:**  
By multiplying the partial derivative (rate of change) by a small change in the input variable (in this case $ x $), you get the approximate change in the output of the function. Algebraically:
\[ \text{Change in } f \approx \frac{\partial f}{\partial x} \times \text{Change in } x \]

**4. Applying to the Context:**  
In our context, the "Change in $ x $" is $ h\blueE{v_1} $ which is a small step in the $ x $-direction. So, the multiplication:
\[ h\blueE{v_1} \left( \frac{\partial f}{\partial x}(x_0, y_0) \right) \]
gives the approximate change in the function $ f $ due to a small step of $ h\blueE{v_1} $ in the $ x $-direction. This is an application of the concept of a differential, which provides a linear approximation to the change in the function.

To summarize, multiplying the partial derivative by $ h\blueE{v_1} $ gives us the expected change in the function value when we change our input by a tiny amount $ h\blueE{v_1} $ in the direction of the vector $ \vec{\textbf{v}} $.




