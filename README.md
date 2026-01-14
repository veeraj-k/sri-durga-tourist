# Incredible India Tours - Travel Agency Website

A beautiful, modern, and responsive travel agency website focused on tourism across India, built with React and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, premium travel agency design with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Beautiful Components**: Hero sections, cards, grids with attractive spacing
- **Indian Tourism Focus**: Showcases popular Indian destinations and tour packages
- **Static Site**: No backend required - ready to deploy

## Sections Included

1. **Hero Section**: Large background image with catchy headline and CTA
2. **Popular Destinations**: Cards featuring Murudeshwara, Gokarna, Goa, Manali, Jaipur
3. **Tour Packages**: Static packages including South India Temple Tour, Karnataka Coastal Tour, Golden Triangle Tour, and International packages
4. **Why Choose Us**: Features highlighting experienced guides, custom itineraries, best prices, 24/7 support
5. **Testimonials**: Customer reviews with ratings
6. **Footer**: Contact details, social links, and copyright information

## Technology Stack

- **React 18**: Modern React with TypeScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd travel-agency
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
travel-agency/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Destinations.tsx
│   │   ├── TourPackages.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

### Adding New Destinations

Edit `src/components/Destinations.tsx` and add new destination objects to the `destinations` array.

### Modifying Tour Packages

Update the `packages` array in `src/components/TourPackages.tsx` to add or modify tour packages.

### Styling

The project uses Tailwind CSS. You can customize the theme in `tailwind.config.js` and add custom styles in `src/index.css`.

## Deployment

This is a static React application and can be deployed to any static hosting service:

### Docker Deployment (Recommended)
```bash
# Using Docker Compose
docker-compose up --build -d

# Using Docker commands
docker build -t incredible-india-tours .
docker run -d -p 80:80 --name incredible-india-tours incredible-india-tours
```

See [README-Docker.md](./README-Docker.md) for detailed Docker deployment guide.

### Traditional Hosting

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder

## Images

All images are from Unsplash and are royalty-free. You can replace them with your own images by updating the `src` attributes in the respective components.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or support, please contact us at info@incredibleindiatours.com

---

Built with ❤️ for promoting tourism in India
