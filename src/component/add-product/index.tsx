import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Listbox, Transition } from '@headlessui/react';
import { AiOutlineCheck, AiOutlineDown } from 'react-icons/ai';
import { useGetAllCategory, useCreateProduct } from '../../hooks';
import { GetAllCategoryResponse } from '../../services';
import { useHistory } from 'react-router-dom';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const { data: listOfCategoy }: any = useGetAllCategory();
  const { mutate } = useCreateProduct();
  const [selected, setSelected] = React.useState({ id: 0, name: 'Categories' });

  const onSubmit = (data: any) => {
    const body = {
      name: data.name,
      price: data.price,
      category: selected.name,
      description: data.description,
      avatar: data.avatar,
      developerEmail: 'csudani7@gmail.com',
    };
    mutate(body, {
      onSuccess: () => {
        history.push('/');
      },
    });
  };

  return (
    <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Create Product</h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  placeholder="Product name"
                  {...register('name', { required: true })}
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              {errors.name && (
                <span className="text-xs text-red-700">*Product name is required</span>
              )}
            </div>
            <div>
              <div className="mt-1">
                <textarea
                  id="description"
                  placeholder="Desciption"
                  {...register('description', { required: true })}
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              {errors.description && (
                <span className="text-xs text-red-700">*Description is required</span>
              )}
            </div>
            <div>
              <div className="mt-1">
                <input
                  id="avatar"
                  type="url"
                  placeholder="Product Image URL"
                  {...register('avatar', { required: true })}
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              {errors.avatar && (
                <span className="text-xs text-red-700">*Product image URL is required</span>
              )}
            </div>
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <div className="relative w-full mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <span className="block truncate">{selected.name}</span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <AiOutlineDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>
                    <Transition
                      show={open}
                      as={Fragment}
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
            <div>
              <div className="mt-1">
                <input
                  id="price"
                  type="number"
                  placeholder="Price"
                  {...register('price', { required: true })}
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              {errors.price && <span className="text-xs text-red-700">*Price is required</span>}
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
