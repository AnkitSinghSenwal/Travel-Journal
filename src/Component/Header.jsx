import globe from '../assets/globe.svg'

export default function Header(){
    return(
        <div className="header">
          <img src={globe} className="globe-icon" alt="Globe" />
          <h3>MY TRAVEL JOURNAL.</h3>
        </div>
    )
}