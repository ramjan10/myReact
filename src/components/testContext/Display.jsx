function Display ({user}){
    return(
        <div>
            <h1>this is display component</h1>
            <h3>{user.name} {user.email}</h3>
        </div>
    )
}

export default Display;