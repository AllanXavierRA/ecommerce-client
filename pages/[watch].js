import React, { useState, useEffect } from "react";
import BasicLayout from "../layouts/BasicLayout";
import { useRouter } from "next/router";
import { getWatchByUrlApi } from "../api/watch";
import HeaderWatch from "../components/Watch/HeaderWatch";

export default function Watch(){
    const[watch, setWatch] = useState(null);
    const { query } = useRouter();

    useEffect(() => {
        (async () => {
            const response = await getWatchByUrlApi(query.watch);
            setWatch(response);
        })();
    }, [query]);
    
    if(!watch) return null;
    
    
    return (
        <BasicLayout className="watch">
            <HeaderWatch watch={watch}/>
            <p>Tabs watch</p>
        </BasicLayout>
    );
}