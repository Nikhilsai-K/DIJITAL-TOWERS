import Navigation from '@/components/templates/apartment-pro/Navigation';
import Hero from '@/components/templates/apartment-pro/Hero';
import AboutModern from '@/components/templates/apartment-pro/home/AboutModern';
import GalleryModern from '@/components/templates/apartment-pro/home/GalleryModern';
import LocationPreview from '@/components/templates/apartment-pro/home/LocationPreview';
import ReviewsPreview from '@/components/templates/apartment-pro/home/ReviewsPreview';
import ContactPreview from '@/components/templates/apartment-pro/home/ContactPreview';
import Footer from '@/components/templates/apartment-pro/Footer';

export default function Home() {
  return (
    <main className="bg-primary text-dark min-h-screen">
      <Navigation />
      <Hero />
      <AboutModern />
      <GalleryModern />
      <LocationPreview />
      <ReviewsPreview />
      <ContactPreview />
      <Footer />
    </main>
  );
}
