import React from "react";

function AddProduct() {
  return (
    <>
      {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-gray-50">
      <body class="h-full">
      ```
    */}
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create Product
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <div className="mt-1">
                  <input
                    id="product_name"
                    name="product_name"
                    type="text"
                    placeholder="Product name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="mt-1">
                  <textarea
                    id="product_description"
                    name="product_description"
                    placeholder="Desciption"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="mt-1">
                  <input
                    id="product_img_uri"
                    name="product_img_uri"
                    type="url"
                    placeholder="Image URL"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <select
                id="product_category"
                name="product_category"
                className="w-full mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
              <div>
                <div className="mt-1">
                  <input
                    id="product_price"
                    name="product_price"
                    type="number"
                    placeholder="Price"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
