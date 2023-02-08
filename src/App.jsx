import { useState } from "react"

export default function App() {
    const [messageOpen, setMessageOpen] = useState(false);

    return (
        <main className="flex mx-auto justify-center py-8">
            <div className="w-80 border border-yellow-400 p-4 flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Welcome, User</h1>
                <section className="border-4 px-2 py-1 hover:bg-highlight hover:text-background hover:border-highlight" onClick={() => setMessageOpen(!messageOpen)}>
                    <h2>URGENT</h2>
                    <p>This is a message that is so long...</p>
                </section>
            </div>
            <div className={`${messageOpen ? "w-96 border border-l-0" : "w-0 border-0"} duration-100 truncate `}>
                <button onClick={() => setMessageOpen(false)} className="w-10 h-10 border-4 bg-highlight text-background">{'<'}</button>
                <h2>Message Title</h2>
                <p>Message Text</p>
            </div>
        </main>
    )
}