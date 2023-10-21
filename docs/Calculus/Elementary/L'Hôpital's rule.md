---
Title: L'Hôpital's rule
sidebar_position: 6
---

## L'Hopital's Rule

L'Hôpital's Rule is a powerful mathematical tool used for finding limits of indeterminate forms of the type \( \frac{0}{0} \) or \( \frac{\infty}{\infty} \). According to this rule:

If

$$ \lim_{x \to a} f(x) = 0 $$

and

$$ \lim_{x \to a} g(x) = 0 $$

or both limits are infinite, and the functions \( f \) and \( g \) are differentiable on an open interval containing \( a \) (except possibly at \( a \)), then

$$ \lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)} $$

provided the limit on the right exists or is infinite.

## Proof of L'Hopital's Rule:

**Proof for the form \( \frac{0}{0} \):**

Given that \( f(a) = 0 \) and \( g(a) = 0 \), let's assume \( g'(a) \neq 0 \) and that \( f(x) \) and \( g(x) \) are differentiable on an interval \( I \) containing \( a \) except possibly at \( a \).

Now, by the definition of the derivative,

$$ f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a} $$

and

$$ g'(a) = \lim_{x \to a} \frac{g(x) - g(a)}{x - a} $$

Since \( f(a) = g(a) = 0 \), these become:

$$ f'(a) = \lim_{x \to a} \frac{f(x)}{x - a} $$

and

$$ g'(a) = \lim_{x \to a} \frac{g(x)}{x - a} $$

Now, using Cauchy's Mean Value Theorem, there exists some \( c \) in \( (a, x) \) such that:

$$ \frac{f(x) - f(a)}{g(x) - g(a)} = \frac{f'(c)}{g'(c)} $$

But \( f(a) = 0 \) and \( g(a) = 0 \). So:

$$ \frac{f(x)}{g(x)} = \frac{f'(c)}{g'(c)} $$

As \( x \to a \), \( c \) also approaches \( a \). So, taking the limit as \( x \to a \) on both sides, we get:

$$ \lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{c \to a} \frac{f'(c)}{g'(c)} = \frac{f'(a)}{g'(a)} $$

This concludes the proof for L'Hopital's Rule for the case \( \frac{0}{0} \). The proof for the \( \frac{\infty}{\infty} \) form is analogous.

---

This explanation and proof are simplified and rely on the Mean Value Theorem. L'Hôpital's Rule is a profound result that helps simplify the evaluation of many difficult limits.