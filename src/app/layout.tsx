import './globals.css'
import Footer from './components/Footer';
import Providers from './components/Providers';

export const metadata = {
  title: 'Mixta Restaurant',
  description: 'Welcome to Mixta - Experience authentic cuisine in a warm and inviting atmosphere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
