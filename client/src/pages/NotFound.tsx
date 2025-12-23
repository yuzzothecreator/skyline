import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="text-center max-w-md">
        <div className="text-9xl font-bold text-gold/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-light mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-3">
          <Button asChild className="gold-gradient-bg text-black w-full">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Homepage
            </Link>
          </Button>
          <Button variant="outline" className="border-gold text-gold w-full">
            <Search className="mr-2 h-4 w-4" />
            Search Our Site
          </Button>
        </div>
      </div>
    </div>
  )
}