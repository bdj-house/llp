# Idalgo & Cortijo - Law Firm Website

A modern, responsive website for the Idalgo & Cortijo law firm built with Next.js 15, TypeScript, and Sanity CMS.

## 🏛️ About

This is a professional website for a Brazilian law firm, featuring a clean and modern design with a focus on user experience and content management through Sanity CMS.

## 🚀 Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript** - Type-safe development
- **Material-UI (MUI) v7** - Component library
- **Framer Motion** - Animations and transitions
- **TanStack Query** - Data fetching and caching

### Backend & CMS

- **Sanity CMS** - Headless content management
- **Sanity Studio** - Content editing interface
- **Sanity Codegen** - Type-safe schema generation

### Development Tools

- **ESLint** - Code linting with Antfu config
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Lint-staged** - Pre-commit linting
- **Turbopack** - Fast development builds

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── areas-atuacao/     # Practice areas pages
│   ├── nosso-espaco/      # Our space page
│   ├── publicacoes/       # Publications/articles
│   └── studio/            # Sanity Studio
├── config/                # App configuration
│   ├── providers/         # React providers
│   ├── routes/           # Route definitions
│   └── theme/            # MUI theme configuration
├── features/              # Feature-based modules
│   ├── About/            # About section
│   ├── Article/          # Article components & logic
│   ├── Contact/          # Contact functionality
│   ├── Home/             # Homepage components
│   ├── OperationArea/    # Practice areas
│   └── OurSpace/         # Our space gallery
├── sanity/               # Sanity CMS configuration
│   ├── lib/              # Sanity utilities
│   ├── queries/          # GROQ queries
│   ├── schemaTypes/      # Content schemas
│   └── types/            # Generated types
└── shared/               # Shared components & utilities
    ├── components/       # Reusable UI components
    ├── constants/        # App constants
    ├── contexts/         # React contexts
    ├── hooks/           # Custom hooks
    └── utils/           # Utility functions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd idalgo_cortijo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-05-01
   ```

4. **Generate Sanity Types**

   ```bash
   npm run types
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000)

6. **Access Sanity Studio**

   Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

## 📝 Available Scripts

| Script                 | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start development server with Turbopack |
| `npm run build`        | Build production application            |
| `npm run start`        | Start production server                 |
| `npm run lint`         | Run ESLint                              |
| `npm run lint:fix`     | Fix ESLint errors automatically         |
| `npm run format`       | Format code with Prettier               |
| `npm run format:check` | Check code formatting                   |
| `npm run types`        | Generate Sanity TypeScript types        |

## 🎨 Features

### Content Management

- **Sanity Studio Integration** - Easy content editing
- **Dynamic Content** - All content managed through CMS
- **Image Optimization** - Automatic image processing
- **SEO Optimization** - Built-in SEO features

### User Interface

- **Responsive Design** - Mobile-first approach
- **Modern UI** - Clean Material-UI components
- **Smooth Animations** - Framer Motion integration
- **Accessibility** - WCAG compliant components

### Performance

- **Next.js 15** - Latest performance optimizations
- **Image Optimization** - WebP/AVIF support
- **Code Splitting** - Automatic bundle optimization
- **Caching** - React Query for efficient data fetching

## 🏗️ Content Structure

### Pages

- **Home** - Landing page with hero section
- **Practice Areas** - Legal services overview
- **Our Space** - Office gallery and information
- **Publications** - Articles and legal insights
- **Contact** - Contact information and form

### Content Types

- **Site Settings** - Global site configuration
- **Operation Areas** - Legal practice areas
- **Articles** - Blog posts and publications
- **Home Page** - Homepage content
- **About** - Company information
- **Our Space** - Office details and gallery

## 🎯 Key Components

### Gallery Component

- **Interactive Image Gallery** - Click to expand
- **Modal Lightbox** - Full-screen image viewing
- **Keyboard Navigation** - Arrow keys and Escape
- **Mobile Responsive** - Touch-friendly interface

### Dynamic Footer

- **CMS-Driven Content** - Operation areas from Sanity
- **Social Media Integration** - Dynamic social links
- **Contact Information** - Editable contact details

### Article System

- **Infinite Scroll** - Performance-optimized loading
- **Rich Text Content** - Portable Text support
- **Social Sharing** - Built-in sharing functionality

## 🔧 Configuration

### Theme Customization

The app uses a custom MUI theme with:

- **Custom Fonts** - Champagne and Mangolaine
- **Brand Colors** - Professional color scheme
- **Responsive Breakpoints** - Mobile-first design

### Sanity Configuration

- **Project ID** - Set in environment variables
- **Dataset** - Production/development datasets
- **API Version** - Sanity API versioning

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Idalgo & Cortijo law firm.

## 📞 Support

For technical support or questions about this project, please contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and Sanity CMS.
