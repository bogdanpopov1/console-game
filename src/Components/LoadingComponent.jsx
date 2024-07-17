import { Commet } from "react-loading-indicators"
import styles from "./Loading.module.css"

function showLoading() {
    return (
        <div className={styles.loading}>
            <Commet color="#32cd32" size="medium" text="" textColor="" />
        </div>
    )
}

export function LoadingComponent({loading}) {

    return (
        <>
            { loading ? showLoading() : '' }
        </>
    )
}