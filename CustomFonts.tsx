import { Global } from "@mantine/core"

export function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    "@font-face": {
                        fontFamily: "Lato",
                        src: `url('/fonts/Lato-Bold.ttf') format('truetype')`,
                        fontWeight: 700,
                        fontStyle: "normal",
                    },
                },
                {
                    "@font-face": {
                        fontFamily: "Lato",
                        src: `url('/fonts/Lato-Regular.ttf') format('truetype')`,
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },
                {
                    "@font-face": {
                        fontFamily: "Alex Brush",
                        src: `url('/fonts/AlexBrush-Regular.ttf') format('truetype')`,
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },
                //disable scrollbars
                {
                    "::-webkit-scrollbar": {
                        width: 0,
                        height: 0,
                    },
                },
                {
                    ".custom-wrapper-class": {
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridGap: "1rem",

                        "@media (max-width: 768px)": {
                            gridTemplateColumns: "repeat(2, 1fr)",
                        },
                    },
                },
            ]}
        />
    )
}
