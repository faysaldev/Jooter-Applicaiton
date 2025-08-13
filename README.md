Next.js API Backend Documentation \* { margin: 0; padding: 0; box-sizing: border-box; } body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; } .container { max-width: 1200px; margin: 0 auto; padding: 20px; background: white; min-height: 100vh; box-shadow: 0 0 50px rgba(0, 0, 0, 0.1); } .header { text-align: center; margin-bottom: 40px; padding: 30px 0; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; border-radius: 15px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); } .header h1 { font-size: 2.5rem; margin-bottom: 10px; font-weight: 700; } .header p { font-size: 1.2rem; opacity: 0.9; max-width: 800px; margin: 0 auto; } .nav { background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 30px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); } .nav h3 { margin-bottom: 15px; color: #2c3e50; } .nav-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; } .nav a { color: #3498db; text-decoration: none; padding: 8px 12px; border-radius: 5px; transition: all 0.3s ease; border: 1px solid transparent; } .nav a:hover { background: #3498db; color: white; transform: translateY(-2px); } .section { margin-bottom: 40px; padding: 30px; background: white; border-radius: 15px; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08); border-left: 5px solid #3498db; } .section h2 { color: #2c3e50; margin-bottom: 20px; font-size: 2rem; border-bottom: 2px solid #ecf0f1; padding-bottom: 10px; } .section h3 { color: #34495e; margin: 25px 0 15px 0; font-size: 1.3rem; } .base-url { background: #e8f8f5; padding: 15px; border-radius: 8px; border-left: 4px solid #27ae60; margin: 15px 0; } .auth-note { background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin: 15px 0; } table { width: 100%; border-collapse: collapse; margin: 20px 0; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); } th { background: #3498db; color: white; padding: 15px; text-align: left; font-weight: 600; } td { padding: 12px 15px; border-bottom: 1px solid #ecf0f1; } tr:hover { background: #f8f9fa; } .method { padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 0.85rem; color: white; } .method.post { background: #e74c3c; } .method.get { background: #27ae60; } .method.delete { background: #e67e22; } .endpoint-section { background: #f8f9fa; padding: 25px; margin: 20px 0; border-radius: 10px; border: 1px solid #e9ecef; } .endpoint-title { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px; margin: -25px -25px 20px -25px; border-radius: 10px 10px 0 0; font-size: 1.2rem; font-weight: 600; } pre { background: #2c3e50; color: #ecf0f1; padding: 20px; border-radius: 8px; overflow-x: auto; margin: 15px 0; font-size: 0.9rem; line-height: 1.4; } code { background: #e8f4fd; padding: 2px 6px; border-radius: 4px; font-family: 'Monaco', 'Menlo', monospace; font-size: 0.9rem; color: #2980b9; } .response-example { background: #000000; border-left: 4px solid #27ae60; } .request-example { background: #000000; border-left: 4px solid #ffc107; } .back-to-top { position: fixed; bottom: 30px; right: 30px; background: #3498db; color: white; width: 50px; height: 50px; border-radius: 50%; border: none; cursor: pointer; font-size: 1.2rem; box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3); transition: all 0.3s ease; display: none; } .back-to-top:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4); } .show { display: block; } @media (max-width: 768px) { .container { padding: 10px; } .header h1 { font-size: 2rem; } .section { padding: 20px; } table { font-size: 0.9rem; } th, td { padding: 10px; } }

# 📁 Next.js API Backend

Complete documentation for Files/Notes management system with authentication, storage, and activity tracking

### 📋 Quick Navigation

[Overview](#overview) [Authentication](#authentication) [Endpoints Table](#endpoints-table) [Auth Endpoints](#auth-endpoints) [Item Management](#item-management) [User Management](#user-management) [Additional Features](#additional-features)

## 🚀 Overview

This backend provides a complete file and notes management system built with **Next.js**, **MongoDB**, and **JWT** authentication. It supports file uploads, folder organization, user management, and activity tracking.

**Base URL:** `http://localhost:3000/api`

## 🔐 Authentication

**⚠️ Important:** Most endpoints require authentication via a **Bearer Token** in the Authorization header.

### Header Format:

    Authorization: Bearer <JWT_TOKEN>

You obtain the token from the `/auth/login` endpoint after successful authentication.

## 📊 API Endpoints Overview

Method

Endpoint

Description

POST

/auth/signup

Register a new user

POST

/auth/login

Login user and get JWT

POST

/auth/forgot-password

Request password reset

POST

/auth/reset-password

Reset password

POST

/items/upload

Upload a file/note/folder

GET

/items/\[id\]/details

Get item details

POST

/items/\[id\]/favorite

Mark/unmark favorite

POST

/items/\[id\]/rename

Rename an item

POST

/items/\[id\]/copy

Copy an item

POST

/items/\[id\]/duplicate

Duplicate an item

POST

/items/\[id\]/share

Share/unshare an item

DELETE

/items/\[id\]/delete

Delete an item

GET

/items/list/folders

List all folders

GET

/items/list/files

List all files (notes, images, PDFs)

GET

/items/list/notes

List all notes

GET

/items/list/pdfs

List all PDFs

GET

/items/folder/\[id\]/items

List items in folder

GET

/items/favorites

List all favorite items

GET

/stats/usage

Get storage usage stats

GET

/activity/recent

Get recent user activity

GET

/search?q=term&type=note

Search items

GET

/user/profile

Get user profile

POST

/user/logout

Logout user

POST

/user/update-username

Update username

POST

/user/change-password

Change password

DELETE

/user/delete-account

Delete user and all data

## 🔑 Authentication Endpoints

1\. User Signup

**POST** `/auth/signup`

### Request Body:

{
"username": "john",
"email": "john@example.com",
"password": "123456",
"confirmPassword": "123456"
}

### Success Response:

{
"message": "User created",
"user": {
"id": "64d6f6c5d3e8a7b123456789",
"username": "john",
"email": "john@example.com"
}
}

2\. User Login

**POST** `/auth/login`

### Request Body:

{
"email": "john@example.com",
"password": "123456"
}

### Success Response:

{
"token": "<JWT_TOKEN>",
"user": {
"id": "64d6f6c5d3e8a7b123456789",
"username": "john",
"email": "john@example.com"
}
}

## 📁 Item Management

3\. Upload Item

**POST** `/items/upload`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Request Body (Note):

{
"kind": "note",
"name": "My First Note",
"content": "This is the content of my note"
}

### Request Body (Folder):

{
"kind": "folder",
"name": "My Folder"
}

### Request Body (Image/PDF):

{
"kind": "image",
"name": "My Image",
"url": "https://example.com/image.jpg",
"sizeBytes": 102400
}

### Success Response:

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
"\_id": "64d7a6c6d3e8a7b123456790"
}
}

