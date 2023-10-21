---
Title: Basic Rules and Proofs
sidebar_position: 3
---

## Constant Rule
### Statement:
If $ f(x) = c $ where $ c $ is a constant, then $ f'(x) = 0 $.

### Proof:
Using the limit definition of a derivative, 
$$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$
$$ f'(x) = \lim_{h \to 0} \frac{c - c}{h} $$
$$ f'(x) = \lim_{h \to 0} 0 = 0 $$

## Sum Rule
### Statement:
If $ f(x) $ and $ g(x) $ are differentiable functions, then the derivative of $ f(x) + g(x) $ is $ f'(x) + g'(x) $.

### Proof:
$$ \frac{d}{dx} [f(x) + g(x)] = \lim_{h \to 0} \frac{f(x+h) + g(x+h) - f(x) - g(x)}{h} $$
$$ = \lim_{h \to 0} \left[ \frac{f(x+h) - f(x)}{h} + \frac{g(x+h) - g(x)}{h} \right] $$
$$ = f'(x) + g'(x) $$

## Constant Multiple Rule
### Statement:
If $ f(x) $ is a differentiable function and $ c $ is a constant, then the derivative of $ cf(x) $ is $ cf'(x) $.

### Proof:
$$ \frac{d}{dx} [cf(x)] = \lim_{h \to 0} \frac{c[f(x+h) - f(x)]}{h} $$
$$ = c \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$
$$ = cf'(x) $$

Of course, here's the proof with the replacements made:


