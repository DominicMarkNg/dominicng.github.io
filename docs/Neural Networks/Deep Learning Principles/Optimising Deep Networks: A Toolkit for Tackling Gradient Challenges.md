---
Title: Optimizing Deep Networks A Toolkit for Tackling Gradient Challenges
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---
### The Role of Preprocessing and Initialization in Deep Learning Optimization

In the context of deep learning, preprocessing and initialization are pivotal for ensuring efficient and stable optimization. Below is an explanation highlighting the theoretical and practical aspects of each.

#### Feature Normalization

The optimization landscape of neural networks can be highly sensitive to the scale and distribution of input features. Consider the loss function $ J(\theta) $. If features have disparate variances, the contour plots of $ J(\theta) $ could be elongated, causing gradient descent to take longer zigzagging paths toward the minimum. Mathematically, the gradient vector $ \nabla J(\theta) $ can have components with largely varying magnitudes.

To mitigate this, feature standardization is commonly employed. Given a feature $ x $, standardization is defined as

$$
\hat{x} = \frac{x - \mu}{\sigma}
$$

where $ \mu $ is the mean and $ \sigma $ is the standard deviation. This ensures all features have zero mean and unit variance. Additionally, Whitening can be used to decorrelate features.

#### Importance of Initialization

Initialization has a critical role in dictating the optimization dynamics in the initial phases of training. Improper initialization can amplify issues like vanishing and exploding gradients. 

To counter these challenges, several initialization strategies are used. For instance, one common heuristic is to initialize the weights $ W $ as:

$$
W \sim \mathcal{N}(0, \frac{1}{\sqrt{r_{\text{in}}}})
$$

where $ r_{\text{in}} $ is the number of units in the layer that sends input to $ W $, and $ \mathcal{N} $ denotes a Gaussian distribution. The idea is to maintain a constant variance for activations and gradients as the signal passes through layers. 

Yet, this scheme doesn't consider the fan-out, $ r_{\text{out}} $, which can also affect the forward and backward passes. Xavier initialization improves upon this by using:

$$
W \sim \mathcal{N}(0, \sqrt{\frac{2}{r_{\text{in}} + r_{\text{out}}}})
$$

This attempts to balance the variances of the gradients across layers.

#### Inter-layer Normalization

It's often beneficial to apply normalization not just to the input layer but to hidden layers as well. Techniques like Batch Normalization aim to maintain a mean activation close to 0 and standard deviation close to 1 across different layers during training. 

**Figure to add later**
A figure illustrating the effect of different initialization methods on the speed of convergence in a deep network would be useful here. It could show how proper initialization avoids issues like vanishing and exploding gradients and leads to faster convergence.

### 4.5.2 Momentum-Based Learning in Deep Neural Networks

Momentum-based learning algorithms enhance the performance of gradient-based optimization methods like stochastic gradient descent (SGD), especially in the context of deep learning. They aim to tackle common issues such as getting stuck in local optima, sluggishness in flat regions, and erratic movements in steep curvatures of the loss function.

#### Mathematical Foundation

In standard SGD, the parameter update rule is

$$
V \leftarrow -\alpha \frac{\partial L}{\partial W}; \quad W \leftarrow W + V
$$

where $ \alpha $ is the learning rate, $ L $ is the loss function, and $ \frac{\partial L}{\partial W} $ represents the gradient of $ L $ with respect to $ W $.

Momentum-based methods introduce a velocity term $ V $ which is a running average of the past gradients. The update rule becomes:

$$
V \leftarrow \beta V - \alpha \frac{\partial L}{\partial W}; \quad W \leftarrow W + V
$$

Here, $ \beta $ is the momentum term which usually lies in $ (0, 1) $. When $ \beta = 0 $, it reduces to standard mini-batch gradient descent.

#### Physical Analogy

Momentum-based learning can be analogously understood as the physics of a rolling marble. The marble gains speed as it moves downhill and uses this momentum to climb small hills or escape flat regions. The $ \beta $ parameter plays the role of "friction", helping to moderate the velocity. High $ \beta $ helps to accumulate velocity in consistent directions, aiding the marble to cross flat surfaces or escape local potholes.

Here is an example of how one might implement this in Julia or Pytorch using the mean squared errors loss function.

<Tabs>
<TabItem value="py" label="Python">

