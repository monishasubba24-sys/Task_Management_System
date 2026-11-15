
# TASKFLOW - APPLICATION WORKFLOW

## General Application Workflow

```mermaid
flowchart TD
    A[Open TaskFlow] --> B[Login]
    B --> C{Valid Credentials?}
    C -->|No| D[Display Error Message]
    D --> B
    C -->|Yes| E[Check User Role]
    E --> F[Display Dashboard]
    F --> G[Select Module]
    G --> H[Perform Operation]
    H --> I[Validate Input]
    I --> J{Input Valid?}
    J -->|No| K[Display Validation Error]
    K --> H
    J -->|Yes| L[Save Data to MongoDB]
    L --> M[Display Success Message]
    M --> N[Return to Dashboard]
```

## Task Management Workflow

```mermaid
flowchart TD
    A[Project Manager Login] --> B[Open Task Management]
    B --> C[Create New Task]
    C --> D[Enter Task Details]
    D --> E[Select Project and Assignee]
    E --> F[Save Task]
    F --> G[Task Stored in MongoDB]
    G --> H[Team Member Views Assigned Task]
    H --> I[Update Task Status]
    I --> J[Save Updated Status]
    J --> K[Project Progress Updated]
```

## Conclusion

The workflow explains how users interact with TaskFlow, how information is validated and how data is saved or updated in MongoDB.
