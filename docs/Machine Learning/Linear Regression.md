---
Title: Introduction
sidebar_position: 1
sidebar_label: Introduction
---
---
Linear regression is a fundamental technique in statistical modeling and machine learning, aimed at predicting a continuous dependent variable based on one or more independent variables. The relationship between the dependent and independent variables is assumed to be linear. The classical formulation of linear regression can be written as:

$$
y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \ldots + \beta_p x_p + \epsilon,
$$

where:
- $y$ is the dependent variable,
- $x_1, x_2, \ldots, x_p$ are the independent variables,
- $\beta_0, \beta_1, \ldots, \beta_p$ are the coefficients to be estimated,
- $\epsilon$ is the error term assumed to be normally distributed with mean zero and constant variance, $\epsilon \sim N(0, \sigma^2)$.

The objective is to find the coefficients $\beta$ that minimize the residual sum of squares (RSS):

$$
RSS(\beta) = \sum_{i=1}^{N} (y_i - (\beta_0 + \beta_1 x_{i1} + \ldots + \beta_p x_{ip}))^2.
$$

Now, transitioning to a probabilistic framework, the relationship between the dependent and independent variables can be modeled using a conditional probability distribution. This leads to a more generalized formulation of linear regression as follows:

$$
p(y|x, \theta) = N (y|w^T x, \sigma^2),
$$

where:
- $p(y|x, \theta)$ denotes the conditional probability distribution of $y$ given $x$ and $\theta$,
- $N$ denotes the normal distribution,
- $w$ represents the weight vector (analogous to the coefficients $\beta$ in the classical formulation),
- $x$ is the vector of independent variables,
- $\sigma^2$ is the variance of the errors.

In this formulation, the linear regression model is expressed as a probabilistic model, where the observed data is assumed to be generated from a normal distribution with a mean equal to the linear combination of the independent variables ($w^T x$) and a constant variance $\sigma^2$. This probabilistic perspective provides a foundation for Bayesian approaches to linear regression, where prior beliefs about the parameters $\theta$ (which includes $w$ and $\sigma^2$) can be combined with the likelihood of the observed data to compute posterior distributions over the parameters, thus providing a richer framework for inference and prediction.

---
## Maximum Likelihood Estimation
The log-likelihood and the negative log-likelihood are derived from the likelihood function, which is central to statistical inference in probabilistic models. Here is a step-by-step breakdown of how these expressions are derived and what they represent in terms of probability:

1. **Likelihood Function**:
   The likelihood function represents the probability of observing the given data $D$ under different values of the parameters $\theta$. It is expressed as:
   $$
   \mathcal{L}(\theta | D) = p(D|\theta).
   $$
   In the case of independent and identically distributed (i.i.d.) data, the likelihood function can be factorized into the product of probabilities for each data point:
   $$
   \mathcal{L}(\theta | D) = \prod_{i=1}^n p(y_i|x_i, \theta).
   $$

2. **Log-Likelihood**:
   The log-likelihood is simply the natural logarithm of the likelihood function. It is often used because it transforms the product of probabilities into a sum of logarithms, which is mathematically more tractable:
   $$
   l(\theta) = \log \mathcal{L}(\theta | D) = \sum_{i=1}^n \log p(y_i|x_i, \theta).
   $$

3. **Negative Log-Likelihood (NLL)**:
   The negative log-likelihood is the negation of the log-likelihood:
   $$
   NLL(\theta) = -l(\theta) = -\sum_{i=1}^n \log p(y_i|x_i, \theta).
   $$

4. **Probability Representation**:
   The terms $p(y_i|x_i, \theta)$ in the expressions for $l(\theta)$ and $NLL(\theta)$ are the probabilities of observing the data points $y_i$ given the inputs $x_i$ and the parameters $\theta$.

   - The **log-likelihood** $l(\theta)$ sums the logarithm of these probabilities across all data points. A higher value of $l(\theta)$ indicates that the observed data is more probable under the parameters $\theta$. Therefore, maximizing $l(\theta)$ is equivalent to finding the parameter values $\theta$ that make the observed data most probable.
   
   - The **negative log-likelihood** $NLL(\theta)$ negates the sum of log-probabilities. A lower value of $NLL(\theta)$ indicates that the observed data is more probable under the parameters $\theta$. Therefore, minimizing $NLL(\theta)$ is also equivalent to finding the parameter values $\theta$ that make the observed data most probable.

