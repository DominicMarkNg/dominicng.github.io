---
slug: Infinite-Nests
title: Infinite Nested Sets
authors: dng
tags: [settheory, maths]
---

##Question:
$$A_n = [0, \frac{1}{n}) = \{ x \in \mathbb{R} | 0 \leq x < \frac{1}{n} \}$$

$$A = \bigcap_{n=1}^{\infty} A_n = A_1 \cap A_2 \cap \cdots$$

$$Prove A = {0}$$

This problem demonstrates the behavior of infinite intersections of nested sets. The sets $A_n$ are nested, meaning that $A_{n+1} \subseteq A_n$ for all $n \in \mathbb{N}$. The interval $A_n$ becomes arbitrarily small as $n$ increases, but it always contains numbers greater than 0. However, there is no real number that is in every $A_n$, and thus the intersection of all the $A_n$ is the empty set. This can be shown formally as follows:

Let's suppose, for contradiction, that there exists an $x \in A = \bigcap_{n=1}^{\infty} A_n$. By the definition of intersection, this would imply that $x$ is in every set $A_n$. However, for every real number $x$ in the interval $[0, \frac{1}{n})$, there exists an $n$ such that $x$ is not in the interval $[0, \frac{1}{n+1})$ because $\frac{1}{n+1} < \frac{1}{n}$ for all $n \in \mathbb{N}$, and thus $x \geq \frac{1}{n+1}$. This is a contradiction, implying that there does not exist such an $x$ in the intersection of all $A_n$, and thus $A = \emptyset$.

Suppose for contradiction:

$$x \in A = \bigcap_{n=1}^{\infty} A_n$$

By definition of intersection, $x$ is in every set $A_n$. However, for every real number $x$ in the interval $[0, \frac{1}{n})$, there exists an $n$ such that $x$ is not in the interval $[0, \frac{1}{n+1})$ because 

$$\frac{1}{n+1} < \frac{1}{n}$$ 

for all $n \in \mathbb{N}$, and thus $x \geq \frac{1}{n+1}$. This is a contradiction, implying that there does not exist such an $x$ in the intersection of all $A_n$, and thus $A = \emptyset$.

Alright, let's simplify this discussion with an analogy. Imagine you have a sequence of shrinking boxes:

1. In the first scenario, the box (let's call it Box 1) has a length of 1 foot.
2. In the next scenario, the box (Box 2) has a length of 1/2 foot.
3. In the third scenario, the box (Box 3) has a length of 1/3 foot.
4. And so on... The box keeps shrinking.

Now, the question is, if you keep going like this, shrinking the box in each scenario, what do you have left at the end?

The mathematical notation you provided describes this scenario but with intervals (a type of set) instead of boxes. The notation $A_n = [0, \frac{1}{n})$ is just a fancy way of describing these shrinking boxes (or intervals). Here, $n$ represents the scenario number, and $\frac{1}{n}$ tells you the length of the box in that scenario.

The expression $$A = \bigcap_{n=1}^{\infty} A_n$$ is asking what is common to all these boxes if you go through all the scenarios (from 1 to infinity). In other words, it's like asking: Is there a piece of space that remains covered by all the boxes, no matter how small they get?

In this case, the answer is no. There's no piece of space that remains covered by all the boxes in all scenarios because the boxes keep getting smaller and smaller, and eventually, they don't cover anything. So the intersection of all these shrinking intervals (or the common space covered by all the boxes) is empty. In mathematical terms, we say the intersection of all these sets (or intervals) is the empty set, denoted as $$A = \emptyset$$.

Now, regarding the inequality $\frac{n+1}{n} > \frac{1}{n}$, this is just a mathematical way of showing that as you go from one scenario to the next (e.g., from Box 1 to Box 2, from Box 2 to Box 3, etc.), the box is indeed getting smaller.