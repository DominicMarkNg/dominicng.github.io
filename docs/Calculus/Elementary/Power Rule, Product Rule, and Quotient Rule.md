---
Title: Power Rule, Product Rule, and Quotient Rule
sidebar_position: 5
---

## Power Rule Using the Binomial Theorem
### Statement:
If $f(x) = x^n$ where $n$ is a constant, then $f'(x) = nx^{n-1}$.

### Proof:
To find $f'(x)$, we'll use the limit definition of the derivative:
$$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$
Substitute in for $f(x)$:
$$ f'(x) = \lim_{h \to 0} \frac{(x+h)^n - x^n}{h} $$

Now, let's expand $(x + h)^n$ using the binomial theorem. The binomial theorem states:
$$ (x + h)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k}h^k $$

For our purposes, let's expand the first few terms:
$$ (x + h)^n = x^n + \binom{n}{1}x^{n-1}h + \binom{n}{2}x^{n-2}h^2 + \dots $$

Plugging this into our expression for the derivative, we have:
$$ f'(x) = \lim_{h \to 0} \frac{x^n + nx^{n-1}h + \text{terms with } h^2 \text{ and higher} - x^n}{h} $$

Certainly! Let's dive a bit deeper into how we derived the coefficient $n$ for the term $nx^{n-1}$ using the binomial coefficient.

The coefficient of the term $x^{n-1}h$ is given by the binomial coefficient:
$$ \binom{n}{1} = \frac{n!}{1!(n-1)!} $$

Breaking down the binomial coefficient:
1. $n!$ is the factorial of $n$, which means $n \times (n-1) \times (n-2) \times \dots \times 1$.
2. $1!$ is simply 1.
3. $(n-1)!$ is the factorial of $(n-1)$, which is $(n-1) \times (n-2) \times \dots \times 1$.

Now, let's compute the value:
$$ \binom{n}{1} = \frac{n!}{1!(n-1)!} $$

To simplify, notice that the terms from 1 up to $(n-1)$ in the numerator and denominator will cancel out:
$$ \binom{n}{1} = \frac{n \times (n-1) \times (n-2) \times \dots \times 1}{1 \times (n-1) \times (n-2) \times \dots \times 1} = n $$

Thus, we've derived the coefficient $n$ for the term $nx^{n-1}$, which is a crucial part of the power rule.

Combining this with our earlier result, we can see that when differentiating the function $f(x) = x^n$, the term corresponding to $x^{n-1}h$ in the binomial expansion has a coefficient of $n$, resulting in the derivative being $f'(x) = nx^{n-1}$.

The $x^n$ terms cancel out:
$$ f'(x) = \lim_{h \to 0} \left( nx^{n-1} + \text{terms with } h \right) $$

Now, since every term in the expansion (after the $nx^{n-1}h$ term) has at least a factor of $h^2$, when we divide by $h$, we're left with terms that still have at least one factor of $h$. As $h \to 0$, all these terms go to 0. 

Therefore, the only term that survives is:
$$ f'(x) = nx^{n-1} $$

And that completes the proof using the binomial theorem.

Certainly!

This image provides a visual representation of the proof for the product rule of differentiation.

Breaking it down:

1. The top equation defines the derivative of a function $f(x)$:

$$ \frac{df(x)}{dx} = \lim_{{h \to 0}} \frac{f(x+h) - f(x)}{h} $$

This is the fundamental definition of a derivative.

2. The next part of the image sets up the differentiation of the product of two functions, $f(x)g(x)$:

$$ \frac{d}{dx} [f(x)g(x)] = \lim_{{h \to 0}} \frac{f(x+h)g(x+h) - f(x)g(x)}{h} $$

This expression expands the change in the product as $x$ changes by a small amount $h$.

3. The image then breaks this difference quotient into two terms:

$$ = \lim_{{h \to 0}} \left( f(x+h) \frac{g(x+h) - g(x)}{h} + g(x) \frac{f(x+h) - f(x)}{h} \right) $$

The breakdown here is done

cleverly by adding and subtracting the term $f(x+h)g(x)$:

$$ f(x+h)g(x+h) - f(x)g(x) = \left( f(x+h)g(x+h) - f(x+h)g(x) \right) + \left( f(x+h)g(x) - f(x)g(x) \right) $$

This splits the change in the product into the change due to $f$ (holding $g$ constant) and the change due to $g$ (holding $f$ constant).

Finally, when we take the limit as $h \to 0$, each of these terms will lead to the derivatives of $f$ and $g$:

$$ = f'(x)g(x) + f(x)g'(x) $$

This is the product rule: the derivative of the product of two functions is the derivative of the first times the second plus the first times the derivative of the second.

### Proof of the Quotient Rule

Given a function of the form
$$ u(x) = \frac{f(x)}{g(x)} $$
where both \( f \) and \( g \) are differentiable and \( g(x) \neq 0 \). We want to find the derivative of \( u \).

**Step 1:** Multiply and divide by the conjugate expression:
$$ \frac{u(x+h) - u(x)}{h} = \frac{\frac{f(x+h)}{g(x+h)} - \frac{f(x)}{g(x)}}{h} \times \frac{g(x+h) + g(x)}{g(x+h) + g(x)} $$

**Step 2:** Simplify:
$$ = \frac{f(x+h)g(x) + f(x)g(x+h) - f(x)g(x+h) - f(x+h)g(x)}{h(g(x+h)g(x))} $$

**Step 3:** Group the terms:
$$ = \frac{f(x+h)g(x) - f(x)g(x) + f(x)g(x+h) - f(x+h)g(x)}{h(g(x+h)g(x))} $$

**Step 4:** Break it up:
$$ = \frac{f(x+h) - f(x)}{h} \times \frac{g(x)}{g(x+h)g(x)} + \frac{g(x+h) - g(x)}{h} \times \frac{-f(x)}{g(x+h)g(x)} $$

**Step 5:** Taking the limit as \( h \to 0 \):
$$ \frac{du(x)}{dx} = f'(x)\frac{g(x)}{g^2(x)} - g'(x)\frac{f(x)}{g^2(x)} $$

This simplifies to the quotient rule:
$$ \frac{du(x)}{dx} = \frac{f'(x)g(x) - f(x)g'(x)}{g^2(x)} $$

