---
title: '🚨 AWS Lambda Costs ALERT! 🚨 Optimizing Memory and Node.js Garbage Collection'
description: 'Learn how improper memory allocation in AWS Lambda with Node.js can lead to crashes and inflated costs, and how tuning memory with NODE_OPTIONS can save you money.'
pubDate: 2024-08-17
author: 'Andrew Ghobrial'
category: 'Cost Optimization'
heroImage: '../../assets/images/lambda-costs.png'
tags:
  ['AWS', 'Lambda', 'Node.js', 'Serverless', 'Cost Optimization', 'V8 Engine']
---

If you’re running **AWS Lambda with Node.js**, this one’s for you.

Lambda pricing is based on two things:

1. **Allocated memory**
2. **Execution duration**

What many developers overlook is that **CPU and network throughput scale with memory**, meaning your performance and stability are directly tied to how much memory you configure.

### The Default Trap

If you’re using the **Serverless Framework**, the default memory allocation is **1024 MB**.

AWS recommends using **the least amount of memory your function needs**.  
Why? Because **every extra MB increases your cost per millisecond** of execution.

So naturally, I tried lowering memory.

### My Experiment: Going Too Low

I set my function to **128 MB** — the minimum available.  
At first, it seemed fine. But soon, I hit:

❌ **Out of memory errors**  
❌ **Function crashes**

Why? Because of how **Node.js garbage collection (GC)** works inside the **V8 engine**.

### How V8 Garbage Collection Affects Lambda

V8 has two key GC strategies:

- **Mark-Sweep / Mark-Compact:** Deep cleans large chunks of memory, but runs less frequently.
- **Scavenge / Minor GC:** Faster, smaller collections that run more often.

By default, V8 tries to balance performance and memory usage. But here’s the kicker:

👉 V8 will use **up to ~512 MB of heap space by default** before aggressively collecting.

So if your Lambda memory allocation is **below 512 MB**, the GC never gets a chance to properly reclaim memory. Your function will crash before cleanup kicks in.

### The Fix: Tuning `--max-old-space-size`

The good news: you can control this behavior.

Lambda now supports the **`NODE_OPTIONS` environment variable**, where you can pass Node.js flags.

For memory tuning, use:

```bash
NODE_OPTIONS="--max-old-space-size=<value>"
```

Where `<value>` is the max heap size in MB.
A good rule of thumb:

- Keep it **below your allocated Lambda memory**
- Set it to roughly **half of your memory allocation**

### Example: My Setup

I configured:

- Lambda memory: **256 MB**
- `NODE_OPTIONS`: `--max-old-space-size=150`

✅ No more crashes
✅ Stable garbage collection
✅ **Costs cut in half** for millions of requests

### Why This Works

- **Lower memory allocation** = cheaper Lambda per millisecond
- **Controlled GC threshold** = prevents OOM crashes
- **Balanced configuration** = performance without overspending

### Best Practices for Node.js Lambdas

- Start at **256 MB** as your baseline — safer than 128 MB
- Always configure `NODE_OPTIONS` for memory-bound apps
- Monitor Lambda metrics (`Duration`, `Errors`, `Throttles`, `Max Memory Used`) in CloudWatch
- Load-test before production changes

### Final Thoughts

AWS Lambda is powerful, but **Node.js memory management quirks** can easily lead to inflated costs and instability.

By fine-tuning your memory allocation and using the `--max-old-space-size` flag, you can:

- Avoid OOM crashes
- Optimize performance
- Save **50% or more** on costs at scale

💡 If you’re running Node.js Lambdas today, check your memory settings. A few minutes of tuning could save you thousands.

```

```