```py {17-18}
import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple model
class SimpleModel(nn.Module):
    def __init__(self):
        super(SimpleModel, self).__init__()
        self.fc = nn.Linear(10, 1)

    def forward(self, x):
        return self.fc(x)

# Initialize model, loss, and optimizer
model = SimpleModel()
criterion = nn.MSELoss()
optimizer = optim.SGD(model.parameters(),
lr=0.01, momentum=0.9)
# Sample data
input_data = torch.randn(5, 10)
target_data = torch.randn(5, 1)

# Forward pass
output = model(input_data)
loss = criterion(output, target_data)

# Backward pass and optimization
optimizer.zero_grad()
loss.backward()
optimizer.step()
```

</TabItem>
<TabItem value="julia" label="Julia">

```julia
using Flux

# Define a simple model
model = Chain(Dense(10, 1))

# Loss function
loss(x, y) = Flux.mse(model(x), y)
// highlight-start
# Optimizer with momentum
opt = Momentum(0.01, 0.9)
// highlight-end
# Sample data
input_data = rand(Float32, 10, 5)
target_data = rand(Float32, 1, 5)

# Perform a training step
ps = Flux.params(model)
gs = gradient(() -> loss(input_data, target_data), ps)
Flux.update!(opt, ps, gs)
```

</TabItem>
</Tabs>

### Nesterov Momentum

In traditional momentum-based methods, the gradient $\nabla L(W)$ is calculated at the current parameter $W$. In Nesterov's method, this gradient is calculated at a "lookahead" point $W + \beta V$, where $V$ is the current velocity and $\beta$ is the momentum parameter.

The idea behind this "lookahead" is that $W + \beta V$ represents an estimate of where the parameters will be after taking another momentum step. By evaluating the gradient at this future point, the method effectively gains foresight into the curvature of the loss function ahead. This provides an improved sense of the future landscape, helping the optimizer make a more informed move.

The formula for the Nesterov update becomes:

$$
V \leftarrow \beta V - \alpha \nabla L(W + \beta V); \quad W \leftarrow W + V
$$

Here, the term $\nabla L(W + \beta V)$ computes the gradient at the lookahead point, thus incorporating information from the "future" state of the parameters. This leads to more effective updates, especially when navigating complex loss landscapes with many curvatures or saddle points.

**Add a figure illustrating the trajectory of optimization with and without Nesterov Momentum could be useful. It would show the path taken by the optimizer in both cases, highlighting how Nesterov Momentum converges faster and more directly towards the optimum.**

Here, the gradient $ \nabla L(W + \beta V) $ is computed at $ W + \beta V $, offering a "lookahead" by incorporating information about the future landscape of the loss function. This lookahead often provides the optimizer a better sense of where the loss landscape is going, thus leading to more efficient and quicker convergence.

In the analogy of the marble rolling down the bowl, Nesterov Momentum can be likened to the marble having a sense of foresight. As the marble approaches the bottom of the bowl, this foresight allows it to apply "brakes" to avoid overshooting the minimum, essentially making its trajectory more refined than traditional momentum.

#### Mini-batch and Convergence Rate

Nesterov Momentum is typically used in the context of mini-batch gradient descent. It's crucial to note that very small batch sizes are generally not suitable for Nesterov's method. This is due to the convergence rate at which the error converges to the optimal value

##### Convergence Rate

The convergence rate for the Nesterov method can be shown to be $O(1/t^2)$ after $t$ steps, which is an improvement over the $O(1/t)$ rate for standard momentum. The Nesterov's method reduces the error to $O(1/t^2)$ after $t$ steps, as compared to an error of $O(1/t)$ in the momentum method, refers to the rate at which the error converges to the optimal value as the number of iterations $t$ increases.

In Big-O notation, $O(f(t))$ describes an upper bound on the function in terms of $f(t)$. When we say that the error in Nesterov's method is $O(1/t^2)$, we mean that the error decreases quadratically with the number of iterations. This is faster than the momentum method, where the error decreases only linearly ($O(1/t)$) with the number of iterations. Mathematically, for large $t$, the error $E$ for the two methods would approximately satisfy:

$$
E_{\text{Nesterov}} \propto \frac{1}{t^2}, \quad E_{\text{Momentum}} \propto \frac{1}{t}
$$

