import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import WhatsappIcon from '../components/Whatsapp'
import PhoneNumberHeading from '../components/PhoneNumber'
import { url } from "inspector"


interface Props { }

export default async function Page() {
  const products = await client.fetch<SanityProduct[]>(groq`*[_type == "product"]{
    _id,
    _createdAt,
    name,
    images,
    currency,
    price,
    description,
    "slug":slug.current
  }`
  )
  console.log(products, 'products');
  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">{siteConfig.name}</h1>
        <div className=" text-yellow-500">
          <PhoneNumberHeading />

        </div>
        <p className="mx-auto mt-4 max-w-3xl text-base">
          <span className="text-amber-500">Export quality fresh cut flowers! </span> <br></br> We offer a wide selection, with All India delivery. Buy wholesale flowers for any occasion.
        </p>
      </div>
      <div>

        <main className="mx-auto mt-12 max-w-6xl ">
          <div className="flex items-center rounded-2xl mx-4 bg-black justify-between border-b border-gray-200   dark:border-gray-800">
            <img src="/gif.gif" className=" w-full object-cover rounded-2xl  opacity-50 " />
          </div>
          <section className="flex items-center flex-col rounded-2xl mt-12 border p-8 border-white shadow-sm mx-4 bg-black justify-between border-b dark:border-gray-800 relative">
    <img src="/map.png" className="opacity-10 absolute h-full w-full object-contain" alt="Map Background" />
    <div className="text-white text-center py-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Prasad Agro - Delivering Across India 🛫</h1>
        <p className="mt-4 text-lg">
            We specialize in delivering wholesale flowers to all states of India using efficient transportation modes.
        </p>
    </div>
    <div className="items-center grid lg:grid-cols-2 grid-cols-1 mx-4 justify-between border-b border-gray-200 pb-4 pt-8 dark:border-gray-800">
        <div className="text-center">
            <img src="/rail.png" className="w-72 h-64 lg:ml-32" alt="Delivery by Rail" />
            <h2 className="text-xl font-bold mb-2">Delivery by Rail</h2>
            <p className="text-gray-300 w-1/8">
                Our rail delivery ensures quick and reliable transportation, reaching every corner of the country.
            </p>
        </div>
        <div className="text-center">
            <img src="/air.png" className="w-72 h-64 lg:ml-32" alt="Delivery by Air" />
            <h2 className="text-xl font-bold mb-2">Delivery by Air</h2>
            <p className="text-gray-300 w-1/8">
                For swift delivery, we utilize air transport, ensuring freshness and timely service to your doorstep.
            </p>
        </div>
        <div className="text-center">
            <img src="/sea.png" className="w-72 h-64 lg:ml-32 mb-4" alt="Delivery by Water" />
            <h2 className="text-xl font-bold mb-2">Water Delivery 🚢</h2>
            <p className="text-gray-300 w-1/8">
                Introducing our water delivery service - a sustainable and efficient way to deliver freshness.
            </p>
        </div>
        <div className="text-center">
            <img src="/bus.png" className="w-96 h-64 lg:ml-32 mb-4" alt="Delivery by Water" />
            <h2 className="text-xl font-bold mb-2">Delivery by Road 🚚</h2>
            <p className="text-gray-300 w-1/8">
            Our road delivery ensures reliable transportation, connecting all regions for timely and efficient service.
            </p>
        </div>
    </div>
</section>

          <h1 className="font-bold text-3xl text-center mt-12">🌹 Explore our Catalogue of Flowers below</h1>
          <div className="flex items-center mx-4 justify-between border-b border-gray-200 pb-4 pt-14 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} result{products.length === 1 ? "" : "s"}
            </h1>
            {/* Product Sort */}
            <ProductSort />
          </div>



          <section aria-labelledby="products-heading" className="pb-24 mx-4 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className={cn("grid grid-cols-2 gap-x-8 gap-y-10", products.length > 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-[1fr_3fr]')}>
              <div className="hidden lg:block">
                {/* Product filters */}
                <ProductFilters />
              </div>
              <ProductGrid products={products} />
            </div>
          </section>
          <WhatsappIcon phoneNumber='918975531211' />
        </main>
      </div>
    </div>
  )
}
