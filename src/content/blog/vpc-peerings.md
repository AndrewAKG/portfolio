---
layout: ../../layouts/BlogPost.astro
title: 'Stop Reusing the Same CIDR Everywhere: VPC Peering Will Bite You'
description: 'Overlapping CIDRs block VPC peering and make growth painful. Here’s a practical plan for org-wide CIDR design, Terraform guardrails, and zero-downtime migration.'
pubDate: 'Aug 12 2025'
heroImage: '../../assets/images/vpc-peerings.png'
category: 'Networking'
tags:
  - AWS
  - VPC
  - CIDR
  - Peering
  - Terraform
  - Transit Gateway
  - DevOps
---

🚨 **Are you using the same CIDR blocks across regions, stages, or accounts?**  
You might want to rethink that.

It’s a common trap: you spin up dev, staging, and prod VPCs across different regions or accounts — all using `10.0.0.0/16` because it works.  
Until one day, you need to connect them with **VPC Peering**.

**Overlapping CIDRs = Peering denied.**  
Now you’re refactoring networks just to connect two environments.

#### TL;DR

- Reserve **non-overlapping CIDRs** per region, stage, and account.
- Keep a **single source of truth** for CIDR assignments in code.
- Add **CI guardrails** so duplicates never reach `terraform apply`.
- For many VPCs, prefer **Transit Gateway** over a mesh of peerings.
- Already overlapping? Use a **secondary CIDR** to migrate with near zero downtime.

#### VPC Peering in 60 seconds

- Private connectivity between two VPCs over AWS backbone.
- No NAT, no VPN, no public IPs.
- Not transitive and requires non-overlapping CIDRs.

If you know you’ll connect many VPCs, consider a hub-and-spoke with **Transit Gateway (TGW)**. You still need non-overlapping CIDRs.

#### Why overlap happens?

- Copy-pasted defaults like `10.0.0.0/16`.
- Separate teams creating VPCs without a registry or review.
- Growth outpaces initial plans and the range gets reused.

Small choices today become big constraints later.

#### Design once, scale forever

Pick RFC1918 ranges with room to grow

- `10.0.0.0/8` for most app VPCs gives you plenty of space to segment.
- Avoid ranges your corporate WAN or partner networks already use.
- Keep `172.16.0.0/12` or `192.168.0.0/16` for special cases to dodge collisions.
- Carve by the dimensions that matter
- Common dimensions: environment, region, account, and sometimes workload family.

**Example allocation:**

- Environment blocks

  - `10.0.0.0/12` → dev
  - `10.16.0.0/12` → staging
  - `10.32.0.0/12` → prod
  - `10.48.0.0/12` → shared-services

- Within each environment block, assign a **unique /16 per region**

  - dev
    - `10.0.0.0/16` → `us-east-1`
    - `10.1.0.0/16` → `eu-west-1`
  - prod
    - `10.32.0.0/16` → `us-east-1`
    - `10.33.0.0/16` → `eu-west-1`

- Subnets inside a VPC are then carved as `/20` or `/21` for AZs and tiers.

**Rule of thumb:** leave headroom. Under-allocate subnets now so you can grow without moving everything later.
