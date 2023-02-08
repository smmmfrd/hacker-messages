import { useState } from "react";

export default function Layout({ children }) {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <>
            <button onClick={() => setShowOptions(!showOptions)} className="absolute right-0 px-3 text-3xl">&equiv;</button>
            {children}
        </>
    )
}