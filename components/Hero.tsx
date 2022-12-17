import {
    createStyles,
    Overlay,
    Container,
    Title,
    Button,
    Text,
} from "@mantine/core"
import { motion } from "framer-motion"

const useStyles = createStyles((theme) => ({
    hero: {
        position: "relative",
        backgroundImage:
            "url(https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        //add a pink overlay
        backgroundColor: theme.colors.pink[5],
        backgroundBlendMode: "multiply",
    },

    container: {
        height: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
        zIndex: 1,
    },

    title: {
        color: theme.white,
        fontSize: 80,
        fontWeight: 400,
        fontFamily: "Alex Brush, cursive",
        lineHeight: 1.1,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 50,
            lineHeight: 1.2,
        },
    },

    subtitle: {
        color: theme.white,
        fontSize: 24,
        fontWeight: 400,
        fontFamily: "Lato, sans-serif",
        lineHeight: 1.1,
        marginTop: theme.spacing.md,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 20,
            lineHeight: 1.2,
        },
    },

    control: {
        marginTop: theme.spacing.xl * 1.5,

        [theme.fn.smallerThan("sm")]: {
            width: "100%",
        },
    },
}))

function Hero() {
    const { classes } = useStyles()
    const title = "Decorate Ur Party"
    const subtitle = "From imagination to reality"
    return (
        <div id="home" className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <Title className={classes.title}>
                        {title.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </Title>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <Text className={classes.subtitle}>{subtitle}</Text>
                </motion.div>
            </Container>
        </div>
    )
}

export default Hero
