const loginState = {
  loggedIn:false
}

const loginAction = (  state = loginState  ,action ) => {
  switch(action.type){
		case 'login':
			state = {...state,loggedIn:true}
			break;
		default:break;
	}
	return state;
}

export default loginAction;