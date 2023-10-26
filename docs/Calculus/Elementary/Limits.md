---
Title: Limits
sidebar_position: 1
---

In the study of calculus, understanding the concept of a limit is a stepping stone towards delving into continuous functions, derivatives, and integrals. The formal definition, often referred to as the $\epsilon$-$\delta$ definition, is important yet can initially seem impenetrable. These are my notes on the formal definition of limit aimed towards building an intuitive understanding.

## Formal Definition

The formal definition of limit hinges on the notions of arbitrarily small quantities, encapsulated by Greek letters $\epsilon$ (epsilon) and $\delta$ (delta). Given a function $f(x)$, the statement

$$
\lim_{{x \to a}} f(x) = L
$$

is interpreted as: for each small number $\epsilon > 0$, there exists a number $\delta > 0$ such that if $0 < |x-a| < \delta$, then $|f(x) - L| < \epsilon$. In a more symbolic notation, this is articulated as:

$$
\forall \epsilon > 0, \exists \delta > 0 : 0 < |x-a| < \delta \Rightarrow |f(x) - L| < \epsilon
$$

The crux of this definition lies in the quantifiers. It's about guaranteeing that $f(x)$ gets arbitrarily close to $L$ as $x$ approaches $a$, by making $\delta$ small enough.

## Dissecting the Formalism

Let's dissect the components of this definition:

1. **The Limit Point ($a$)**: This is the point that $x$ is approaching.
2. **The Limit Value ($L$)**: This is the value that $f(x)$ is approaching as $x$ approaches $a$.
3. **The Epsilon ($\epsilon$)**: Represents how close $f(x)$ is to $L$.
4. **The Delta ($\delta$)**: Represents how close $x$ is to $a$.

The inequalities $0 < |x-a| < \delta$ and $|f(x) - L| < \epsilon$ are crucial as they formalize the notion of "closeness".

## Bridging to Intuition

The $\epsilon$-$\delta$ definition at first might seem detached from intuition. However, a geometric interpretation can provide a clearer picture. 

### Geometric Interpretation

Imagine a graphical representation where the function $f(x)$ is plotted against $x$. The point $x = a$ is where we are focusing, and $L$ is the value that $f(x)$ is approaching. Now, envision two horizontal lines at $L + \epsilon$ and $L - \epsilon$. Similarly, draw two vertical lines at $a + \delta$ and $a - \delta$. The essence of the definition is that as $x$ moves within the vertical bounds, $f(x)$ stays within the horizontal bounds.

A figure illustrating this geometric interpretation can greatly aid in understanding. The figure would show the function $f(x)$, the point $x=a$, the value $L$, the $\epsilon$ and $\delta$ bounds, and how $f(x)$ remains within the $\epsilon$ bounds as $x$ is within the $\delta$ bounds around $a$.

![An image from the static](/img/epsilonlimit.png)

### Concrete Scenario

Consider a real-world scenario where a car's speedometer approaches a certain speed as the car accelerates. Though the needle might never hit the exact speed due to mechanical limitations, it gets arbitrarily close. This scenario mirrors the behavior of limits, where $f(x)$ gets arbitrarily close to $L$ as $x$ gets arbitrarily close to $a$.

Through this blend of formalism and intuition, the concept of limits becomes less daunting, serving as a solid foundation for further exploration in calculus.