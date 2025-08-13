::: container
::: header

# 📁 Next.js API Backend

Complete documentation for Files/Notes management system with
authentication, storage, and activity tracking
:::

### 📋 Quick Navigation

::: nav-grid
[Overview](#overview) [Authentication](#authentication) [Endpoints
Table](#endpoints-table) [Auth Endpoints](#auth-endpoints) [Item
Management](#item-management) [User Management](#user-management)
[Additional Features](#additional-features)
:::

::: {#overview .section .section}

## 🚀 Overview

This backend provides a complete file and notes management system built
with **Next.js**, **MongoDB**, and **JWT** authentication. It supports
file uploads, folder organization, user management, and activity
tracking.

::: base-url
**Base URL:** `http://localhost:3000/api`
:::
:::

::: {#authentication .section .section}

## 🔐 Authentication

::: auth-note
**⚠️ Important:** Most endpoints require authentication via a **Bearer
Token** in the Authorization header.
:::

### Header Format:

    Authorization: Bearer <JWT_TOKEN>

You obtain the token from the `/auth/login` endpoint after successful
authentication.
:::

::: {#endpoints-table .section .section}

## 📊 API Endpoints Overview

Method Endpoint Description

---

[POST]{.method .post} /auth/signup Register a new user
[POST]{.method .post} /auth/login Login user and get JWT
[POST]{.method .post} /auth/forgot-password Request password reset
[POST]{.method .post} /auth/reset-password Reset password
[POST]{.method .post} /items/upload Upload a file/note/folder
[GET]{.method .get} /items/\[id\]/details Get item details
[POST]{.method .post} /items/\[id\]/favorite Mark/unmark favorite
[POST]{.method .post} /items/\[id\]/rename Rename an item
[POST]{.method .post} /items/\[id\]/copy Copy an item
[POST]{.method .post} /items/\[id\]/duplicate Duplicate an item
[POST]{.method .post} /items/\[id\]/share Share/unshare an item
[DELETE]{.method .delete} /items/\[id\]/delete Delete an item
[GET]{.method .get} /items/list/folders List all folders
[GET]{.method .get} /items/list/files List all files (notes, images, PDFs)
[GET]{.method .get} /items/list/notes List all notes
[GET]{.method .get} /items/list/pdfs List all PDFs
[GET]{.method .get} /items/folder/\[id\]/items List items in folder
[GET]{.method .get} /items/favorites List all favorite items
[GET]{.method .get} /stats/usage Get storage usage stats
[GET]{.method .get} /activity/recent Get recent user activity
[GET]{.method .get} /search?q=term&type=note Search items
[GET]{.method .get} /user/profile Get user profile
[POST]{.method .post} /user/logout Logout user
[POST]{.method .post} /user/update-username Update username
[POST]{.method .post} /user/change-password Change password
[DELETE]{.method .delete} /user/delete-account Delete user and all data
:::

::: {#auth-endpoints .section .section}

## 🔑 Authentication Endpoints

::: endpoint-section
::: endpoint-title
1\. User Signup
:::

**POST** `/auth/signup`

### Request Body:

```request-example
{
  "username": "john",
  "email": "john@example.com",
  "password": "123456",
  "confirmPassword": "123456"
}
```

### Success Response:

```response-example
{
  "message": "User created",
  "user": {
    "id": "64d6f6c5d3e8a7b123456789",
    "username": "john",
    "email": "john@example.com"
  }
}
```

:::

::: endpoint-section
::: endpoint-title
2\. User Login
:::

**POST** `/auth/login`

### Request Body:

```request-example
{
  "email": "john@example.com",
  "password": "123456"
}
```

### Success Response:

```response-example
{
  "token": "<JWT_TOKEN>",
  "user": {
    "id": "64d6f6c5d3e8a7b123456789",
    "username": "john",
    "email": "john@example.com"
  }
}
```

:::
:::

::: {#item-management .section .section}

## 📁 Item Management

::: endpoint-section
::: endpoint-title
3\. Upload Item
:::

**POST** `/items/upload`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Request Body (Note):

```request-example
{
  "kind": "note",
  "name": "My First Note",
  "content": "This is the content of my note"
}
```

### Request Body (Folder):

```request-example
{
  "kind": "folder",
  "name": "My Folder"
}
```

### Request Body (Image/PDF):

```request-example
{
  "kind": "image",
  "name": "My Image",
  "url": "https://example.com/image.jpg",
  "sizeBytes": 102400
}
```

### Success Response:

```response-example
{
  "item": {
    "owner": "64d6f6c5d3e8a7b123456789",
    "name": "My First Note",
    "type": "note",
    "size": 28,
    "noteContent": "This is the content of my note",
    "isFavorite": false,
    "isShared": false,
    "deleted": false,
    "createdAt": "2025-08-13T11:00:00.000Z",
    "updatedAt": "2025-08-13T11:00:00.000Z",
    "_id": "64d7a6c6d3e8a7b123456790"
  }
}
```

:::

::: endpoint-section
::: endpoint-title
4\. Get Item Details
:::

**GET** `/items/[id]/details`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Success Response:

```response-example
{
  "item": {
    "_id": "64d7a6c6d3e8a7b123456790",
    "name": "My First Note",
    "type": "note",
    "noteContent": "This is the content of my note",
    "isFavorite": false,
    "isShared": false
  }
}
```

:::

::: endpoint-section
::: endpoint-title
5\. Favorite/Unfavorite Item
:::

**POST** `/items/[id]/favorite`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Request Body:

```request-example
{
  "favorite": true
}
```

### Success Response:

```response-example
{
  "item": {
    "_id": "64d7a6c6d3e8a7b123456790",
    "isFavorite": true
  }
}
```

:::

::: endpoint-section
::: endpoint-title
6\. Rename Item
:::

**POST** `/items/[id]/rename`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Request Body:

```request-example
{
  "name": "Updated Note Name"
}
```

### Success Response:

```response-example
{
  "item": {
    "_id": "64d7a6c6d3e8a7b123456790",
    "name": "Updated Note Name"
  }
}
```

:::

::: endpoint-section
::: endpoint-title
7\. Share/Unshare Item
:::

**POST** `/items/[id]/share`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Request Body:

```request-example
{
  "enable": true
}
```

### Success Response:

```response-example
{
  "item": {
    "_id": "64d7a6c6d3e8a7b123456790",
    "isShared": true,
    "shareToken": "abc123def456"
  },
  "shareUrl": "http://localhost:3000/share/abc123def456"
}
```

:::
:::

::: {#user-management .section .section}

## 👤 User Management

::: endpoint-section
::: endpoint-title
16\. User Profile
:::

**GET** `/user/profile`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Success Response:

```response-example
{
  "user": {
    "username": "john",
    "email": "john@example.com",
    "storageUsedBytes": 1024,
    "planLimitBytes": 16106127360,
    "createdAt": "2025-08-13T10:00:00.000Z",
    "updatedAt": "2025-08-13T11:00:00.000Z"
  }
}
```

:::

::: endpoint-section
::: endpoint-title
18\. Update Username
:::

**POST** `/user/update-username`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Request Body:

```request-example
{
  "username": "johnny"
}
```

### Success Response:

```response-example
{
  "user": {
    "username": "johnny",
    "email": "john@example.com"
  }
}
```

:::

::: endpoint-section
::: endpoint-title
19\. Change Password
:::

**POST** `/user/change-password`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Request Body:

```request-example
{
  "currentPassword": "123456",
  "newPassword": "newpassword123"
}
```

### Success Response:

```response-example
{
  "message": "Password updated"
}
```

:::
:::

::: {#additional-features .section .section}

## 📊 Additional Features

::: endpoint-section
::: endpoint-title
13\. Storage Usage Stats
:::

**GET** `/stats/usage`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Success Response:

```response-example
{
  "limitBytes": 16106127360,
  "usedBytes": 1024,
  "remainingBytes": 16106126336,
  "totals": {
    "totalItems": 1,
    "totalSize": 1024,
    "folders": 0,
    "notes": 1,
    "images": 0,
    "pdfs": 0
  }
}
```

:::

::: endpoint-section
::: endpoint-title
14\. Recent Activity
:::

**GET** `/activity/recent`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Success Response:

```response-example
{
  "activities": [
    {
      "action": "create",
      "item": "64d7a6c6d3e8a7b123456790",
      "meta": { "type": "note", "name": "My First Note" },
      "createdAt": "2025-08-13T11:00:00.000Z"
    }
  ]
}
```

:::

::: endpoint-section
::: endpoint-title
15\. Search Items
:::

**GET** `/search?q=note&type=note`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Success Response:

```response-example
{
  "items": [
    {
      "name": "My First Note",
      "type": "note"
    }
  ]
}
```

:::
:::

↑
:::
