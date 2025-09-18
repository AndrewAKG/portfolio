---
layout: ../../layouts/BlogPost.astro
title: 'How I Cut AWS Deployment Time in Half with GitHub Actions Matrix Strategy'
description: 'Discover how leveraging the GitHub Actions matrix strategy helped streamline multi-region AWS deployments, cut deploy times by 50%, and keep workflows maintainable.'
pubDate: 2025-07-12
author: 'Andrew Ghobrial'
category: 'DevOps'
heroImage: '../../assets/images/github-matrix.png'
tags:
  [
    'AWS',
    'DevOps',
    'GitHub Actions',
    'CI/CD',
    'Terraform',
    'Infrastructure as Code',
  ]
---

When your infrastructure lives in a **single region**, deployments are usually straightforward.  
But once you expand to **multi-region AWS setups**, deployment speed and maintainability quickly become challenges.

That’s exactly what happened to us.

### The Problem: Tedious Multi-Region Deployments

At first, our deployment workflow was simple: one job, one region.

But as we expanded across **multiple AWS regions**, I ended up with copy-pasted GitHub Actions jobs — slightly tweaked per region.

It worked, but:

- 😅 **Repetition everywhere**: nearly identical blocks of YAML
- 🐌 **Slow deployments**: jobs ran one after another
- 🔧 **Hard to scale**: every new region meant duplicating yet another job

This setup was brittle, noisy, and difficult to maintain. I knew there had to be a better way.

### The Breakthrough: Matrix Strategy in GitHub Actions

That’s when I discovered the **matrix strategy** in GitHub Actions.

Instead of repeating jobs for every AWS region, I defined a **single job** with a **`region` matrix**.

With one concise block, GitHub Actions dynamically created a job per region — running **in parallel**.

### Example: Multi-Region Deployment Workflow

Here’s a simplified example:

```yaml
name: Deploy to AWS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        region: [us-east-1, eu-west-1, ap-southeast-1]

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ matrix.region }}

      - name: Deploy with Terraform
        run: |
          terraform init -backend-config="region=${{ matrix.region }}"
          terraform apply -auto-approve
```

#### What happens here:

The workflow defines a matrix of regions

GitHub Actions automatically spawns a parallel job per region

No copy-paste, no clutter, no maintenance headaches

#### Why It Works So Well

Here’s what made the matrix strategy a game-changer:

✅ Declarative & concise – one job definition, many regions
⚡ Faster deployments – regions deploy in parallel, cutting total time ~50%
🔁 Easily scalable – add/remove regions with a single line
🛠️ Maintainable – no brittle, repetitive YAML blocks

### Lessons Learned

Think in abstractions: If you’re repeating YAML, there’s probably a better way.

Parallelism matters: Deployments don’t have to be sequential — GitHub Actions can fan out tasks efficiently.

Keep it simple: The fewer repeated blocks in your workflow, the easier it is to maintain over the long term.

### Final Thoughts

Matrix strategy in GitHub Actions turned what was once a slow, repetitive deployment process into a fast, scalable, and clean pipeline.

If you’re deploying across multiple AWS regions (or even across multiple environments like dev/staging/prod), this feature is hands-down one of the most valuable tools to keep your delivery pipeline both fast and maintainable.
