import './App.css';

const User1 ={
    avatar:"https://4.bp.blogspot.com/-Uo8xiNd56fU/ThKcz-IWW2I/AAAAAAAAMus/K2utCrUZIaA/s1600/Sanath-Jayasuriya-raises.jpg",
    name: "Sanath Jayasuriya",
    country :"Sri Lanka",
    runs :"13,430 runs"
}
const User2 ={
    avatar:"https://i2-prod.mirror.co.uk/incoming/article834359.ece/ALTERNATES/s1200c/brian-lara.jpg",
    name: "Brian Lara",
    country :"West Indies",
    runs :"10,405 runs"
}
const User3 ={
    avatar:"https://i1.wp.com/im.indiatimes.in/content/2020/Jan/1_5e33f98fc7cd6.jpg?strip=all",
    name: "Sachin Tendulkar",
    country :"India",
    runs :"18,426 runs"
}

function UserManager(){
  return(
      <div className='wrapper'>
        <User avatar={User1.avatar} name={User1.name} country={User1.country} runs={User1.runs}/>
        <User avatar={User2.avatar} name={User2.name} country={User2.country} runs={User2.runs}/>
        <User avatar={User3.avatar} name={User3.name} country={User3.country} runs={User3.runs}/>
      </div>
  );
}
const User =(props)=>{
    const {avatar, name, country, runs}=props;
  return(
      <div className='user-outer'>
          <Avatar avatar = {avatar}/>
          <UserData name={name} country={country} runs={runs}>best cricketers in the world.</UserData>
      </div>
  );
}

const Avatar =({avatar})=>{
  return(
      <div className='avatar-outer'>
      <img src= {avatar} alt=" from google"/>
     </div>
  );
}
const UserData =({name, country, runs, children})=>{
    return(
        <div className='user-data'>
            <UserName name ={name}/>
            <Country country ={country}/>
            <Runs runs = {runs}/>
            <p>
                {children}
            </p>
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
const Country =({country})=>{
    return(
        <h2 style = {{fontStyle:'italic'}}>{country}</h2>
    );
}
//const runs='12000 runs'
const Runs =({runs})=>{
    return(
        <h3 style = {{fontStyle:'italic'}}>{runs}</h3>
    );
}
export default UserManager;