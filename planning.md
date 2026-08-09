# Senior Success Planner – Planning

## User Stories

1. As a high school senior, I want to add college-preparation tasks so that I can keep track of everything I need to complete.

2. As a high school senior, I want to mark tasks as completed or incomplete so that I can monitor my progress during senior year.

3. As a high school senior, I want to filter and delete tasks so that I can focus on unfinished responsibilities and keep my planner organized.

4. As a high school senior, I want to contact an advisor so that I can ask questions about college applications, financial aid, scholarships, or graduation planning.


## State Tree

Senior Success Planner

- App
  - Tasks
    - Task ID
    - Task Text
    - Completed: Yes / No
  - New Task
  - Filter
    - All
    - Completed
    - Incomplete

- Contact Form
  - First Name
  - Last Name
  - Email
  - Comments


## Container Components

### App
- Stores the task list
- Stores the current filter
- Stores the new task input
- Handles adding, completing, deleting, and filtering tasks
- Controls the main application routes

### Contact
- Stores the contact form data
- Handles changes to the contact form
- Handles form submission


## Presentational Components

### Header
- Displays the Senior Success Planner title
- Displays navigation links for My Tasks and Contact

### TaskForm
- Displays the new task input
- Displays the Add Task button

### TaskList
- Displays the current list of tasks
- Displays task checkboxes and Delete buttons
- Displays a message when there are no tasks to show


## Application Views

### My Tasks
Route: `/todos`

The My Tasks view allows users to add, complete, delete, and filter senior-year tasks. It also displays task progress and senior-year planning tips.

### Contact
Route: `/contact`

The Contact view provides a controlled form where users can enter their first name, last name, email, and comments.


## Wireframes

Wireframes were created for both desktop and mobile layouts.

- `wireframes/desktop-wireframes.jpg`
  - My Tasks desktop view
  - Contact desktop view

- `wireframes/mobile-wireframes.jpg`
  - My Tasks mobile view
  - Contact mobile view
  