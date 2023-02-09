import { useState } from "react";

export default function Layout({ children }) {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <>
            <header className="sticky top-0 bg-background border-b border-b-highlight">
                <div className="mx-auto">
                    <h1 className="text-2xl sm:text-center font-bold">Welcome, User</h1>
                    <div className="flex sm:justify-center gap-1">
                        <InputButton title={"New Message"}>+</InputButton>
                        <InputButton title={"Your Incoming Messages"}>Inbox</InputButton>
                        <InputButton title={"Your Outgoing Messages"}>Sent</InputButton>
                    </div>
                </div>
                <button onClick={() => setShowOptions(!showOptions)} className="absolute top-0 right-0 px-3 text-3xl duration-75">&equiv;</button>
            </header>
            <div className="flex flex-row-reverse overflow-x-hidden">
                <nav className={`${showOptions ? "w-36 border-l border-b p-2" : "w-0"} h-max truncate flex-none duration-75 text-background border-highlight`}>
                    <ul className="flex flex-col gap-1 [&>*]:bg-highlight">
                        <li>Change User</li>
                        <li>Enter Sandbox</li>
                    </ul>
                </nav>
                {children}
            </div>
        </>
    );
}

function InputButton({title, children}) {
    return (
        <button title={title} className="bg-highlight text-background px-2 rounded-t">
            {children}
        </button>
    )
}