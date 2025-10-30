// import SignUp from "@/pages/auth/Signup";
import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        login : builder.mutation({
            query : (data) => ({
                method : "POST",
                url : "/auth/login",
                body : data
            })
        }),
        me : builder.query({
            query : () => ({
                method : "GET",
                url : "/auth/me",
            })
        })
    })
})

export const {
    useLoginMutation,
    useMeQuery
} = userApi