Hence, for large $t$, Nesterov's method will typically reach a smaller error more quickly than standard momentum.

Here's a sample code snippet showing how to implement Nesterov Momentum in PyTorch/Julia:

<Tabs>
<TabItem value="py" label="Python">

```py {11}
import torch
import torch.optim as optim

# Create a simple model
model = torch.nn.Linear(10, 1)

# Loss function
loss_function = torch.nn.MSELoss()

# Optimizer with Nesterov Momentum
optimizer = optim.SGD(model.parameters(), lr=0.01, momentum=0.9, nesterov=True)
# Dummy data
input_data = torch.randn(5, 10)
target_data = torch.randn(5, 1)

# Forward and backward passes
optimizer.zero_grad()
output = model(input_data)
loss = loss_function(output, target_data)
loss.backward()
optimizer.step()
```

</TabItem>
<TabItem value="julia" label="Julia">

```julia
using Flux

# Define a simple model
model = Chain(Dense(10, 1))

# Loss function
loss(x, y) = Flux.mse(model(x), y)

# Optimizer with Nesterov Momentum
// highlight-start
opt = Nesterov(0.01, 0.9)
// highlight-end

# Sample data
input_data = rand(Float32, 10, 5)
target_data = rand(Float32, 1, 5)

# Perform a training step
ps = Flux.params(model)
gs = gradient(() -> loss(input_data, target_data), ps)
Flux.update!(opt, ps, gs)
```

</TabItem>
</Tabs>

In both examples, the Nesterov Momentum is activated by setting a flag (`nesterov=True` in PyTorch and using `Nesterov` in Flux.jl) in the optimizer constructor. This alters the internal gradient update rule to include the lookahead term, as per Nesterov's algorithm.

### Parameter-Specific Learning Rates

The overarching objective in momentum-based methods is to capitalize on the persistency of gradient directions for specific parameters, thereby accelerating the optimization process. Another strategy to achieve similar objectives involves employing different learning rates for different parameters. The rationale behind this is that parameters with large partial derivatives are often subject to oscillations and zigzag movements, while parameters with smaller partial derivatives tend to move more consistently but in the same direction over multiple iterations.

An early contribution in this domain was the delta-bar-delta method. This algorithm observes the sign of each partial derivative over iterations. If the sign remains stable, it suggests that the optimization is heading in the correct direction for that parameter, and thus, the learning rate for that parameter is increased. Conversely, if the sign of the partial derivative frequently flips, the learning rate is decreased for that parameter. 

While the delta-bar-delta method is effective in the context of gradient descent, it becomes less reliable in the stochastic setting due to the noisy gradients typical of mini-batch methods. Given the prevalence of mini-batch gradient descent in contemporary machine learning applications, newer algorithms have been designed to offer parameter-specific learning rates even in a stochastic environment.

In the following sections, we will delve into three such methods that have gained prominence for their efficacy in stochastic settings: AdaGrad, RMSProp, and AdaDelta. These algorithms adaptively adjust the learning rates for each parameter during the optimization process, offering more nuanced control over the convergence behavior.

### AdaGrad

In the context of the rolling marble analogy, AdaGrad can be seen as a marble that is highly aware of the terrain it has already traversed. It keeps a record, or "memory," of the steepness of the slopes it has rolled down. This information helps the marble to adapt its speed depending on the historical slopes, making it cautious on steep declines and more adventurous on gentler ones.

Mathematically, the AdaGrad algorithm keeps track of the accumulated square of the gradients for each parameter. Let $ A_i $ denote the accumulated sum of the squares of the gradients with respect to the $ i^{th} $ parameter up to a given iteration. At each iteration, this accumulated sum is updated as follows:

$$
A_i \leftarrow A_i + \left( \frac{\partial L}{\partial w_i} \right)^2 \quad \forall i \tag{4.3}
$$

The update rule for each parameter $ w_i $ is then:

$$
w_i \leftarrow w_i - \frac{\alpha}{\sqrt{A_i + \epsilon}} \frac{\partial L}{\partial w_i} \quad \forall i
$$

Here, $ \alpha $ is the learning rate, and $ \epsilon $ is a small constant to prevent division by zero, often set to $ 10^{-8} $.

