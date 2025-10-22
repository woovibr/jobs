# Frontend Engineer Code Challenge - KYC Verification System

## Overview
Design and implement a complete KYC (Know Your Customer) verification flow using React. This challenge evaluates your ability to build a production-ready, user-friendly application with clean architecture and best practices.

---

## Challenge Requirements

### Functional Requirements
Build a multi-step KYC verification form with the following steps:

Step 1: Personal Information
- Full Name (required)
- Email Address (required, with email validation)
- Phone Number (required, with format validation)
- Date of Birth (required, must be 18+)
- Country of Residence (required, dropdown/autocomplete)

Step 2: Address Verification
- Street Address (required)
- City (required)
- State/Province (required)
- Postal Code (required)
- Address proof document upload (PDF, JPG, PNG - max 5MB)

Step 3: Identity Verification
- ID Type selection (Passport, Driver's License, RG)
- ID Number/ CPF (required)
- ID document upload (front side)
- ID document upload (back side, if applicable)

Step 4: Selfie Verification
- Live selfie capture
- Instructions for proper selfie (face clearly visible, good lighting)

Step 5: Review & Submit
- Summary of all entered information
- Ability to edit any previous step
- Terms and conditions acceptance
- Final submission

---

## Evaluation Criteria 

### 1. Componentization 
What we're looking for:
- Reusable Components: Create generic, reusable components (Button, Input, Select, FileUpload, etc.)
- Composition: Components should be composable and follow single responsibility principle
- Props Interface: Clear and well-typed props with proper defaults
- Component Structure: Logical folder organization (e.g., `/components/ui`, `/components/kyc`)
- Avoid Duplication: DRY principle - no repeated code patterns

Example Structure:
```
/components
  /ui
    Button.tsx
    Input.tsx
    Select.tsx
    FileUpload.tsx
    Card.tsx
  /kyc
    PersonalInfoStep.tsx
    AddressStep.tsx
    IdentityStep.tsx
```


### 2. Theme Creation 

What we're looking for:
- Centralized Theme System: Create a theme configuration object or use a theming library
- Design Tokens: Define colors, typography, spacing, shadows, border radius
- Consistency: All components should reference the theme
- Theme Provider: Implement context-based theming (bonus: light/dark mode toggle)
- Scalability: Easy to modify and extend the theme

Requirements:
- Define at least 3 color palettes: primary, secondary, neutral
- Include semantic colors: success, warning, error, info
- Typography scale (heading sizes, body text, labels)
- Spacing system (margins, paddings)
- Shadow/elevation levels

---

### 3. UX (User Experience) 
What we're looking for:
- Visual Feedback: Loading states, success/error messages, hover effects
- Progress Indication: Clear progress tracking across steps
- Form Validation: Real-time validation with helpful error messages
- Accessibility: Keyboard navigation, ARIA labels, focus management
- Micro-interactions: Smooth transitions, animations (subtle, not distracting)
- Error Handling: Graceful error states with recovery options
- Mobile-First: Touch-friendly targets, proper spacing
- Help Text: Tooltips, placeholder examples, inline guidance

UX Principles to Apply:
- Progressive disclosure (don't overwhelm users)
- Clear call-to-actions
- Confirmation before destructive actions
- Back button functionality
- Auto-save draft (optional bonus)

---

### 4. React Hooks 
What we're looking for use, but carefully:
- useState: Proper state management for form data, UI states
- useEffect: Data fetching, side effects, cleanup
- useContext: Theme context, form context for step navigation
- Custom Hooks: Extract reusable logic (useForm, useValidation, useFileUpload)
- useReducer: Complex state management 
- useMemo/useCallback: Performance optimization where appropriate
- useRef: Form field references, file inputs

Custom Hook Examples to Implement:
```javascript
useFormValidation() // Handle validation logic
useMultiStepForm() // Manage step navigation
useFileUpload() // Handle file uploads with preview
```

---

### 5. React Form Management 
What we're looking for:
- Form Library: Use a form library (React Hook Form, Formik) OR build custom solution
- Validation: Client-side validation with clear rules
- Error Handling: Field-level and form-level error messages
- Conditional Fields: Show/hide fields based on selections
- Form State Persistence: Maintain state when navigating between steps
- Submit Handling: Proper form submission with loading states
- Reset/Clear: Ability to reset form or individual steps

Validation Rules:
- Email format validation
- Phone number format (international or specific format)
- Verify CPF/CNPJ
- Age verification (18+ calculation)
- File size and type validation
- Required field checks
- Custom async validation (e.g., check if email exists)

---

### 6. Responsivity 
What we're looking for:
- Mobile First: Design for mobile, enhance for desktop
- Breakpoints: Handle at least 3 breakpoints (mobile, tablet, desktop)
- Flexible Layouts: Use flexbox/grid for responsive layouts
- Touch Targets: Minimum 44px × 44px for interactive elements on mobile
- Typography: Responsive font sizes
- Images/Files: Responsive file upload areas
- Navigation: Mobile-friendly step navigation (e.g., stepper vs. tabs)
- Testing: Should work flawlessly on 320px to 1920px+ screens

Breakpoint Guidelines:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

---

## Technical Requirements

### Must Use:
- React functional components only
- React Hooks
- CSS-in-JS, or components with Tailwind (your choice)
- Form management library OR custom implementation
- File upload handling

### Nice to Have:
- TypeScript
- Storybook for component documentation
- Unit tests (Jest, React Testing Library)
- Animation library (Framer Motion, React Spring)
- Accessibility testing tools

---

## Deliverables

1. Source Code
   - Well-organized, clean code
   - Comments where necessary
   - README with setup instructions

2. Documentation
   - Component API documentation
   - Theme configuration guide
   - Form validation rules
   - Setup and installation guide

3. Demo
   - Working deployed version (Vercel, Netlify, etc.)
   - OR screen recording demonstrating all features

---

## Bonus Points (10+

- Dark Mode: Implement theme switching
- Animations: Smooth step transitions, loading animations
- Internationalization: Multi-language support
- Camera Integration: Live selfie capture using device camera
- Drag & Drop: Enhanced file upload with drag-and-drop
- Progressive Web App: Make it installable
- Form Auto-save: Save draft to localStorage
- Advanced Validation: Real-time validation with debouncing
- Accessibility Score: 90+ on Lighthouse accessibility audit
- Unit Tests: 70%+ code coverage

---

## Evaluation Process

Your submission will be evaluated on:

1. Code Quality (Organization, readability, best practices)
2. Functionality (Does everything work as expected?)
3. Design (Visual appeal, consistency, polish)
4. Performance (Load time, rendering efficiency)
5. Accessibility (WCAG compliance)
6. Documentation (Clear, comprehensive)

---

## Submission Guidelines

Submit:
1. GitHub repository link (public or provide access)
2. Live demo URL
3. Brief README explaining:
   - Your approach and decisions
   - Libraries/tools used and why
   - Time spent
   - Challenges faced
   - What you'd improve with more time

Code Standards:
- No console errors or warnings
- Proper error boundaries
- Clean commit history
- Follow JavaScript/React best practices

---

## Success Criteria

A successful submission will demonstrate:
- ✅ Professional, production-ready code quality
- ✅ Thoughtful user experience design
- ✅ Clean component architecture
- ✅ Robust form handling and validation
- ✅ Responsive design that works on all devices
- ✅ Attention to accessibility and performance
