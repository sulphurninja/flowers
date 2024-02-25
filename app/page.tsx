import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"

interface Props {}

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
        <p className="mx-auto mt-4 max-w-3xl text-base">
        <span className="text-amber-500">Export quality fresh cut flowers! </span> <br></br> We offer a wide selection, with All India delivery. Buy wholesale flowers for any occasion.
          </p>
      </div>
      <div>
        <main className="mx-auto mt-12 max-w-6xl ">
        <div className="flex items-center rounded-2xl mx-4 bg-black justify-between border-b border-gray-200   dark:border-gray-800">

          <img src="/gif.gif" className=" w-full object-cover rounded-2xl  opacity-50 " />
          </div>


          
          <div className="flex items-center mx-4 justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} result{products.length === 1 ? "" : "s"}
            </h1>
            {/* Product Sort */}
            <ProductSort/>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 mx-4 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className={cn("grid grid-cols-2 gap-x-8 gap-y-10", products.length > 0 ? 'lg:grid-cols-4': 'lg:grid-cols-[1fr_3fr]' )}>
              <div className="hidden lg:block">
                {/* Product filters */}
                <ProductFilters/>
                </div>
              <ProductGrid products={products}/>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}