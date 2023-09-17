import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
	return(
		<li className="item">
		<input 
			type="checkbox" 
			onChange={() => handleCheck(item.id)}
			defaultChecked={item.checked}
		/>
		<label
			style={(item.checked) ? {textDecoration: "line-through"} : null}
		>{item.item}</label>
		<FaTrashAlt 
			onClick={() => handleDelete(item.id)}
			role="button" 
			tabIndex="0"
			aria-label={`Delete ${item.item}`}
		/>
	</li>
	);
};

export default LineItem;