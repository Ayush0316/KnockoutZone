# Contributing to the KnockOutZone 🏓

Welcome, open-source enthusiasts! We're excited to have you on board to help take KnonkoutZone to the next level. Every contribution you make plays a big part in shaping the project, and we truly appreciate your efforts!

This guide will help you get started with contributing to this project.

## 🚀 Get Started (Local Setup)

To get the KnockOutZone running on your local machine:

1.  **Fork the Repository:** Click the "Fork" button at the top right of the GitHub repository page. This creates a copy of the project in your GitHub account.
2.  **Clone Your Fork:** Open your terminal or command prompt and clone your forked repository to your local machine:
    ```bash
    git clone https://github.com/{your-username}/KnockoutZone.git
    ```
3.  **Navigate to the Project Directory:**
    ```bash
    cd KnockoutZone
    ```


## 🎯 Finding Tasks & Issues

We use GitHub Issues to track tasks, bugs, and features.

1.  **Check the Issues Tab:** Go to the `Issues` tab on our GitHub repository: [https://github.com/Ayush0316/KnockoutZone/issues](https://github.com/Ayush0316/KnockoutZone/issues)
2.  **Look for Labels:** We use labels to categorize issues and indicate their difficulty:
    * `gssoc25`: All issues eligible for GSSoC'25 contributions.
    * `good first issue` / `beginner-friendly`: Great starting points for new contributors.
    * `difficulty:easy`, `difficulty:medium`, `difficulty:hard`: Indicates the complexity.
    * `bug`, `feature`, `documentation`, `enhancement`, `refactor`: Describes the type of work.
3.  **Choose an Issue:** Select an issue that interests you and matches your skill level.

## 🤝 Contribution Workflow

Once you've chosen an issue:

1.  **Claim the Issue:**
    * **Comment on the issue** you've chosen, stating clearly: "I'd like to work on this issue."
    * This helps prevent multiple people from working on the same task.
2.  **Create a New Branch:**
    * Before making any changes, create a new branch from the `main` branch. Use a descriptive name for your branch (e.g., `fix/bug-description`, `feat/new-powerup`).
    ```bash
    git checkout main
    git pull origin main # Ensure your main branch is up-to-date
    git checkout -b your-branch-name
    ```
3.  **Make Your Changes:**
    * Implement your solution in your new branch.
    * Write clean, readable, and well-commented code.
    * Follow the existing code style of the project.
4.  **Test Your Changes:**
    * Ensure your changes work as expected and don't introduce new bugs. Test the functionality thoroughly.
5.  **Commit Your Changes:**
    * Write clear and concise commit messages.
    ```bash
    git add .
    git commit -m "feat: Add new power-up type" # Example commit message
    ```
6.  **Push Your Branch:**
    ```bash
    git push origin your-branch-name
    ```
7.  **Create a Pull Request (PR):**
    * Go to your forked repository on GitHub. You'll see a prompt to create a Pull Request.
    * **Ensure you are creating a PR from your branch to the `main` branch of the *original* repository.**
    * **Write a clear PR description:**
        * Reference the issue number it closes (e.g., `Closes #123`).
        * Explain what changes you made and why.
        * Provide screenshots or GIFs if it's a visual change.



## 📏 Code Style & Guidelines

* **Comments:** Add comments where the code logic might not be immediately obvious.
* **Modularity:** Try to keep changes focused within relevant files and folder.
* Avoid using *magic strings* and use proper desing principals.

## ❓ Getting Help & Communication

We encourage open communication! If you have any questions, get stuck, or want to discuss an idea:

* **Join our Discord Channel:** This is our primary communication hub for real-time discussions and support.
    ➡️ **[Join our Discord Server!](https://discord.gg/txrsgvV5)**
* **Comment on Issues:** You can also ask questions directly on the relevant GitHub issue.

We're here to help you succeed! Happy coding, and we look forward to your contributions to the KnockOutZone!