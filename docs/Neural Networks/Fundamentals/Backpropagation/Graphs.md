
---
Title: Neural Network Architecture
sidebar_position: 1
---

## Neural Networks as Computational Graphs 

Computational graphs provide a broader perspective than neural networks, and they can be described as follows:

A DACG is a specific type of directed acyclic graph consisting of nodes, with each node housing a variable. The edges of this graph might possess learnable parameters. The variable within a node can either be externally set (typically for input nodes lacking incoming edges) or determined based on a function of the variables found at the starting points of incoming edges and any learnable parameters linked to these incoming edges.

It's essential to understand that this particular definition doesn't impose any constraints on the nature of the function a node can execute. Yet, within the realm of neural networks, it's typical for nodes to compute using a blend of linear and activation functions. Moreover, unlike traditional neural networks, computational graph nodes don't necessarily need to adhere to a layered structure. The primary stipulation is that the graph remains acyclic, ensuring that variable computations follow a defined sequence.

Certain nodes within the graph house observable variables, termed as 'output nodes'. These nodes are linked with loss functions calculated using the known input-output pairs present in the training dataset. For every discernible input, the loss function gauges the similarity between the predicted values in the output nodes and the actual values (when the input node variables are aligned with the observed inputs). The selection of the loss function is closely tied to the specific application. For instance, for executing least-squares regression, the graph can have input nodes equivalent to the number of input variables and just one output node to house the predicted value. In such a setup, directed edges run from every input node to the lone output node, with each edge's parameter mirroring the weight $w_i$ linked to the corresponding input variable $x_i$. *Figure* depicts this setup. The sole computational node (output node) calculates the function for the variables $x_1$ through $x_d$ present in the $d$ input nodes as:
$$\hat{o} = f(x_1,x_2,...,xd) = \sum_{i=1}^{d} w_ixi$$

In computational graphs, when functions from one layer feed into nodes of another, they create complex multivariate composition functions. As layers increase, so does the complexity of the function. For example, with 10 layers and 2 nodes per layer, the function could have 2^10 nested terms. This complexity increases further when optimization parameters are associated with the edges.

As the function's closed-form complexity grows exponentially with path length, trying to differentiate the closed-form expression directly becomes problematic. However, the derivatives of the output with respect to various variables in the computational graph are interconnected through the chain rule of differential calculus. This leads to the backpropagation algorithm, where derivatives close to the output are calculated first and then propagated backwards. This method calculates derivatives numerically for specific input-output pairs, rather than deriving them algebraically.

### Increasing complexity

In computational graphs, when functions from one layer feed into nodes of another, they create complex multivariate composition functions. As layers increase, so does the complexity of the function. For example, with 10 layers and 2 nodes per layer, the function could have 2^10 nested terms. This complexity increases further when optimization parameters are associated with the edges.

As the function's closed-form complexity grows exponentially with path length, trying to differentiate the closed-form expression directly becomes problematic. However, the derivatives of the output with respect to various variables in the computational graph are interconnected through the chain rule of differential calculus. This leads to the backpropagation algorithm, where derivatives close to the output are calculated first and then propagated backwards. This method calculates derivatives numerically for specific input-output pairs, rather than deriving them algebraically.

Consider a neural network depicted by **Figure**. In this network:
- Each hidden layer has two nodes.
- The output layer sums its inputs.
- Variables in the ith layer are represented as $x_i$ and $y_i$.
- The input layer's variables are $x_0$ and $y_0$.

For the computations in each layer:
1. Layer 1:
    - $x_1$ is calculated as $F(x_0, y_0)$.
    - $y_1$ is computed by $G(x_0, y_0)$.

2. Layer 2:
    - $x_2$ is given by $F(F(x_0, y_0), G(x_0, y_0))$.
    - Similarly, $y_2$ is $G(F(x_0, y_0), G(x_0, y_0))$.

As we move to subsequent layers, the complexity increases:
3. Layer 3:
    - $x_3$ becomes $F(F(F(x_0, y_0), G(x_0, y_0)), G(F(x_0, y_0), G(x_0, y_0)))$.
    - $y_3$ is similarly a more nested version of the functions.

From this example, it's evident that with each additional layer, the computational expressions grow in complexity, making them more challenging to represent and understand.

