export enum CalendarItemType {
    PLAIN, FOTO, STORY, GALLARY, SHARE, SOCIAL
}

export enum CalendarRowAlignment {
    TOP = "TOP", BETWEEN = "BETWEEN", CENTER = "CENTER", END = "END"
}

export enum CalendarItemHoverAction {
    STORY
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
                images: [],
                type: CalendarItemType.PLAIN,
                color: "#324A5E",
                hover: CalendarItemHoverAction.STORY
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
                    "spain.png",
                    "find_out_what_1.png",
                    "find_out_what_2.png",
                    "find_out_what_3.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324C3A",
                hover: CalendarItemHoverAction.STORY,
            },
            {
                postedBy: "marnix",
                title: "about jens(cofounder)",
                images: [
                    "jens.png",
                    "jens.png",
                    "jens.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E",
                hover: CalendarItemHoverAction.STORY
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
                link: "https://www.youtube.com/watch?v=jG7dSXcfVqE"
            },
            {
                postedBy: "jens",
                title: "about marnix(cofounder)",
                images: [
                    "meet_marnix.png"
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E"
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
                    "jelmer_joins.png",
                    "jelmer_joins.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E"
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
                    "jesse_joins.png",
                    "jesse_joins.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E"
            },
            {
                postedBy: "jens",
                title: "back in ams with lots of new creators & founders",
                images: [
                    "build_in_arms_3.png",
                    "build_in_arms_2.png",
                    "build_in_arms_1.png",
                ],
                type: CalendarItemType.GALLARY,
                color: "#503F5B"
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
                    "boni_joins.png",
                    "boni_joins.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E"
            },
            {
                postedBy: "marnix",
                title: "robin joins creatormate",
                images: [
                    "robin_joins.png",
                    "robin_joins.png",
                    "robin_joins.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E",
                hover: CalendarItemHoverAction.STORY
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
                color: "#324A5E"
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
                color: "#5A2D3E"
            },
            {
                postedBy: "jens",
                title: "talked to 250+ creators",
                images: [
                    "girl_sitting_3.png",
                    "girl_sitting_2.png",
                    "girl_sitting.png",
                ],
                type: CalendarItemType.GALLARY,
                color: "#2A3B56"
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
                    "retreat_3.png",
                    "retreat_2.png",
                    "retreat_1.png",
                ],
                type: CalendarItemType.GALLARY,
                color: "#171717"
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
                    "waitlist_3.png",
                    "waitlist_2.png",
                    "waitlist_1.png",
                ],
                type: CalendarItemType.GALLARY,
                color: "#324A5E",
                small: true
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
                    "oliver_joins_creatormate.png",
                    "oliver_joins_creatormate.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E"
            },
            {
                postedBy: "marnix",
                title: "liam joins creatormate",
                images: [
                    "liam_joins_creatormate.png",
                    "liam_joins_creatormate.png",
                    "liam_joins_creatormate.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E"
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
                    "this_is_boni.png",
                    "this_is_boni.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E"
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
                color: "#3A5E5C"
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
                type: CalendarItemType.STORY,
                color: "#324A5E"
            },
            {
                postedBy: "jens",
                title: "launched our first beta(private)",
                images: [],
                type: CalendarItemType.PLAIN,
                color: "#2f2f2f"
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
                    "tooling_2.png",
                    "tooling_1.png",
                ],
                type: CalendarItemType.GALLARY,
                color: "#2A3B56",
                small: true
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
                type: CalendarItemType.STORY,
                color: "#324A5E"
            },
            {
                postedBy: "jens",
                title: "the hackathon 2.0",
                images: ["hackathon.png"],
                type: CalendarItemType.FOTO,
                color: "#463356"
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
            },
            {
                postedBy: "jens",
                title: "waitlist turned into community platform",
                images: [
                    "testing.png",
                    "testing.png",
                    "testing.png",
                ],
                type: CalendarItemType.STORY,
                color: "#324A5E"
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
                images: ["shooting_yt_video.png"],
                type: CalendarItemType.FOTO,
                color: "#2f2f2f"
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
                color: "#2f2f2f"
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
    small?: boolean,
    hover?: CalendarItemHoverAction,
    link?: string
}

export type CalendarRowType = {
    date: string,
    year: number,
    items: CalendarItem[],
    postition: CalendarRowAlignment,
    color?: string
    final?: boolean,
    socials?: boolean
}


