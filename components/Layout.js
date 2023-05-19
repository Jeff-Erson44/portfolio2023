import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
    <>
        <>
            <Navbar />
            { children }
            <ScrollToTop />
            <Footer />
        </>
    </>
    )
}

