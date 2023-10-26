---
Title: Discrete Random Variables
sidebar_position: 3
---

# Discrete Random Variables: Quantitative Insights into Random Phenomena

In probability theory and statistics, the concept of a random variable serves as a mathematical abstraction to quantify randomness. While random variables can be either continuous or discrete, this section specifically focuses on discrete random variables, breaking down their mathematical formulation, characteristics, and applications.

## Definition

A discrete random variable $X$ is a function that maps each outcome in a sample space $S$ to a real number:

$$
X: S \rightarrow \mathbb{R}
$$

In other words, a discrete random variable assigns a numerical value to each possible outcome of a random experiment.

To elucidate these concepts, let's consider a basic example: rolling a fair six-sided die. The sample space $S$ is $\{1, 2, 3, 4, 5, 6\}$.

### Probability Mass Function (PMF)

The PMF, denoted as $p_X(x)$, assigns probabilities to the values that $X$ can take. For our die roll:

$$
p_X(x) = \frac{1}{6}, \quad x \in \{1, 2, 3, 4, 5, 6\}
$$

### Cumulative Distribution Function (CDF)

The CDF $F_X(x)$ is the probability that $X$ takes on a value less than or equal to $x$:

$$
F_X(x) = \sum_{t \leq x} p_X(t)
$$

For our die roll, $F_X(3) = p_X(1) + p_X(2) + p_X(3) = \frac{1}{6} + \frac{1}{6} + \frac{1}{6} = \frac{1}{2}$.

### Expectation

The expectation $\mathbb{E}[X]$ is the "average" outcome, calculated as:

$$
\mathbb{E}[X] = \sum_{x \in S} x \cdot p_X(x) = 1 \cdot \frac{1}{6} + 2 \cdot \frac{1}{6} + \ldots + 6 \cdot \frac{1}{6} = 3.5
$$

### Variance

The variance $\text{Var}(X)$ measures how dispersed the values are around the mean:

$$
\text{Var}(X) = \sum_{x \in S} (x - \mathbb{E}[X])^2 \cdot p_X(x) = \left( (1 - 3.5)^2 + \ldots + (6 - 3.5)^2 \right) \frac{1}{6} = 2.92
$$


## Applications and Implications

Discrete random variables often model countable phenomena like the number of heads in a sequence of coin flips, or the number of defective items in a batch. They are indispensable in fields like machine learning for classification tasks, economics for modeling consumer choice, and operations research for optimizing discrete systems.

## Bernoulli and Binomial Distributions

These are classic examples of discrete random variables. A Bernoulli distribution models a single trial (success/failure), whereas a binomial distribution extends this to $n$ independent trials.

### Bernoulli Distribution

A Bernoulli distribution models a single trial of a random experiment that results in a success with probability $p$ or failure with probability $1-p$.

#### Definition and PMF
The probability mass function (PMF) of a Bernoulli distribution $X$ is defined as:

$$
p_X(x) = 
\begin{cases}
p, & \text{if } x = 1 \\
1-p, & \text{if } x = 0
\end{cases}
$$

#### Expectation and Variance
The expectation $\mathbb{E}[X]$ and variance $\text{Var}(X)$ are:

$$
\mathbb{E}[X] = 1 \cdot p + 0 \cdot (1-p) = p, \quad \text{Var}(X) = (1 - p)^2 \cdot (1-p) + (1 - p)^2 \cdot p = p(1-p)
$$

### Binomial Distribution

When $n$ independent Bernoulli trials are conducted, the number of successes is modeled by a Binomial distribution.

#### Definition and PMF
For $n$ independent Bernoulli trials each with success probability $p$, the PMF of a Binomial distribution $X$ is:

$$
p_X(k) = \binom{n}{k} p^k (1-p)^{(n-k)}, \quad k \in \{0,1,2,\ldots,n\}
$$

where $\binom{n}{k}$ is the number of combinations of $n$ objects taken $k$ at a time.

#### Expectation and Variance
For a Binomial distribution, the expectation and variance are:

$$
\mathbb{E}[X] = n \cdot p, \quad \text{Var}(X) = n \cdot p \cdot (1-p)
$$

### Example: Coin Flipping

Suppose we flip a fair coin $n = 5$ times. Each flip is a Bernoulli trial with $p = 0.5$.

The PMF of the Binomial distribution $X$ for this case is:

$$
p_X(k) = \binom{5}{k} \left( \frac{1}{2} \right)^k \left( \frac{1}{2} \right)^{(5-k)}, \quad k \in \{0,1,2,3,4,5\}
$$

The expectation and variance would be:

$$
\mathbb{E}[X] = 5 \times 0.5 = 2.5, \quad \text{Var}(X) = 5 \times 0.5 \times 0.5 = 1.25
$$

## Conclusions

Discrete random variables provide a robust mathematical framework for quantifying and reasoning about uncertainty in countable spaces. Through their PMFs, CDFs, and moments (like expectation and variance), they offer a plethora of avenues for both theoretical inquiry and empirical analysis.

FIGURE TO ADD LATER here would be a plot of a PMF and CDF for a typical discrete random variable, illustrating how probabilities are distributed over the sample space.
