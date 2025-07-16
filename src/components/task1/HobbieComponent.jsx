import '../../App.css'
function HobbieComponent(){
    const hobbie = "Reading"
    const hobbyDescription = "Reading is more than just a hobby it’s a journey into different worlds, perspectives, and ideas. " 

    return(
      <div className='card'>
        <h2> My Favourite Hobbie </h2>
        <p> <strong> Hobbie: </strong> {hobbie}</p>
        <p> <strong> Descriptipn: </strong> {hobbyDescription}</p>
      </div>
    )
}
export default HobbieComponent;
