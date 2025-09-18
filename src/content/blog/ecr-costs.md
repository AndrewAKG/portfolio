---
title: '🚨 Docker on ECR Costs Alert! 🚨 Managing Hidden Storage Charges'
description: 'ECR charges $0.10 per GB/month for stored Docker images. Learn how lifecycle policies can keep your costs under control and prevent runaway storage bills.'
pubDate: 2024-07-17
author: 'Andrew Ghobrial'
category: 'Cost Optimization'
heroImage: '../../assets/images/ecr-costs.png'
tags: ['AWS', 'ECR', 'Docker', 'DevOps', 'Cost Optimization', 'Containers']
---

If you’re using **Docker on AWS**, chances are you rely on **Elastic Container Registry (ECR)** to store your private images.  
It’s convenient, integrated, and secure.

But here’s the catch: **ECR isn’t free.**

### The Hidden Cost

ECR charges **$0.10 per GB per month** for image storage.

At first glance, this might not sound like much. But consider:

- Large images for **machine learning models** or **LLMs** can easily exceed **multiple GBs per image**.
- Frequent builds for dev and staging environments quickly pile up.
- Hundreds of GBs of images can silently accumulate — leading to a **surprise bill**.

### Why Image Tagging Matters

The way you tag images directly affects how much cruft you accumulate.

Common patterns include:

- **Stage-based tagging** (e.g., `dev`, `staging`, `prod`)
  - Simple but risky — tags get overwritten, making it harder to trace specific builds.
- **Commit-hash tagging** (e.g., `abc123`)
  - The recommended approach for traceability and reproducibility.
  - But it also means **every commit creates a new image**.

Over time, commit-based tagging without cleanup leads to **hundreds of unused images** sitting in your registry — and you paying for them.

### The Solution: ECR Lifecycle Policies

Fortunately, AWS provides **ECR Lifecycle Policies** to automatically clean up unused images.

A lifecycle policy defines rules for **when to expire images** based on:

- Tag patterns
- Age of images
- Image count thresholds

### Example: Keep the Last 10 Images Only

Here’s a simple example lifecycle policy that expires older images once there are more than 10 in the repo:

```json
{
  "rules": [
    {
      "rulePriority": 1,
      "description": "Expire images if there are more than 10",
      "selection": {
        "tagStatus": "any",
        "countType": "imageCountMoreThan",
        "countNumber": 10
      },
      "action": {
        "type": "expire"
      }
    }
  ]
}
```

With this policy in place:

- Only the **most recent 10 images** are kept.
- Old, unused images are **automatically deleted**.
- Your **storage costs stay predictable**.

### Best Practices for ECR Cost Control

- **Always define lifecycle policies** for dev and staging repos.
- Keep more images in production (e.g., last 30 or 60) for rollback flexibility.
- Monitor ECR usage in **AWS Cost Explorer** and set up **budgets**.
- Regularly audit image sizes — optimize Dockerfiles to reduce bloat.

### Final Thoughts

ECR is an essential part of AWS container workflows, but the **storage costs can sneak up on you**.

By:
✅ Using commit-hash tagging for traceability
✅ Applying lifecycle policies for cleanup
✅ Monitoring storage usage

…you can ensure your registry stays **clean, efficient, and cost-effective**.

📖 Learn more about lifecycle policies here: [AWS ECR Lifecycle Policies](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html)

💡 Have you been surprised by an ECR bill before? What cleanup strategies worked best for you?
