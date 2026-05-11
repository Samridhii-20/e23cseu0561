# Notification Management System

## Overview

The Notification Management System is a frontend application built using React, TypeScript, Vite, and Material UI. The system fetches notifications from the provided AffordMed API and displays them in an organized and responsive interface.

The application focuses on:
- Notification management
- Priority-based notification handling
- Read/Unread tracking
- Filtering functionality
- Responsive user experience
- Middleware logging integration

---

# Tech Stack

- React
- TypeScript
- Vite
- Material UI
- Axios
- React Router DOM

---

# System Architecture

## Frontend Architecture

The application follows a component-based architecture.

### Main Modules

```text
src/
 ├── components/
 │    └── Navbar.tsx
 │
 ├── pages/
 │    ├── Notifications.tsx
 │    └── PriorityNotifications.tsx
 │
 ├── services/
 │    ├── api.ts
 │    └── logger.ts
 │
 ├── App.tsx
 └── main.tsx
```

---

# Features

## 1. All Notifications Page

Displays all notifications fetched from the API.

### Features
- Responsive card layout
- Notification type display
- Timestamp display
- Read/Unread tracking
- Notification filtering

---

## 2. Priority Inbox

Displays top priority notifications.

### Priority Order

```text
Placement > Result > Event
```

### Features
- Sorted priority notifications
- Top 5 important notifications
- Highlighted unread notifications

---

## 3. Read / Unread Notification System

Unread notifications are visually highlighted using:
- Green border
- Light green background
- "Unread" status chip

Once clicked:
- Notification becomes "Read"
- Styling changes to normal state

---

## 4. Filtering System

Users can filter notifications by:
- All
- Event
- Result
- Placement

Implemented using Material UI Select component.

---

# API Integration

## Base URL

```text
http://4.224.186.213/evaluation-service
```

## Notifications Endpoint

```text
/notifications
```

### Query Parameters
- limit
- page
- notification_type

---

# Authentication

Authentication is handled using Bearer Token Authorization.

Environment variables are used for secure token management.

Example:

```env
VITE_ACCESS_TOKEN=your_access_token
```

---

# Logging Middleware

A custom logging middleware was integrated according to assignment requirements.

### Features
- API request logging
- Error logging
- Middleware-based logging system
- Avoids usage of console logging

### Log Structure

```json
{
  "stack": "frontend",
  "level": "error",
  "package": "api",
  "message": "Failed to fetch notifications"
}
```

---

# Responsive Design

The application uses:
- CSS Grid
- Material UI responsive components

Supports:
- Desktop
- Tablet
- Mobile layouts

---

# State Management

React hooks were used for state management.

### States Used
- Notifications list
- Read/Unread tracking
- Filter selection
- Loading state

---

# Future Improvements

Possible future enhancements:
- Persistent read/unread storage
- Real-time notifications
- Search functionality
- Pagination UI
- Notification categories
- Dark mode support

---

# Conclusion

The Notification Management System successfully implements a clean and responsive frontend architecture with notification prioritization, filtering, read/unread tracking, API integration, and logging middleware support while following the assignment constraints and best frontend development practices.