The division by $ \sqrt{A_i} $ is essentially a "signal-to-noise" normalization. Since $ A_i $ encapsulates the historical magnitude of the gradient (ignoring its sign), the algorithm encourages quicker movements in directions where the gradient has been small and consistent, while penalizing rapid oscillations. For instance, if the gradient frequently oscillates between $ +100 $ and $ -100 $, the division by $ \sqrt{A_i} $ will be more severe compared to a gradient that consistently stays around $ 0.1 $.

Despite its advantages, AdaGrad has shortcomings, primarily its tendency to slow down considerably or even nearly stop making progress. This is due to $ A_i $ being an aggregate measure that continually increases, leading to an ever-decreasing effective learning rate. This can result in the algorithm becoming overly cautious and halting prematurely, failing to reach the minimum. Moreover, since $ A_i $ accumulates historical information, its relevance can diminish over time, leading to potential inaccuracies. 

In subsequent sections, we will explore algorithms like RMSProp and AdaDelta that address these drawbacks by using exponential averaging to maintain a more relevant, time-sensitive measure of the gradient magnitudes.

Implementing AdaGrad in PyTorch is straightforward because it's included in the built-in torch.optim package. Both implementations make use of their respective library's built-in AdaGrad optimizer, requiring just the learning rate ($ \alpha $) and epsilon ($ \epsilon $) as parameters, with sensible defaults for other hyperparameters.

<Tabs>
<TabItem value="py" label="Python">

```py {12}
import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple model
model = nn.Linear(10, 1)

# Loss function
criterion = nn.MSELoss()

# Optimizer
optimizer = optim.Adagrad(model.parameters(), lr=0.01, lr_decay=0, weight_decay=0, initial_accumulator_value=0, eps=1e-8)

# Sample data
input_data = torch.rand(5, 10)
target_data = torch.rand(5, 1)

# Perform a training step
optimizer.zero_grad()
output = model(input_data)
loss = criterion(output, target_data)
loss.backward()
optimizer.step()

```

</TabItem>
<TabItem value="julia" label="Julia">

```julia
using Flux

# Define a simple model
model = Dense(10, 1)

# Loss function
loss(x, y) = Flux.mse(model(x), y)

# Optimizer
// highlight-start
opt = ADAGrad(0.01)
// highlight-end

# Sample data
input_data = rand(Float32, 10, 5)
target_data = rand(Float32, 1, 5)

# Perform a training step
ps = Flux.params(model)
gs = gradient(() -> loss(input_data, target_data), ps)
Flux.update!(opt, ps, gs)

```

</TabItem>
</Tabs>

### RMSProp: Root Mean Square Propagation

Imagine our marble rolling down the bowl again. In AdaGrad, the marble adjusts its speed based on the overall historical gradient of the path it has traversed. Over time, this can lead to a slower pace as the marble accumulates more history, which might not be ideal for navigating more complex terrains that require rapid adjustments.

Enter RMSProp. Think of RMSProp as a smarter marble that adapts its speed not just based on its entire history, but gives more weight to the recent gradients. This helps in ensuring that the marble doesn't slow down prematurely. If the marble encounters a steep slope suddenly, it knows to speed up; if it's going through a valley, it knows to slow down. The marble's memory is "fading," meaning it gradually forgets the oldest parts of its trajectory and pays more attention to what has recently occurred. This "forgetfulness" is controlled by the decay factor $ \rho $.

The update rule for the $i^{th}$ parameter $ w_i $ in RMSProp can be mathematically formulated as:

$$
\forall i: A_i = \rho A_i + (1-\rho) \left( \frac{\partial L}{\partial w_i} \right)^2 \quad \text
$$
$$
\forall i: w_i = w_i - \frac{\alpha}{\sqrt{A_i + \epsilon}} \frac{\partial L}{\partial w_i} \quad 
$$

Here, $ A_i $ is an exponentially moving average of the squared gradients for parameter $ w_i $. $ \rho $ is the decay factor which lies between 0 and 1, $ \alpha $ is the learning rate, and $ \epsilon $ is a small constant to avoid division by zero.

Certainly, let's break down the RMSProp algorithm using the equations provided.

#### Step-by-Step Explanation

This took me a looooooong time to understand so here's a step-by-step just so that we're clear on what is happening. The **key** thing to understand is the $ \rho $ and how this alters $ A_i $.

