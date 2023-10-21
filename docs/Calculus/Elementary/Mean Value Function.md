---
Title: Mean Value Function
sidebar_position: 7
---

### Mean Value Theorem (MVT)

The Mean Value Theorem is a fundamental theorem in differential calculus that relates the average rate of change of a function over an interval to the instantaneous rate of change of the function at a particular point in that interval.

#### Statement of the Theorem:

Let $f$ be a function that satisfies the following conditions:

1. $f$ is continuous on the closed interval $[a, b]$.
2. $f$ is differentiable on the open interval $(a, b)$.

Then, there exists at least one number $c$ in the open interval $(a, b)$ such that:
$$ f'(c) = \frac{f(b) - f(a)}{b - a} $$

The left side, $f'(c)$, represents the instantaneous rate of change of the function at the point $c$, while the right side, $\frac{f(b) - f(a)}{b - a}$, represents the average rate of change of the function over the interval $[a, b]$.

#### Intuitive Explanation:

In simpler terms, if you were to draw a secant line connecting the points $(a, f(a))$ and $(b, f(b))$ on the graph of $f$, then there is at least one point $c$ within the interval $[a, b]$ where the tangent to the curve has the same slope as this secant line. This is essentially saying that at some point in the interval, the function's instantaneous rate of change matches its average rate of change over the entire interval.

### Mean Value Theorem & Speeding: A Real-World Application

Imagine you're on a road trip and traveling on a highway with a speed limit of 80 miles per hour (mph). You're trying to get to your destination as quickly as possible but, of course, without breaking the speed limit. After a while, you get pulled over by a police officer who claims you were speeding. 

"How could you possibly know that?" you argue. "You didn't see me speeding!"

The officer takes out two timestamps: one from when you passed a certain point A and another from when you passed point B. The distance between A and B is 85 miles, and the timestamps show you covered that distance in just one hour.

Now, here's where the Mean Value Theorem comes in!

#### Understanding the Mean Value Theorem

In mathematical terms, the Mean Value Theorem states that if a function \( f \) is continuous on the closed interval \([a, b]\) and differentiable on the open interval \((a, b)\), then there exists some number \( c \) in the interval \((a, b)\) such that:

\[ f'(c) = \frac{f(b) - f(a)}{b - a} \]

In simpler words, there is some point between A and B where the instantaneous rate of change (or speed, in this case) equals the average rate of change over the interval.

#### Applying the Mean Value Theorem to Our Speeding Scenario

Given you covered 85 miles in one hour, your average speed over that interval was:

\[ \text{Average speed} = \frac{85 \text{ miles}}{1 \text{ hour}} = 85 \text{ mph} \]

Since 85 mph is greater than the speed limit of 80 mph, the Mean Value Theorem tells us that at some point between A and B, your instantaneous speed must have been exactly 85 mph. In other words, you were definitely speeding at some point!

#### Conclusion

Using the power of calculus and the Mean Value Theorem, the officer was able to deduce that you were speeding without having seen you do it in real-time. This theorem provides a powerful tool not only in understanding the behavior of functions but also in real-world scenarios, such as ensuring drivers adhere to speed limits for the safety of all road users.

So, next time you're on the road, remember the Mean Value Theorem and drive safely!
