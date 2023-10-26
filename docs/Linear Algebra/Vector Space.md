---
Title: Vector Space
sidebar_position: 3
---

---
## Defining the reach of a line
In a geometric context, a line $L$ in a Euclidean space (e.g., $\mathbb{R}^2$ or $\mathbb{R}^3$) is typically defined as the set of all points that can be obtained by starting from a point $\mathbf{p}$ on the line and moving along a particular direction vector $\mathbf{d}$. This is expressed parametrically as follows:

$$L = \{ \mathbf{p} + t\mathbf{d} : t \in \mathbb{R} \}$$

Here:
- $\mathbf{p}$ is a vector representing a specific point on the line.
- $\mathbf{d}$ is a non-zero vector indicating the direction of the line.
- $t$ is a scalar parameter that varies over all real numbers $\mathbb{R}$.

As $t$ varies, $\mathbf{p} + t\mathbf{d}$ generates all the points on the line $L$. When $t = 0$, the expression equals $\mathbf{p}$, so the line passes through point $\mathbf{p}$. As $t$ increases or decreases, we move along the line in the direction of $\mathbf{d}$ or opposite to $\mathbf{d}$, respectively.

The eight properties of vector spaces can be organized under the following headings:

## Defining the set of vectors orthogonal to a given line
An orthogonal vector to the line $L$ is a vector that is perpendicular to any vector lying on $L$, or more specifically, perpendicular to the direction vector $\mathbf{d}$ of the line $L$.

The set of all vectors orthogonal to the line $L$ defined by the direction vector $\mathbf{d}$ is given by the set:

$$O = \{ \mathbf{v} \in \mathbb{R}^n : \mathbf{v} \cdot \mathbf{d} = 0 \}$$

Here:
- $\mathbf{v}$ is a vector in the n-dimensional Euclidean space $\mathbb{R}^n$.
- $\cdot$ denotes the dot product.
- $\mathbf{d}$ is the direction vector of the line $L$.

In this set definition, $\mathbf{v} \cdot \mathbf{d} = 0$ is the condition for orthogonality between the vector $\mathbf{v}$ and the direction vector $\mathbf{d}$ of the line $L$.

---
## Defining the line in a Euclidean space that does **not** pass through the origin

In Euclidean space, a line in a plane that does not pass through the origin can be represented parametrically or in a normal form.

1. **Parametric form**:
A line in a plane can be represented parametrically as:

$$L = \{ \mathbf{p} + t\mathbf{d} : t \in \mathbb{R} \}$$

where:
- $\mathbf{p}$ is a vector representing a specific point on the line,
- $\mathbf{d}$ is a non-zero vector indicating the direction of the line,
- $t$ is a scalar parameter that varies over all real numbers $\mathbb{R}$.

In this form, if $\mathbf{p}$ is not the zero vector and $\mathbf{d}$ is not parallel to $\mathbf{p}$, the line will not pass through the origin.

2. **Normal form**:
In the normal form, $L$ represents a line in the plane, and is defined as the set of all vectors $\mathbf{v}$ in $\mathbb{R}^2$ that satisfy a particular linear equation. The equation $n_1x + n_2y = d$ is the normal form of the line, where $(n_1, n_2)$ is the normal vector to the line, and $d$ is the constant term. 

Here's the formal definition of a line $L$ in a plane that does not pass through the origin, using the given form:

$$L = \{ \mathbf{v} = (x, y) \in \mathbb{R}^2 \, | \, n_1x + n_2y = d, \, d \neq 0 \}$$

In this definition:
- $\mathbf{v} = (x, y)$ represents a point on the line.
- $(n_1, n_2)$ is the normal vector to the line.
- $d$ is a nonzero constant term, ensuring that the line does not pass through the origin.

The condition $d \neq 0$ ensures that the line does not pass through the origin, as when $d = 0$, the line would pass through the origin. 

Each of these forms gives a way to represent a line in a plane that does not pass through the origin, using different types of information about the line.

