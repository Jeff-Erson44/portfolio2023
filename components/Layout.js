import ContactBanner from './ContactBanner'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

export default function Layout({ children }) {
    return (
    <>
        <>
            <Navbar />
            { children }
            <ScrollToTop />
            <ContactBanner />
            <Footer />
        </>
    </>
    )
}

