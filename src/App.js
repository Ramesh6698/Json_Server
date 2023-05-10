import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from './component/Shop';
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faInstagram ,faTelegram,faTwitter} from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    
    <div>
      <container>
        <div className='social-media-icons'>
          <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebook} />  </a>
          <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />  </a>
          <a href="https://telegram.com">
          <FontAwesomeIcon icon={faTelegram} />  </a>
          <a href="https://Twitter.com">
          <FontAwesomeIcon icon={faTwitter} />  </a>
        </div>
        <div className='profile'>
          <img className="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkkcGTJfa_g0UXtrQNW70OINciQb8c6f7Uw&usqp=CAU"/>
          <div > 
         <h4 className='tittle'> Chris hemsworth</h4>
         <div className='post'>
          <h6> 40 posts</h6>
          <h6> 40 Followers</h6>
          <h6> 40 Following</h6>
         </div>
         <div>
         <small>    Edit Profile   |    Share Profile</small>
         </div>
         <div className="box">
         <button type="button" class="btn btn-primary">posts</button> 
         <button type="button" class="btn btn-primary">Followers</button>
         <button type="button" class="btn btn-primary">Following</button>
         </div>
          </div>

        </div>
        <div classname="Paragrhap">
          <h3>About His </h3>
          <p> Christopher Hemsworth AM (born 11 August 1983) is an Australian actor. He rose to prominence playing Kim Hyde in the Australian television series Home and Away (2004–2007) before beginning a film career in Hollywood. In the Marvel Cinematic Universe (MCU), Hemsworth started playing Thor with the 2011 film of the same name and most recently reprised the role in Thor: Love and Thunder (2022), which established him among the world's highest-paid actors.[1][2]

His other film roles include the action films Star Trek (2009), Snow White and the Huntsman (2012) and its sequel The Huntsman: Winter's War (2016) , Red Dawn (2012), Blackhat (2015), Men in Black: International (2019), Extraction (2020), the thriller A Perfect Getaway (2009) and the comedy Ghostbusters (2016). Hemsworth's most critically acclaimed films include the comedy horror The Cabin in the Woods (2012) and the biographical sports film Rush (2013) in which he portrayed James Hunt.
Hemsworth started his career by appearing in several television series. In 2002, Hemsworth starred in two episodes of fantasy television series Guinevere Jones as King Arthur, as well as making an appearance in soap opera series Neighbours and one episode of Marshall Law. The following year, he appeared in an episode of The Saddle Club. In 2004, Hemsworth auditioned for the role of Robbie Hunter in Australian soap opera Home and Away. He did not receive the part, but was subsequently recalled for the part of Kim Hyde. He moved to Sydney to join the cast, appearing in 171 episodes of the series.[11] He left the cast of Home and Away on 3 July 2007. Hemsworth later remarked that although he became more visible after Home and Away, his work on a soap opera did not earn him respect within the film industry. <br></br>
<br></br>

Hemsworth was a contestant on the fifth season of Dancing with the Stars Australia, partnered with professional dancer Abbey Ross. The season premiered on 26 September 2006, and after six weeks, Hemsworth was eliminated on 7 November. Hemsworth's appearance in the franchise would almost cost him the role of Thor, as producers of the Marvel film franchise feared fans would be put off.[13]

In 2009, Hemsworth played James T. Kirk's father, George Kirk, in the opening scenes of J. J. Abrams' film Star Trek. The role was initially offered to Matt Damon, who turned it down; Abrams appreciated Hemsworth taking on the role.[14] Josh Tyler of Cinema Blend was impressed with Hemsworth, describing the actor's scene as the "best five minutes I've spent in a movie theater this year."[15] The film was a box office success, grossing US$385.7 million.[16] That same year, Hemsworth played the character Kale Garrity in the thriller A Perfect Getaway.</p>
        </div>
        <div classname="Card">
          <div>
            <h5> Courses (5)</h5>
          </div>
          <Shop> </Shop>

          
        </div>
        </container>
    </div>
  );
};

export default App