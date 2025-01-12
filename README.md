# Mixta Restaurant Website

A modern, responsive restaurant website built with Next.js, React, and Material UI.

## Features

- Modern, responsive design
- Interactive menu display
- Contact form
- About page with team information
- Mobile-friendly navigation
- Beautiful UI components using Material UI

## Tech Stack

- Next.js 14
- React
- Material UI
- TypeScript
- App Router
- Emotion (for styled components)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
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

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── theme/
│   │   └── theme.ts
│   ├── layout.tsx
│   └── page.tsx
└── public/
    └── [images]
```

## Development

- The project uses the Next.js App Router for routing
- Material UI components for the user interface
- Custom theme configuration in `src/app/theme/theme.ts`
- Responsive design for all screen sizes
- SEO-friendly with metadata

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
