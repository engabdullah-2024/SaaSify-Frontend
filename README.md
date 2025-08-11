# SaaSify - Modern SaaS Platform

A sleek, modern, and responsive SaaS web application built with Next.js, TypeScript, and Framer Motion for smooth animations.

## 🚀 Features

### Landing Page
- **Hero Section**: Eye-catching headline with animated call-to-action buttons
- **Feature Highlights**: Fade-in and slide-up animations on scroll
- **Pricing Plans**: Cards with hover scale animations
- **Responsive Design**: Optimized for all device sizes

### Dashboard (Mock Data)
- **Welcome Message**: Subtle fade-in with time-based greetings
- **Animated Stat Cards**: KPIs with hover animations and trend indicators
- **Animated Sidebar**: Slide-in/out effect with smooth transitions
- **Recent Activity**: Real-time activity feed with animations
- **Quick Actions**: Interactive action buttons with hover effects

### Pricing Plans Page
- **Interactive Pricing Cards**: Animated selection highlights
- **Smooth Toggle Switch**: Monthly/yearly plans with spring animations
- **FAQ Section**: Expandable questions with smooth transitions
- **Call-to-Action**: Gradient backgrounds with hover effects

### Settings Page
- **Profile Form**: Input fields with focus animations
- **Dark Mode Toggle**: Animated sun/moon icon switch
- **Notification Settings**: Interactive toggles with spring animations
- **Security Settings**: Organized security options
- **Danger Zone**: Destructive actions with warning styling

### Navigation
- **Responsive Navbar**: Animated mobile menu toggle
- **Theme Switching**: Dark/light mode with smooth transitions
- **Sidebar Navigation**: Collapsible with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Development**: ESLint, Turbopack

## 📁 Project Structure

```
saasify/
├── app/                          # Next.js App Router pages
│   ├── dashboard/                # Dashboard page
│   ├── pricing/                  # Pricing page
│   ├── settings/                 # Settings page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page
├── components/                   # Reusable components
│   ├── dashboard/               # Dashboard-specific components
│   │   ├── stat-card.tsx        # Animated stat cards
│   │   └── welcome-message.tsx  # Welcome message component
│   ├── landing/                 # Landing page components
│   │   ├── hero-section.tsx     # Hero section
│   │   ├── features-section.tsx # Features grid
│   │   └── pricing-section.tsx  # Pricing cards
│   ├── navigation/              # Navigation components
│   │   ├── navbar.tsx           # Main navigation
│   │   └── sidebar.tsx          # Dashboard sidebar
│   ├── pricing/                 # Pricing page components
│   │   ├── pricing-card.tsx     # Enhanced pricing cards
│   │   └── pricing-toggle.tsx   # Monthly/yearly toggle
│   ├── settings/                # Settings page components
│   │   ├── dark-mode-toggle.tsx # Theme toggle
│   │   └── profile-form.tsx     # Profile form
│   ├── footer.tsx               # Footer component
│   └── theme-provider.tsx       # Theme provider
├── data/                        # Mock data
│   └── mock-data.ts             # Application data
├── types/                       # TypeScript types
│   └── index.ts                 # Type definitions
└── public/                      # Static assets
```

## 🎨 Animation Features

### Framer Motion Animations
- **Page Transitions**: Fade and slide effects between pages
- **Hover Animations**: Scale, rotate, and color transitions
- **Toggle Animations**: Smooth switches and menu toggles
- **Scroll Animations**: Intersection Observer with `useInView`
- **Stagger Effects**: Sequential animations for lists and grids
- **Spring Physics**: Natural-feeling animations with custom easing

### Animation Types
- **Fade In/Out**: Opacity transitions
- **Slide Up/Down**: Y-axis translations
- **Scale**: Transform scale effects
- **Rotate**: Icon and element rotations
- **Stagger**: Sequential child animations
- **Hover States**: Interactive feedback

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saasify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Landing Page Components
- **HeroSection**: Animated hero with background effects
- **FeaturesSection**: Scroll-triggered feature animations
- **PricingSection**: Interactive pricing cards

### Dashboard Components
- **WelcomeMessage**: Time-based greetings with animations
- **StatCard**: KPI cards with trend indicators
- **Sidebar**: Collapsible navigation with smooth transitions

### Interactive Elements
- **DarkModeToggle**: Animated theme switcher
- **PricingToggle**: Monthly/yearly plan switcher
- **ProfileForm**: Form with focus animations

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`from-blue-600 to-purple-600`)
- **Secondary**: Purple and pink gradients
- **Success**: Green (`green-600`)
- **Warning**: Orange (`orange-500`)
- **Error**: Red (`red-500`)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold with gradient text effects
- **Body**: Clean, readable text

### Spacing
- **Consistent**: Tailwind's spacing scale
- **Responsive**: Mobile-first approach
- **Padding**: Generous whitespace for readability

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Tailwind's responsive breakpoints
- **Flexible Layouts**: Grid and Flexbox for adaptability
- **Touch Friendly**: Appropriate touch targets

## 🌙 Dark Mode

- **System Preference**: Automatically detects user preference
- **Manual Toggle**: User can override system setting
- **Smooth Transitions**: No flash of unstyled content
- **Consistent Theming**: All components support dark mode

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Import and use existing components
4. Add navigation links in `navbar.tsx`

### Adding New Components
1. Create component in appropriate directory
2. Add TypeScript interfaces in `types/index.ts`
3. Use Framer Motion for animations
4. Follow existing naming conventions

### Modifying Animations
- Adjust `transition` properties in Framer Motion
- Modify `whileHover` and `whileTap` animations
- Update `initial` and `animate` states

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions, please open an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and Framer Motion
