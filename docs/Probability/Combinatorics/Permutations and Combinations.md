---
Title: Permutations and Combinations
sidebar_position: 1
---

## Notation for Permutations and Combinations
  
  The notation $^nP_r$ and $^nC_r$ is used to denote permutations and combinations, respectively. Below is a brief explanation of each:
  
  ### Permutations ($^nP_r$)
  
  The notation $^nP_r$ refers to the number of ways to choose $r$ objects from a set of $n$ distinct objects, where the order of selection matters.
  
  $$
  ^nP_r = \frac{n!}{(n-r)!}
  $$
  
  ### Combinations ($^nC_r$)
  
  The notation $^nC_r$ is used to denote the number of ways to select $r$ objects from a set of $n$ distinct objects, where the order of selection does not matter.
  
  $$
  ^nC_r = \frac{n!}{r!(n-r)!}
  $$
  
  ### Factorial Notation ($n!$)
  
  The factorial of a non-negative integer $n$, denoted by $n!$, is the product of all positive integers less than or equal to $n$.
  
  $$
  n! = n \times (n-1) \times (n-2) \times \ldots \times 2 \times 1
  $$
  
  ### Sampling

  Sampling refers to the process of selecting elements from a set, often at random. When each element in the set has an equal likelihood of being chosen, the process is defined as uniform sampling.

  $$
  \text{Let } S = \{s_1, s_2, \ldots, s_n\} \text{ be a set. Sampling refers to choosing an element } s_i \in S.
  $$

## The type of counting problems in probability

  ### Ordered or Unordered Sampling

  The significance of the sequence in which elements are drawn can also vary:

  1. **Ordered**: In this case, the sequence matters, i.e., $(a_1, a_2, a_3) \neq (a_2, a_3, a_1)$.

  2. **Unordered**: The sequence of selection is irrelevant, i.e., $\{a_1, a_2, a_3\} = \{a_2, a_3, a_1\}$.

  ### With or Without Replacement

  When multiple elements are drawn from a set $S$, the manner in which elements are returned or retained can differ:

  1. **With Replacement**: After drawing an element from $S$, it is returned to the set, making it available for future draws. In this scenario, repetition is allowed.

      $$
      \text{Example: } S = \{a_1, a_2, a_3, a_4\}, \text{ Sample with replacement } = (a_3, a_1, a_3)
      $$

  2. **Without Replacement**: Once an element is drawn from $S$, it is not returned, prohibiting its repeated selection.

      $$
      \text{Example: } S = \{a_1, a_2, a_3, a_4\}, \text{ Sample without replacement } = (a_3, a_1)
      $$


  ### The Four Types of Sampling

  Combining these dimensions, we identify four primary types of sampling:

  1. **Ordered Sampling with Replacement**
  2. **Ordered Sampling without Replacement**
  3. **Unordered Sampling with Replacement**
  4. **Unordered Sampling without Replacement**

  Each of these categories has its own set of applicable combinatorial and probabilistic principles.

  This refined terminology guide provides a foundational understanding for tackling counting problems in probability.

### Ordered Sampling with Replacement

  Ordered sampling with replacement refers to the selection of $r$ elements from a set $S$ of $n$ distinct elements where the order of the elements matters, and each element is returned to the set after selection, making it available for future draws.

  #### Mathematical Framework

  In ordered sampling with replacement, each of the $r$ draws can result in one of $n$ outcomes. Consequently, the total number of possible outcomes is given by:

  $$
  N = n^r
  $$

  #### Concrete Example

  Let's consider a set $S = \{A, B, C\}$ and we want to draw 2 elements from $S$ with replacement, in an ordered manner.

  Here, $n = 3$ (size of the set $S$) and $r = 2$ (number of elements to be drawn). According to the formula, the total number of possible outcomes $N$ can be calculated as:

  $$
  N = 3^2 = 9
  $$

  Indeed, we can enumerate these 9 possibilities explicitly:

  $$
  \{(A, A), (A, B), (A, C), (B, A), (B, B), (B, C), (C, A), (C, B), (C, C)\}
  $$

  Each tuple in this set represents a different outcome when we sample 2 elements from $S$ with replacement, in an ordered fashion.

