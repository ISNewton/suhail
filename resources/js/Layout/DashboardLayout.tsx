import Navbar from "./Navbar";
import Footer from "./Footer";

export default ({children}) => {
    return (
        <div>

            <Navbar />
            <main className="py-28 px-12 ">
                <div>
                    {children}
                </div>
            </main>
            {/*<Footer />*/}
        </div>

    )
}