5. **Information Content**:
   The log-likelihood and negative log-likelihood also have interpretations in terms of information theory. The term $-\log p(y_i|x_i, \theta)$ represents the information content or "surprise" associated with observing $y_i$ given $x_i$ and $\theta$. The sum of these terms across all data points gives a measure of the total information content or "surprise" in the observed data given the model and parameters.

In essence, the log-likelihood and negative log-likelihood serve as measures of the probability of the observed data under different values of the parameters $\theta$, and therefore play central roles in the estimation of these parameters.

Now if we now include the Gaussian error term and the residual sum of squares we get the below:

6. **Gaussian Error Term**:
   In linear regression models, we often assume that the errors (residuals) between the observed outcomes and the predictions made by the model follow a Gaussian (normal) distribution. This assumption is denoted as:
   $$
   y_i = f(x_i, \theta) + \epsilon_i
   $$
   where $f(x_i, \theta)$ is the prediction made by the model with parameters $\theta$ for input $x_i$, and $\epsilon_i$ is the error term that follows a Gaussian distribution:
   $$
   \epsilon_i \sim \mathcal{N}(0, \sigma^2).
   $$
   Given this, the probability of observing $y_i$ for given $x_i$ and $\theta$ is:
   $$
   p(y_i|x_i, \theta) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y_i - f(x_i, \theta))^2}{2\sigma^2}\right).
   $$

7. **Residual Sum of Squares**:
   The residual for each data point $i$ is:
   $$
   r_i = y_i - f(x_i, \theta).
   $$
   Squaring this residual and summing over all data points gives the residual sum of squares (RSS):
   $$
   RSS(\theta) = \sum_{i=1}^n r_i^2 = \sum_{i=1}^n (y_i - f(x_i, \theta))^2.
   $$
   When considering the Gaussian error term, the RSS becomes directly linked to the likelihood. For the Gaussian distribution:
   $$
   l(\theta) = -\frac{n}{2} \log(2\pi\sigma^2) - \frac{RSS(\theta)}{2\sigma^2}.
   $$
   It's clear from this equation that the likelihood will be maximized (or the negative log-likelihood minimized) when the RSS is minimized, which is why linear regression can be viewed as minimizing the RSS under the assumption of Gaussian errors.

8. **Connection Between Log-Likelihood and RSS**:
   Under the Gaussian error assumption, maximizing the log-likelihood is equivalent to minimizing the RSS. This is why the ordinary least squares (OLS) method, which minimizes the RSS, gives the maximum likelihood estimates of the parameters when the error term is assumed to be Gaussian.

The inclusion of the Gaussian error term and the residual sum of squares bridges the gap between the probabilistic interpretation (through the likelihood function) and the geometric interpretation (minimizing the squared differences) of linear regression.


<Tabs>
<TabItem value="py" label="Python">

```py
import numpy as np
from scipy.optimize import minimize

# Assume X, y are your data
X = np.array([[1, 2], [3, 4], [5, 6]])  # Example data
y = np.array([1, 2, 3])  # Example data

def negative_log_likelihood(params):
    w = params[:-1]
    sigma_sq = params[-1]
    n = len(y)
    residuals = y - X.dot(w)
    nll = (n/2) * np.log(2 * np.pi * sigma_sq) + (1/(2 * sigma_sq)) * np.sum(residuals**2)
    return nll

# Initial guesses for w and sigma_sq
initial_guess = np.append(np.zeros(X.shape[1]), 1)

# Minimize the negative log-likelihood
result = minimize(negative_log_likelihood, initial_guess, method='BFGS')

# Extract the MLE estimates for w and sigma_sq from the result
mle_w = result.x[:-1]
mle_sigma_sq = result.x[-1]

# Now you can compute the log-likelihood and negative log-likelihood at the MLE estimates
log_likelihood = -negative_log_likelihood(np.append(mle_w, mle_sigma_sq))
nll_at_mle = -log_likelihood

print(f'MLE estimates: w = {mle_w}, sigma^2 = {mle_sigma_sq}')
print(f'Log-likelihood at MLE: {log_likelihood}')
print(f'Negative log-likelihood at MLE: {nll_at_mle}')
```

