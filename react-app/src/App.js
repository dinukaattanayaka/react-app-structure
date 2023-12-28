import './App.css';
function UserManager(){
  return(
      <div className='wrapper'>
        <User/>
        <User/>
        <User/>
        <User/>
      </div>
  );
}
const User =()=>{
  return(
      <div className='user-outer'>
          <Avatar/>
          <UserData/>
      </div>
  );
}
const Avatar =()=>{
  return(
      <div className='avatar-outer'>
      <img src= "https://4.bp.blogspot.com/-Uo8xiNd56fU/ThKcz-IWW2I/AAAAAAAAMus/K2utCrUZIaA/s1600/Sanath-Jayasuriya
      -raises.jpg"/>
     </div>
  );
}
const UserData =()=>{
    return(
        <div className='user-data'>
            <UserName/>
            <Country/>
            <Runs/>
        </div>

    );
}
const UserName =()=>{
    const inlineStyle={
        color:'#130f40'
    }
  return(
      <h1 style = {inlineStyle}>Sanath jayasuriya.</h1>
  );
}
const Country =()=>{
    return(
        <h2 style = {{fontStyle:'italic'}}>Sri Lanka</h2>
    );
}
const runs='12000 runs'
const Runs =()=>{
    return(
        <h3 style = {{fontStyle:'italic'}}>{runs}</h3>
    );
}
export default UserManager;