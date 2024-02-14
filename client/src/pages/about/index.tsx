import styles from "@/pages/about/About.module.css"

const About = () => {
    return (
        <main className={styles.content}>
            <div className={styles.topic}>
                <h3>Wie</h3>
                <p>Michiel Baert</p>
            </div>
            <div className={styles.topic}>
                <h3>Bedrijf</h3>
                <p>Icapps</p>
            </div>
            <div className={styles.topic}>
                <h3>Vestiging</h3>
                <p>Hangar 26/27, Rijnkaai 100 bus 16, 2000 Antwerpen</p>
            </div>
            <div className={styles.topic}>
                <h3>Functie</h3>
                <p>Stagair React developer</p>
            </div>
            <div className={styles.topic}>
                <h3>Taken</h3>
                <p>Bij Icapps ontwikkel ik 'Icapps Wrapped'. Een webapplicatie die statistieken laat zien van een individuele werknemer. <br />
                Deze 'Wrapped' is dus voor iedereen uniek en kan gegenereerd worden door het gebruiken van een CMS. <br />
                Ik ben verantwoordelijk voor het maken van de CMS en ook de front-end van de 'Wrapped' zelf.
                </p>
            </div>
        </main>
    )
}

export default About;