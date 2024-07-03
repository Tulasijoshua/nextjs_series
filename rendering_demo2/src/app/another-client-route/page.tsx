"use client";

import { useTheme } from "@/components/theme-provider"
import { clientSideFunction } from "@/utils/client-utils";

export default function AnotherClientRoute() {
    const theme = useTheme()
    const result = clientSideFunction();

    return (<>
        <h1 style={{
            color: theme.colors.secondary
        }}>Client route {result}</h1>
        
    </>)
}