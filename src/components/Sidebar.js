import styles from './Sidebar.module.css'

export default function Sidebar() {
    const githubIconUrl = process.env.PUBLIC_URL + '/assets/github-mark.svg';
    const linkedinIconUrl = process.env.PUBLIC_URL + '/assets/linkedin-logo.svg'
    return(
        <div className={styles.sidebar}>
            <ul>
                <li>
                    <a href='https://github.com/helgidavidsson'>
                    <img className={styles.icon} src={githubIconUrl} alt="GitHub" />
                    <p className={styles.username}>@helgidavidsson</p>
                    </a>
                </li>

                <li>
                    <a>
                    </a>
                </li>
            </ul>
        </div>
    )
}