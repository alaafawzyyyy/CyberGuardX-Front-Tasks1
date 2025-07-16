import '../../App.css'

function ProfileComponent(){
    const Name = "Alaa Shaaban";
    const Email = "alaa.shaaban943@gmail.com";
    const Age = 22 ; 

return(
<div className='card'>
    <h2>My Profile</h2>
    <p> <strong> Name: </strong> {Name} </p>
    <p> <strong> Email: </strong> {Email} </p>
    <p> <strong> Age: </strong> {Age} </p>
</div>
)
}
export default ProfileComponent;