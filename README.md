# Contract Management Application

A frontend Contract Management application built using **React + TypeScript**.  
The application allows users to create contracts using predefined blueprints, manage their lifecycle, and view them in a dashboard.

This project is implemented as part of a frontend assignment and focuses on **correct lifecycle handling, clean UI behavior, and clear logic**.

---

## Features

- Create contracts using predefined, realistic contract blueprints
- User-defined contract names (no hardcoded demo names)
- Contract lifecycle management:
  - Created → Approved → Sent → Signed → Locked
- Dashboard with contract filtering:
  - All
  - Pending
  - Active
  - Signed
- View contract details using a modal
- Persistent storage using browser `localStorage`
- Simple, clean, and readable UI

---

## Tech Stack

- React
- TypeScript
- Vite
- HTML / CSS (inline styling)
- Browser LocalStorage (for persistence)

---

## Project Structure

src/
├── components/
│ └── Header.tsx
│
├── pages/
│ ├── CreateContract.tsx
│ └── Dashboard.tsx
│
├── App.tsx
└── main.tsx


---

## Contract Lifecycle

Contracts follow a defined lifecycle:


---

## Contract Lifecycle

Contracts follow a defined lifecycle:

Draft (UI only)
→ Created
→ Approved
→ Sent
→ Signed
→ Locked


### Lifecycle Rules

- A contract is not considered created until a blueprint is selected
- Status transitions follow a strict order
- Once a contract reaches **Locked**, it becomes read-only
- Locked contracts are finalized and stored

---

<<<<<<< HEAD
## Dashboard Status Grouping

| Dashboard Tab | Contract Statuses |
|--------------|-------------------|
| Pending      | Created, Approved |
| Active       | Sent |
| Signed       | Signed, Locked |

---

## Data Persistence

- Contract data is stored in the browser using `localStorage`
- Data persists across page refreshes
- No backend or API is used (as per assignment scope)

---

## How to Run the Project

1. Install dependencies:
   ```bash
   npm install
2. 
### Lifecycle Rules

- A contract is not considered created until a blueprint is selected
- Status transitions follow a strict order
- Once a contract reaches **Locked**, it becomes read-only
- Locked contracts are finalized and stored

---
=======



>>>>>>> caef0008aecd9017741cad0c32af306d9e27b3fb

## Dashboard Status Grouping

| Dashboard Tab | Contract Statuses |
|--------------|-------------------|
| Pending      | Created, Approved |
| Active       | Sent |
| Signed       | Signed, Locked |

---

## Data Persistence

- Contract data is stored in the browser using `localStorage`
- Data persists across page refreshes
- No backend or API is used (as per assignment scope)

---

## How to Run the Project

1. Install dependencies:
   ```bash
   npm install
2. Start the development server
npm run dev
3. Open the application in the browser:
http://localhost:5173


## Assumptions

This is a frontend-only application

No authentication or user roles

No real digital signature functionality

Blueprints are predefined in the application

Styling is intentionally minimal and functional

## Limitations

No backend or database integration

No contract deletion feature

No editing after a contract is locked

No role-based access control

## Submission Notes

The application satisfies the functional requirements of the assignment

Contract lifecycle logic is clearly implemented

UI state always reflects the contract data state

<<<<<<< HEAD
Code is modular, readable, and type-safe
=======
Code is modular, readable, and type-safe
>>>>>>> caef0008aecd9017741cad0c32af306d9e27b3fb
