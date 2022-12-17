import { useState } from "react"
import {
    createStyles,
    Header,
    Container,
    Group,
    Burger,
    Paper,
    Transition,
    Text,
    ActionIcon,
    useMantineColorScheme,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { MantineLogo } from "@mantine/ds"
import { Link } from "react-scroll"
import { IconBrandInstagram, IconSun, IconMoonStars } from "@tabler/icons"

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
    root: {
        position: "sticky",
        zIndex: 10,
    },

    dropdown: {
        position: "absolute",
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: "hidden",

        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },

    title: {
        fontFamily: "Alex Brush, cursive",
        fontSize: 40,
        fontWeight: 400,
        lineHeight: 1.1,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 30,
        },
    },

    links: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    link: {
        display: "block",
        lineHeight: 1,
        padding: "8px 12px",
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },

        [theme.fn.smallerThan("sm")]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).color,
        },
    },

    social: {
        [theme.fn.smallerThan("sm")]: {
            width: "auto",
            marginLeft: "auto",
        },
    },
}))

interface NavbarProps {
    links: { link: string; label: string }[]
}

function Navbar({ links }: NavbarProps) {
    const [opened, { toggle, close }] = useDisclosure(false)
    const [active, setActive] = useState(links[0].link)
    const { classes, cx } = useStyles()

    const items = links.map((link) => (
        <Link
            key={link.label}
            to={link.link}
            spy
            smooth
            duration={500}
            offset={-HEADER_HEIGHT}
            className={cx(
                classes.link,
                active === link.link && classes.linkActive
            )}
            onClick={() => {
                setActive(link.link)
                toggle()
            }}
            style={{ cursor: "pointer" }}
        >
            {link.label}
        </Link>
    ))
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const dark = colorScheme === "dark"

    return (
        <Header height={HEADER_HEIGHT} className={classes.root}>
            <Container className={classes.header}>
                <Text className={classes.title} color="pink">
                    DUP
                </Text>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <Group
                    spacing={0}
                    className={classes.social}
                    position="right"
                    noWrap
                >
                    <ActionIcon
                        size="lg"
                        component="a"
                        href="https://instagram.com/decorateurparty"
                        //open in new tab
                        target="_blank"
                        rel="noopener noreferrer"
                        color={dark ? "gray" : "pink"}
                    >
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        size="lg"
                        color="pink"
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                    >
                        {dark ? (
                            <IconSun size={18} />
                        ) : (
                            <IconMoonStars size={18} />
                        )}
                    </ActionIcon>
                </Group>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    className={classes.burger}
                    size="sm"
                />

                <Transition
                    transition="pop-top-right"
                    duration={200}
                    mounted={opened}
                >
                    {(styles) => (
                        <Paper
                            className={classes.dropdown}
                            withBorder
                            style={styles}
                        >
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    )
}

export default Navbar
