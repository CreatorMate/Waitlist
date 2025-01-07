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
                    "we_bought_creatormate_plmmsb",
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
                    "spain_r71ryl",
                    "spain.mp4",
                    "find_out_what_3_vh0xvu",
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
                    "jens_de87o7",
                    "IMG_8936_f5ewvj",
                    "jens_02_hil1ts",
                    "jens_03_s23pgb",
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
                    "meet_marnix_k2jit3",
                    "meet_marnix_1_p33h4o",
                    "meet_marnix_2_gapz8w",
                    "meet_marnix_3_jge6ul",
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
                    "jelmer_joins_ses6af",
                    "meet_jelmer_1_gwvo5y",
                    "meet_jelmer_2_wbbyxg",
                    "meet_jelmer_3_lzqyoe",
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
                    "jesse_joins_ntzolk",
                    "meet_jesse_1_epu84v",
                    "meet_jesse_2_hcwk1q",
                    "meet_jesse_3_ni1u6s",
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
                    "back_in_arms_2_hvzgdm",
                    "back_in_arms_3_l03yeg",
                    "back_in_arms_fkxh7m",
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
                    "boni_joins_hwqi2v",
                    "meet_boni_1_jzof9n",
                    "meet_boni_2_nzad7d",
                    "meet_boni_3_se7ce8",
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
                    "robin_joins_hrpuju",
                    "meet_robin_1_ajsmvn",
                    "meet_robin_2_wbh2oo",
                    "meet_robin_3_slja5b",
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
                    "talked_to_creators_1_ewistu",
                    "talked_to_creators_2_aig3b5",
                    "talked_to_creators_3_r9ao66",
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
                    "retreat_3_odepx2",
                    "retreat_2_xprre4",
                    "retreat_1_qxl6cr",
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
                    "landing_page_1_mon665",
                    "landing_page_2_haanoo",
                    "landing_page_3_bjrsbo",
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
                    "oliver_joins_creatormate_wfyz3f",
                    "meet_oliver_1_hnneft",
                    "meet_oliver_2_adw8at",
                    "meet_oliver_3_w1pcwo",
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
                    "liam_joins_creatormate_ejc0ge",
                    "meet_liam_1_lfrdte",
                    "meet_liam_2_lkj1c7",
                    "meet_liam_3_ov1gv5",
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
                    "this_is_boni_hpo3q4",
                    "launched_series_1_ibycsd",
                    "launched_series_2_tcw4s1",
                    "launched_series_3_yvsbcf",
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
                    "office_3_jkioxo",
                    "office_2_cijuox",
                    "office_1_ypxnmf",
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
                    "tooling_3_fveze5",
                    "why_spaces_yrtjep",
                    "feedback_2_bnhcsp",
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
                images: ["hackathon_n6cdjm"],
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
                    "testing_uln8gr",
                    "why_waitlist_jvzcz8"
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
                    "shooting_yt_video_yjf8sk",
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
                images: ["join_our_Team_wnb3al"],
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


