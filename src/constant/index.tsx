import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"

export const siteAbbreviation = "site"
export const siteFounder = "founder"
export const siteName = "Site Name"
export const phoneNumber = "+000 0000 000 000"
export const email = `contact@${siteName.replace(/\s/g, "")}.com`
export const address = "Texas, United State"

export const site = {
  title: siteName,
  description: `This is the best website.`,
  url: "http://localhost:3000/"
}

export const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/#",
  },
  {
    id: 2,
    name: "About",
    href: "/#",
  },
  {
    id: 3,
    name: "Service",
    href: "/#",
  },
  {
    id: 4,
    name: "Contact",
    href: "/#",
  },
]

export const socialLink = [
  {
    id: 1,
    title: "Facebook",
    icon: <Facebook className="w-8 h-8" />,
    href: "https://web.facebook.com/"
  },
  {
    id: 2,
    title: "Instagram",
    icon: <Instagram className="w-8 h-8" />,
    href: "https://www.instagram.com/"
  },
  {
    id: 3,
    title: "Youtube",
    icon: <Youtube className="w-9 h-9" />,
    href: "https://youtube.com/"
  },
  // {
  // id: 3,
  //   title: "Twitter | X",
  //   icon: <FaSquareXTwitter className="w-10 h-10" />,
  //   href: "https://x.com/"
  // },
  // {
  // id: 4,
  //   title: "Phone Number",
  //   icon: <FaPhoneSquareAlt className="w-10 h-10" />,
  //   href: `tel:${phoneNumber}`
  // },
  // {
  // id: 5,
  //   title: "Email",
  //   icon: <FaEnvelope className="w-10 h-10" />,
  //   href: `mailto:${email}`
  // },
]

export const company = [
  {
    id: 1,
    name: "About",
    href: "/about"
  },
  {
    id: 2,
    name: "Features",
    href: "/#"
  },
  {
    id: 3,
    name: "FAQ",
    href: "/#"
  },
  {
    id: 4,
    name: "Team",
    href: "/#"
  },
  {
    id: 5,
    name: "Sponsors",
    href: "/#"
  },
]

export const support = [
  {
    id: 1,
    name: "Contact",
    href: "/contact"
  },
  {
    id: 2,
    name: "Help",
    href: "/#"
  },
  {
    id: 3,
    name: "Videos",
    href: "/#"
  },
  {
    id: 4,
    name: "Prvacy Policy",
    href: "/privacy-policy"
  },
  {
    id: 5,
    name: "Downloads & Resources",
    href: "/#"
  },
]

export const contact = [
  {
    id: 1,
    title: "email",
    icon: <Mail />,
    href: `mailto:${email}`,
    name: email,
  },
  {
    id: 2,
    title: "phone number",
    icon: <Phone />,
    href: `tel:${phoneNumber}`,
    name: phoneNumber,
  },
  {
    id: 3,
    title: "address",
    icon: <MapPin />,
    href: "/#",
    name: address,
  }
]