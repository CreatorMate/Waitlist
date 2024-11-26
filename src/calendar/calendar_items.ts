export enum CalendarItemType {
    PLAIN, FOTO, STORY, GALLARY, SHARE, SOCIAL
}

export enum CalendarRowAlignment {
    TOP = "TOP", BETWEEN = "BETWEEN", CENTER = "CENTER", END = "END"
}

export enum CalendarItemHoverAction {
    STORY, GALLARY, MAILTO
}

export const calendar_rows: CalendarRowType[] = [
    {
        date: "feb 21",
        year: 2023,
        postition: CalendarRowAlignment.TOP,
        items: [
            {
                postedBy: "jens",
                title: "we bought creatormate.com",
                images: [
                    "we_bought_creatormate.png",
                ],
                type: CalendarItemType.PLAIN,
                color: "#324A5E",
                hover: CalendarItemHoverAction.STORY,
                textColor: "#283b4b"
            }
        ]
    },
    {
        date: "apr 14",
        year: 2023,
        postition: CalendarRowAlignment.BETWEEN,
        items: [
            {
                postedBy: "jens",
                title: "figure out what creatormate could be (with f&f in spain)",
                images: [
                    "spain.jpeg",
                    "spain.mp4",
                    "find_out_what_3.jpeg",
                ],
                type: CalendarItemType.STORY,
                color: "#324C3A",
                textColor: "#283d2e",
                hover: CalendarItemHoverAction.STORY,
            },
            {
                postedBy: "marnix",
                title: "about jens(cofounder)",
                images: [
                    "jens.png",
                    "IMG_8936.jpeg",
                    "jens_02.jpeg",
                    "jens_03.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E",
                textColor: "#283b4b",
                hover: CalendarItemHoverAction.GALLARY,
                hoverText: "the guy who thought starting a tech company with zero coding skills was a solid plan. marketeer, creator, and part-time chaos manager. powered by coffee and big dreams.",
                hoverTitle: "meet jens",
                linkTo: "https://www.instagram.com/trycreatormate/"
            }
        ]
    },
    {
        date: "may 31",
        year: 2023,
        postition: CalendarRowAlignment.BETWEEN,
        items: [
            {
                postedBy: "jens",
                title: "the biggest cm inspo",
                images: [],
                type: CalendarItemType.PLAIN,
                color: "#324C3A",
                textColor: "#283d2e",
                link: "https://www.youtube.com/watch?v=jG7dSXcfVqE"
            },
            {
                postedBy: "jens",
                title: "about marnix(cofounder)",
                images: [
                    "meet_marnix.png",
                    "meet_marnix_1.jpeg",
                    "meet_marnix_2.jpeg",
                    "meet_marnix_3.jpeg",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E",
                textColor: "#283b4b",
                hover: CalendarItemHoverAction.GALLARY,
                hoverText: "the guy who thought starting a tech company with zero coding skills was a solid plan. marketeer, creator, and part-time chaos manager. powered by coffee and big dreams.",
                hoverTitle: "meet marnix",
                linkTo: "https://www.instagram.com/trycreatormate/"
            }
        ]
    },
    {
        date: "jun 16",
        year: 2023,
        postition: CalendarRowAlignment.END,
        items: [
            {
                postedBy: "marnix",
                title: "jelmer joins creatormate",
                images: [
                    "jelmer_joins.png",
                    "meet_jelmer_1.jpeg",
                    "meet_jelmer_2.png",
                    "meet_jelmer_3.jpeg",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E",
                textColor: "#283b4b",
                hover: CalendarItemHoverAction.GALLARY,
                hoverText: "our ai god and resident data junkie. ask him anything, and chances are the answer’s the same: “we need more data.” ly",
                hoverTitle: "meet jelmer",
                linkTo: "https://www.instagram.com/trycreatormate/"
            }
        ]
    },
    {
        date: "jul 14",
        year: 2023,
        postition: CalendarRowAlignment.TOP,
        items: [
            {
                postedBy: "marnix",
                title: "jesse joins creatormate",
                images: [
                    "jesse_joins.png",
                    "meet_jesse_1.jpeg",
                    "meet_jesse_2.jpg",
                    "meet_jesse_3.jpg",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E",
                textColor: "#283b4b",
                hover: CalendarItemHoverAction.GALLARY,
                hoverText: "design mastermind, branding backbone, and the raw egg guy. a passionate perfectionist obsessed with every little detail—yes, all the details.",
                hoverTitle: "meet jesse",
                linkTo: "https://www.instagram.com/trycreatormate/"
            },
            {
                postedBy: "jens",
                title: "back in ams with lots of new creators & founders",
                images: [
                    "back_in_arms_2.jpeg",
                    "back_in_arms_3.jpeg",
                    "back_in_arms.jpeg",
                ],
                type: CalendarItemType.GALLARY,
                color: "#503F5B",
                textColor: "#403249",
                hover: CalendarItemHoverAction.STORY
            }
        ]
    },
    {
        date: "sep 30",
        year: 2023,
        postition: CalendarRowAlignment.END,
        items: [
            {
                postedBy: "marnix",
                title: "boni joins creatormate",
                images: [
                    "boni_joins.png",
                    "meet_boni_1.jpeg",
                    "meet_boni_2.jpeg",
                    "meet_boni_3.JPG",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E",
                textColor: "#283b4b",
                hover: CalendarItemHoverAction.GALLARY,
                hoverText: "the king of “winging it” with results that somehow slap every time. no plan, all vibes—boni’s behind most of our content with jens.",
                hoverTitle: "meet boni",
                linkTo: "https://www.instagram.com/trycreatormate/"
            },
            {
                postedBy: "marnix",
                title: "robin joins creatormate",
                images: [
                    "robin_joins.png",
                    "meet_robin_1.jpg",
                    "meet_robin_2.jpg",
                    "meet_robin_3.PNG",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E",
                textColor: "#283b4b",
                hover: CalendarItemHoverAction.GALLARY,
                hoverText: "mr quality himself. not your average developer—this guy writes code like poetry. funny, passionate, and the team’s unofficial hype man.",
                hoverTitle: "meet robin",
                linkTo: "https://www.instagram.com/trycreatormate/"
            }
        ]
    },
    {
        date: "dec 17",
        year: 2023,
        postition: CalendarRowAlignment.TOP,
        items: [
            {
                postedBy: "jens",
                title: "video shoot took 6 hours",
                images: [],
                type: CalendarItemType.PLAIN,
                color: "#324A5E",
                textColor: "#283b4b",
                link: 'https://www.youtube.com/watch?v=s7gVVLWGw4M&feature=youtu.be',
            }
        ]
    },
    {
        date: "feb 15",
        year: 2024,
        postition: CalendarRowAlignment.BETWEEN,
        items: [
            {
                postedBy: "jens",
                title: "raise $220k from angel investors",
                images: [],
                type: CalendarItemType.PLAIN,
                color: "#5A2D3E",
                textColor:"#482432",
            },
            {
                postedBy: "jens",
                title: "talked to 250+ creators",
                images: [
                    "talked_to_creators_1.png",
                    "talked_to_creators_2.png",
                    "talked_to_creators_3.png",
                ],
                type: CalendarItemType.GALLARY,
                color: "#2A3B56",
                textColor: "#222f45",
                hover: CalendarItemHoverAction.STORY
            }
        ]
    },
    {
        date: "apr 23",
        year: 2024,
        postition: CalendarRowAlignment.TOP,
        items: [
            {
                postedBy: "jens",
                title: "the hackathon 1.0",
                images: [
                    "retreat_3.jpeg",
                    "retreat_2.jpeg",
                    "retreat_1.jpeg",
                ],
                type: CalendarItemType.GALLARY,
                color: "#171717",
                textColor: "#121212",
                hover: CalendarItemHoverAction.STORY
            }
        ]
    },
    {
        date: "may 1",
        year: 2024,
        postition: CalendarRowAlignment.CENTER,
        items: [
            {
                postedBy: "jens",
                title: "launched our first landing page",
                images: [
                    "landing_page_1.png",
                    "landing_page_2.png",
                    "landing_page_3.png",
                ],
                type: CalendarItemType.GALLARY,
                color: "#324A5E",
                textColor: "#283b4b",
                small: true,
                hover: CalendarItemHoverAction.STORY
            }
        ]
    },
    {
        date: "jun 15",
        year: 2024,
        postition: CalendarRowAlignment.TOP,
        items: [
            {
                postedBy: "marnix",
                title: "oliver joins creatormate",
                images: [
                    "oliver_joins_creatormate.png",
                    "meet_oliver_1.jpeg",
                    "meet_oliver_2.jpg",
                    "meet_oliver_3.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E",
                textColor: "#283b4b",
                hover: CalendarItemHoverAction.GALLARY,
                hoverText: "30 minutes with him, and you’ll rethink your entire existence. pro tip: limit it to once a month, or you’ll never get anything done. absolute legend.",
                hoverTitle: "meet oliver",
                linkTo: "https://www.instagram.com/trycreatormate/"
            },
            {
                postedBy: "marnix",
                title: "liam joins creatormate",
                images: [
                    "liam_joins_creatormate.png",
                    "meet_liam_1.jpeg",
                    "meet_liam_2.png",
                    "meet_liam_3.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E",
                textColor: "#283b4b",
                hover: CalendarItemHoverAction.GALLARY,
                hoverText: "best-looking and most caring—yes, he’s both. born in cape town, he brought the vibes to amsterdam… just not the sun.",
                hoverTitle: "meet liam",
                linkTo: "https://www.instagram.com/trycreatormate/"
            }
        ]
    },
    {
        date: "jul 9",
        year: 2024,
        postition: CalendarRowAlignment.END,
        items: [
            {
                postedBy: "boni",
                title: "launched based on real startup series",
                images: [
                    "this_is_boni.png",
                    "launched_series_1.jpeg",
                    "launched_series_2.jpeg",
                    "launched_series_3.JPG",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E",
                textColor: "#283b4b",
                hover: CalendarItemHoverAction.STORY
            }
        ]
    },
    {
        date: "jul 11",
        year: 2024,
        postition: CalendarRowAlignment.TOP,
        items: [
            {
                postedBy: "jens",
                title: "got our first office",
                images: [
                    "office_3.png",
                    "office_2.png",
                    "office_1.png",
                ],
                type: CalendarItemType.GALLARY,
                color: "#3A5E5C",
                textColor: "#2e4b4a",
                hover: CalendarItemHoverAction.STORY
            }
        ]
    },
    {
        date: "jul 22",
        year: 2024,
        postition: CalendarRowAlignment.TOP,
        items: [
            {
                postedBy: "jens",
                title: "ben joins creatormate",
                images: [],
                type: CalendarItemType.PLAIN,
                color: "#324A5E",
                textColor: "#283b4b"
            },
            {
                postedBy: "jens",
                title: "launched our first beta(private)",
                images: [],
                type: CalendarItemType.PLAIN,
                color: "#2f2f2f",
                textColor: '#262626'
            }
        ]
    },
    {
        date: "aug 3",
        year: 2024,
        postition: CalendarRowAlignment.CENTER,
        items: [
            {
                postedBy: "jens",
                title: "lots of feedback & interations later...",
                images: [
                    "tooling_3.png",
                    "why_spaces.png",
                    "feedback_2.png",
                ],
                type: CalendarItemType.GALLARY,
                color: "#2A3B56",
                textColor: "#222f45",
                small: true,
                hover: CalendarItemHoverAction.STORY
            }
        ]
    },
    {
        date: "sep 20",
        year: 2024,
        postition: CalendarRowAlignment.BETWEEN,
        items: [
            {
                postedBy: "jens",
                title: "sam joins creatormate",
                images: [],
                type: CalendarItemType.PLAIN,
                color: "#324A5E",
                textColor: "#283b4b"
            },
            {
                postedBy: "jens",
                title: "the hackathon 2.0",
                images: ["hackathon.png"],
                type: CalendarItemType.FOTO,
                color: "#463356",
                textColor: "#382945"
            }
        ]
    },
    {
        date: "oct 14",
        year: 2024,
        postition: CalendarRowAlignment.BETWEEN,
        items: [
            {
                postedBy: "jens",
                title: "and we made some amazing friends along the way",
                images: [],
                type: CalendarItemType.PLAIN,
                color: "#324C3A",
                textColor: "#283d2e"
            },
            {
                postedBy: "jens",
                title: "waitlist turned into community platform",
                images: [
                    "testing.png",
                    "why_waitlist.png"
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E",
                textColor: "#283b4b",
                hover: CalendarItemHoverAction.STORY
            }
        ]
    },
    {
        date: "nov 1",
        year: 2024,
        postition: CalendarRowAlignment.TOP,
        items: [
            {
                postedBy: "jens",
                title: "shooting our upcoming yt series",
                images: [
                    "shooting_yt_video.png",
                    "real.mp4"
                ],
                type: CalendarItemType.FOTO,
                color: "#2f2f2f",
                textColor: "#262626",
                hover: CalendarItemHoverAction.STORY
            }
        ]
    },
    {
        date: "nov 1",
        year: 2024,
        postition: CalendarRowAlignment.END,
        items: [],
        socials: true
    },
    {
        date: "",
        year: 2024,
        postition: CalendarRowAlignment.TOP,
        items: [
            {
                postedBy: "marnix",
                title: "want to join our team? \n" +
                    "email: jens@creatormate.com",
                images: ["join_our_Team.png"],
                type: CalendarItemType.FOTO,
                color: "#2f2f2f",
                textColor: "#262626",
                hover: CalendarItemHoverAction.MAILTO
            }
        ],
        final: true
    },
]

export type CalendarItem = {
    postedBy: string,
    title: string,
    images: string[],
    type: CalendarItemType
    color: string,
    textColor: string
    small?: boolean,
    hover?: CalendarItemHoverAction,
    link?: string,
    hoverText?: string,
    linkTo?: string,
    hoverTitle?: string
}

export type CalendarRowType = {
    date: string,
    year: number,
    items: CalendarItem[],
    postition: CalendarRowAlignment,
    color?: string
    final?: boolean,
    socials?: boolean,
}


