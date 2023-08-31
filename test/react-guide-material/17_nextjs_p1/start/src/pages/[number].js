export default function number({query}){
	return(<h1>{query.name}</h1>);
}

export async function getServerSideProps({query}){
	return ({props:{query}});
}