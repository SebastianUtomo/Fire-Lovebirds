import {useState} from 'react'
import { Analytics } from '@vercel/analytics/react'
import "./App.css"
import sebastian from "./assets/images/sebastian.jpg"
import james from "./assets/images/james.jpg"
import brian from "./assets/images/brian.jpg"
import evan from "./assets/images/evan.jpg"
import ethan from "./assets/images/ethan.jpg"
import ProfileCard from './ProfileCard';
const profiles = [
        {id: 1, name: "Sebastian Utomo", age: 19, description: "Enjoy my oxygen", pickup: "I'm as hot as the fires in Indonesia", img:sebastian, telegram: "https://t.me/seapanda47"},
        {id: 2, name: "Ethan Wong Jing En", age: 22, description: "Hot bod", pickup: "My room is free any time", img: ethan, telegram: "https://t.me/ethanwje"},
        {id: 3, name: "Louis James Sundoro", age: 19, description:"Hey man!", pickup:"Are you a shuttlecock? Cuz I'd love to smash you <3", img: james, telegram: "https://t.me/FakeSlimShady1"},
        {id: 4, name: "Ng Guang Hern Evan", age: 22, description:"I love Ethan", pickup:"I love Ethan", img: evan, telegram: "https://t.me/aeeeevan"},
        {id: 5, name: "Brian Pang Pei Xuan", age: 22, description:"I don't like girls anymore chat. I like taking it from the back", pickup:"I'm actually straight", img: brian, telegram: "https://t.me/vruaaan"}
    ];

function HeartBurst() {
    return (
        <div className="heart-burst" aria-hidden="true">
            {Array.from({ length: 12 }, (_, index) => (
            <span
            key={index}
            className={`heart heart-${index + 1}`}
            >
            ♥
            </span>
        ))}
            </div>
        );
    }    
export default function App() {
    const [queue, setQueue] = useState(profiles);
    const [likedProfile, setLikedProfile] = useState(null);
    const [heartBurst, setHeartBurst] = useState(0);
    const currentProfile = queue[0];
    function moveToBack() {
        setQueue((previousQueue) => [...previousQueue.slice(1), previousQueue[0]]);
    }

    function skip() {
        setLikedProfile(null);
        moveToBack();
    }

    function like() {
        setLikedProfile(currentProfile);
        setHeartBurst((prev) => prev+1);
    }

    

    return (
    <main className = "app">
      <h1>Fire lovebirds</h1>

      <ProfileCard profile = {currentProfile} onSkip = {skip} onLike = {like} />

      {likedProfile && (
        <div className ="match-message">
            <p>You liked {likedProfile.name}!</p>

            <a 
            href={likedProfile.telegram}
            target="_blank"
            rel="noopener noreferrer"
            >
                Message them on telegram
            </a>
        </div>
      )}

      <HeartBurst key={heartBurst} />
      <Analytics />
    </main>
    );
}