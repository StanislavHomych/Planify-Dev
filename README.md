# Projekto - Development Cost Calculator

Professional web application for estimating cost and time for web and mobile project development.

## Features

- **Team estimation**: Add team members with different roles, levels, and rates
- **Design and mockups**: Estimate design complexity and additional services
- **Features**: Select features with realistic development time estimates
- **Tech stack**: Account for multipliers for different technologies
- **Testing**: Manual and automated testing
- **Additional costs**: Support, documentation, buffers
- **Detailed breakdown**: Complete cost breakdown by roles and features
- **Export results**: Save and export calculations

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **React Icons** - Icons

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run dev server:
```bash
npm run dev
```

3. Open browser at [http://localhost:3000](http://localhost:3000)

## Usage

### Step 1: Team
Add team members with their roles, levels, and hourly rates. The calculator automatically calculates required work time based on selected features.

### Step 2: Design
Select design complexity, number of screens, and additional services.

### Step 3: Features
Select required features for your project with realistic estimates.

### Step 4: Technologies
Select technology stack (frontend, backend, database).

### Step 5: Testing
Configure manual and automated testing.

### Step 6: Additional
Specify support, documentation, and buffers.

### Step 7: Results
View detailed breakdown and export results.

## MVP Features

### Implemented
- Team forms with different roles
- Design configuration
- Feature selection with time estimates
- Technology stack selection
- Testing and QA
- Additional costs
- Detailed calculation with breakdown
- State persistence in localStorage
- Responsive design

### Planned
- PDF export
- Project templates (E-commerce, SaaS, etc.)
- Comparison of different scenarios
- Backend API for saving calculations
- Calculation history
- Email sending of results

## Example Calculation

Typical web application with:
- 2 developers (Frontend + Backend) @ $50/hr
- 1 designer @ $40/hr
- 10-15 features (auth, profile, search, dashboard, etc.)
- Manual testing (20%)
- 3 months support

**Result**: ~$35,000 - $50,000, 2-4 months development

The calculator automatically calculates how much time and money is needed based on selected features!

## Contributing

If you found a bug or have ideas for improvement, create an issue or pull request.

## License

MIT License

---

Created for the IT community
