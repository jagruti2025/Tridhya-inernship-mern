import { useState } from 'react';
import  './ProfileCard.css';

export default function ProfileCard({name, image, role, bio, followers}){

    const [isFollowing , setIsFollowing] = useState(false);
    const [followerCount, setFollowerCount] = useState(followers);

    const handleFollowButton = ()=>{
        if(isFollowing){
            setFollowerCount(followerCount + 1);
        }else{
            setFollowerCount(followerCount - 1);
        }
        setIsFollowing(!isFollowing);
    }

    return(
        <div className="Profile-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p className="role">{role}</p>
            <p className="bio">{bio}</p>
            <p className='followers'>{followerCount} Followers</p>

            <button className={isFollowing? "follow-btn following": "follow-btn"} onClick={handleFollowButton} >{isFollowing? "Following" : "Follow"}  </button>
        </div>
    );
}
