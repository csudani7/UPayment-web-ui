
const product = {
  name: "Everyday Ruck Snack",
  href: "#",
  price: "$220",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg",
  imageAlt:
    "Model wearing light green backpack with black canvas straps and front zipper pouch.",
  breadcrumbs: [
    { id: 1, name: "Travel", href: "#" },
    { id: 2, name: "Bags", href: "#" },
  ],
  sizes: [
    { name: "18L", description: "Perfect for a reasonable amount of snacks." },
    { name: "20L", description: "Enough room for a serious amount of snacks." },
  ],
};

function ProductDetails() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:max-w-lg lg:self-end">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <div className="mt-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  {product.price}
                </p>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">{product.description}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