1. **Update of Running Average of Squared Gradients**: 
   $$
   A_i = \rho A_i + (1 - \rho) \left( \frac{\partial L}{\partial w_i} \right)^2; \quad \forall i \quad (4.4)
   $$
   
   - $ A_i $ is the running average of the squared gradient for the $i$-th weight $w_i$.
   - $ \rho $ is the decay rate in the range (0, 1).
   - $ \frac{\partial L}{\partial w_i} $ is the gradient of the loss $L$ with respect to the weight $w_i$.
   
   This step aims to calculate a new average of squared gradients, biased towards the most recent gradients, for each parameter $w_i$.

2. **Parameter Update**:
   $$
   w_i = w_i - \frac{\alpha}{\sqrt{A_i}} \frac{\partial L}{\partial w_i}; \quad \forall i
   $$
   
   - $ \alpha $ is the global learning rate.
   - $ \sqrt{A_i} $ serves to normalize the gradient.
   - $ \frac{\partial L}{\partial w_i} $ is again the gradient of the loss function with respect to $w_i$.
  
   This step adjusts each weight $w_i$ by a factor that is scaled by both the learning rate $ \alpha $ and the square root of the running average of the squared gradients $ \sqrt{A_i} $. 
   
##### Intuition

Imagine you're rolling a marble down a slope where some areas are steeper than others. In this analogy, $ w_i $ is the position of the marble, and $ \frac{\partial L}{\partial w_i} $ is the slope or gradient at that position.

1. **Update of Running Average of Squared Gradients**: This is akin to feeling the steepness of the slope under the marble at each step and keeping a running average. You give more importance to recent slopes (recent gradients) because you are currently there, and you don't care much about the steepness of the slope far behind you. 

2. **Parameter Update**: Based on the average steepness under the marble (the average of squared gradients), you decide how much to move the marble. If you've been consistently on a steep slope (large $ A_i $), you'll move the marble cautiously. On the other hand, if you've been on a shallow slope (small $ A_i $), you'll be bolder in your move.

This enables RMSProp to adaptively adjust the learning rate for each parameter, making it particularly useful for problems with noisy or sparse gradients.

#### Advantages and Disadvantages
- **Advantages**: RMSProp is generally better at navigating non-convex optimization landscapes, because it adjusts its learning rates during training and "forgets" about distant past. This is very useful for tackling problems where AdaGrad might slow down too quickly.
- **Disadvantages**: One limitation is the biased estimate of $ A_i $ in the initial stages of training, since $ A_i $ starts from zero. This bias gradually diminishes as more steps are taken.

RMSProp has the potential to incorporate momentum-based methods within its framework, which will be discussed in the following subsections.

<Tabs>
<TabItem value="py" label="Python">

```py {8}
import torch
import torch.optim as optim

# Initialize model parameters
params = torch.tensor([1.0, 2.0], requires_grad=True)

# Initialize RMSProp optimizer
optimizer = optim.RMSprop([params], lr=0.01, alpha=0.99, eps=1e-8, weight_decay=0, momentum=0, centered=False)

# Define the loss function
def loss_fn(params):
    return params[0]**2 + params[1]**2

# Training loop
for t in range(100):
    # Compute loss
    loss = loss_fn(params)
    
    # Zero gradients, perform backpropagation, and update parameters
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
```

</TabItem>
<TabItem value="julia" label="Julia">

```julia
using Flux
# Initialize model parameters
params = params([1.0, 2.0])

# Initialize RMSProp optimizer
// highlight-start
opt = Flux.Optimise.RMSProp(0.01, 0.99, 1e-8)
// highlight-end

# Loss function
loss_fn(params) = params[1]^2 + params[2]^2

# Training loop
for t in 1:100
    # Compute loss
    loss = loss_fn(params)
    
    # Perform backpropagation and update parameters
    grads = gradient(() -> loss_fn(params), params)
    Flux.Optimise.update!(opt, params, grads)
end
```

</TabItem>
</Tabs>

### AdaDelta Algorithm Explained

AdaDelta is an optimization algorithm designed to adapt the learning rates during training. Unlike methods that use a global learning rate for all parameters, AdaDelta adapts the learning rates for each parameter individually based on both the historical gradient information and the historical update magnitudes. It accomplishes this without requiring an initial learning rate parameter.

#### Algorithm Components