---
## The properties of a vector space
1. **Abelian Groups (related to vector addition)**:
   - **Closure under Addition**:
     $$\mathbf{u} + \mathbf{v} \in V$$
   - **Associativity of Addition**:
     $$(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$$
   - **Commutativity of Addition**:
     $$\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$$
   - **Existence of Additive Identity**:
     There exists a vector $\mathbf{0}$ in $V$ such that for all vectors $\mathbf{u}$ in $V$, $\mathbf{u} + \mathbf{0} = \mathbf{u}$.
   - **Existence of Additive Inverse**:
     For every vector $\mathbf{u}$ in $V$, there exists a vector $-\mathbf{u}$ in $V$ such that $\mathbf{u} + (-\mathbf{u}) = \mathbf{0}$.

2. **Scalar Multiplication**:
   - **Closure under Scalar Multiplication**:
     $$c\mathbf{u} \in V$$

3. **Distributive Laws**:
   - **Distributivity of Scalar Multiplication with respect to Vector Addition**:
     $$c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$$
   - **Distributivity of Scalar Multiplication with respect to Scalar Addition**:
     $$(a + b)\mathbf{u} = a\mathbf{u} + b\mathbf{u}$$

These properties together provide a structure that ensures a set of vectors, along with the operations of vector addition and scalar multiplication, forms a vector space.

However, apart from proving that a given space is a vector space and the task of proving these axioms it doesn't seem helpful to memorise these axioms. Instead, I think a better approach is to memorise the three larger subdivisions (vector addition, multiplication, and the distributive laws).

---
## Subspace
Sometimes we are presented with a particular equation and we need to know if we can do 'vector' stuff to it (i.e. does this equation represent a vector space). We can do this by working through the characterization of subspaces within a vector space.

1. **Zero Vector Inclusion**:
   The zero vector $\mathbf{0}$ is an element of $U$, i.e., $U$ contains the zero vector from the vector space $\mathbb{R}^n$.
   $$\mathbf{0} \in U$$

2. **Closure under Scalar Multiplication**:
   For any vector $\mathbf{u}$ in $U$ and any scalar $\lambda$ from $\mathbb{R}$, the product $\lambda\mathbf{u}$ is also an element of $U$.
   $$\mathbf{u} \in U, \, \lambda \in \mathbb{R} \implies \lambda\mathbf{u} \in U$$

3. **Closure under Vector Addition**:
   For any two vectors $\mathbf{u}, \mathbf{v}$ in $U$, their sum $\mathbf{u} + \mathbf{v}$ is also an element of $U$.
   $$\mathbf{u}, \mathbf{v} \in U \implies \mathbf{u} + \mathbf{v} \in U$$

These characterizations define a subspace $U$ within a vector space $\mathbb{R}^n$. They ensure that $U$ itself forms a vector space under the same vector addition and scalar multiplication operations as $\mathbb{R}^n$. By satisfying these properties, $U$ exhibits the essential structure of a vector space, making it a subspace of $\mathbb{R}^n$.

### Worked through example
Let's consider a subset $U$ of $\mathbb{R}^3$ defined by all vectors that satisfy a particular linear equation, say $2x - y + z = 0$. The subset $U$ can be described as:

$$U = \{ (x, y, z) \in \mathbb{R}^3 \, | \, 2x - y + z = 0 \}$$

Now, let's verify if $U$ is a subspace of $\mathbb{R}^3$ by checking the properties:

1. **Zero Vector Inclusion**:
   The vector $(0, 0, 0)$ satisfies the equation $2x - y + z = 0$, hence $(0, 0, 0) \in U$.

2. **Closure under Scalar Multiplication**:
   Let's take a vector $\mathbf{u} = (x, y, z)$ from $U$ which satisfies $2x - y + z = 0$, and a scalar $\lambda$ from $\mathbb{R}$. The vector $\lambda\mathbf{u} = (\lambda x, \lambda y, \lambda z)$ should also satisfy the equation:
   $$2(\lambda x) - (\lambda y) + (\lambda z) = \lambda(2x - y + z) = 0$$
   Since $\mathbf{u}$ is in $U$, $2x - y + z = 0$, and thus $\lambda\mathbf{u}$ is also in $U$.

3. **Closure under Vector Addition**:
   Let's take two vectors $\mathbf{u} = (x_1, y_1, z_1)$ and $\mathbf{v} = (x_2, y_2, z_2)$ from $U$. Their sum $\mathbf{u} + \mathbf{v} = (x_1 + x_2, y_1 + y_2, z_1 + z_2)$ should also satisfy the equation:
   $$2(x_1 + x_2) - (y_1 + y_2) + (z_1 + z_2) = (2x_1 - y_1 + z_1) + (2x_2 - y_2 + z_2) = 0 + 0 = 0$$
   Since $\mathbf{u}$ and $\mathbf{v}$ are in $U$, $2x_1 - y_1 + z_1 = 0$ and $2x_2 - y_2 + z_2 = 0$, and thus $\mathbf{u} + \mathbf{v}$ is also in $U$.

Since all three properties are satisfied, $U$ is indeed a linear subspace of $\mathbb{R}^3$.

### Example of a non-linear subspace

A subset defined by an equation involving a non-linear term like \(x^2\) is not a linear subspace. In vector spaces and their subspaces, the operations of vector addition and scalar multiplication must always yield elements within the set, and this requires the set to be defined linearly.

Let's consider a set \(U\) in \(\mathbb{R}^2\) defined by the equation \(x^2 + y = 0\):

$$U = \{(x, y) \in \mathbb{R}^2 \, | \, x^2 + y = 0\}$$

Now, let's check the properties of subspaces:

1. **Zero Vector Inclusion**:
   The vector (0,0) is in \(U\) as \(0^2 + 0 = 0\).

2. **Closure under Scalar Multiplication**:
   Let's take a vector \((x, y)\) from \(U\) and a scalar \(\lambda\). The vector \(\lambda(x, y) = (\lambda x, \lambda y)\) results in the equation \((\lambda x)^2 + \lambda y = \lambda^2 x^2 + \lambda y \neq 0\) unless \(\lambda = 0\). This violates the property of closure under scalar multiplication.

3. **Closure under Vector Addition**:
   Let's consider two vectors \((x_1, y_1)\) and \((x_2, y_2)\) from \(U\). Their sum is \((x_1 + x_2, y_1 + y_2)\). Substituting into the defining equation of \(U\), we get \((x_1 + x_2)^2 + (y_1 + y_2) = x_1^2 + 2x_1x_2 + x_2^2 + y_1 + y_2\). This does not satisfy the equation \(x^2 + y = 0\) unless \(2x_1x_2 + y_1 + y_2 = 0\), which is not guaranteed for all \(x_1, x_2, y_1, y_2 \in \mathbb{R}\). So this violates the property of closure under vector addition.

Due to these violations, the set \(U\) defined by the equation \(x^2 + y = 0\) is not a linear subspace of \(\mathbb{R}^2\).

---
## Span

The span of a set of vectors is the set of all linear combinations of the vectors in the set. It's a fundamental concept in linear algebra, capturing the idea of generating a space from a set of vectors. Formally, the span of a set of vectors $\{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \}$ is defined as follows:

$$\text{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k) = \left\{ c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \ldots + c_k\mathbf{v}_k \, | \, c_1, c_2, \ldots, c_k \in \mathbb{R} \right\}$$

Here:

- $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k$ are the vectors in the set,
- $c_1, c_2, \ldots, c_k$ are scalars from the real numbers $\mathbb{R}$,
- The expression $c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \ldots + c_k\mathbf{v}_k$ represents a linear combination of the vectors in the set.

The span of these vectors comprises all possible linear combinations of the vectors, and represents a subspace of the vector space that the vectors belong to.

---
## Inner Product (or dot product)
The inner product is a binary operation on a vector space that generalizes the dot product. In a real vector space, an inner product is a function that takes two vectors $\mathbf{u}$ and $\mathbf{v}$ and returns a real number, denoted $\langle \mathbf{u}, \mathbf{v} \rangle$, satisfying the following properties:

1. **Positive Definiteness**:
   For any vector $\mathbf{u}$ in the vector space, the inner product of $\mathbf{u}$ with itself is non-negative, and it is zero if and only if $\mathbf{u}$ is the zero vector:
   $$\langle \mathbf{u}, \mathbf{u} \rangle \geq 0$$
   $$\langle \mathbf{u}, \mathbf{u} \rangle = 0 \, \text{ if and only if } \, \mathbf{u} = \mathbf{0}$$

2. **Symmetry**:
   The inner product is commutative, meaning that swapping the order of the vectors does not change the result:
   $$\langle \mathbf{u}, \mathbf{v} \rangle = \langle \mathbf{v}, \mathbf{u} \rangle$$

3. **Linearity**:
   The inner product is linear in each argument. This property is often split into two separate properties: 
   - **Homogeneity** in each argument:
     $$\langle c\mathbf{u}, \mathbf{v} \rangle = c \langle \mathbf{u}, \mathbf{v} \rangle$$
     $$\langle \mathbf{u}, c\mathbf{v} \rangle = c \langle \mathbf{u}, \mathbf{v} \rangle$$
     for all scalars $c$.
   - **Additivity** in each argument:
     $$\langle \mathbf{u} + \mathbf{w}, \mathbf{v} \rangle = \langle \mathbf{u}, \mathbf{v} \rangle + \langle \mathbf{w}, \mathbf{v} \rangle$$
     $$\langle \mathbf{u}, \mathbf{v} + \mathbf{w} \rangle = \langle \mathbf{u}, \mathbf{v} \rangle + \langle \mathbf{u}, \mathbf{w} \rangle$$

These properties define a structure on the vector space that allows for the definition of angles and lengths, which are crucial in many areas of mathematics and physics.

---
## Norm's
A norm is a function that assigns a strictly positive length or size to all vectors in a vector space, except for the zero vector, which is assigned a length of zero. It formalizes the notion of length and distance in a vector space. Formally, a norm $||\cdot||$ on a vector space $V$ is a function $||\cdot||: V \rightarrow \mathbb{R}$ satisfying the following properties for all vectors $\mathbf{u}, \mathbf{v}$ in $V$ and all scalars $c$ in $\mathbb{R}$:

1. **Non-negativity**:
$$||\mathbf{u}|| \geq 0$$

2. **Definiteness**:
$$||\mathbf{u}|| = 0 \, \text{ if and only if } \, \mathbf{u} = \mathbf{0}$$

3. **Scalar Multiplication**:
$$||c\mathbf{u}|| = |c| \, ||\mathbf{u}||$$

4. **Triangle Inequality**:
$$||\mathbf{u} + \mathbf{v}|| \leq ||\mathbf{u}|| + ||\mathbf{v}||$$

### Euclidean Norm:
The Euclidean norm (or $L^2$ norm) is a specific type of norm defined on the Euclidean space $\mathbb{R}^n$. It's derived from the Euclidean inner product, and is defined by the formula:

$$||\mathbf{u}|| = \sqrt{\langle \mathbf{u}, \mathbf{u} \rangle} = \sqrt{u_1^2 + u_2^2 + \ldots + u_n^2}$$

where $\mathbf{u} = (u_1, u_2, \ldots, u_n)$ is a vector in $\mathbb{R}^n$.

In simpler terms, the Euclidean norm measures the "ordinary" straight-line distance from the origin to the point identified by the vector $\mathbf{u}$ in $n$-dimensional space. It is a natural extension of the Pythagorean theorem to more than two dimensions. The Euclidean norm is widely used due to its intuitive geometric interpretation and computational simplicity.

---
## Cross-Product of a vector
The cross product is a binary operation on two vectors in three-dimensional space. It produces a third vector that is orthogonal (perpendicular) to the plane of the input vectors. The magnitude of the resulting vector is equal to the area of the parallelogram spanned by the input vectors. The cross product is denoted by $\mathbf{u} \times \mathbf{v}$, where $\mathbf{u}$ and $\mathbf{v}$ are the input vectors.

Formally, if $\mathbf{u} = (u_1, u_2, u_3)$ and $\mathbf{v} = (v_1, v_2, v_3)$, then their cross product is given by:

$$\mathbf{u} \times \mathbf{v} = (u_2v_3 - u_3v_2, u_3v_1 - u_1v_3, u_1v_2 - u_2v_1)$$

Here's some intuition behind the properties of the cross product:

1. **Orthogonality**:
   The cross product is orthogonal to the original vectors because of the way its components are calculated. Each component of the cross product is computed as the determinant of a 2x2 matrix formed by deleting the row and column of the component's index, which geometrically corresponds to the signed area of the parallelogram formed by the other two components. This ensures that the resulting vector is orthogonal to the plane formed by $\mathbf{u}$ and $\mathbf{v}$.

2. **Magnitude as Area of the Parallelogram**:
   The magnitude of the cross product is given by the formula:

$$||\mathbf{u} \times \mathbf{v}|| = ||\mathbf{u}|| \, ||\mathbf{v}|| \, \sin(\theta)$$

   where $\theta$ is the angle between $\mathbf{u}$ and $\mathbf{v}$. This formula is exactly the formula for the area of a parallelogram, where the sides of the parallelogram are given by the magnitudes of $\mathbf{u}$ and $\mathbf{v}$, and $\sin(\theta)$ gives the "height" of the parallelogram. Hence, the magnitude of the cross product geometrically represents the area of the parallelogram spanned by $\mathbf{u}$ and $\mathbf{v}$.

### Why does a cross-product have these properties?
This explanation is illustrating a connection between the cross product, dot product, and determinants in the context of geometric interpretations, particularly relating to the volume of a parallelepiped and the area of a parallelogram.

1. **Defining Vector $\mathbf{p}$**:
   The vector $\mathbf{p}$ is defined such that its dot product with any vector $(x, y, z)$ is equal to the determinant of the matrix $M$ with columns formed by vectors $(x, y, z)$, $\mathbf{v} = (v_1, v_2, v_3)$, and $\mathbf{w} = (w_1, w_2, w_3)$. This determinant is geometrically equal to the volume of the parallelepiped formed by these three vectors.

$$
\mathbf{p} \cdot (x, y, z) = \det(M)
$$

2. **Volume of Parallelepiped**:
   The volume of a parallelepiped is given by the product of the area of the base and the height. The base is a parallelogram spanned by vectors $\mathbf{v}$ and $\mathbf{w}$, and the height is the component of vector $(x, y, z)$ that is perpendicular to this parallelogram.

$$\text{Volume} = \text{Area of base} \times \text{Height}$$

3. **Calculating Height**:
   The height can be found by taking the dot product of $(x, y, z)$ with a unit vector $\mathbf{u}$ that is perpendicular to the parallelogram. Thus, the volume of the parallelepiped can also be expressed as:

$$
\text{Volume} = \text{Area of base} \times (\mathbf{u} \cdot (x, y, z))
$$

Comparing this expression to the expression for the determinant of $M$, it is evident that:

$$
\text{Area of base} \times (\mathbf{u} \cdot (x, y, z)) = \mathbf{p} \cdot (x, y, z)
$$

From this comparison, it's clear that the vector $\mathbf{p}$ must be equivalent to the product of the area of the base (area of the parallelogram spanned by $\mathbf{v}$ and $\mathbf{w}$) and the unit vector $\mathbf{u}$ perpendicular to the parallelogram:

$$
\text{Area of base} \times \mathbf{u} = \mathbf{p}
$$

This conclusion reveals that vector $\mathbf{p}$ is:

1. **Perpendicular to both $\mathbf{v}$ and $\mathbf{w}$**, as it is aligned with the unit vector $\mathbf{u}$ which is by definition perpendicular to the parallelogram spanned by $\mathbf{v}$ and $\mathbf{w}$.
2. Its magnitude is equal to the **area of the parallelogram spanned by $\mathbf{v}$ and $\mathbf{w}$**.

This geometric interpretation elegantly ties together the algebraic operations of dot product, cross product, and determinants with the geometric concepts of volumes and areas in three-dimensional space.

---
## 