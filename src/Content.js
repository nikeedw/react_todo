import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
	return(
		<>
			{items.length ? (
				<ItemList
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				<p style={{
					marginBlock: "2rem",
					fontWeight: "500",
					color: "cornflowerblue"
				}}>Your list is empty!</p>
			)}
		</>
	)
}

export default Content;