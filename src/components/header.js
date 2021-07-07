import styled from "styled-components";

// const FontFamily = 'Times New Roman';

const HeadSection = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const List = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`
const ListElem = styled.li`
	font-weight: bold;
	margin: 0 1rem 0 0;
	list-style: none;
`
const Title = styled.h1`
	color: blue;
	@media(min-width: 540px){
		font-size: 40px;
		color: red;
	}
`
function Header(props, {prop2, prop3}) {
	return (
		<HeadSection>
			<Title>Foxnacity</Title>
			<List className="">
				<ListElem>{props.children}</ListElem>
				<ListElem>{props.prop2}</ListElem>
				{props.prop3 ? <ListElem>{props.prop3}</ListElem> : ''}
			</List>
		</HeadSection>
	);
}

export default Header