import styles from './Button.module.scss'


{
	/* <Button type='submit' title='Submit' disabled={!completedTodoExist}>
	Submit
</Button> */
}

function Button(props) {
	const { children, disabled = false } = props
	return (
		<button {...props} className={styles.button} disabled={disabled}>
			{children}
		</button>
	)
}

export default Button
