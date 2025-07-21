import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https//localhost:5000/api",
        endpoints: (builder) => {

        }
    })
})