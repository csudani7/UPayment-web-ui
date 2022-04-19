// #global import
import React, { Fragment } from 'react';
import * as yup from 'yup';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Listbox, Transition } from '@headlessui/react';
import { AiOutlineCheck, AiOutlineDown } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

// #local import
import { classNames } from '../../utils';
import { AddProductTypes } from './AddProduct';
import { GetAllCategoryResponse } from '../../services';
import { useGetAllCategory, useCreateProduct } from '../../hooks';

const schema = yup
  .object({
    category: yup.string().required(),
    name: yup.string().required(),
    description: yup.string().required(),
    avatar: yup.string().required(),
    price: yup.number().required(),
  })
  .required();

function AddProduct() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      avatar: '',
      category: '',
      price: 0,
    },
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const { data: listOfCategoy } = useGetAllCategory();
  const { mutate } = useCreateProduct();

  const onSubmit = (data: AddProductTypes.AddProductReqBody) => {
    const body = {
      name: data.name,
      price: Number(data.price),
      category: data.category,
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
    <>
      <Helmet>
        <title>UPayment - Add Product</title>
      </Helmet>
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
                    {...register('name')}
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
                    {...register('description')}
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
                    {...register('avatar')}
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                {errors.avatar && (
                  <span className="text-xs text-red-700">*Product image URL is required</span>
                )}
              </div>
              <Listbox
                value={getValues('category')}
                onChange={(e) => {
                  setValue('category', e);
                  trigger('category');
                }}
              >
                {({ open }) => (
                  <>
                    <div className="relative w-full mt-1">
                      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span className="block truncate">
                          {getValues('category') ? getValues('category') : 'Categories'}
                        </span>
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
                              value={category.name}
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
              {errors.category && (
                <span className="text-xs text-red-700">*Category is required</span>
              )}

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
    </>
  );
}

export default AddProduct;
