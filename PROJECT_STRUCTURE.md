# Project Structure - SI-DENT Dental Clinic

This document provides a clear overview of the project's folder and file structure to understand how the application is organized.

## Root Directory
- `app/`: Next.js App Router directory containing pages and global layouts.
- `components/`: Reusable React components organized by feature or page.
- `context/`: React Context providers for global state management (e.g., Modals).
- `public/`: Static assets like images, logos, and fonts.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration.
- `tailwind.config.ts`: Tailwind CSS theme and plugin configuration.

## Directory Breakdown

### `app/` (Pages & Routing)
- `layout.tsx`: The root layout that wraps all pages. Includes global elements like Header, Footer, and Modal Providers.
- `page.tsx`: The Homepage of the clinic.
- `about/page.tsx`: The About Us page.
- `contact/page.tsx`: The Contact Us page.
- `globals.css`: Global styles and Tailwind directives.

### `components/` (UI Components)
- `Header.tsx`: Navigation bar with mobile menu and service dropdown.
- `Footer.tsx`: Global footer with clinic info, quick links, and services.
- `BookingModal.tsx`: The pop-up form for booking appointments.
- `GlobalHero.tsx`: Shared hero section component for all secondary pages.
- `home/`: Components specific to the homepage (Hero, About, Reviews, etc.).
- `about/`: Components specific to the About page:
  - `AboutClinic.tsx`: General clinic overview.
  - `AboutInvisalign.tsx`: Specialized Invisalign section with image slider.
- `contact/`: Components specific to the Contact page (Details, Form, Map, Hours).

### `context/` (State Management)
- `ModalContext.tsx`: Manages the open/close state of the Booking Modal globally.

### `public/assets/` (Static Assets)
- `img/`: Organized images used throughout the site.
  - `header/`: Logos and header-specific icons.
  - `home/`: Images for the homepage sections.
  - `about/`: Images for the About page, including the Invisalign slider assets.
  - `contact/`: Assets for the contact page sections.

## Technologies Used
- **Next.js 15**: React framework for routing and server-side rendering.
- **Tailwind CSS 4**: For utility-first styling and theme management.
- **Framer Motion**: For premium animations and transitions.
- **TypeScript**: For type-safe development.
- **Lucide / Font Awesome**: For iconography.
