type ComponentGroup = {
  class: string;
  elements: string[];
};

const capstoneRequirements: ComponentGroup[] = [
  {
    class: "Pages and Components",
    elements: [
      "My Shifts",
      "Profile Page*",
      "All Shifts Page*",
      "Department Schedule*",
      "Swap and Drop*",
      "Footer / Navbar",
      "Manager Priveleges*",
      "MongoDB",
      "Google Authentication",
    ],
  },
  {
    class: "My Shifts",
    elements: [
      "Displays current shifts",
      "User locked view",
      "Displays all details",
      "Drop and Swap buttons in each shift",
      "Swap shift Function",
      "Drop shift Function",
    ],
  },
  {
    class: "Profile Page",
    elements: [
      "Google information",
      "View Swap Requests",
      "Deny or Accept Requests",
      "Department Schedule*",
      "Swap and Drop*",
    ],
  },
  {
    class: "All Shifts Page",
    elements: [
      "Lists department shifts",
      "Select which to swap",
      'Ability to return to "My Shifts"',
      "Logic locked",
      "Doesn't include user's shifts",
      "Displays shift details",
    ],
  },
  {
    class: "Department Schedule",
    elements: [
      "Display current week",
      "Shows employees in user's department",
      "Shift details upon selection",
      "Modal for shift details",
      "Ability to exit modal",
    ],
  },
  {
    class: "Footer / NavBar",
    elements: [
      "Easy to use icons",
      "Hyperlinks for pages",
      "Schedule",
      "Profile",
      "My Shifts",
    ],
  },
  {
    class: "Manager Priveleges",
    elements: [
      "Manager page access",
      "Approve Requests",
      "Disapprove Requests",
      "Submit next schedule",
    ],
  },
];

const tectocRequirements: ComponentGroup[] = [
  {
    class: "Pages and Components",
    elements: [
      "Home",
      "About",
      "Case Studies*",
      "Services*",
      "Contact",
      "Privacy Policy",
      "Terms of Service",
      "Header / Navigation",
      "Footer",
    ],
  },
  {
    class: "Case Studies",
    elements: [
      "Navigator",
      "About section",
      "List of Services",
      "Service Details",
      "Drop Down Menus",
    ],
  },
  {
    class: "Services",
    elements: [
      "Service Navigator",
      "Case Study Sub-Nav",
      "About section",
      "List of Services",
      "Detailed Case Studies",
      "Figures with figure text",
      "References",
    ],
  },
  {
    class: "Header",
    elements: [
      "TecTOC Logo (Left)",
      "Hyperlinks centered",
      "Home",
      "About",
      "Services",
      "Contact (Right)",
    ],
  },
  {
    class: "Footer",
    elements: [
      "TecTOC Logo",
      "Copy Rights",
      "Privacy Policy",
      "Terms of Service",
      "Tight Oil Consortium Logo",
      "Mobile Customizations",
    ],
  },
];

export { capstoneRequirements, tectocRequirements };
