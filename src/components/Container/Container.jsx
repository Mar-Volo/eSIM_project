import styles from "./Container.module.scss";

const Container = ({children, containerClass}) => {
    const {container} = styles;

    return (
        <div className={`${container} ${containerClass}`}>
            {children}
        </div>
    )
}
export default Container;