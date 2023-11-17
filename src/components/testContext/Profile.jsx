// import Content from './Content';
import Display from './Display';
import UserContext from './UserContext';

function Profile(){
    return(
        <div>
            <h1>this is profile component</h1>
            {/* <Content /> */}
            <UserContext.Consumer>
                {({user})=>{
                   return <Display user={user}></Display>
                }}
            </UserContext.Consumer>
        </div>
        
    );
}

export default Profile;