---
Title: Set Theory and Notation
sidebar_position: 1
---

# Introduction to Set Theory Notation

In set theory, specific symbols represent distinct sets of numbers. These include:

- $\mathbb{N}$ for natural numbers: $\{1,2,3,\dots\}$
- $\mathbb{Z}$ for integers: $\{\dots,-3,-2,-1,0,1,2,3,\dots\}$
- $\mathbb{Q}$ for rational numbers and $\mathbb{R}$ for real numbers.
- Complex numbers are represented by $\mathbb{C}$ and are of the form $a+bi$, where $a$ and $b$ are real numbers, and $i$ is the square root of -1.

Intervals on the real line can be:
- Open (excluding endpoints) like $(-1,3)$
- Closed (including endpoints) like $[2,3]$
- A combination, such as $[1,2)$.

Sets can also be defined by stating the properties of their elements. For instance:
- $A=\{x|x \text{ satisfies a property}\}$
- $A=\{x:x \text{ satisfies a property}\}$, 
where "|" and ":" mean "such that."

For example, the set of rational numbers is $\mathbb{Q}=\left\{\frac{a}{b}\middle|a,b\in\mathbb{Z},b\neq0\right\}$.

Concepts to understand:
- The idea of subsets ( $A \subset B$ ) and supersets ( $B \supset A$ )
- Every natural number is an integer, so $\mathbb{N} \subset \mathbb{Z}$
- Sets are equal if they possess the same elements, e.g., $\{1,2,3\}=\{3,2,1\}$

Special Sets:
- The empty set, represented by $\emptyset$, has no elements.
- Every set is a subset of the universal set, often denoted as $S$. Depending on context, for dice rolls, it's $S=\{1,2,3,4,5,6\}$ and for coin tosses, it's $S=\{H,T\}$.

## Set Operations

In mathematics, set operations are essential tools for manipulating sets and understanding their relationships. Let's explore some fundamental set operations:

### Union

The union of two sets, denoted as $A \cup B$, is a set that contains all elements that belong to either set $A$ or set $B$ or both. Mathematically:

$$A \cup B = \{x \,|\, x \in A \text{ or } x \in B\}$$

For example, if we have two sets $\{1,2\}$ and $\{2,3\}$, their union is $\{1,2,3\}$ . We can express this operation as $x \in (A \cup B)$ if and only if $(x \in A)$ or $(x \in B)$.

### Intersection

The intersection of two sets, denoted as $A \cap B$, consists of all elements that are present in both set $A$ and set $B$. Mathematically:

$$A \cap B = \{x \,|\, x \in A \text{ and } x \in B\}$$

For instance, the intersection of $\{1,2\}$ and $\{2,3\}$ results in $\{2\}$. We can visualize the intersection using a Venn diagram.

### Generalized Union and Intersection

We can extend these operations to three or more sets. If we have sets $A_1, A_2, A_3, \ldots, A_n$, their union $A_1 \cup A_2 \cup A_3 \ldots \cup A_n$ contains all elements present in at least one of the sets. This can be written more concisely as:

$$\bigcup_{i=1}^{n} A_i$$

Similarly, the intersection $\bigcap_{i=1}^{n} A_i$ contains elements that are common to all $A_i$'s.

### Complement

The complement of a set $A$, denoted as $A^c$ or $\overline{A}$, consists of all elements that belong to the universal set $S$ but are not in $A$. In other words, it's everything outside of $A$.

### Difference

The difference between two sets $A$ and $B$, denoted as $A - B$, contains elements that are in $A$ but not in $B$. This can also be expressed as $A - B = A \cap B^c$.

### Mutual Exclusivity

Two sets $A$ and $B$ are mutually exclusive or disjoint if they have no shared elements, which means their intersection is the empty set, $A \cap B = \emptyset$. More generally, several sets are called disjoint if no two of them share a common element.

These fundamental set operations are crucial for various mathematical and logical operations, enabling us to manipulate sets to analyze and solve complex problems.

# De Morgan's Laws in Set Theory

De Morgan's laws are fundamental principles in set theory and logic that describe how to negate complex statements involving unions and intersections of sets. These laws are named after the British mathematician and logician Augustus De Morgan and provide a way to express the complement (negation) of set operations.

## First De Morgan's Law

The first De Morgan's law relates to the complement of a union of sets. It states that the complement of the union of two sets is equal to the intersection of their complements. Mathematically, for sets A and B:

$$(A \cup B)^c = A^c \cap B^c$$

In words, the complement of the union of two sets is the same as the intersection of their complements.

## Second De Morgan's Law

The second De Morgan's law pertains to the complement of an intersection of sets. It states that the complement of the intersection of two sets is equal to the union of their complements. For sets A and B:

