Medical Image Viewer SaaS Application
A SaaS application designed for healthcare professionals to upload, view, and manipulate medical images, including DICOM and PNG files. The application aims to streamline diagnostic workflows with an intuitive user interface.

Features
Task 1: Core Features
Image Upload: Supports uploading of DICOM and PNG images.
Image Manipulation:
Tools for cropping, zooming, panning, brightness, and contrast adjustments.
Responsive Design:
Dark and light mode support.
Optimized UI for ease of use.
Task 2: Enhancements
DICOM File Handling:
Upload and view DICOM images with metadata extraction (e.g., patient name, study date).
Real-World Measurement Conversion:
Convert pixel distances to real-world units (mm/cm) using metadata like pixel spacing.
Tech Stack
Frontend Framework: Nuxt 3 (Vue 3 + TypeScript)
Styling: Tailwind CSS, Naive UI
Image Manipulation: Konva.js
DICOM Parsing: dicom-parser
Containerization: Docker
Installation & SetupInstall dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Visit http://localhost:3000 in your browser.

Deployment
Docker Deployment
Build and run the Docker container:
bash
Copy code
docker-compose up
Access the app at http://localhost:3000.
Hosted App
The application is deployed at:
Live App Link

Directory Structure
php
Copy code
medical-image-app/
├── components/          # Reusable Vue components
├── pages/               # Nuxt pages for routing
├── public/              # Static assets
├── assets/              # Styling (Tailwind CSS)
├── composables/         # Utility logic
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose file
├── nuxt.config.ts       # Nuxt configuration
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
Challenges & Solutions
DICOM Metadata Parsing:
Utilized dicom-parser to extract and display metadata such as patient name and pixel spacing.
Real-World Measurements:
Implemented pixel-to-mm conversion using metadata fields for accurate scaling.
Future Improvements
Add support for more image formats (e.g., TIFF, JPEG2000).
Integrate AI-powered annotation tools for enhanced diagnostics.
Include advanced 3D imaging features.
Prerequisites
Node.js v16+ installed.
Docker (optional, for containerized deployment).
Steps to Run Locally
Clone the repository:
https://github.com/aj240917/medical-image-app.git

