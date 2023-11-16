import UserContext from "./UserContext";

function Content(){
    return(
        <UserContext.Consumer>
            {({user})=> {
              return <p>{user}</p>
            }}
        </UserContext.Consumer>
    );
}

export default Content;