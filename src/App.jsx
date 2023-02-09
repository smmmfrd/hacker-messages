import { useState } from "react"

export default function App() {
    const [messageOpen, setMessageOpen] = useState(false);

    function testMessages() {
        let messages = [];
        for (let i = 0; i < 20; i++) {
            messages.push(
                <section key={i} className="border-4 border-highlight px-2 py-1 hover:bg-highlight hover:text-background hover:border-highlight" onClick={() => setMessageOpen(!messageOpen)}>
                    <h2>URGENT</h2>
                    <p>This is a message that is so long...</p>
                </section>
            );
        }
        return messages;
    }

    return (
        <main className="flex mx-auto justify-center">
            <div className="flex-none w-max border-b border-x border-highlight p-4 flex flex-col gap-2">
                {testMessages()}
            </div>
            <div className={`flex-none ${messageOpen ? "w-max border-b border-r p-4 " : "w-0 border-0"}h-max duration-100 truncate border-highlight`}>
                <button onClick={() => setMessageOpen(false)} title="Close Message" className="w-10 h-10 bg-highlight text-background">{'<'}</button>
                <h2>Message Title</h2>
                <p>Message Text</p>
            </div>
        </main>
    );
}