$$(A \cap B)^c = A^c \cup B^c$$

In simple terms, the complement of the intersection of two sets is equivalent to the union of the complements of those sets.

## Practical Applications

De Morgan's laws are particularly useful when dealing with logic, probability, and set operations in mathematics. They allow us to simplify complex expressions and make them more manageable. These laws also find applications in computer science and digital circuit design, where they help optimize logical operations.

## Example

Let's illustrate De Morgan's laws with an example:

Suppose we have two sets:
- A = {1, 2, 3}
- B = {2, 3, 4}

We want to find the complement of the union of these sets, $(A \cup B)^c$.

1. First, find $A \cup B$:
   $(A \cup B) = \{1, 2, 3\} \cup \{2, 3, 4\} = \{1, 2, 3, 4\}$

2. Now, take the complement of $A \cup B$:
   $(A \cup B)^c$ contains all elements not in $A \cup B$, so
   $(A \cup B)^c = \{x \,|\, x \notin \{1, 2, 3, 4\}\} = \{x \,|\, x \notin A \text{ and } x \notin B\} = A^c \cap B^c.$

By applying the first De Morgan's law, we've shown that $(A \cup B)^c = A^c \cap B^c$, which confirms the validity of De Morgan's laws.

# Distributive Law

The Distributive Law is a fundamental principle in mathematics, particularly in algebra. It describes how multiplication distributes over addition or subtraction. There are two forms of the Distributive Law:

## Left Distributive Law

The left distributive law states that for any real numbers $a$, $b$, and $c$:

$$a \cdot (b + c) = (a \cdot b) + (a \cdot c)$$

In other words, you can distribute the multiplication $a$ across the addition $b + c$, resulting in the sum of $a \cdot b$ and $a \cdot c$.

## Right Distributive Law

The right distributive law is similar but works in the opposite direction. It states that for any real numbers $a$, $b$, and $c$:

$$(b + c) \cdot a = (b \cdot a) + (c \cdot a)$$

Here, you can distribute the multiplication $a$ across the addition $b + c$, resulting in the sum of $b \cdot a$ and $c \cdot a$.

## Application

The Distributive Law is a crucial concept in algebra and is used extensively in simplifying expressions and solving equations. It allows us to break down complex expressions into simpler ones, making mathematical calculations more manageable.

### Example

Let's illustrate the Distributive Law with an example:

Suppose we have the expression $3 \cdot (2 + 4)$. We can apply the left distributive law to simplify it as follows:

$$3 \cdot (2 + 4) = (3 \cdot 2) + (3 \cdot 4) = 6 + 12 = 18$$

The Distributive Law enables us to distribute the multiplication across the addition, making the calculation straightforward.

In summary, the Distributive Law plays a fundamental role in mathematics, aiding in the simplification of expressions and solving equations involving multiplication and addition (or subtraction).

# Cartesian Product and the Multiplication Principle

In mathematics, the **Cartesian product** of two sets, denoted as $A \times B$, combines ordered pairs from sets $A$ and $B$. In other words, if $C = A \times B$, then each element in $C$ takes the form $(x, y)$, where $x$ is an element of set $A$, and $y$ is an element of set $B$:

$$
A \times B = \{(x, y) \, | \, x \in A \text{ and } y \in B\}
$$

For example, if $A = \{1, 2, 3\}$ and $B = \{H, T\}$, then:

$$
A \times B = \{(1, H), (1, T), (2, H), (2, T), (3, H), (3, T)\}
$$

It's important to note that the order of pairs matters, so $(1, H)$ is distinct from $(H, 1)$, making $A \times B$ different from $B \times A$.

If you have two finite sets $A$ and $B$, where $A$ has $M$ elements and $B$ has $N$ elements, then $A \times B$ contains $M \times N$ elements. This principle is known as the multiplication principle and is valuable in counting the elements in sets. The number of elements in a set is denoted by $|A|$, so we write $|A| = M$, $|B| = N$, and $|A \times B| = MN$. In the example given, $|A| = 3$, $|B| = 2$, thus $|A \times B| = 3 \times 2 = 6$.

The Cartesian product of $n$ sets $A_1, A_2, \ldots, A_n$ can be defined as:

$$
A_1 \times A_2 \times A_3 \times \ldots \times A_n = \{(x_1, x_2, \ldots, x_n) \, | \, x_1 \in A_1, x_2 \in A_2, \ldots, x_n \in A_n\}
$$

The multiplication principle states that for finite sets $A_1, A_2, \ldots, A_n$, if $|A_1| = M_1$, $|A_2| = M_2$, \ldots, $|A_n| = M_n$, then:

