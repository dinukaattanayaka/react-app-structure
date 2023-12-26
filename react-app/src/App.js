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
      <h1>Avatar</h1>
     </div>
  );
}
const UserData =()=>{
    return(
        <div className='user-data'>
            <UserName/>
            <Designation/>
            <Salary/>
        </div>

    );
}
const UserName =()=>{
  return(
      <h1>UserName</h1>
  );
}
const Designation =()=>{
    return(
        <h1>Designation</h1>
    );
}
const Salary =()=>{
    return(
        <h1>Salary</h1>
    );
}
export default UserManager;