1. **Historical Gradient $ A_i $**: A decaying average of the squared gradients.
   $$
   A_i = \rho A_i + (1 - \rho) \left( \frac{\partial L}{\partial w_i} \right)^2; \quad \forall i
   $$

2. **Historical Update $ \delta_i $**: A decaying average of the squared update magnitudes.
   $$
   \delta_i = \rho \delta_i + (1 - \rho) (\Delta w_i)^2; \quad \forall i
   $$

3. **Parameter Update**: Update of the parameter $ w_i $ using $ \sqrt{\delta_i} $ and $ \sqrt{A_i} $ as adaptive learning rate components.
   $$
   w_i = w_i - \frac{\sqrt{\delta_i}}{\sqrt{A_i}} \frac{\partial L}{\partial w_i}; \quad \forall i
   $$

#### Step-by-Step Intuition with Marble Analogy

1. **Historical Gradient $ A_i $**: Imagine you are rolling a marble down a series of hills and valleys, which represent the loss landscape. The term $ A_i $ is like a memory of how steep these hills have been for each dimension or parameter. It's not just about the immediate steepness but an average of the steepness over past landscapes. In mathematical terms, $ A_i $ is updated with the square of the current gradient $ \left( \frac{\partial L}{\partial w_i} \right)^2 $, weighted by a decay factor $ \rho $.  
   $$
   A_i = \rho A_i + (1 - \rho) \left( \frac{\partial L}{\partial w_i} \right)^2
   $$

2. **Historical Update $ \delta_i $**: As you roll the marble down, you also keep track of how fast it has been going or how much it has been updating its position over time. This is the historical update $ \delta_i $. Similar to $ A_i $, it's a weighted average but of the squared speeds (updates) $ (\Delta w_i)^2 $ that the marble has experienced.  
   $$
   \delta_i = \rho \delta_i + (1 - \rho) (\Delta w_i)^2
   $$

3. **Parameter Update**: When you are about to roll the marble down a new hill, you look at $ A_i $ and $ \delta_i $ to decide how to push the marble. Specifically, you adapt the marble's speed using the ratio $ \frac{\sqrt{\delta_i}}{\sqrt{A_i}} $, which is akin to using the marble's past speeds and the steepness of past and current hills to make an informed decision.  
   $$
   w_i = w_i - \frac{\sqrt{\delta_i}}{\sqrt{A_i}} \frac{\partial L}{\partial w_i}
   $$

#### Breaking Down the Update Step

- **$ \sqrt{A_i} $**: Represents the "average steepness" of the hills for this particular parameter. The square root makes it in the same unit as the gradient.
  
- **$ \sqrt{\delta_i} $**: Represents the "average speed" the marble has been going when influenced by this parameter. Again, the square root puts it in the same unit as the parameter updates.
  
- **$ \frac{\sqrt{\delta_i}}{\sqrt{A_i}} $**: This ratio tells us how much the marble should adjust its speed based on how steep the hill is. If the hill is consistently steep but the marble hasn't been going fast, this ratio will be large, telling the marble to speed up. Conversely, if the hill isn't steep but the marble has been going fast, the ratio will be small, telling the marble to slow down.

By taking into account both the historical gradient and the historical update, AdaDelta adapts to the landscape it is trying to optimize, avoiding too fast or too slow updates.

Note again that because both $ \delta_i $ and $ A_i $ are squared terms, their units match, making the ratio $ \frac{\sqrt{\delta_i}}{\sqrt{A_i}} $ unit-less, which is a desired property.

Combining Parameter-Specific Learning and Momentum
- RMSProp with Nesterov Momentum
- ADAM

Gradient Clipping

Polyak Averaging

Second Order Derivatives: Newton Method
- In the quadratic bowl
- In a non-quadratic function
- The saddle point problem

Approximations of the Newton Method
- Conjugate Gradient Method
- Quasi-Newton Methods and BFGS

Batch Normalisation

Practical Tricks for acceleration and compression
- GPU
- Parallel and Distributed Implementations
    - Hyperparameter Parellelism
    - Model Parellelism
    - Data Parellelism
    - Exploting the Trade-Offs for hybrid Parellelism
- Algorithmic Tricks for compression
    - Pruning Network Wide
    - Compressing Network Weights
    - Hash-Based Compression
    - Leveraging Mimic Models
