import Link from "next/link"

export default function Header () {
    return (
        <div className = "header">
            <h1 className="title-Header">Food , Health & Nutritions</h1>
            <ul className = "header-Options">
                <Link href = "/"><li>Portfolio</li></Link>
                <Link href= "/contact"><li>Contact</li></Link>
                <Link href = "/about"><li>About</li></Link>
            </ul>
        </div>
    )
}