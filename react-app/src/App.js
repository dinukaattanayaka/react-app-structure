import './App.css';
function UserManager(){
  return(
      <div className='wrapper'>
        <User avatar= "https://4.bp.blogspot.com/-Uo8xiNd56fU/ThKcz-IWW2I/AAAAAAAAMus/K2utCrUZIaA/s1600/Sanath-Jayasuriya
      -raises.jpg" name="Sanath Jayasuriya" country="Sri Lanka" runs="1200 runs"/>
        <User avatar= "https://i2-prod.mirror.co.uk/incoming/article834359.ece/ALTERNATES/s1200c/brian-lara.jpg"
            name="Brian Lara" country="West Indies" runs="14000 runs"/>
        <User/>
      </div>
  );
}
const User =(props)=>{
  return(
      <div className='user-outer'>
          <Avatar avatar = {props.avatar}/>
          <UserData name={props.name} country={props.country} runs={props.runs}/>
      </div>
  );
}
const Avatar =(props)=>{
  return(
      <div className='avatar-outer'>
      <img src= {props.avatar}/>
     </div>
  );
}
const UserData =(props)=>{
    return(
        <div className='user-data'>
            <UserName name ={props.name}/>
            <Country country ={props.country}/>
            <Runs runs = {props.runs}/>
        </div>

    );
}
const UserName =(props)=>{
    const inlineStyle={
        color:'#130f40'
    }
  return(
      <h1 style = {inlineStyle}>{props.name}</h1>
  );
}
const Country =(props)=>{
    return(
        <h2 style = {{fontStyle:'italic'}}>{props.country}</h2>
    );
}
//const runs='12000 runs'
const Runs =(props)=>{
    return(
        <h3 style = {{fontStyle:'italic'}}>{props.runs}</h3>
    );
}
export default UserManager;