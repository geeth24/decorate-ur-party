import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    Button,
} from "@mantine/core"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

const pricingData = [
    {
        title: "$25 / hour",
        description:
            "For the $25 / hour rate, you will receive photoshoot and raw images with slight editing. Includes 1 Revision for each photo.",
    },
    {
        title: "$50 / hour",
        description:
            "For the $50 / hour rate, you will receive photoshoot and raw images with moderate editing. Includes 2 Revisions for each photo.",
    },
    {
        title: "$100 / hour",
        description:
            "For the $100 / hour rate, you will receive photoshoot and raw images with complete editing. Includes 5 Revisions for each photo.",
    },
]

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[0],
        padding: theme.spacing.xl,
        width: "100%",
    },
    title: {
        fontSize: 34,
        fontWeight: 900,
        [theme.fn.smallerThan("sm")]: {
            fontSize: 24,
        },
    },

    description: {
        maxWidth: 600,
        margin: "auto",

        "&::after": {
            content: '""',
            display: "block",
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },

    card: {
        border: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1]
        }`,
        maxWidth: 400,
        transition: "all 0.3s ease-in-out",

        //hover
        "&:hover": {
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
        },
    },

    cardTitle: {
        "&::after": {
            content: '""',
            display: "block",
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
        },
    },
}))

function Pricing() {
    const router = useRouter()
    const { p } = router.query
    const pricing = p

    const { classes, theme } = useStyles()

    return (
        <div className={classes.root} id="pricing">
            <Container size="lg" py="xl" mb="xl" pt={50}>
                <Group position="center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <Text
                            size={50}
                            weight={700}
                            color="pink"
                            sx={{
                                fontFamily: "Alex Brush",
                            }}
                        >
                            Pricing
                        </Text>
                    </motion.div>
                </Group>

                <SimpleGrid
                    cols={pricing === undefined ? 3 : 1}
                    spacing="xl"
                    mt={50}
                    breakpoints={[{ maxWidth: "md", cols: 1 }]}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.1,
                            duration: 0.5,
                        }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <Card
                            shadow="md"
                            radius="md"
                            className={classes.card}
                            p="xl"
                        >
                            <Text
                                size="lg"
                                weight={500}
                                className={classes.cardTitle}
                                mt="md"
                            >
                                Contact for Pricing
                            </Text>
                            <Text size="sm" color="dimmed" mt="sm">
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est
                                laborum."
                            </Text>
                            <Button
                                mt="xl"
                                variant="outline"
                                color="pink"
                                onClick={() => {
                                    //scroll to contact
                                    const contact =
                                        document.getElementById("contact")
                                    // @ts-ignore
                                    contact.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }}
                            >
                                Contact me
                            </Button>
                        </Card>
                    </motion.div>
                </SimpleGrid>
            </Container>
        </div>
    )
}

export default Pricing
