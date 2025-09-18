---
title: '🚀 Ways to Access Your Database in a Private Subnet in AWS VPC'
description: 'Databases should live in private subnets for security — but how do you access them when they’re not exposed to the internet? In this post, I cover bastion hosts, Session Manager, VPC peering, VPN/Direct Connect, and PrivateLink.'
pubDate: 2024-11-17
author: 'Andrew Ghobrial'
category: 'DB Security'
heroImage: '../../assets/images/secure-db-access.png'
tags: ['AWS', 'Databases', 'Networking', 'VPC', 'Security', 'DevOps']
---

When securing your database in AWS, one of the best practices is to place it inside a **private subnet** within your VPC.  
This ensures the database has **no direct exposure to the internet**, significantly reducing the attack surface.

But that raises an important question:  
👉 _How do you (or your applications) securely access the database when it’s not publicly available?_

Let’s explore the main approaches.

### 1. Bastion Host (Jump Box) 🖥️

A **bastion host** is a hardened server that acts as a secure entry point into your private network.

- Place the bastion in a **public subnet** with restricted access (e.g., limited to your office IP).
- Connect to it via SSH (Linux) or RDP (Windows).
- From the bastion, connect to your **database in the private subnet**.
- Use **security groups and NACLs** to limit traffic.

✅ **Pros:** Simple, familiar approach  
❌ **Cons:** Adds an extra server to manage & patch

### 2. AWS Systems Manager (SSM) Session Manager 🔐

With **SSM Session Manager**, you don’t need a bastion host or open SSH ports.

- Attach the required IAM role to your EC2 instances.
- Start a **secure session via AWS SSM** (from console or CLI).
- All traffic is tunneled securely and **logged for audit** in CloudWatch/CloudTrail.

✅ **Pros:** No bastion, no public IPs, fully audited  
❌ **Cons:** Requires SSM agent + proper IAM policies

### 3. VPC Peering 🌐

When another VPC needs access to your private database, use **VPC Peering**.

- Create a **peering connection** between the two VPCs.
- Update **route tables** to allow traffic to flow.
- Use **security groups** to control who can connect.

✅ **Pros:** Private, low-latency communication between VPCs  
❌ **Cons:** Peering is 1-to-1 (no transitive routing), can get complex with many VPCs

### 4. VPN or Direct Connect 🌉

For **on-premises access** to your database in AWS:

- **VPN:** Establish a site-to-site VPN between your data center and AWS VPC.
- **Direct Connect:** Use a dedicated physical connection for higher bandwidth and consistent latency.

✅ **Pros:** Secure, integrates with existing on-prem systems  
❌ **Cons:** VPN adds latency, Direct Connect requires setup & cost

### 5. AWS PrivateLink 🔗

**PrivateLink** enables private connectivity between VPCs or AWS accounts **without traversing the internet**.

- Configure an **endpoint service** for your database.
- Consumers connect via **VPC endpoints**, never leaving the AWS private network.

✅ **Pros:** Highly secure, no public exposure  
❌ **Cons:** Limited to supported services, requires extra config

### My Go-To Approaches

Personally, I most often rely on:

- **Bastion Host** → for quick setups or proof-of-concepts
- **SSM Session Manager** → for production (no SSH ports, better auditing)
- **VPN/Direct Connect** → for hybrid (on-prem + AWS) use cases

### Final Thoughts

Placing your database in a **private subnet** is a must for strong security — but it doesn’t mean losing access.

Depending on your needs, you can choose between bastion hosts, Session Manager, VPC peering, VPN/Direct Connect, or PrivateLink.

Each option has trade-offs between **simplicity, security, cost, and scalability**.

💬 I’d love to hear from you — _what’s your preferred way to access private databases in AWS?_
