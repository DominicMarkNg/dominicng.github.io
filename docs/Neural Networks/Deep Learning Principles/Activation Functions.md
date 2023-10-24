---
Title: Activation Functions
sidebar_position: 2
---

## Choice of Activation Functions in Neural Networks: A Mathematical Perspective

In deep learning, the choice of activation functions in a neural network plays a pivotal role in determining the model's training efficiency and generalization capabilities. Specifically, the selection of the activation function impacts the severity of the "vanishing gradient problem," which in turn influences the speed and stability of the training process.

### Classic Activation Functions: Sigmoid and Tanh

The sigmoid activation function, given by the equation 

$$ 
f(x) = \frac{1}{1 + e^{-x}}, 
$$ 

suffers from gradients never exceeding 0.25. This makes the function highly susceptible to the vanishing gradient problem. When the absolute values of the input (argument) are large, the gradient of the sigmoid function becomes almost zero ("saturation"), causing the weights to update very slowly during backpropagation.

Similarly, the hyperbolic tangent (tanh) activation function, represented as 

$$ 
f(x) = \tanh(x) = \frac{e^{x} - e^{-x}}{e^{x} + e^{-x}}, 
$$

has a derivative that reaches up to 1 near the origin. However, much like the sigmoid function, it saturates rapidly as the absolute values of the input increase.

### Modern Alternatives: ReLU and Hard Tanh

Recent years have witnessed a shift toward the Rectified Linear Unit (ReLU) and Hard Tanh functions. The ReLU function, defined as 

$$ 
f(x) = \max(0, x), 
$$ 

offers computational efficiency as its gradient is straightforward to compute—essentially a matter of checking for non-negativity. 

Hard Tanh, a piecewise linear approximation of the Tanh function, is also computationally efficient and is defined as:

$$ 
f(x) = \begin{cases} 
-1 & \text{if } x < -1, \\
x & \text{if } -1 \leq x \leq 1, \\
1 & \text{if } x > 1.
\end{cases} 
$$

Both ReLU and Hard Tanh exhibit gradients of 1 over large intervals, which helps mitigate the vanishing gradient problem. However, they are not without their drawbacks. ReLU is susceptible to "dead neurons," where certain neurons never activate and therefore do not contribute to the network's learning.

<Tabs>
<TabItem value="py" label="Python">

```py
import torch
import torch.nn as nn

class NeuralNet(nn.Module):
    def __init__(self):
        super(NeuralNet, self).__init__()
        self.fc1 = nn.Linear(10, 20)  # 10 input features, 20 output features
        self.fc2 = nn.Linear(20, 15)  # 20 input features, 15 output features
        self.fc3 = nn.Linear(15, 10)   # 15 input features, 10 output feature
        self.fc4 = nn.Linear(10, 1)    # 15 input features, 1 output feature
        
    def forward(self, x):
        // highlight-start
        # Using Sigmoid activation function
        x = torch.sigmoid(self.fc1(x))
        
        # Using Tanh activation function
        x = torch.tanh(self.fc2(x))
        
        # Using ReLU activation function
        x = torch.relu(self.fc3(x))

        # Using built-in Hardtanh
        x = nn.Hardtanh(-1, 1)(self.fc4(x))
    
        # Alternatively, manual implementation
        # x = torch.clamp(self.fc1(x), min=-1, max=1)
        // highlight-end
        
        # ... rest of the network 
        return x
```

</TabItem>
<TabItem value="julia" label="Julia">

```julia
using Flux

#Flux.jl doesn't have a built-in Hard Tanh activation function, but you can easily implement one
hardtanh(x) = clamp(x, -1, 1)

model = Chain(
  // highlight-start
  Dense(10, 20, σ),  # 10 input features, 20 output features, Sigmoid activation
  Dense(20, 15, tanh),  # 20 input features, 15 output features, Tanh activation
  Dense(15, 10, relu),  # 15 input features, 10 output feature, ReLU activation
  Dense(10, 1, hardtanh), # 10 input features, 1 output feature, custom Hard Tanh function
  // highlight-end
  # ... rest of the layers
)
end
```

</TabItem>
</Tabs>


### Conclusion

Choosing the right activation function is a non-trivial task that significantly affects a neural network's performance. ReLU and Hard Tanh have become popular choices due to their computational advantages and ability to alleviate the vanishing gradient problem, although they introduce other complexities like dead neurons.

**Figures to add later**
Figures illustrating the derivatives of these activation functions would provide visual insights into their behavior. For instance, a plot with subfigures showing the derivatives of Sigmoid, Tanh, ReLU, and Hard Tanh could be helpful. These plots will visually represent how quickly the gradients vanish or explode, providing a clearer understanding of the implications of choosing one activation function over another.