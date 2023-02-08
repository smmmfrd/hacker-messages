export default function Layout({ children }) {
    return (
        <>
            <div className="absolute right-4">
                <button className="text-2xl">&equiv;</button>
            </div>
            {children}
        </>
    )
}