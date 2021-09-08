import React from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"

const links = [
    {
        url: "http://github.com/viralatron",
        description:
            "github",
        name: "github",
    },
    {
        url: "https://www.linkedin.com/in/dan-amarals/",
        description:
            "linkedin",
        name: "linkedin",
    },
]
const footerLinks = [
    {
        url: "http://github.com/viralatron",
        description:
            "github",
        name: "github",
    },
    {
        url: "https://www.linkedin.com/in/dan-amarals/",
        description:
            "linkedin",
        name: "linkedin",
    },
]

export default function Layout({ children }) {
    return (
        <>
            <Helmet>
                <title>Daniel Amaral - Frontend Developer</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </Helmet>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#" >Daniel Amaral</a>
                <ul className="navbar-nav">
                    {links.map(link => (
                        <li key={link.name}>
                            <Link className="nav-link" to={`${link.url}`} >{link.description}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {children}
            <nav className="navbar navbar-expand-lg fixed-bottom navbar-dark bg-dark">
                <ul className="navbar-nav">
                    {footerLinks.map(link => (
                        <li key={link.name}>
                            <Link className="nav-link" to={`${link.url}`} >{link.description}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}