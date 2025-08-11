import Header from './components/Header'
import SearchBanner from './components/SearchBanner'
import PropertyList from './components/PropertyList'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchBanner />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <PropertyList />
      </main>
      <Footer />
    </div>
  )
}
