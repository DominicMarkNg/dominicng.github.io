---
Title: The Basics
sidebar_position: 1
---

## 1.1 Vectors and Linear Combinations
## What is a Linear Combination of Vectors?

A **linear combination** involves taking a set of vectors $v_1, v_2, \ldots, v_n$ and multiplying each by a corresponding scalar $a_1, a_2, \ldots, a_n$. The result is then summed up to create a new vector. In formula terms, a linear combination of $n$ vectors is:

$$
a_1v_1 + a_2v_2 + a_3v_3 + \ldots + a_nv_n
$$

### Three Ways to Write a Linear Combination in \( \mathbb{R}^2 \)

When dealing with vectors in two-dimensional space, $ \mathbb{R}^2 $, there are three common ways to express a linear combination:

1. **Column Way**:  
    Represent each vector as a column and line them up vertically. The linear combination can then be written as:

    $$
    \begin{pmatrix}
        a_1 \\
        a_2
    \end{pmatrix}
    \begin{pmatrix}
        v_{11} \\
        v_{21}
    \end{pmatrix}
    +
    \begin{pmatrix}
        b_1 \\
        b_2
    \end{pmatrix}
    \begin{pmatrix}
        v_{12} \\
        v_{22}
    \end{pmatrix}
    $$

2. **Row Way**:  
    Alternatively, you can represent each vector as a row and line them up horizontally. The linear combination is:

    $$
    (a_1, a_2) 
    \begin{pmatrix}
        v_{11} & v_{12} 
    \end{pmatrix}
    +
    (b_1, b_2) 
    \begin{pmatrix}
        v_{21} & v_{22} 
    \end{pmatrix}
    $$

3. **Matrix Way**:  
    A more compact form uses matrix multiplication:

    $$
    \begin{pmatrix}
        a_1 & b_1 \\
        a_2 & b_2
    \end{pmatrix}
    \begin{pmatrix}
        v_{11} & v_{12} \\
        v_{21} & v_{22}
    \end{pmatrix}
    $$

Each of these ways is mathematically equivalent but can be more convenient depending on the context.

## Solving Linear Systems of Equations by Elimination: Advantages and Special Cases

When dealing with a system of linear equations, one of the most common techniques employed for finding the solution is the elimination method. This method is particularly advantageous over substitution in certain cases, offering computational efficiency and easier manipulation. In this section, we will delve into the benefits of using elimination, how to determine when equations are linearly dependent, and when a system has no solution.

### The Elimination Method

To solve a system of equations using the elimination method, the idea is to eliminate one variable from one equation by adding or subtracting equations. Let's consider a system of two equations in two variables $x$ and $y$:

$$
\begin{aligned}
a_1x + b_1y &= c_1, \\
a_2x + b_2y &= c_2.
\end{aligned}
$$

To eliminate $y$, we could multiply the first equation by $b_2$ and the second equation by $b_1$ and then subtract the second equation from the first:

$$
\begin{aligned}
(a_1 \times b_2 - a_2 \times b_1)x &= c_1 \times b_2 - c_2 \times b_1.
\end{aligned}
$$

Solving this equation will give us the value of $x$, which we can then substitute back into one of the original equations to find $y$.

### Benefits over Substitution

Elimination has several advantages over substitution, especially when dealing with more complex systems:

1. **Efficiency**: In large systems of equations, elimination can be computationally more efficient.
2. **Less Prone to Errors**: Substitution often involves manipulating expressions which could lead to algebraic errors.
3. **Simultaneous Solving**: Unlike substitution, where you solve for one variable and then use it to find others, elimination allows for solving variables simultaneously, which is often faster.

### Linear Dependence

A system of equations is said to be linearly dependent if one equation can be written as a linear combination of the others. In the case of the system

$$
\begin{aligned}
a_1x + b_1y &= c_1, \\
a_2x + b_2y &= c_2.
\end{aligned}
$$

If $ \frac{a_1}{a_2} = \frac{b_1}{b_2} $, then the lines represented by these equations are either identical or parallel. If they are identical ($ \frac{c_1}{c_2} = \frac{a_1}{a_2} $), the system has infinitely many solutions. If not ($ \frac{c_1}{c_2} \neq \frac{a_1}{a_2} $), the system has no solution.

### No Solution Scenario

A system of equations has no solution if the equations are parallel but not identical. In terms of the coefficients, this occurs if $ \frac{a_1}{a_2} = \frac{b_1}{b_2} $ but $ \frac{c_1}{c_2} \neq \frac{a_1}{a_2} $.

### Conclusion

Elimination is a powerful method for solving systems of linear equations, offering advantages in terms of efficiency and ease of manipulation. By understanding the conditions under which a system is linearly dependent or has no solution, we can also make more informed choices about how to approach solving these systems.

## Two Vectors Cannot Span 3-Dimensional Space

In vector calculus and linear algebra, the concept of spanning a space is fundamental. Specifically, a set of vectors spans a space if every point in the space can be written as a linear combination of the vectors in the set. However, it's crucial to understand that two vectors, no matter how they are oriented, cannot span the entire 3-dimensional space.

### Span of Two Vectors in Mathematical Terms

The linear combinations of two vectors $ \mathbf{v} $ and $ \mathbf{w} $ can be formally described by the span of these vectors, denoted as $ \text{span}(\mathbf{v}, \mathbf{w}) $. Mathematically, this is defined as:

$$
\text{span}(\mathbf{v}, \mathbf{w}) = k\mathbf{v} + c\mathbf{w},
$$

where $ \mathbf{v}, \mathbf{w} \in V $ and $ k, c \in \mathbb{F} $ are scalars.

### Why Can't Two Vectors Span 3D Space?

To span 3-dimensional space, you would need a set of vectors that can linearly combine to reach any point in that space. However, the linear combination of two vectors $ \mathbf{v} $ and $ \mathbf{w} $ will only generate a plane through the origin in 3-dimensional space, no matter how the vectors are oriented. This happens because any linear combination of $ \mathbf{v} $ and $ \mathbf{w} $ will lie in the same plane that $ \mathbf{v} $ and $ \mathbf{w} $ define. Therefore, there are points in 3-dimensional space that are not in this plane, meaning they can't be reached by any linear combination of $ \mathbf{v} $ and $ \mathbf{w} $.

