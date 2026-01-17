# Quick Start

## 1. Install Dependencies

```bash
npm install
```

## 2. Run Dev Server

```bash
npm run dev
```

Open browser at [http://localhost:3000](http://localhost:3000)

## 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
estimateCalc/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home page (Landing)
│   ├── calculator/          
│   │   └── page.tsx         # Calculator page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   └── steps/               # Calculator step components
│       ├── Step1Team.tsx
│       ├── Step2Design.tsx
│       ├── Step3Features.tsx
│       ├── Step4TechStack.tsx
│       ├── Step5Testing.tsx
│       ├── Step6Additional.tsx
│       └── Step7Summary.tsx
├── store/
│   └── calculator.ts        # Zustand store
├── types/
│   └── calculator.ts         # TypeScript types
├── data/
│   ├── features.ts          # Features and constants
│   └── templates.ts         # Project templates
├── utils/
│   └── exportPDF.ts         # PDF export
└── package.json
```

## How to Use

### Step 1: Team
1. Click "Add Team Member"
2. Select role and level
3. Specify hourly rate (or use recommended)
4. Set working hours per day (usually 6-8)
5. Add number of workers for this role

**Important**: You do NOT need to specify number of working days! The calculator automatically calculates required time based on selected features.

### Step 2: Design
1. Select complexity (simple/medium/complex)
2. Specify number of screens/pages
3. Add additional services (logo, icons, animations)
4. Select devices for responsiveness

### Step 3: Features
1. Expand feature categories
2. Select required features
3. Adjust number of hours manually if needed

### Step 4: Technologies
1. Select Frontend framework
2. Select Backend stack
3. Select database
4. Add cloud services if needed

### Step 5: Testing
1. Enable manual testing
2. Configure percentage of time for testing
3. Add automated testing if needed

### Step 6: Additional
1. Select support period
2. Add documentation
3. Configure buffer for unexpected costs
4. Add other costs

### Step 7: Results
1. View detailed breakdown
2. Export to PDF
3. Save calculation as JSON

## Useful Commands

```bash
# Clear cache and node_modules
rm -rf node_modules .next
npm install

# Type checking
npx tsc --noEmit

# Code formatting (if prettier is available)
npx prettier --write .
```

## Support

If you have questions or issues, create an issue in the repository.

---

Created for the IT community
