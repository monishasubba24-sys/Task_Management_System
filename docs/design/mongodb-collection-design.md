
# TASKFLOW - MONGODB COLLECTION DESIGN

MongoDB database name: TaskProjectManagementSystem

The system uses three main collections.

## 1. Users Collection

Purpose: Stores user account and role information.

| Field | Data Type | Description |
|---|---|---|
| _id | ObjectId | Unique user ID |
| name | String | User name |
| email | String | User email |
| password | String | Hashed password |
| role | String | Administrator, Project Manager or Team Member |

## 2. Projects Collection

Purpose: Stores project information.

| Field | Data Type | Description |
|---|---|---|
| _id | ObjectId | Unique project ID |
| name | String | Project name |
| description | String | Project description |
| status | String | Project status |
| projectManagerId | ObjectId | Reference to the project manager |

## 3. Tasks Collection

Purpose: Stores tasks associated with projects and users.

| Field | Data Type | Description |
|---|---|---|
| _id | ObjectId | Unique task ID |
| title | String | Task title |
| description | String | Task description |
| priority | String | Task priority |
| status | String | Task status |
| projectId | ObjectId | Reference to a project |
| assignedTo | ObjectId | Reference to an assigned user |

## Collection Relationships

- Users and Projects: projectManagerId connects a project to its manager.
- Projects and Tasks: projectId connects tasks to a project.
- Users and Tasks: assignedTo connects tasks to assigned users.

## Database Design Notes

1. MongoDB stores data in collections and documents.
2. Each document has a unique ObjectId.
3. Related documents are connected using ObjectId references.
4. Passwords must be stored as secure hashes, not plain text.
5. The design uses the existing Users, Projects and Tasks collections.

## Conclusion

The three collections provide the basic database structure needed for user management, project management and task management.
