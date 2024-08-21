import styles from "./Logo.module.scss";

const Logo = () => {
    const{logo} = styles;
    return (
        <a href="#" className={logo}>
            Conected number
        </a>
    )
}

export default Logo; 