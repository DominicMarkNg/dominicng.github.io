---
Title: Backpropagation Steps
sidebar_position: 2
---

## **Backpropagation in Neural Networks**

Backpropagation is a cornerstone algorithm for training neural networks. It is based on the simple idea of minimizing the error between the predicted output and the actual output. This is achieved in two primary phases: the forward phase and the backward phase.

### **1. The Forward Phase**

In the forward phase:

- An input-output pair is selected from the training dataset.
- The input nodes of the computational graph (neural network) are fed the attribute values from the selected input.
- Computations are performed in a sequential manner on the network, proceeding from the input layer to the output layer. In directed acyclic graphs (a characteristic of neural networks), we can ensure the correct order by processing nodes in increasing distance from the input nodes.
- Once computations reach the output nodes, the predicted values are obtained.
- If the predicted output values differ from the actual training data output values, an error is computed using a loss function. This quantifies the difference between prediction and reality and gives us a measure of how well the network is performing.

### **2. The Backward Phase (Backpropagation)**

In the backward phase:

- The gradient (or rate of change) of the loss function concerning the weights in the neural network is computed.
- The term "backward" stems from the fact that this computation starts from the output layer and works its way backward to the input layer. The derivatives closer to the output are simpler and computed first. As we move backward, the derivatives become more intricate, and the chain rule of calculus is used extensively.
- These gradients signify how much each weight contributed to the error. Using this information, each weight is adjusted slightly to reduce the error.

### **3. Weight Update**

- The weights are updated in the direction that reduces the loss. Typically, this is achieved by moving the weights in the negative direction of the gradient.
- Learning rates play a critical role here, dictating the size of the steps we take in the direction of the gradient.

The process of forward phase, backward phase, and weight update is repeated for each input-output pair in the training dataset. Once every pair has been used once, we say an epoch has been completed. Training usually involves multiple epochs until the network converges to a satisfactory level of accuracy.

A nuanced aspect of backpropagation is the computation of derivatives of node variables with respect to each other. This is crucial because these derivatives can be used to determine the derivative of the loss function concerning the edge weights. The successive steps in backpropagation allow us to compute these derivatives efficiently, laying the foundation for effective training of neural networks.

## **Understanding Automatic Differentiation in Computational Graphs**

When working with computational graphs, understanding the relationship between nodes and their computations can offer unique insights, especially in the context of differentiation. Let's delve deeper.

### **Nested Compositions of Functions**

It was previously mentioned that one could represent the function of a computational graph in terms of the nodes from the early layers. Such representation would involve nested compositions of functions resulting in a rather cumbersome closed-form expression. 

Consider you're trying to describe how a final result is derived by successively applying functions from earlier layers. It's akin to narrating a journey through a multi-layered maze, where each step depends on the one before.

### **Chain Rule and its Pitfalls**

To find the derivative of this nested expression, the chain rule of differential calculus becomes essential. The chain rule allows us to differentiate compositions of functions. However, a naive or "blind" use of this rule would lead us to calculate the derivative of the same expression multiple times because of the repeated compositions. This is both computationally expensive and unnecessary.

### **Harnessing Structure for Efficiency**

Here's where the structure of the computational graph shines. By understanding that some nodes (and their computations) are used repeatedly, we can store intermediate results, thereby avoiding redundant calculations. We can use this stored knowledge to move backward through the graph, computing derivatives starting from the outputs. This approach is reminiscent of dynamic programming, a method used in optimization problems to save computation by storing intermediate results.

In the realm of neural networks, this concept has a special name: **backpropagation**. Interestingly, while this idea had been explored in the 1960s in the traditional optimization community, the artificial intelligence researchers only started discussing it in the 1980s, coining the term "backpropagation" in the context of neural networks.

### **The Univariate Chain Rule**

The chain rule's essence can be captured in the context of a single-variable function composition. Mathematically, for a function represented as $f(g(x))$, the chain rule states:

$$
\frac{\partial f(g(x))}{\partial x} = \frac{\partial f(g(x))}{\partial g(x)} \times \frac{\partial g(x)}{\partial x}
$$

Here, each term on the right is a local gradient, meaning it only considers a small part of the total function, making computation more manageable. The final gradient is then the product of these local gradients.