### Ordered Sampling without Replacement

  Ordered sampling without replacement refers to the selection of $r$ elements from a set $S$ of $n$ distinct elements, where the order of the elements matters, and each element is removed from $S$ after being selected, preventing its future selection.

  #### Mathematical Framework

  In ordered sampling without replacement, the total number of possible outcomes $N$ is given by the permutation formula:

  $$
  N = ^nP_r = \frac{n!}{(n-r)!}
  $$

  #### Concrete Example

  Let's consider a set $S = \{A, B, C, D\}$ from which we aim to draw 2 elements without replacement, in an ordered manner.

  Here, $n = 4$ (the size of set $S$) and $r = 2$ (number of elements to be drawn). According to the formula, the total number of possible outcomes $N$ can be calculated as:

  $$
  N = ^4P_2 = \frac{4!}{(4-2)!} = \frac{24}{2} = 12
  $$

  We can also list these 12 possible outcomes explicitly:

  $$
  \{(A, B), (A, C), (A, D), (B, A), (B, C), (B, D), (C, A), (C, B), (C, D), (D, A), (D, B), (D, C)\}
  $$

  Each tuple in this list represents a distinct outcome when we sample 2 elements from $S$ without replacement, in an ordered fashion.

### Unordered Sampling without Replacement

  Unordered sampling without replacement pertains to the selection of $r$ elements from a set $S$ of $n$ distinct elements, where the order of the elements does not matter, and each element is removed from $S$ after selection, prohibiting its future selection.

  #### Mathematical Framework

  In this category, the number of possible outcomes $N$ can be determined using the combination formula:

  $$
  N = ^nC_r = \frac{n!}{r! \, (n - r)!}
  $$

  #### Concrete Example

  Consider a set $S = \{W, X, Y, Z\}$. Let's say we want to draw 2 elements from this set without replacement and in an unordered manner.

  Here, $n = 4$ (size of the set $S$) and $r = 2$ (number of elements to be drawn). According to the formula, the total number of possible outcomes $N$ can be calculated as:

  $$
  N = ^4C_2 = \frac{4!}{2! \, (4 - 2)!} = \frac{24}{2 \times 2} = 6
  $$

  Explicitly listing these 6 possible outcomes, we get:

  $$
  \{(W, X), (W, Y), (W, Z), (X, Y), (X, Z), (Y, Z)\}
  $$

  Each set in this collection represents a distinct outcome when we sample 2 elements from $S$ without replacement, in an unordered fashion.

### Unordered Sampling with Replacement

  When we talk about "unordered sampling with replacement," we're referring to a specific way of picking items from a set. In this method, two things are crucial:

  1. **Order Doesn't Matter**: Whether you pick an apple and then a banana, or a banana followed by an apple, it's all the same.
  2. **Replacement is Allowed**: After you pick an item, like an apple, you put it back, so it could be picked again.

  #### The Math Behind It

  The formula to find the number of ways to do this kind of sampling is:

  $$
  N = \frac{(n + r - 1)!}{r! \, (n - 1)!}
  $$

  Here, $N$ is the total number of ways to pick the items, $n$ is the number of different kinds of items you have, and $r$ is the number of items you want to pick. The symbols $!$ indicate factorial, meaning you multiply all the numbers down to 1 (e.g., $4! = 4 \times 3 \times 2 \times 1 = 24$).

  #### Concrete Example: Picking Fruits

  Imagine you have a fruit basket with 3 types of fruits: Apple, Banana, and Cherry ($n = 3$). You want to pick 2 fruits ($r = 2$).

  Using the formula, we find:

  $$
  N = \frac{(3 + 2 - 1)!}{2! \, (3 - 1)!} = \frac{4!}{2! \, 2!} = \frac{24}{4} = 6
  $$

  So, there are 6 different ways you could end up with a pair of fruits from the basket when you're picking them without caring about the order and putting each fruit back after picking it.

  These 6 ways would be:

  $$
  \{(Apple, Apple), (Apple, Banana), (Apple, Cherry), (Banana, Banana), (Banana, Cherry), (Cherry, Cherry)\}
  $$

  Note: In each of these sets, you can't tell which fruit was picked first because the order doesn't matter.

  #### Why This Makes Sense

  To make it even simpler, think of it this way:

  1. **First Pick**: You can pick any of the 3 fruits. Let's say you pick an apple.
  2. **Replacement**: You put the apple back, so there are still 3 types of fruits in the basket.
  3. **Second Pick**: Again, you can pick any of the 3 fruits.

  Because you're replacing the fruits and the order doesn't matter, the possible sets of fruits you can end up with are precisely those 6 sets we listed.

  And there you have it! Now you understand the nitty-gritty of unordered sampling with replacement.