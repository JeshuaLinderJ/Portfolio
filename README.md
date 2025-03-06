# Jeshua Linder Jiménez - Portfolio Website

Personal portfolio website showcasing my skills and projects as a Full Stack & Embedded Software Engineer.

## About This Site

This portfolio highlights my experience in:
- Full stack web development
- Embedded systems programming
- Real-time control systems
- Automation & scripting

## Getting Started

To run this portfolio website locally:

1. Clone the repository:

```bash
git clone --no-checkout https://github.com/devportfoliotemplates/devportfoliotemplates.git
cd devportfoliotemplates
git sparse-checkout init --cone
git sparse-checkout set full-stack-developer-light-portfolio-template
git checkout
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Customization

### Personal Information

1. Update metadata in `app/layout.tsx`:

   - Site title
   - Description
   - Open Graph metadata
   - Favicon

2. Modify content in `app/page.tsx`:

   - Hero section
   - About section
   - Projects
   - Contact information

3. Replace assets:
   - Replace images in the `public` directory
   - Update social media icons
   - Modify logo if needed

### Styling

1. Colors and Theme:

   - Customize colors in `tailwind.config.js`
   - Modify theme variables in `app/globals.css`

2. Typography:

   - Update font families in `tailwind.config.js`
   - Modify text sizes and weights

3. Layout:
   - Adjust spacing and padding in component files
   - Modify responsive breakpoints in `tailwind.config.js`

## Troubleshooting

### Common Issues

1. **Build Errors**

   - Ensure all dependencies are installed
   - Clear `.next` folder and node_modules
   - Run `npm install` again

2. **Styling Issues**

   - Run `npm run build` to ensure TailwindCSS classes are generated
   - Check for conflicting styles in `globals.css`

3. **Image Loading**
   - Verify images are in the correct format (PNG, JPG, WebP)
   - Check image paths are correct
   - Ensure images are in the `public` directory

## Deployment

Follow these steps to deploy your portfolio for free using GitHub and Vercel:

1. Create a new GitHub repository

2. Push your portfolio to GitHub

3. Deploy with Vercel:
   - Go to [Vercel](https://vercel.com)
   - Sign up or log in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"