### **An Illustrative Example**

Consider two functions, $f(y) = \cos(y)$ and $g(x) = x^2$. Their composition results in $f(g(x)) = \cos(x^2)$. Using the univariate chain rule, the derivative is:

$$
\frac{\partial f(g(x))}{\partial x} = \frac{\partial f(g(x))}{\partial g(x)} \times \frac{\partial g(x)}{\partial x} = -\sin(g(x)) \times 2x = -2x \cdot \sin(x^2)
$$

## Backpropagation in Computational Graphs

In a basic setting, computational graphs present a straightforward representation of calculations, which allows us to visualize how different functions interact with each other. The power of computational graphs lies in their ability to break down complex mathematical operations into simpler components. Especially when dealing with neural networks, understanding the flow of computations can greatly help in the optimization of models. One of the critical aspects of this is the calculation of derivatives, which forms the basis of the backpropagation algorithm.

### Understanding the Computational Graph

Consider the example shown in Figure 2.2. Here, the computational graph is a single path. However, in more expressive networks, it is not always the case. A node might feed its output to multiple subsequent nodes. This fan-out scenario complicates the computation of derivatives. With just a single input $$ x $$, if we have $$ k $$ computational nodes determining the functions $$ g_1(x), g_2(x), \ldots, g_k(x) $$ and these nodes link to an output node computing a function $$ f() $$ with $$ k $$ arguments, the overall function becomes $$ f(g_1(x), \ldots, g_k(x)) $$. To handle this, the multivariate chain rule comes into play:

$$
\frac{\partial f(g_1(x), \ldots, g_k(x))}{\partial x} = \sum_{i=1}^{k} \frac{\partial f(g_1(x), \ldots, g_k(x))}{\partial g_i(x)} \cdot \frac{\partial g_i(x)}{\partial x} \quad (2.3)
$$

### Path-centric View of the Chain Rule

An alternative way to look at the multivariate chain rule is through a path-centric perspective. Instead of focusing on nodes, focus on the paths. For any source-sink node pair, applying the multivariate chain rule recursively reveals that the derivative of the variable in the sink node concerning the source node is the sum of expressions originating from the univariate chain rule applied to all paths between those nodes.

This approach, while providing a direct expression for derivatives, does result in redundant calculations. This is particularly evident when there are many paths between a node pair. The number of these paths can grow exponentially with the path length. This kind of repetition becomes a performance concern in large multilayer networks with shared nodes, as functions might be differentiated multiple times.

An example of this can be observed with the simple function $$ o = \sin(x^2) + \cos(x^2) $$ as depicted in Figure 2.4. Here, the multivariate chain rule gives the derivative of output $$ o $$ with respect to $$ x $$:

$$
\frac{\partial o

}{\partial x} = \frac{\partial K(p,q)}{\partial p} \cdot g'(y) \cdot f'(x) + \frac{\partial K(p,q)}{\partial q} \cdot h'(z) \cdot f'(x)
$$

Which simplifies to:

$$
\frac{\partial o}{\partial x} = -2x \cdot \sin(y) + 2x \cdot \cos(z) = -2x \cdot \sin(x^2) + 2x \cdot \cos(x^2)
$$

Such examples emphasize the importance of understanding the computational graph's structure to avoid redundancies during the differentiation process.

### Pathwise Aggregation

The path-centric perspective of the multivariate chain rule can be summarised:

 For a directed acyclic computational graph where the $$ i^{th} $$ node contains the variable $$ y(i) $$, the local derivative $$ z(i,j) $$ of the directed edge $$ (i,j) $$ is defined as $$ z(i,j) = \frac{\partial y(j)}{\partial y(i)} $$. Given a set of paths $$ P $$ from node $$ s $$ to node $$ t $$ in the graph, the value of $$ \frac{\partial y(t)}{\partial y(s)} $$ is given by computing the product of local gradients along each path in $$ P $$ and summing these products over all paths in $$ P $$.

$$
\frac{\partial y(t)}{\partial y(s)} = \sum_{P \in \mathcal{P}} \prod_{(i,j) \in P} z(i,j)
$$

Alright, let's represent the equations using `$$` as delimiters:

---

## Understanding the Computational Graph Equations

### Number of Paths and Hidden Units

