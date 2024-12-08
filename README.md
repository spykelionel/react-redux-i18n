# Learnoso (NEW)

This the main learnoso project codebase. Other clients exists!

## Repository Structure

Do abide to this repository structure. Ask any questions if you have any

src/ </br>
├── app/ </br>
│ ├── store.ts // Central Redux store configuration </br>
│ └── rootReducer.ts // Combine all reducers from different domains here </br>
├── features/ </br>
│ ├── user/ </br>
│ │ ├── components/ </br>
│ │ │ ├── UserProfile.tsx </br>
│ │ │ └── UserList.tsx </br>
│ │ ├── pages/ </br>
│ │ │ └── UserDashboard.tsx </br>
│ │ ├── redux/ </br>
│ │ │ ├── userSlice.ts // Redux slice for user </br>
│ │ │ └── userSelectors.ts // Optional selectors </br>
│ │ ├── userApi.ts </br>
│ │ ├── user.types.ts </br>
│ │ └── index.ts </br>
│ ├── liveClass/ </br>
│ │ ├── components/ </br>
│ │ │ ├── LiveClassRoom.tsx </br>
│ │ │ └── LiveClassCard.tsx </br>
│ │ ├── pages/ </br>
│ │ │ └── LiveClassSchedule.tsx </br>
│ │ ├── redux/ </br>
│ │ │ ├── liveClassSlice.ts // Redux slice for live classes </br>
│ │ │ └── liveClassSelectors.ts </br>
│ │ ├── liveClassApi.ts </br>
│ │ ├── liveClass.types.ts </br>
│ │ └── index.ts </br>
│ ├── ide/ </br>
│ │ ├── components/ </br>
│ │ │ ├── IDEEditor.tsx </br>
│ │ │ └── IDEFileList.tsx </br>
│ │ ├── pages/ </br>
│ │ │ └── StudentIDE.tsx </br>
│ │ ├── redux/ </br>
│ │ │ └── ideSlice.ts // Redux slice for IDE </br>
│ │ ├── ideApi.ts </br>
│ │ ├── ide.types.ts </br>
│ │ └── index.ts </br>
│ └── messaging/ </br>
│ ├── components/ </br>
│ │ ├── MessageList.tsx </br>
│ │ └── ChatInput.tsx </br>
│ ├── pages/ </br>
│ │ └── ChatRoom.tsx </br>
│ ├── redux/ </br>
│ │ └── messagingSlice.ts // Redux slice for messaging </br>
│ ├── messagingApi.ts </br>
│ ├── messaging.types.ts </br>
│ └── index.ts </br>
├── pages/ </br>
│ ├── Dashboard.tsx </br>
│ ├── StudentDashboard.tsx </br>
│ ├── TutorDashboard.tsx </br>
│ ├── LiveClassSchedule.tsx </br>
│ ├── LiveClassDetail.tsx </br>
│ ├── StudentIDE.tsx </br>
│ ├── ChatRoom.tsx </br>
│ └── NotFound.tsx </br>
├── types/ </br>
│ ├── api.d.ts </br>
│ ├── user.d.ts </br>
│ ├── liveClass.d.ts </br>
│ ├── ide.d.ts </br>
│ ├── messaging.d.ts </br>
│ └── common.d.ts </br>
├── App.tsx </br>
├── index.tsx </br>
└── routes.tsx </br>

## Setting Up the Docker Environment

### Prerequisites

- **Docker**: Ensure Docker is installed and running on your machine.
- **Docker Compose**: Ensure Docker Compose is installed.

### Setup Scripts

You can use the provided setup scripts for your operating system:

- **For Bash (Linux/MacOS)**: Use `setup.sh`.
- **For Windows PowerShell**: Use `setup.ps1`.

#### Bash Setup

1. **Run the Setup Script**:

   ```bash
   ./setup.sh
   ```

#### PowerShell Setup

1. **Run the Setup Script**:

   ```powershell
   .\setup.ps1
   ```

### Script Details

- **`setup.sh`**: This script will pull the latest Docker image, build the application (if needed), and run the Docker container on Linux or macOS.
- **`setup.ps1`**: This script will pull the latest Docker image, build the application (if needed), and run the Docker container on Windows.
