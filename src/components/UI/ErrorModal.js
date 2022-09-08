import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const ErrorModal = props => {
    return <Card className={styles.modal}>
        <header>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.action}>
            <Button>Ok</Button>
        </footer>
    </Card>
}

export default ErrorModal;