</TabItem>
<TabItem value="julia" label="Julia">

```julia
using Optim

# Assume X, y are your data
X = [1.0 2.0; 3.0 4.0; 5.0 6.0]  # Example data
y = [1.0, 2.0, 3.0]  # Example data

function negative_log_likelihood(params)
    w = params[1:end-1]
    sigma_sq = params[end]
    n = length(y)
    residuals = y - X * w
    nll = (n / 2) * log(2 * π * sigma_sq) + (1 / (2 * sigma_sq)) * sum(residuals .^ 2)
    return nll
end

# Initial guesses for w and sigma_sq
initial_guess = vcat(zeros(size(X, 2)), 1.0)

# Minimize the negative log-likelihood
result = optimize(negative_log_likelihood, initial_guess, BFGS())

# Extract the MLE estimates for w and sigma_sq from the result
mle_w = Optim.minimizer(result)[1:end-1]
mle_sigma_sq = Optim.minimizer(result)[end]

# Now you can compute the log-likelihood and negative log-likelihood at the MLE estimates
log_likelihood = -negative_log_likelihood(vcat(mle_w, mle_sigma_sq))
nll_at_mle = -log_likelihood

println("MLE estimates: w = ", mle_w, ", σ² = ", mle_sigma_sq)
println("Log-likelihood at MLE: ", log_likelihood)
println("Negative log-likelihood at MLE: ", nll_at_mle)
```

</TabItem>
</Tabs>

---
## The Ordinary Least Squares solution
We know that if you plot the sum of squares error for a linear regression this becomes a convex optimisation problem where we need to find the minimum value. 

### Objective:
Given a matrix \( X \) of input data (often with an additional column of ones for the intercept term) and a vector \( y \) of observed outputs, the objective in linear regression is to find a vector of coefficients \( \beta \) such that the linear model:

$$ y = X\beta + \epsilon $$

minimizes the sum of squared residuals, where \( \epsilon \) is the error term.

### Residuals:
The residuals \( r \) are the differences between the observed outputs \( y \) and the predicted outputs \( X\beta \):

$$ r = y - X\beta $$

The sum of squared residuals (SSR) is:

$$ SSR(\beta) = r^T r = (y - X\beta)^T (y - X\beta) $$

### Minimization:
To find the \( \beta \) that minimizes the SSR, differentiate the SSR with respect to \( \beta \) and set the result equal to zero:

$$ \frac{\partial SSR}{\partial \beta} = -2X^T (y - X\beta) = 0 $$

From the above equation:

$$ X^T y = X^T X \beta $$

Now, to solve for \( \beta \), multiply both sides by the inverse of \( X^T X \) (assuming it's invertible):

$$ \beta = (X^T X)^{-1} X^T y $$

This \( \beta \) is the OLS estimate of the regression coefficients. In your notation, \( \hat{OLS} \) corresponds to \( \beta \).

### Intuition:
The OLS solution geometrically projects the observed outputs \( y \) onto the space spanned by the columns of \( X \). The product \( X^T y \) can be thought of as the projection of \( y \) onto the column space of \( X \), and the term \( (X^T X)^{-1} \) then scales this projection to account for the correlation among the columns of \( X \).

### Key Properties:
1. **Efficiency**: If the errors \( \epsilon \) are normally distributed with constant variance (homoscedastic) and are uncorrelated, the OLS estimator is the Best Linear Unbiased Estimator (BLUE).

2. **Bias**: OLS is unbiased, which means \( E[\beta] = \beta_{true} \).

3. **Consistency**: As the sample size grows to infinity, OLS estimates converge in probability to the true parameter values.

### Limitations:
1. **Collinearity**: If columns of \( X \) are linearly dependent or nearly so (multicollinearity), then \( X^T X \) is singular or nearly singular, and its inverse may not exist or may be numerically unstable.

2. **Homoscedasticity**: If the error terms do not have a constant variance across observations, then OLS estimates remain unbiased but are no longer efficient.

3. **Endogeneity**: If regressors are correlated with the error term, OLS estimates will be biased.

In conclusion, the equation \( \hat{OLS} = (X^T X)^{-1} X^T y \) provides the OLS estimates for the regression coefficients in a linear regression model. These estimates minimize the sum of squared differences between the observed and predicted values.