---
Title: Permutations and Combinations
sidebar_position: 2
---

## The Pigeonhole Principle: A Simplified Guide

### The Mathematics of the Birthday Paradox Explained

#### Setting the Stage

The Birthday Paradox asks what the probability is that in a set of $n$ randomly chosen people, some pair of them will have the same birthday. Let's dive into the mathematical details to understand how this probability is calculated and how the Pigeonhole Principle applies.

#### Probability of No Shared Birthdays

To find the probability that at least two people in a group of $n$ share a birthday, it is often easier to first calculate the complementary probability that all $n$ birthdays are different (i.e., unique). 

The probability that the first person has a unique birthday is $1$, as there are no prior birthdays to conflict with. The probability that the second person also has a unique birthday is $\frac{364}{365}$, the third $\frac{363}{365}$, and so on. The probability that all $n$ people have unique birthdays is therefore:

$$
P(\text{All unique}) = 1 \times \frac{364}{365} \times \frac{363}{365} \times \ldots \times \frac{365 - n + 1}{365}
$$

This can also be expressed as:

$$
P(\text{All unique}) = \frac{365!}{(365-n)! \times 365^n}
$$

#### Probability of At Least One Shared Birthday

The probability that at least one pair of people shares a birthday is simply the complement of all birthdays being unique, which is $1 - P(\text{All unique})$:

$$
P(\text{At least one shared}) = 1 - P(\text{All unique}) = 1 - \frac{365!}{(365-n)! \times 365^n}
$$

#### Application of the Pigeonhole Principle

The Pigeonhole Principle in its basic form states that if you have more "pigeons" than "pigeonholes", at least one "pigeonhole" must contain more than one "pigeon". In the context of the Birthday Paradox, when $n > 365$, the probability that at least one pair of people shares a birthday becomes $1$, validating the principle.

Even when $n \leq 365$, the principle provides a conceptual understanding of why even small groups have a surprisingly high likelihood of containing individuals with shared birthdays. Specifically, with each added individual, the number of "unused" birthdays decreases, intensifying the "constraint" on the probability space.

#### Insights

Using the formula for $P(\text{At least one shared})$, you can calculate that with just $n = 23$ people, the probability surpasses $0.5$, meaning that a shared birthday is more likely than not!


### Working this out for $n = 23$
To demonstrate that with $n = 23$ people, the probability of at least one shared birthday surpasses 0.5, we first calculate the complementary probability that all $n$ birthdays are unique:

$$
P(\text{All unique}) = \frac{365!}{(365 - 23 + 1)! \times 365^{23}}
$$

This simplifies to:

$$
P(\text{All unique}) = \frac{365 \times 364 \times 363 \times \ldots \times 343}{365^{23}}
$$

After calculating $P(\text{All unique})$, we can find $P(\text{At least one shared})$ using:

$$
P(\text{At least one shared}) = 1 - P(\text{All unique})
$$

Upon calculation, $P(\text{All unique})$ approximately equals 0.4927. Therefore:

$$
P(\text{At least one shared}) = 1 - 0.4927 = 0.5073
$$

As you can see, $P(\text{At least one shared})$ is greater than 0.5, confirming that in a group of 23 people, it's more likely than not that at least two individuals will share a birthday.

#### Figures to add later...

A plot of $P(\text{At least one shared})$ as a function of $n$ would be illustrative. The x-axis would represent the number of people $n$, ranging from 1 to 100, and the y-axis would represent the probability, ranging from 0 to 1. A horizontal line could mark the $0.5$ level, emphasizing the counterintuitive point where the probability exceeds $0.5$.