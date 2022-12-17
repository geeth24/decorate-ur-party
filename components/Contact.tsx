import {
    createStyles,
    ThemeIcon,
    Text,
    Box,
    Stack,
    Container,
    Title,
    Group,
} from "@mantine/core"
import { IconPhone, IconAt, IconBrandInstagram } from "@tabler/icons"
import { motion } from "framer-motion"
type ContactIconVariant = "white" | "gradient"

interface Contacttyles {
    variant: ContactIconVariant
}

const useStyles = createStyles((theme, { variant }: Contacttyles) => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
        color: theme.white,
    },

    icon: {
        marginRight: theme.spacing.md,
        backgroundImage:
            variant === "gradient"
                ? `linear-gradient(135deg, ${
                      theme.colorScheme === "dark"
                          ? theme.colors[theme.primaryColor][7]
                          : theme.colors[theme.primaryColor][4]
                  } 0%, ${theme.colors[theme.primaryColor][6]} 100%)`
                : "none",
        backgroundColor: "transparent",
    },

    title: {
        color:
            variant === "gradient"
                ? theme.colors.gray[6]
                : theme.colors[theme.primaryColor][0],
    },

    description: {
        color: variant === "gradient" ? theme.black : theme.white,
    },
}))

interface ContactIconProps
    extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
    icon: React.FC<any>
    title: React.ReactNode
    description: React.ReactNode
    hrefPrefix: string
    variant?: ContactIconVariant
}

function ContactIcon({
    icon: Icon,
    title,
    description,
    hrefPrefix,
    variant = "gradient",
    className,
    ...others
}: ContactIconProps) {
    const { classes, cx } = useStyles({ variant })
    return (
        <a
            href={`${hrefPrefix}${description}`}
            style={{ textDecoration: "none" }}
        >
            <div className={cx(classes.wrapper, className)} {...others}>
                {variant === "gradient" ? (
                    <ThemeIcon size={40} radius="md" className={classes.icon}>
                        <Icon size={24} />
                    </ThemeIcon>
                ) : (
                    <Box mr="md">
                        <Icon size={24} />
                    </Box>
                )}

                <div>
                    <Text
                        size="xs"
                        className={classes.title}
                        sx={(theme) => ({
                            color:
                                theme.colorScheme === "dark"
                                    ? theme.colors.pink[1]
                                    : theme.colors.pink[9],
                        })}
                    >
                        {title}
                    </Text>
                    <Text
                        className={classes.description}
                        sx={(theme) => ({
                            color:
                                theme.colorScheme === "dark"
                                    ? theme.white
                                    : theme.colors.pink[9],
                        })}
                    >
                        {description}
                    </Text>
                </div>
            </div>
        </a>
    )
}

interface ContactListProps {
    data?: ContactIconProps[]
    variant?: ContactIconVariant
}

const MOCKDATA = [
    {
        title: "Email",
        description: "decorateurparty@gmail.com",
        icon: IconAt,
        hrefPrefix: "mailto:",
    },
    {
        title: "Phone",
        description: "+1 (732) 491-1541",
        icon: IconPhone,
        hrefPrefix: "tel:",
    },
    {
        title: "Instagram",
        description: "decorateurparty",
        icon: IconBrandInstagram,
        hrefPrefix: "https://instagram.com/",
    },
]

function ContactList({ data = MOCKDATA, variant }: ContactListProps) {
    const items = data.map((item, index) => (
        <ContactIcon key={index} variant={variant} {...item} />
    ))
    return <Stack>{items}</Stack>
}

function Contact() {
    return (
        <>
            <Container
                size="lg"
                pt={80}
                pb={80}
                sx={{
                    maxWidth: 700,
                }}
                id="contact"
            >
                {" "}
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
                            Contact
                        </Text>
                    </motion.div>
                </Group>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.5,
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <Box
                        sx={(theme) => ({
                            padding: theme.spacing.xl,
                            borderRadius: theme.radius.md,
                            backgroundColor:
                                theme.colorScheme === "dark"
                                    ? theme.colors.pink[9]
                                    : theme.colors.pink[2],
                        })}
                    >
                        <ContactList />
                    </Box>
                </motion.div>
            </Container>
        </>
    )
}

export default Contact
