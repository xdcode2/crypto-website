import { FaChalkboardUser, FaRegFileLines, FaRegLightbulb, FaUsers, FaRobot, FaMap } from "react-icons/fa6";

export const desktopNavbarItems = [
    {
        type: "menu",
        title: "Features",
        menuItems: [
            {
                link: "#",
                title: "Tutorials",
                subtitle: "See our tutorials",
                icon: <FaChalkboardUser />,
            },
            {
                link: "#",
                title: "Docs",
                subtitle: "See our Documentation",
                icon: <FaRegFileLines />,
            },
            {
                link: "#",
                title: "Ask",
                subtitle: "Ask something",
                icon: <FaRegLightbulb />,
            },
            {
                link: "#",
                title: "Crypto AI",
                subtitle: "Get started with Crypto AI",
                icon: <FaRobot />,
            },
        ],
    },
    {
        type: "link",
        title: "Wallet",
        link: "#",
    },
    {
        type: "link",
        title: "Pricing",
        link: "#",
    },
    {
        type: "link",
        title: "News",
        link: "#",
    },
    {
        type: "menu",
        title: "Company",
        menuItems: [
            {
                link: "#",
                title: "About",
                subtitle: "Meet the company",
                icon: <FaUsers />,
            },
            {
                link: "#",
                title: "Blog",
                subtitle: "See our Blog",
                icon: <FaRegFileLines />,
            },
            {
                link: "#",
                title: "Careers",
                subtitle: "Work at Crypto",
                icon: <FaMap />,
            },
        ],
    },
];

export const mobileNavbarItems = [
    {
        title: "Features",
        link: "#",
    },
    {
        title: "Wallet",
        link: "#",
    },
    {
        title: "Pricing",
        link: "#",
    },
    {
        title: "News",
        link: "#",
    },
    {
        title: "Company",
        link: "#",
    },
];
