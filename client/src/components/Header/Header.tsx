import styles from "@/components/Header/Header.module.css"
import Link from "next/link";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Link href="/" className={styles.name}>
                    <p>Michiel Baert</p>
                </Link>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>
                        <p>Home</p>
                    </Link>
                    <Link href="/overview" className={styles.navLink}>
                        <p>Overview</p>
                    </Link>
                    <Link href="/about" className={styles.navLink}>
                        <p>About</p>
                    </Link>
                </nav>
            </header>
        </>
    )
}

export default Header;