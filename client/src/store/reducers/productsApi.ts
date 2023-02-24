import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/* Types */
import { Igallery, Iproduct } from '@types'

const API_URL = import.meta.env.VITE_API_URL

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getProduct: builder.query<Iproduct, string | undefined>({
      query: (name) => `products/${name}`,
    }),
    getNewProduct: builder.query({
      query: () => `new`,
    }),
    getGallery: builder.query<Igallery[], void>({
      query: () => `gallery`,
    }),
    getCategory: builder.query<Iproduct[], string | undefined>({
      query: (categoryName) => ({
        url: `products`,
        params: {
          category: categoryName,
        },
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetNewProductQuery,
  useGetGalleryQuery,
  useGetCategoryQuery,
} = productsApi
