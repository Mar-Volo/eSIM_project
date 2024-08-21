import styles from "./IconButton.module.scss";

const IconButton = ({children, className, onClick}) => {
    const {IBtnClass} = styles;
    return (
        <button className={`${className} ${IBtnClass}`} onClick={onClick}>
            {children}
        </button>
    )
}
export default IconButton;