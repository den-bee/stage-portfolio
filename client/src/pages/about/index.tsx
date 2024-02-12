import styles from "@/pages/about/About.module.css"

const About = () => {
    return (
        <main className={styles.content}>
            <div className={styles.topic}>
                <h2>Wie</h2>
                <p>Michiel Baert</p>
            </div>
            <div className={styles.topic}>
                <h2>Bedrijf</h2>
                <p>Icapps</p>
            </div>
            <div className={styles.topic}>
                <h2>Vestiging</h2>
                <p>Hangar 26/27, Rijnkaai 100 bus 16, 2000 Antwerpen</p>
            </div>
            <div className={styles.topic}>
                <h2>Functie</h2>
                <p>Stagair React developer</p>
            </div>
            <div className={styles.topic}>
                <h2>Taken</h2>
                <p>Bij Icapps ontwikkel ik 'Icapps Wrapped'. Een webapplicatie die statistieken laat zien van een individuele werknemer. <br />
                Deze 'Wrapped' is dus voor iedereen uniek en kan gegenereerd worden door het gebruiken van een CMS. <br />
                Ik ben verantwoordelijk voor het maken van de CMS en ook de front-end van de 'Wrapped' zelf.
                </p>
            </div>
        </main>
    )
}

export default About;