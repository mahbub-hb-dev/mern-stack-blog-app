import { useMeQuery } from "@/redux/module/auth/auth.api";
import type { ReactElement } from "react";
import { useNavigate } from "react-router";

export const WithAuth = (Component : ReactElement) => {

    const {data} = useMeQuery(undefined);

    const navigate = useNavigate();

    console.log(data);

    if(!data) {
        navigate("/login");
    }

    return Component
}