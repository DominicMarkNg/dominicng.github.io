---
Title: Graph Theory Basics
sidebar_position: 3
---

## Graphs: The Super Easy Guide
### What's a Node and what's an Edge?
Think of a node like a dot on a connect-the-dots picture. It's just a spot where something can happen or start.


An edge is like the line you draw to connect two dots in a connect-the-dots picture. It joins two nodes (dots) together.

## Now with Maths!

Alright, let's level up a little bit. You remember the dots (nodes) and lines (edges) we talked about? Great. Now, let's talk about them using some special math words and formulas.

### Undirected Graph: The Two-Way Street

In an undirected graph, the lines between the dots go both ways. You can go from one dot to another, and then go back the same way.

#### In Math Talk

We say that the set of all dots (nodes) is $ N $, and it contains elements like $ n_1, n_2, \ldots, n_n $.

The lines (edges) are in the set $ E $, and each line connects two different dots. In math terms, $ E = \{ \{n_i, n_j\} : n_i, n_j \in N, i \neq j \} $.

### Directed Graph: The One-Way Street

In a directed graph, the lines between the dots have arrows. That means you can only go from one dot to another in the direction of the arrow.

#### In Math Talk

Again, the dots (nodes) are in a set $ V $ and are like $ v_1, v_2, \ldots, v_n $.

For the lines with arrows (directed edges), we use ordered pairs of dots to show which way the arrow is pointing. So, in math terms, $ E = \{ (v_i, v_j) : v_i, v_j \in V, i \neq j \} $.

In an **Undirected Graph**, edges are like two-way streets. The mathematical set $ E $ would contain pairs representing these streets, like $ \{A, B\} $, which would mean you can go from bus stop A to bus stop B and vice versa.

In a **Directed Graph**, edges are like one-way streets. In this case, $ E $ would contain ordered pairs, such as $ (A, B) $, meaning you can only go from bus stop A to bus stop B, but not the other way around.

# Adjacency Matrix in Graph Theory

In the realm of graph theory, the adjacency matrix serves as a compact, linear algebraic representation of a graph. It facilitates computational algorithms and also gives rise to intriguing mathematical properties.

## Formal Definition

For a graph $ G = (V, E) $, where $ V $ is the set of vertices and $ E $ is the set of edges, the adjacency matrix $ A = [a_{ij}] $ is a square matrix of order $ |V| \times |V| $. The elements $ a_{ij} $ are defined as follows:

$$
a_{ij} = 
\begin{cases}
1, & \text{if there exists an edge between vertex $ v_i $ and vertex $ v_j $ in $ E $} \\
0, & \text{otherwise}
\end{cases}
$$

## Properties

1. **Symmetry**: For an undirected graph, the adjacency matrix is symmetric, meaning $ A = A^T $.
2. **Diagonal Elements**: For simple graphs (no loops), the diagonal elements $ a_{ii} $ are always zero.
3. **Non-negative Integers**: In the case of weighted graphs, $ a_{ij} $ could be a non-negative integer or real number representing the weight of the edge.

## Eigenvalues and Eigenvectors

The adjacency matrix has a rich structure that can be explored through its eigenvalues and eigenvectors. These can be used in spectral graph theory to analyze the graph's structure, identify communities, and more.

## Algorithmic Utility

Adjacency matrices are particularly useful for graph algorithms that require frequent lookup to check for the existence of an edge between vertices. The time complexity for such a check is $ O(1) $.

## Example

Consider a graph $ G $ with vertices $ V = \{v_1, v_2, v_3\} $ and edges $ E = \{(v_1, v_2), (v_2, v_3)\} $. The adjacency matrix $ A $ for this graph is:

$$
A = \begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 0
\end{pmatrix}
$$

Here, $ a_{12} = 1 $ indicates an edge between $ v_1 $ and $ v_2 $, and $ a_{13} = 0 $ indicates the absence of an edge between $ v_1 $ and $ v_3 $.

### In Simple Terms

- The number $ a_{ij} $ is in row $ i $ and column $ j $ of the matrix.
- If there's a line from dot $ i $ to dot $ j $, $ a_{ij} = 1 $.
- If there's no line, $ a_{ij} = 0 $.

## Example with 3 Nodes

Let's say you have 3 dots (nodes): A, B, and C.

- A and B are connected.
- B and C are connected.
- A and C are not connected.

Your Adjacency Matrix would look like this:

$$
A = \begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 0
\end{pmatrix}
$$

- The "0"s on the diagonal from the top-left to the bottom-right represent that a node can't connect to itself.
- The "1" at $ a_{12} $ means there's a line between node A and node B. 
- The "0" at $ a_{13} $ means there's no line between node A and node C.

## Computational Considerations

The space complexity of storing an adjacency matrix is $ O(|V|^2) $, which can be prohibitive for large sparse graphs. Alternative representations like adjacency lists might be more space-efficient in those cases.

Figures that would be useful here include a diagram illustrating the adjacency matrix next to a graph, highlighting how each cell $ a_{ij} $ corresponds to an edge in the graph.