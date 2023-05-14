import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

export default function Layout({ children }) {
    return (
    <>
        <>
            <Navbar />
            { children }
            <ScrollToTop />
        </>
    </>
    )
}

