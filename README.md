# EnvironmentAI 🌿

**Multimodal AI for Crisis Response, Ecosystem Health & Human-Environment Harmony**

A comprehensive Next.js application showcasing advanced AI capabilities for environmental monitoring, crisis response, and ecological analysis. Built with modern web technologies and featuring beautiful, responsive design.

## 🚀 Features

### 1. 🌪️ Multimodal Crisis Predictor & Planner
- Satellite imagery analysis with vision transformers
- Weather and climate data integration
- Social media sentiment analysis
- Real-time disaster risk assessment
- Emergency response planning with AI

### 2. 🌿 Multisensory Ecosystem Health Analyzer
- Bioacoustic species identification
- Vegetation health monitoring
- Water quality analysis
- Ecosystem resilience scoring
- Conservation planning support

### 3. 💚 Human Emotion & Environment Resonance Scanner
- Facial expression analysis
- Voice emotion detection
- Biometric data integration
- Environment-emotion correlation
- Mental health and wellness insights

### 4. 🎨 AI Creative World Builder
- Generative 3D environment creation
- Procedural content generation
- Audio-visual synthesis
- Interactive storytelling
- Creative world building tools

### 5. 🔬 Cross-Domain Scientific Hypothesis Generator
- Automated hypothesis generation
- Scientific literature analysis
- Experimental design assistance
- Statistical analysis and modeling
- Research workflow optimization

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes (Dark/Light mode)
- **Forms**: React Hook Form + Zod validation
- **Charts**: Chart.js + React Chart.js
- **Icons**: Lucide React
- **File Handling**: File Saver, jsPDF

## 🎨 Design System

### Light Mode
- Background: Soft white with green tint (#f8fafc)
- Primary: Green to Amber gradient (#10b981 → #f59e0b)
- Cards: White with subtle shadows
- Typography: Inter font family

### Dark Mode
- Background: Deep slate (#020617)
- Cards: Slate-900 with dark accents
- Gradients: Deeper greens and ambers
- Enhanced contrast for accessibility

### Components
- Rounded corners (rounded-2xl)
- Gradient buttons with hover effects
- Smooth animations and transitions
- Responsive grid layouts
- Modal overlays with backdrop blur

## 📁 Project Structure

```
environmentai/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout with theme provider
│   │   ├── page.tsx             # Home page with hero and features
│   │   ├── features/[id]/
│   │   │   └── page.tsx         # Dynamic feature pages
│   │   └── api/features/[id]/
│   │       └── route.ts         # API routes for ML processing
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── modal.tsx
│   │   │   └── theme-toggle.tsx
│   │   ├── header.tsx           # Site header with navigation
│   │   ├── hero.tsx             # Hero section component
│   │   ├── feature-card.tsx     # Feature card component
│   │   ├── feature-modal.tsx    # Feature detail modal
│   │   ├── feature-form.tsx     # Dynamic form component
│   │   └── feature-output.tsx   # Results display component
│   └── lib/
│       ├── types.ts             # TypeScript type definitions
│       ├── utils.ts             # Utility functions
│       └── mock-data.ts         # Feature definitions and mock responses
├── public/
│   ├── logo.svg                 # EnvironmentAI logo
│   └── placeholders/            # Placeholder assets
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## 🚀 Getting Started

1. **Clone and Install**
   ```bash
   cd environmentai
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   ```
   http://localhost:3000
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 🚀 Vercel Deployment

The project is ready for Vercel deployment! 🎉

### Required Environment Variables

Set these in your Vercel dashboard (Project Settings → Environment Variables):

- `NEXT_PUBLIC_GEMINI_API_KEY` - Your Google Gemini API key
- `OPENWEATHER_API_KEY` - Your OpenWeatherMap API key

### Deployment Steps

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the environment variables above
4. Deploy!

### AI Services Used

- ✅ **Free Hugging Face Inference APIs** (no API key needed)
- ✅ **Google Gemini API** for advanced AI features
- ✅ **OpenWeatherMap API** for weather data
- ✅ **Regional fallback data** when APIs are unavailable

## 🎯 Key Features Implementation

### Form Validation
- React Hook Form with Zod schemas
- Dynamic form generation based on feature requirements
- File upload handling for images, audio, CSV files
- Real-time validation feedback

### Mock AI Processing
- Realistic processing delays (1.5-2 seconds)
- Feature-specific mock responses
- Various output formats: charts, tables, audio, images, PDFs
- Downloadable results and reports

### Responsive Design
- Mobile-first approach
- Fluid typography and spacing
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

### Dark/Light Mode
- System preference detection
- Smooth theme transitions
- Persistent theme selection
- Accessible color contrasts

## 🔧 API Routes

### POST `/api/features/[id]`
Processes form data for each feature and returns mock AI results.

**Parameters:**
- `id`: Feature ID (1-5)
- Form data with feature-specific inputs

**Response:**
```json
{
  "success": true,
  "data": {
    // Feature-specific results
  },
  "message": "Analysis completed successfully"
}
```

## 🎨 Component Architecture

### Reusable UI Components
- **Button**: Gradient buttons with hover animations
- **Card**: Consistent card styling with theme support
- **Modal**: Centered modal with backdrop blur
- **ThemeToggle**: Dark/light mode switcher

### Feature Components
- **FeatureCard**: Hover-animated cards for home page grid
- **FeatureModal**: Detailed feature information modal
- **FeatureForm**: Dynamic form generation with validation
- **FeatureOutput**: Results display with various formats

### Layout Components
- **Header**: Fixed navigation with logo and theme toggle
- **Hero**: Animated hero section with call-to-action
- **Layout**: Root layout with theme provider

## 🌟 Animations & Interactions

- **Framer Motion**: Page transitions and component animations
- **Hover Effects**: Scale transforms and gradient borders
- **Loading States**: Spinners and skeleton screens
- **Modal Transitions**: Smooth slide-in animations
- **Form Feedback**: Real-time validation indicators

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column layouts)
- **Tablet**: 768px - 1024px (2 column grids)
- **Desktop**: > 1024px (3 column grids, side-by-side layouts)

## 🔒 Security & Performance

- TypeScript for type safety
- ESLint for code quality
- Optimized images and assets
- Efficient bundle splitting
- Mock data prevents external API calls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is for demonstration purposes. Built with Next.js, Tailwind CSS, and modern web technologies.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- All the open-source contributors

---

**EnvironmentAI** - Harmonizing technology with nature through intelligent systems.

