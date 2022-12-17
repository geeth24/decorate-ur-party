// import { Hero } from "../components/Hero"
import { Loader } from "@mantine/core"
import dynamic from "next/dynamic"
import { Suspense } from "react"
// import { Navbar } from "../components/Navbar"
// import { Contact } from "../components/Contact"
// import { Footer } from "../components/Footer"
const Navbar = dynamic(() => import("../components/Navbar"), {
    suspense: true,
})
const Hero = dynamic(() => import("../components/Hero"), {
    suspense: true,
})
const Gallery = dynamic(() => import("../components/Gallery"), {
    suspense: true,
})
const Pricing = dynamic(() => import("../components/Pricing"), {
    suspense: true,
})
const Contact = dynamic(() => import("../components/Contact"), {
    suspense: true,
})
const Footer = dynamic(() => import("../components/Footer"), {
    suspense: true,
})
export default function Home() {
    const renderLoader = () => {
        return (
            <div style={{ height: "100vh" }}>
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Loader size="lg" />
                </div>
            </div>
        )
    }
    return (
        <>
            <Suspense fallback={renderLoader()}>
                <div>
                    <Navbar
                        links={[
                            { link: "home", label: "Home" },
                            { link: "gallery", label: "Gallery" },
                            { link: "pricing", label: "Pricing" },
                            { link: "contact", label: "Contact" },
                        ]}
                    />
                    <Hero />
                    <Gallery />
                    <Pricing />
                    <Contact />
                    <Footer />
                </div>
            </Suspense>
        </>
    )
}
