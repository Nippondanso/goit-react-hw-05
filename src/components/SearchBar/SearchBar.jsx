import {Field, Form, Formik} from "formik";

const SearchBar = ({handleChangeQuery, query}) => {
	
	const onSubmit = (values) => {
		handleChangeQuery(values.query);
	}
	
	const initialValues = {
		query,
	}
	
	return (<div>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				<Form>
					<Field type="text" name="query"
					       placeholder="type a movie name"
					       className=" font-bold uppercase shadow appearance-none border rounded w-75 py-2 px-3  text-white leading-tight focus:outline-none focus:shadow-outline "/>
					<button type="submit"
					        className="hover:animate-pulse cursor-pointer  text-white font-bold py-2 px-4 rounded uppercase">Search
					</button>
				</Form>
			</Formik>
		</div>)
}
export default SearchBar;