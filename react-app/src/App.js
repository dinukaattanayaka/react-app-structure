function UserManager(){
  return(
      <>
        <User/>
        <User/>
        <User/>
        <User/>
      </>
  );
}
const User =()=>{
  return(
      <div>
        <Avatar/>
        <UserName/>
        <Designation/>
        <Salary/>
      </div>
  );
}
const Avatar =()=>{
  return(
      <h1>Avatar</h1>
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