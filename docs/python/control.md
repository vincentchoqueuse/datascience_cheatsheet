# Python Control

* [Documentation](https://python-control.readthedocs.io)

## Create LTI systems 

### Continuous Time

```python
from control import tf

sys = tf([1], [3,1])
```

### Discrete Time

```python
from control import tf

Ts = 0.2
sys = tf([1], [3,1], Ts)
```

## Closed Loop

```python
from control import tf, feedback

sys = tf([1], [3,1])
H = feedback(sys, 1)
```

## Step Response Informations

```python
from control import tf, step_info

sys = tf([1],[3,1])
step_info(sys, SettlingTimeThreshold=0.05)
```