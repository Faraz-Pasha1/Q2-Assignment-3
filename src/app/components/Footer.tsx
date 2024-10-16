import Link from "next/link"

export default function Footer () {
    return (
        <div className = "footer">
            <ul className = "footer-Options">
                <Link href = "/"><li>Home</li></Link>
                <Link href = "/blog"><li>Blog</li></Link>
                <Link href = "/about"><li>About</li></Link>
            </ul>
            <ul className = "footerLink-Options">
                <Link href = "/facebook"><li>Facebook</li></Link>
                <Link href = "/linkedin"><li>LinkedIn</li></Link>
                <Link href = "/protfolio"><li>Portfolio</li></Link>
            </ul>

            <h1 className="Footer-Text">2024@Copyright Reserved</h1>
        </div>
    )
}