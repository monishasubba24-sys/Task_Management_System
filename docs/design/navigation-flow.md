
# TASKFLOW - APPLICATION NAVIGATION FLOW

## 1. Administrator Navigation

```mermaid
flowchart TD
    A[Login] --> B[Administrator Dashboard]
    B --> C[User Management]
    B --> D[Project Management]
    B --> E[Reports]
    B --> F[Profile]
    C --> G[View and Manage Users]
    D --> H[View and Manage Projects]
    E --> I[View Reports]
    G --> J[Logout]
    H --> J
    I --> J
    F --> J
```

## 2. Project Manager Navigation

```mermaid
flowchart TD
    A[Login] --> B[Project Manager Dashboard]
    B --> C[My Projects]
    B --> D[Team Management]
    B --> E[Task Management]
    B --> F[Progress Tracking]
    B --> G[Profile]
    C --> H[Create or Manage Projects]
    D --> I[Manage Team Members]
    E --> J[Create and Assign Tasks]
    F --> K[View Project Progress]
    H --> L[Logout]
    I --> L
    J --> L
    K --> L
    G --> L
```

## 3. Team Member Navigation

```mermaid
flowchart TD
    A[Login] --> B[Team Member Dashboard]
    B --> C[My Tasks]
    B --> D[Project Details]
    B --> E[Progress Update]
    B --> F[Profile]
    C --> G[View Assigned Tasks]
    G --> H[Update Task Status]
    D --> I[View Project Information]
    E --> J[Track Task Progress]
    H --> K[Logout]
    I --> K
    J --> K
    F --> K
```

## Conclusion

The navigation flow is designed according to the three user roles. Each user can access the features related to their responsibilities.
