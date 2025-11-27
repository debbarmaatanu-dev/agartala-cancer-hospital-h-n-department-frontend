# ABVRCC Patient Record Management System

Internal tool for Patient Record Management System for **Atal Bihari Vajpayee Regional Cancer Centre (ABVRCC)** - Head & Neck Department

## Overview

A comprehensive web-based patient record management system designed specifically for the Head & Neck Department at ABVRCC Regional Cancer Centre. This internal tool streamlines patient data entry, record retrieval, and medical documentation management for healthcare professionals.

## Current Status

**POC/MVP Demo Stage** - No backend integration yet. All functionality is mocked with frontend state management and simulated delays.

## Features

### 🏥 Patient Management

- **Add New Patient Records** - Comprehensive form for registering new patients with complete medical history
- **Search Patient Records** - Quick search functionality by patient ID, name, or phone number
- **View & Edit Records** - Detailed patient information with inline editing capabilities
- **PDF Export** - Generate professional PDF reports of patient records (excludes media files)

### 📋 Data Collection Sections

1. **Patient Identification**
   - Form ID / Serial Number
   - Personal details (Name, DOB, Sex, Phone)
   - Address and emergency contact
   - Allergies and medical alerts

2. **Medical Information**
   - Type of cancer
   - Location of cancer
   - Cancer stage (0-IV)
   - Current diagnoses and clinical notes

3. **Treatment Information**
   - Treatment success status
   - Duration under treatment
   - Patient status (Alive/Deceased)

4. **Surgery Information**
   - Surgery date and outcome
   - Detailed surgery notes
   - Post-operative observations

5. **Follow-up Information**
   - Last and next follow-up dates
   - Follow-up notes and observations

6. **Medical Media**
   - Upload/view CT scans, photos, videos
   - Support for JPEG, PNG, MP4, MOV, AVI, PDF formats
   - Media files excluded from PDF exports

### 🔐 Authentication

- Admin login system (cookie-based)
- Password reset functionality
- Protected routes for authenticated users only

### 🎨 UI/UX Features

- Fully responsive design (mobile, tablet, desktop)
- Clean, professional medical interface
- Blue (#3B82F6) and Teal (#14B8A6) color scheme
- Mobile-like press animations on interactive elements
- Accessibility compliant (ARIA labels, semantic HTML)
- Real-time date/time display on home page

## Tech Stack

### Frontend

- **React 18** with TypeScript
- **React Router DOM** - Client-side routing
- **Zustand** - State management
- **Tailwind CSS** - Styling and responsive design
- **Vite** - Build tool and dev server

### Libraries

- **js-cookie** - Cookie management for authentication
- **html-to-image** - HTML to image conversion for PDF generation
- **jspdf** - PDF document generation
- **Font Awesome** - Icons

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type safety

## Project Structure

```
src/
├── appComponents/
│   ├── nav/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── LoadingModal.tsx
├── appStore/
│   ├── appStore.ts
│   └── adminSlice.ts
├── components/
│   ├── admin/
│   │   └── AdminLoginForm.tsx
│   ├── patient/
│   │   ├── PatientIdentificationSection.tsx
│   │   ├── MedicalInformationSection.tsx
│   │   ├── TreatmentInformationSection.tsx
│   │   ├── SurgeryInformationSection.tsx
│   │   ├── FollowUpInformationSection.tsx
│   │   ├── MedicalMediaSection.tsx
│   │   └── MedicalMediaUploadSection.tsx
│   └── Modal.tsx
├── constants/
│   └── dummyData.ts
├── pages/
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── AddNewRecords.tsx
│   ├── SearchRecords.tsx
│   └── PatientRecordDetail.tsx
├── utils/
│   ├── homeUtils.tsx
│   └── pdfGenerator.ts
├── App.tsx
├── Routing.tsx
└── main.tsx
```

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd abvrcc-patient-records

# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## Routes

- `/` - Home page (requires authentication)
- `/home` - Home page (requires authentication)
- `/login` - Admin login page
- `/add_new_records` - Add new patient record form
- `/search_records` - Search patient records
- `/search_records/:searchParam` - View/edit patient record details

## Configuration

### Tailwind Breakpoints

```javascript
xxxs: '320px'  // Extra small mobile
xxs: '375px'   // Small mobile
xs: '425px'    // Mobile
sm: '640px'    // Small tablet
md: '768px'    // Tablet
lg: '1024px'   // Desktop
xl: '1280px'   // Large desktop
2xl: '1536px'  // Extra large desktop
```

## Future Enhancements

### Backend Integration

- [ ] REST API or GraphQL backend
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Real authentication system
- [ ] File upload to cloud storage (AWS S3/Azure Blob)
- [ ] Real-time data synchronization

### Features

- [ ] Advanced search filters
- [ ] Patient history timeline
- [ ] Appointment scheduling
- [ ] Report generation and analytics
- [ ] Multi-user role management
- [ ] Audit logs and activity tracking
- [ ] Data export (CSV, Excel)
- [ ] Print optimization for medical records

### Technical Improvements

- [ ] Unit and integration tests
- [ ] E2E testing with Playwright/Cypress
- [ ] Performance optimization
- [ ] PWA support for offline access
- [ ] Internationalization (i18n)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - See LICENSE file for details.

## Contact

**Atal Bihari Vajpayee Regional Cancer Centre**  
Head & Neck Department  
Regional Cancer Centre

---

© 2024 ABVRCC. All rights reserved.
