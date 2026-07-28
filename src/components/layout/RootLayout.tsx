import Navbar from './Navbar';
import Footer from './Footer';
import ReadingProgress from '@/components/ui/ReadingProgress';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ReadingProgress />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
