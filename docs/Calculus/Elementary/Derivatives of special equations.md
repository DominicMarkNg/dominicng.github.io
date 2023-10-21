---
Title: Derivatives of special equations
sidebar_position: 4
---

## Proof for the Derivative of $\sin(x)$ Being $\cos(x)$

**Step 1:** Starting with the definition of the derivative:
$$ f'(x) = \lim_{{h} \to 0} \frac{\sin(x+h) - \sin(x)}{h} $$

**Step 2:** Utilizing the trigonometric identity:
$$ \sin(A + B) = \sin(A)\cos(B) + \cos(A)\sin(B) $$
Plugging this in for $A = x$ and $B = h$, we get:
$$ \sin(x+h) = \sin(x)\cos(h) + \cos(x)\sin(h) $$

**Step 3:** Substituting this expansion into our derivative definition, we get:
$$ f'(x) = \lim_{{h} \to 0} \frac{\sin(x)\cos(h) + \cos(x)\sin(h) - \sin(x)}{h} $$

**Step 4:** Grouping terms:
$$ f'(x) = \sin(x) \lim_{{h} \to 0} \frac{\cos(h) - 1}{h} + \cos(x) \lim_{{h} \to 0} \frac{\sin(h)}{h} $$

**Step 5:** As $h \to 0$, the limit $\frac{\cos(h) - 1}{h}$ approaches 0, which can be derived using L'Hôpital's Rule or Taylor series. This will make the first term zero.

**Step 6:** For the second term, we recognize a very important limit:
$$ \lim_{{h} \to 0} \frac{\sin(h)}{h} = 1 $$

To see this, consider the unit circle. If you take a small angle $h$ (measured in radians), the arc of the circle corresponding to that angle has a length approximately $h$. The vertical line segment from the x-axis to the arc has a length $\sin(h)$. As the angle $h$ approaches 0, the arc of the circle and the vertical line segment both become very small and approach the same length, making the ratio of their lengths approach 1.

**Step 7:** Plugging in this limit result:
$$ f'(x) = 0 + \cos(x) = \cos(x) $$

Thus, the derivative of $\sin(x)$ with respect to $x$ is $\cos(x)$.

## Proof for the Derivative of $\cos(x)$ Being $-\sin(x)$

Using the proof we derived for the derivative of $\sin(x)$ being $\cos(x)$, we can deduce the derivative of $\cos(x)$.

**Step 1:** Start with the definition of the derivative:
$$ f'(x) = \lim_{{h} \to 0} \frac{\cos(x+h) - \cos(x)}{h} $$

**Step 2:** Utilizing the trigonometric identity:
$$ \cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B) $$
Plugging this in for $A = x$ and $B = h$, we get:
$$ \cos(x+h) = \cos(x)\cos(h) - \sin(x)\sin(h) $$

**Step 3:** Substituting this expansion into our derivative definition, we have:
$$ f'(x) = \lim_{{h} \to 0} \frac{\cos(x)\cos(h) - \sin(x)\sin(h) - \cos(x)}{h} $$

**Step 4:** Grouping terms:
$$ f'(x) = \cos(x) \lim_{{h} \to 0} \frac{\cos(h) - 1}{h} - \sin(x) \lim_{{h} \to 0} \frac{\sin(h)}{h} $$

**Step 5:** From the proof of the derivative of $\sin(x)$, we have:
$$ \lim_{{h} \to 0} \frac{\cos(h) - 1}{h} = 0 $$
and
$$ \lim_{{h} \to 0} \frac{\sin(h)}{h} = 1 $$

**Step 6:** Plugging in these limit results:
$$ f'(x) = 0 - \sin(x) = -\sin(x) $$

Thus, the derivative of $\cos(x)$ with respect to $x$ is $-\sin(x)$. 

By leveraging the previous proof for the derivative of $\sin(x)$, we're able to succinctly determine the derivative of $\cos(x)$.

## Proof for the Derivative of \(e^x\)

**Step 1:** Start with the definition of the derivative:

$$ f'(x) = \lim_{{h} \to 0} \frac{e^{x+h} - e^x}{h} $$

**Step 2:** Utilize properties of exponentials:

We know that \(e^{x+h} = e^x \cdot e^h\). Using this property, we can rewrite the above as:

$$ f'(x) = \lim_{{h} \to 0} \frac{e^x \cdot e^h - e^x}{h} $$

**Step 3:** Factor out the common term \(e^x\):

$$ f'(x) = e^x \lim_{{h} \to 0} \frac{e^h - 1}{h} $$

**Step 4:** Use the defining property of \(e\):

By definition, the number \(e\) is the unique positive number such that:

$$ \lim_{{h} \to 0} \frac{e^h - 1}{h} = 1 $$

This is essentially the definition of the number \(e\). Using this property, the expression becomes:

$$ f'(x) = e^x \cdot 1 = e^x $$

Therefore, the derivative of \(e^x\) with respect to \(x\) is \(e^x\).

## Derivative of \( \ln(x) \)

### **Given:** 
The derivative of \(e^x\) is \(e^x\).

### **Goal:** 
To find the derivative of \( \ln(x) \).

### **Proof:**

**Step 1:** Define the function:

Let \( y = \ln(x) \).

**Step 2:** Use properties of logarithms:

Using the inverse property of logarithms and exponentials, we can write:

\[ x = e^y \]

**Step 3:** Differentiate both sides with respect to \( x \):

Using the chain rule, the left side becomes \( \frac{dx}{dx} = 1 \) and the right side becomes \( e^y \cdot \frac{dy}{dx} \).

So, 

\[ 1 = e^y \cdot \frac{dy}{dx} \]

**Step 4:** Solve for \( \frac{dy}{dx} \):

\[ \frac{dy}{dx} = \frac{1}{e^y} \]

**Step 5:** Substitute back the original function:

From step 1, we know \( y = \ln(x) \), so \( e^y = x \).

Therefore, 

\[ \frac{dy}{dx} = \frac{1}{x} \]

The derivative of \( \ln(x) \) with respect to \( x \) is \( \frac{1}{x} \).