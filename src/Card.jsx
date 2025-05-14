import profile from './assets/profile.jpg'
import './Card.css'
function Card({ name, about}){
    return(
        <div className="card">
            <img src={profile} alt="" className="card-img" />
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{about}</p>
        </div>
    );
}
export default Card