4\. Get Item Details

**GET** `/items/[id]/details`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Success Response:

{
"item": {
"\_id": "64d7a6c6d3e8a7b123456790",
"name": "My First Note",
"type": "note",
"noteContent": "This is the content of my note",
"isFavorite": false,
"isShared": false
}
}

5\. Favorite/Unfavorite Item

**POST** `/items/[id]/favorite`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Request Body:

{
"favorite": true
}

### Success Response:

{
"item": {
"\_id": "64d7a6c6d3e8a7b123456790",
"isFavorite": true
}
}

6\. Rename Item

**POST** `/items/[id]/rename`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Request Body:

{
"name": "Updated Note Name"
}

### Success Response:

{
"item": {
"\_id": "64d7a6c6d3e8a7b123456790",
"name": "Updated Note Name"
}
}

7\. Share/Unshare Item

**POST** `/items/[id]/share`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Request Body:

{
"enable": true
}

### Success Response:

{
"item": {
"\_id": "64d7a6c6d3e8a7b123456790",
"isShared": true,
"shareToken": "abc123def456"
},
"shareUrl": "http://localhost:3000/share/abc123def456"
}

## 👤 User Management

16\. User Profile

**GET** `/user/profile`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Success Response:

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

18\. Update Username

**POST** `/user/update-username`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Request Body:

{
"username": "johnny"
}

### Success Response:

{
"user": {
"username": "johnny",
"email": "john@example.com"
}
}

19\. Change Password

**POST** `/user/change-password`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Request Body:

{
"currentPassword": "123456",
"newPassword": "newpassword123"
}

### Success Response:

{
"message": "Password updated"
}

## 📊 Additional Features

13\. Storage Usage Stats

**GET** `/stats/usage`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Success Response:

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

14\. Recent Activity

**GET** `/activity/recent`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Success Response:

{
"activities": \[
{
"action": "create",
"item": "64d7a6c6d3e8a7b123456790",
"meta": { "type": "note", "name": "My First Note" },
"createdAt": "2025-08-13T11:00:00.000Z"
}
\]
}

15\. Search Items

**GET** `/search?q=note&type=note`

**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### Success Response:

{
"items": \[
{
"name": "My First Note",
"type": "note"
}
\]
}

↑

// Back to top button functionality window.addEventListener('scroll', function () { const backToTop = document.querySelector('.back-to-top'); if (window.pageYOffset > 300) { backToTop.classList.add('show'); } else { backToTop.classList.remove('show'); } }); function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); } // Smooth scrolling for navigation links document.querySelectorAll('a\[href^="#"\]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }); }); // Add copy functionality to code blocks document.querySelectorAll('pre').forEach(pre => { pre.addEventListener('click', function () { navigator.clipboard.writeText(this.textContent).then(() => { // Visual feedback const originalBg = this.style.background; this.style.background = '#27ae60'; setTimeout(() => { this.style.background = originalBg; }, 200); }); }); pre.style.cursor = 'pointer'; pre.title = 'Click to copy'; });
