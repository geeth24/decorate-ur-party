import {
    createStyles,
    Container,
    Group,
    ActionIcon,
    Text,
    useMantineColorScheme,
    Image,
} from "@mantine/core"
import {
    IconBrandNextjs,
    IconBrandMantine,
    IconBrandFramer,
} from "@tabler/icons"
import { animateScroll as scroll } from "react-scroll"

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 120,
        borderImage:
            "linear-gradient(90deg, rgba(1, 218, 124, 0) 2.69%, rgba(175, 174, 184, 0) 2.7%, rgba(175, 174, 184, 0.21) 50.12%, rgba(175, 174, 184, 0) 96.58%)",
        borderImageSlice: 1,
        borderTopWidth: "1.5px",
        borderTopStyle: "solid",
        borderTopColor: "transparent",
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan("xs")]: {
            flexDirection: "column",
        },
    },

    links: {
        [theme.fn.smallerThan("xs")]: {
            marginTop: theme.spacing.md,
        },
    },
}))

function Footer() {
    const { classes } = useStyles()
    const { colorScheme } = useMantineColorScheme()
    const dark = colorScheme === "dark"
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Group spacing={5} position="center">
                    <Text
                        size="xl"
                        weight={700}
                        color="pink"
                        sx={{
                            fontFamily: "Alex Brush",
                        }}
                        onClick={() => {
                            scroll.scrollToTop()
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        Decorate Ur Party{" "}
                    </Text>
                </Group>

                <Group
                    spacing={0}
                    className={classes.links}
                    position="center"
                    noWrap
                >
                    <Text
                        size="sm"
                        weight={500}
                        color="pink"
                        sx={{
                            fontFamily: "Lato",
                        }}
                    >
                        © {new Date().getFullYear()} Decorate Ur Party
                    </Text>
                </Group>
                <Group spacing={5} position="center">
                    <Text size="sm" weight={500} color="pink">
                        Built with {` `}
                    </Text>
                    <Group spacing={5}>
                        <ActionIcon
                            component="a"
                            size="sm"
                            color="pink"
                            style={{ marginTop: -2 }}
                            href="https://nextjs.org/"
                        >
                            <IconBrandNextjs />
                        </ActionIcon>
                        {` `}
                        <ActionIcon
                            component="a"
                            size="sm"
                            color="pink"
                            style={{ marginTop: -2 }}
                            href="https://mantine.dev/"
                        >
                            <IconBrandMantine />
                        </ActionIcon>
                        {` `}
                        <ActionIcon
                            component="a"
                            size="sm"
                            color="pink"
                            style={{ marginTop: -2 }}
                            href="https://www.framer.com/motion"
                        >
                            <IconBrandFramer />
                        </ActionIcon>

                        <Text size="sm" weight={500} color="pink">
                            {` `} by {` `}
                        </Text>
                        <Text
                            size="sm"
                            weight={500}
                            color="pink"
                            onClick={() => {
                                window.open("https://geethg.com")
                            }}
                            style={{
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}
                        >
                            Geeth Gunnampalli
                        </Text>
                    </Group>
                </Group>
            </Container>
        </div>
    )
}

export default Footer
