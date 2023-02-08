import { useState } from "react";

export default function Layout({ children }) {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <>
            <button onClick={() => setShowOptions(!showOptions)} className={`absolute ${ showOptions ? "right-28" : "right-0"} px-3 text-3xl duration-75`}>&equiv;</button>
            <div className="flex flex-row-reverse overflow-hidden">
                <nav className={`${showOptions ? "w-28" : "w-0"} truncate flex-none duration-75`}>
                    <ul>
                        <li>Change User</li>
                        <li>Enter Sandbox</li>
                    </ul>
                </nav>
                {children}
            </div>
        </>
    )
}