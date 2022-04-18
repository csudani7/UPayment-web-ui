import React from 'react';
import { useHistory } from 'react-router-dom';
import { Listbox, Transition } from '@headlessui/react';
import { AiOutlinePlus, AiOutlineCheck, AiOutlineDown } from 'react-icons/ai';

import { useGetAllCategory, useGetAllProducts } from '../../hooks';
import { GetAllCategoryResponse, GetAllProductResponse } from '../../services';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function HomePage() {
  const router = useHistory();
  const { data: listOfCategoy }: any = useGetAllCategory();
  const { data: listOfProducts, hello }: any = useGetAllProducts();
  const [selected, setSelected] = React.useState({ id: 0, name: 'Categories' });
  const [inputValue, setInputValue] = React.useState('');

  const filterdData = React.useMemo(() => {
    let products = listOfProducts && [...listOfProducts];
    if (inputValue) {
      products = products.filter((item: GetAllProductResponse) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase()),
      );
    }
    if (selected.name !== 'Categories') {
      products = products.filter((item: GetAllProductResponse) => item.category === selected.name);
    }
    return products;
  }, [inputValue, selected, listOfProducts]);

  return (
    <div className="py-4">
      <div className="flex flex-col items-end justify-end md:px-4 md:flex-row xl:px-16">
        <div className="mt-1 mr-2">
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
            name="name"
            id="name"
            className="block border-gray-300 rounded-md shadow-sm w-72 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Apple watch, Samsung S21, Mackbook..."
          />
        </div>
        <Listbox
          value={selected}
          onChange={(e) => {
            setSelected((prev) => (prev.name === e.name ? { id: 0, name: 'Categories' } : e));
          }}
        >
          {({ open }) => (
            <>
              <div className="relative mt-1 w-44">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <AiOutlineDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={React.Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {listOfCategoy?.map((category: GetAllCategoryResponse) => (
                      <Listbox.Option
                        key={category.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                            'cursor-default select-none relative py-2 pl-3 pr-9',
                          )
                        }
                        value={category}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'block truncate',
                              )}
                            >
                              {category.name}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4',
                                )}
                              >
                                <AiOutlineCheck className="w-5 h-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl px-6 py-12 mx-auto md:py-12 lg:max-w-7xl lg:px-8">
          {filterdData?.length !== 0 && (
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Best Products</h2>
          )}
          {filterdData?.length === 0 && (
            <p className="text-center text-lg text-gray-900">No items found!</p>
          )}
          <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filterdData?.map((product: GetAllProductResponse, index: number) => (
              <div key={index} className="relative group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.avatar}
                    alt={'product-image'}
                    className="object-cover object-center w-full h-full lg:w-full lg:h-full"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={`/product-details/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => router.push('/add-product')}
        className="fixed inline-flex items-center p-3 text-white bg-indigo-600 border border-transparent rounded-full shadow-sm bottom-4 right-4 lg:bottom-8 lg:right-8 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <AiOutlinePlus className="w-6 h-6" aria-hidden="true" />
      </button>
    </div>
  );
}

export default HomePage;
