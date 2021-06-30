function Header(props, {prop2, prop3}) {
	return (
		<header>
			<ul>
				<li>{props.children}</li>
				<li>{props.prop2}</li>
				<li>{props.prop3 ? props.prop3 : 'missing'}</li>
			</ul>
		</header>
	);
}

export default Header