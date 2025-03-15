# Client Connect - Client Portal Frontend MVP

A client portal frontend MVP for agencies and freelancers to manage client relationships, project progress, communications, and deliverables.

## Features

- **Authentication**: Login, forgot password, and first-time onboarding
- **Project Dashboard**: View project status, timeline, action items, and activity feed
- **Communication Center**: Threaded conversations with file attachments and reactions
- **Document Repository**: View, filter, and approve shared documents
- **Invoice Viewer**: View and manage invoices with payment history

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Data**: Mock data (no backend integration)

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/client-management.git
   cd client-management
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/
│   ├── auth/          # Authentication components
│   ├── dashboard/     # Dashboard components
│   ├── communication/ # Communication components
│   ├── documents/     # Document components
│   ├── invoices/      # Invoice components
│   ├── layout/        # Layout components
│   └── ui/            # Reusable UI components
├── hooks/             # Custom React hooks
├── mocks/             # Mock data
├── pages/             # Next.js pages
├── styles/            # Global styles
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Demo Credentials

For demonstration purposes, you can use the following credentials:

- **Email**: client@example.com
- **Password**: password

## Development

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running in Production Mode

```bash
npm start
# or
yarn start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- This is a frontend-only MVP with mock data
- No actual backend integration or authentication is implemented
- All data is stored in memory and will be reset on page refresh 