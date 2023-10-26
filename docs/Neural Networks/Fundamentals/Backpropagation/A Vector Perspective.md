---
Title: Vector
sidebar_position: 3
---
---
### The Vector-Centric View of Backpropagation

In this section, we will discuss the vector-centric view of backpropagation. First, we recap the vector architecture of neural networks discussed in Chapter 1. The corresponding $k + 1$ weight matrices between successive layers are denoted by $W_1, \dots, W_{k+1}$. Let $x$ be the $d$-dimensional column vector corresponding to the input, $h_1, \dots, h_k$ be the column vectors corresponding to the hidden layers, and $o$ be the $m$-dimensional column vector corresponding to the output. Then, we have the following recurrence condition for multi-layer networks:
$$h_1 = \Phi(W_1x) = W_1x$$
$$h_{p+1} = \Phi(W_{p+1}h_p) = W_{p+1}h_p \quad \forall p \in \{1,\dots,k-1\}$$
$$o = \Phi(W_{k+1}h_k) = W_{k+1}h_k$$

The function $\Phi(\cdot)$ is applied in an element-wise fashion. A key problem here is that each of the above functions is a vector composition of a linear layer and a nonlinear activation layer. Furthermore, the output is an even more complex composition function of earlier layers.

A comparison of the scalar architecture is provided with the vector architecture in **Figure**. It is noteworthy that the connection matrix between the input layer and the first hidden layer is of size 5x3, since there are 5 inputs. However, in order to apply the linear transformation $W_1x$ to the 5-dimensional column vector $x$, the weight matrix will be of size 3x5, so that $\Phi(W_1x)$ is a 3-dimensional vector. A key point is that the entire neural network can be expressed as a single path with vector-centric operations, which greatly simplifies the topology of the computational graph. However, all functions in the vector-centric view of neural networks are vector-to-vector functions. Therefore, one needs to use the vector-to-vector derivatives and a corresponding chain rule. 

### A summary of derivative with respect to vectors

The backpropagation algorithm requires the computation of node-to-node derivatives and loss-to-node derivatives as intermediate steps. In the vector-centric view, one wants to compute derivatives with respect to entire layers of nodes. To do so, one must use matrix calculus notation, which allows derivatives of scalars and vectors with respect to other vectors.

For example, consider the case where one wishes to compute the derivative of a scalar loss $L$ with respect to a vector layer $\mathbf{x}$, where $\mathbf{x} = [x_1 \dots x_d]^T$ is a $d$-dimensional column vector. The derivative of a scalar with respect to a column vector is another column vector, using the denominator layout convention$^4$ of matrix calculus. This derivative is denoted by
$\frac{\partial L}{\partial \mathbf{x}},$
and is simply the gradient. This notation is a scalar-to-vector derivative, which always returns a vector. Therefore, we have the following:
$$
\nabla L = \frac{\partial L}{\partial \mathbf{x}} = \left[ \frac{\partial L}{\partial x_1} \dots \frac{\partial L}{\partial x_d} \right]^T
$$

The matrix calculus notation also allows derivatives of vectors with respect to vectors. For example, the derivative of an $m$-dimensional column vector $\mathbf{h} = [h_1,\dots,h_m]^T$ with respect to a $d$-dimensional column vector $\mathbf{x} = [x_1,\dots,x_d]^T$ is a $d \times m$ matrix in the denominator layout convention. The $(i,j)$th entry of this matrix is the derivative of $h_j$ with respect to $x_i$:
$\frac{\partial h}{\partial x_{ij}} = \frac{\partial h_j}{\partial x_i} \quad (2.20)$
This matrix is closely related to the Jacobian matrix in matrix calculus. The $(i,j)$th element of the Jacobian is always 
$\frac{\partial h_i}{\partial w_j},$
and therefore it is the transpose of the matrix $\frac{\partial h}{\partial x}$ shown in Equation $2.20$:
$\text{Jacobian}(\mathbf{h},\mathbf{x}) = \left( \frac{\partial h}{\partial x} \right)^T$
The transposition occurs because of the use of denominator layout. In fact the Jacobian matrix is exactly equal to $\frac{\partial h}{\partial x}$ in the numerator layout convention of matrix calculus. However, we will consistently work with the denominator convention in this book.

Two special cases of vector-to-vector derivatives are very useful in neural networks. The first is the linear propagation $\mathbf{h} = W\mathbf{x}$, which occurs in linear layers of neural networks. In such a case, $\frac{\partial h}{\partial x}$ can be shown to be $W^T$. The second is when an element-wise activation function $\mathbf{h} = \Phi(\mathbf{x})$ is applied to the $d$-dimensional input vector $\mathbf{x}$ to create another $d$-dimensional vector. In such a case, $\frac{\partial h}{\partial x}$ can be shown to be the $d \times d$ diagonal matrix in which the $i$th diagonal entry is the derivative $\Phi'(\mathbf{x_i}) = \frac{\partial \Phi(x_i)}{\partial x_i}$. Here, $\mathbf{x_i}$ is the $i$th component of the vector $\mathbf{x}$.

### 2.5.2 Vector-Centric Chain Rule

This section delves into the "Vector-Centric Chain Rule", a fundamental concept in calculus that's instrumental for comprehending the inner workings of neural networks.

#### Context:

Neural networks, especially those that are deep, are structured with numerous layers. Each of these layers can be visualized as a function. In the case of a deep neural network, its final output is essentially the result of these functions' compositions. Mathematically, for a neural network with "k" layers, the output for an input $x$ is given as:
$$o = F_k(F_{k-1}(...F_1(x)...))$$

#### Theorem 2.5.1 (Vectored Chain Rule):

This theorem outlines a systematic approach to compute the derivative of the overall neural network output (a vector) in relation to its input (another vector). Here's a breakdown:

- **Composition Function**: The function $o$ represents the outcome when all the neural network functions (layers) are composed. Expressed as:
$$o = F_k(F_{k-1}(...F_1(x)...))$$

- **Function Characteristics**: Every function, denoted as $F_i$, within the composition accepts an $n_i$-dimensional vector and yields an $n_{i+1}$-dimensional vector. The initial input, $x$, is an $n_1$-dimensional vector, whereas the final output, $o$, is of dimension $n_{k+1}$.

- **Notation**: The output generated by each function $F_i$ is represented as $h_i$.

- **Vectored Chain Rule Expression**: This core aspect of the theorem stipulates that the derivative of $o$ with respect to $x$ can be represented as a matrix product. Each matrix stands for a partial derivative of a layer's output concerning the input of its preceding layer.

The mathematical expression is:
$$\frac{\partial o}{\partial x} = \frac{\partial h_1}{\partial x} \frac{\partial h_2}{\partial h_1} ... \frac{\partial h_k}{\partial h_{k-1}}$$

#### Implication:

The concluding mention of size constraints is an assurance that the matrix multiplications are valid. This refers to the basic rule of matrix multiplication, where the number of columns in the first matrix must align with the number of rows in the subsequent matrix. Owing to the inherent structure of neural networks, these constraints are automatically satisfied, validating the computation of matrix derivatives through multiplication.

