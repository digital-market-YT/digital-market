import BestSellersPage from "@/components/Bestsellers"
import CollectionsPage from "@/components/collectionpage"
import DigitalProductsFooter from "@/components/footer"
import FAQPage from "@/components/Frequentlyasked"
import LandingPage from "@/components/LandingPage"
import Navbar from "@/components/Navbar"
import ProductsPage from "@/components/Products"
import TestimonialsSection2 from "@/components/testinomials2"

import TestimonialsPage from "@/components/trustedbyprofessionals"


const page = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <ProductsPage/>
      <CollectionsPage/>
      <BestSellersPage/>
      <TestimonialsSection2/>
      <TestimonialsPage/>
      <FAQPage/>
      <DigitalProductsFooter/>
      




    </div>
  )
}

export default page