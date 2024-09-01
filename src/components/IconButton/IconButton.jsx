import styles from "./IconButton.module.scss";

const IconButton = ({children, className, onClick, type="button"}) => {
    const {IBtnClass} = styles;
    return (
        <button type={type} className={`${className} ${IBtnClass}`} onClick={onClick}>
            {children}
        </button>
    )
}
export default IconButton;