The number of paths between the input and the output in the computational graph grows exponentially. Specifically, for the provided case:

$$ \text{Number of paths} = 2^5 = 32 $$

This implies that the computational graph has five layers, with each layer having two units, hence giving rise to 32 different paths between the input and output.

The `jth` hidden unit of the `ith` layer is symbolized as $ h(i,j) $. The function for each of these hidden units is defined by:

$$ h(i,j) = h(i-1,1) \times h(i-1,2) \quad \forall j \in \{1,2\} $$

This equation indicates that each hidden unit is the product of its two preceding nodes.

### Differentiation and Output 

In the context presented, the output is given by:

$$ o = x^{32} $$

Although this output is straightforward to differentiate with respect to `x` directly, the exponential-time algorithm can be employed to gain insights into its operational dynamics.

### Derivatives of Hidden Units

For each hidden unit $ h(i,j) $, the partial derivatives with respect to its two inputs are:

$$ \frac{\partial h(i,j)}{\partial h(i-1,1)} = h(i-1,2) $$
$$ \frac{\partial h(i,j)}{\partial h(i-1,2)} = h(i-1,1) $$

These equations reveal an interesting property: the partial derivative of a multiplication operation with respect to one of the variables is the other variable.

---

THIS NEEDS FIXING BUT YOU NEED TO FIND OUT HOW TO FIX THE EQUATION IN LATEX!!!

### Derivative with Respect to Input `x`

The derivative of the output `o` with respect to the input `x` can be obtained by summing the products of local derivatives along all 32 paths from the input to the output:

$$ \frac{\partial o}{\partial x} = \sum_{j_1,j_2,j_3,j_4,j_5 \in \{1,2\}^5} h(1,j_1) \cdot h(2,j_2) \cdot h(3,j_3) \cdot h(4,j_4) \cdot h(5,j_5) \cdot x \cdot x^2 \cdot x^4 \cdot x^8 \cdot x^{16} $$

Given the properties of the computational graph and its derivatives, this can be simplified to:

$$ \frac{\partial o}{\partial x} = \sum_{\text{All 32 paths}} x^{31} = 32x^{31} $$

The result is consistent with directly differentiating the function \( o = x^{32} \) with respect to `x`.

---

### Explaining Path-Aggregative Values in Graph Theory

In graph theory, computing all types of path-aggregative values over directed acyclic graphs is done using dynamic programming. Consider a directed acyclic graph in which the value $$ z(i,j) $$ (interpreted as local partial derivative of variable in node `j` with respect to variable in node `i`) is associated with edge $$(i,j)$$. In other words, if $$ y(p) $$ is the variable in the node `p`, we have the following:
$$ z(i,j) = \frac{\partial y(j)}{\partial y(i)} \quad (2.7) $$

An example of such a computational graph is shown in **Figure**. In this case, we have associated the edge $$(2,4)$$ with the corresponding partial derivative. We would like to compute the product of $$ z(i,j) $$ over each path $$ P \in P $$ from source node `s` to output node `t` and then add them in order to obtain the partial derivative:
$$ S(s,t) = \sum_{P \in P} \prod_{(i,j) \in P} z(i,j) \quad (2.8) $$

Let $$ A(i) $$ be the set of nodes at the end points of outgoing edges from node `i`. We can compute the aggregated value $$ S(i,t) $$ for each intermediate node `i` (between source node `s` and output node `t`) using the following well-known dynamic programming update:
$$ S(i,t) \leftarrow \sum_{j \in A(i)} S(j,t)z(i,j) \quad (2.9) $$

This computation can be performed backwards starting from the nodes directly incident on `o`, since $$ S(t,t) = \frac{\partial y(t)}{\partial y(t)} $$ is already known to be 1. This is because the partial derivative of a variable with respect to itself is always 1. Therefore one can describe the pseudocode of this algorithm as follows:
1. Initialize $$ S(t,t) = 1 $$
2. repeat
   - Select an unprocessed node `i` such that the values of $$ S(j,t) $$ for all of its outgoing nodes $$ j \in A(i) $$ are available.
   - Update $$ S(i,t) \leftarrow \sum_{j \in A(i)} S(j,t)z(i,j) $$
3. until all nodes have been selected;

---