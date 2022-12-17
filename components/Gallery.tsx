import React from "react"
//@ts-ignore
// import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"
// import "lightgallery.js/dist/css/lightgallery.css"
import { Container, Image, Text } from "@mantine/core"
import { motion } from "framer-motion"
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import LightGallery from "lightgallery/react"
import { events } from "./GallaryData"

function Gallery() {
    const onInit = () => {
        console.log("lightGallery has been initialized")
    }

    return (
        <Container size="lg" id="gallery" mb="xl" pt={20}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.8 }}
            >
                <Text
                    weight={700}
                    color="pink"
                    sx={{
                        fontFamily: "Alex Brush, cursive",
                        textAlign: "center",
                        fontSize: 50,
                    }}
                >
                    Gallery
                </Text>
            </motion.div>
            <motion.div
            // initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5 }}
            // viewport={{ once: true, amount: 0.8 }}
            >
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    licenseKey="YOUR_KEY"
                    elementClassNames="custom-wrapper-class"
                >
                    {events.map((item, i) => (
                        <motion.a
                            href={`https://source.unsplash.com/random/?celebrations}`}
                            data-sub-html={`<h4>${item.event}</h4>`}
                            key={i + 1}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: i * 0.1,
                                duration: 0.5,
                            }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <Image
                                src={`https://source.unsplash.com/random/?celebrations`}
                                alt={item.name}
                            />
                        </motion.a>
                    ))}
                </LightGallery>
            </motion.div>
        </Container>
    )
}

export default Gallery
