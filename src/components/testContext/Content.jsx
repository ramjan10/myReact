import Display from "./Display";
import UserContext from "./UserContext";

function Content(){
    return(
        <UserContext.Consumer>
            {({user})=> {
              return <Display user={user}></Display>
            }}
        </UserContext.Consumer>
    );
}

export default Content;