# Welcome to My GitHub Profile

<img src="./self.jpeg" alt="Header Image" width="600"/> <!-- Adjust the width as needed -->

## About Me

Hello! I'm **Jiahua Song**, a passionate Applied Mathematics Student with a strong interest in Numerical Analysis, PDE, Machine Learning, Computational Fluid Dynamics. I am currently pursuing a Master's degree in Applied Mathematics at Columbia University.

- 🔭 **Current Research**: I am working on Reduced Order Model on Radiative Transfer Equation.
- 🌱 **Currently Learning**: Analytical Method of PDE, Numerical Analysis of PDE.
- 💬 **Ask Me About**: Operator Learning, Inverse Problem, PINN, PDE, SDE, Numerical Analysis/Algebra.
- 📫 **How to Reach Me**: You can contact me via js6409@columbia.edu.

## Research Interests

- Research Interest 1 Operator Learning, PDE Solvers, PDE Discovery, Data-Driven Methods, Numerical Method.
- Research Interest 2 CFD, SDE, Optimization, Aerodynamics, Optimal Control, Control Theory & Application. 

## Projects

### Optimal Basis for Radiative Transfer Equation

The project aims to find optimal basis for radiative transfer equation 
$
\frac{1}{c} \frac{\partial I(t, x, v)}{\partial t} + v \cdot \nabla I(t, x, v) + \kappa(x) I(t, x, v) = j(x, v) + \sigma_s(x) \int_{S^{n-1}} p(v', v) I(t, x, v') dv'.
$ As you see, the term "optimal" is subjective. We will based on some techniques in discretization and numerical method combined with the data-drive method to solve this problem so that the solution can be represented as fewest modes in some sense. This is a reduced order model, so it lowers the computational costs a lot. All related computational intense method in engineering related to radiative transfer can use the method. For example, the RTE is used to model the transfer of radiation through stellar atmospheres, interstellar dust clouds, and other astrophysical media. It is used to understand how sunlight interacts with the Earth's atmosphere, which is crucial for climate modeling and remote sensing. The RTE is applied in optical tomography, where it helps to model the propagation of light through biological tissues.

### Operator Learning

Operator learning is a computational method trying to recover or approximate the operator. Given a set of input functions and output functions data $\{f_i, g_i\}_{i\in \mathcal{D}}$, we need to build a computational method using the data to approximate what operator did this action. Mathematically, given $\{f_i, g_i\}_{i\in \mathcal{D}}$, where $\mathcal{D}$ is the dataset, $f_i\in \mathcal{X}$, $g_i\in \mathcal{Y}$ and $\mathcal{X}, \mathcal{Y}$ are function spaces on a $n$-dimensional spatical domain $\Omega \subset \mathbb{R}^n$, there is a unknown operator $\mathcal{A}: \mathcal{X}\to \mathcal{Y}$ such that $\mathcal{A}(f_i)=g_i$ for all $i$. To find this operator $\mathcal{A}$, we need to construct a computational method based on the dataset $\mathcal{D}$. The method may have some problems like ill-posedness. However, given some constraints, rules, and construction of the method, we can deal with the problem of ill-posedness and have an accurate and fast algorithm for approximant $\mathcal{\hat{A}}$ of $\mathcal{A}$ for some specific type of PDE due to the nature of PDE. Therefore, we propose a new theoretical method combining Roe's idea for solving linear hyperbolic systems and neural operators to find the solution operator of the quasi-linear hyperbolic system. 

### Pysics-Informed Neural Network

This project is the summary and report of my research work on Spring 2024 in CIEN 9101. Physics-informed neural network (PINN) or Physics-informed deep learning is a new topic in machine learning. The fundamentals of PINN originated from the work of Marziar Raissi of Prof. George Karniadarkis' group in 2017 titled: Physics Informed Deep Learning:Data-driven Solutions of Nonlinear Partial Differential Equations. It was later accepted by the Journal of Computational Physics. The complete work is separated into two main parts. One is an inverse problem; one is a forward problem. In this project, we will introduce a new method, Nontrivial Transform Method (NTM), for discovering the partial differential equations (PDE) by using the PINN method, find some interesting points raised from other related papers, and further extensions on the papers we are interested in for finding new PDEs based on the dataset. The NTM takes advantage of idea of continuous transform for simpler expression based on the symbolic regressions like PEQL and SGA-PDE, and find the simplests expression of PDE for given data with continuous transform constrains.



## Education

- **Master of Science in Applied Mathematics** - Columbia University, Aug 2023 - May 2025
- **Bachelor of Science in Applied Mathematics & Statistics** - University of Connecticut, Aug 2019 - May 2023

## Skills

- **Programming Languages**: Python, MATLAB, R, SAS, SQL
- **Tools**: TensorFlow, Git, LaTex
- **Mathematical Methods**: FDM/FEM/FVM/Spectral Method

## Get in Touch

- **Email**: js6409@columbia.edu
- **LinkedIn**: [https://www.linkedin.com/in/jiahuasong7/](https://www.linkedin.com/in/jiahuasong7/)
- **Instagram**: [https://www.instagram.com/pcprcjiahua.song/?hl=en](https://www.instagram.com/pcprcjiahua.song/?hl=en)

---

Thank you for visiting my GitHub profile! I am always open to collaboration and discussions on any Applied Math topics. Feel free to reach out!
