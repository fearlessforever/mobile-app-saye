const pageState = {
	count:1,
	isLoaded:false,
	forcePageLogin:false,
}


const pageAction = (  state = pageState  ,action ) => {
  switch(action.type){
		case 'login':
			state = {...state,count:(state.count+ action.value )}
			break;
		case 'loaded':
			state = { ...state,isLoaded:true}
			break;
		case 'logged':
		state = { ...state,forcePageLogin:true}
			break;
		default:break;
	}
	return state;
}

export default pageAction;