$$
|A_1 \times A_2 \times A_3 \times \ldots \times A_n| = M_1 \times M_2 \times M_3 \times \ldots \times M_n
$$

An important example of sets obtained using a Cartesian product is $\mathbb{R}^n$, where $n$ is a natural number. For $n = 2$:

$$
\mathbb{R}^2 = \mathbb{R} \times \mathbb{R} = \{(x, y) \, | \, x \in \mathbb{R}, y \in \mathbb{R}\}
$$

Thus, $\mathbb{R}^2$ represents all points in the two-dimensional plane, and similarly, $\mathbb{R}^3 = \mathbb{R} \times \mathbb{R} \times \mathbb{R}$, and so on.

# Cardinality of Sets and the Inclusion-Exclusion Principle

In mathematics, the **cardinality** of a set, denoted as $|A|$, represents the size or number of elements in the set.

## Finite Sets

For finite sets, determining cardinality is straightforward. If set $A$ has a finite number of elements, its cardinality is the count of those elements. For example, if $A = \{2, 4, 6, 8, 10\}$, then $|A| = 5$.

## Inclusion-Exclusion Principle

The **inclusion-exclusion principle** is a useful rule for combining the cardinalities of sets, especially when dealing with unions.

### Two Sets $A$ and $B$

For two finite sets $A$ and $B$, the cardinality of their union is calculated as:

$$
|A \cup B| = |A| + |B| - |A \cap B|
$$

This formula accounts for the double-counting of elements in $A \cap B$ when adding $|A|$ and $|B|$.

### Three Sets $A$, $B$, and $C$

For three sets $A$, $B$, and $C$, the formula becomes:

$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
$$

### Generalization to $n$ Sets

This pattern continues for $n$ finite sets $A_1, A_2, A_3, \ldots, A_n$, and the formula is:

$$
|A_1 \cup A_2 \cup A_3 \cup \ldots \cup A_n| = \sum_{i=1}^{n} |A_i| - \sum_{i < j} |A_i \cap A_j| + \sum_{i < j < k} |A_i \cap A_j \cap A_k| - \ldots + (-1)^{n+1} |A_1 \cap A_2 \cap \ldots \cap A_n|
$$

These principles are essential in counting elements and solving problems involving the sizes of unions and intersections of sets.

# Countable and Uncountable Sets

## Infinite Sets

When dealing with infinite sets, we encounter two distinct types: countable and uncountable sets. Countable sets, such as $ \mathbb{N} $ (natural numbers) and $ \mathbb{Z} $ (integers), possess a property that allows us to list their elements, while uncountable sets, like $ \mathbb{R} $ (real numbers), cannot be listed in such a manner. This distinction arises from the different "sizes" of these infinite sets.

## Countable Sets

Countable sets can be listed, meaning their elements can be arranged in a sequence like $ A = \{a_1, a_2, \ldots\} $. For example, $ \mathbb{N} $ can be listed as $ \mathbb{N} = \{1, 2, 3, \ldots\} $, and $ \mathbb{Z} $ as $ \mathbb{Z} = \{0, 1, -1, 2, -2, 3, -3, \ldots\} $. The crucial characteristic of countable sets is that they can be put into a one-to-one correspondence with natural numbers, denoted by $ \mathbb{N} $. In other words, there exists a way to match each element of the countable set with a unique natural number.

### Definition

A set $ A $ is called countable if one of the following conditions holds:

1. It is a finite set, i.e., $ |A| < \infty $.
2. It can be put in one-to-one correspondence with natural numbers, in which case the set is said to be countably infinite.

Sets that do not meet these conditions are classified as uncountable sets.

## Uncountable Sets

Uncountable sets, in contrast, cannot be listed in a sequence like countable sets can. The quintessential example of an uncountable set is $ \mathbb{R} $, the set of real numbers. It is impossible to list all real numbers in a systematic way because there are more real numbers than there are natural numbers. In mathematical terms, $ \mathbb{R} $ is uncountable.

### Guideline

For practical purposes, we can use the following guideline to determine whether a set is countable or not:

- $ \mathbb{N} $, $ \mathbb{Z} $, $ \mathbb{Q} $ (rational numbers), and any of their subsets are countable.
- Any set containing an interval on the real line, such as $ [a, b] $, $ (a, b] $, $ [a, b) $, or $ (a, b) $, where $ a < b $, is uncountable.

This rule is generally sufficient for most applications in applied probability. However, for a more in-depth understanding and formal proofs, additional results and theorems can be employed to determine whether a set is countable or uncountable. If you prefer not to delve into proofs, you may choose to skip this section.

In summary, the distinction between countable and uncountable sets is a fundamental concept in mathematics, especially in areas like probability theory, where it helps us classify sets based on their "size" and properties.

