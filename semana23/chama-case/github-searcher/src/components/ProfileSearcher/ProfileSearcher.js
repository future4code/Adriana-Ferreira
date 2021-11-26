import React, {useState} from 'react';
import { ProfileBoard, SearchArea } from './styles';
import UserInfo from '../UserInfo/UserInfo';
import lupa from "../../image/lupa.png";

const ProfileSearcher = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);

    const onChangeHandler = e => {
       setUsername(e.target.value);
    }

    const submitHandler = async e => {
       e.preventDefault();

       const profile = await fetch(`https://api.github.com/users/${username}`);
       const profileJson = await profile.json(); 

       const repositories = await fetch(profileJson.repos_url);  
       const repoJson = await repositories.json();

       if(profileJson){
           setData(profileJson);
           setRepositories(repoJson);
       }
    };

    return (
        <ProfileBoard>         
            <SearchArea autoComplete="off">
                <div>
                    <input type="text" value={username} onChange={onChangeHandler} placeholder="Type a username" required/>              
                </div>   
                <div>
                    <button type="submit" onClick={submitHandler}>
                    <img src={lupa} alt="lupa"/>
                    </button>
                </div>   
            </SearchArea>
            <UserInfo data={data} repositories={repositories}/>            
        </ProfileBoard>
    )
}

export default ProfileSearcher;
