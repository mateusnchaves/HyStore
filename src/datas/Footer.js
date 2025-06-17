import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"

import styles from "./stylesfooter.css"

export default function Footer() {
    return (<footer className={styles.footer}>
        <ul>
            <li>
                <FaFacebook/>
                <text> Hystore </text>
            </li>    
            <li>
                <FaInstagram/>
                <text> @Hystore </text>
            </li> 
            <li>
                <FaLinkedin/>
                <text> Hystore </text>
            </li> 
        </ul>
    
    </footer>)
}
