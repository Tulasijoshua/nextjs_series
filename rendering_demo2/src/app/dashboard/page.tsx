"use client";

import { useState } from "react"

export default function DashboardPage() {
    console.log("Dashboard client component")
    const [name, setName] = useState("")
    return (
        <>
            <h1>Dashboard Page</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
            <p>Hello, {name}!</p>0208461875
        </>
    )
}