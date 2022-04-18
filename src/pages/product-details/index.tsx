import React from 'react';
import { useGetProductDetails } from '../../hooks';

function ProductDetails(props: { match: { params: { id: string } } }) {
  const id = props?.match?.params?.id;
  const { data: productDetails }: any = useGetProductDetails(id);
  window.console.log(productDetails, 'productDetails');

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:max-w-lg lg:self-end">
          <img
            src={productDetails?.avatar}
            alt={'product-detail-image'}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2">
          <div className="overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
            <div className="mt-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {productDetails?.name}
              </h1>
            </div>
            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>
              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">{productDetails?.price}</p>
              </div>
              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">{productDetails?.description}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
