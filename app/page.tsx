import ProductPage from './components/ProductPage'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <ProductPage />
      </main>
    </>
  )
}