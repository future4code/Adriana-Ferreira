import React from 'react';
import { MainContainer, PersonalInfo } from './styles';

const UserInfo = ({data, repositories}) => {
    return (
        <MainContainer> 
            <PersonalInfo>
                <div>
                    <div>{data.avatar_url? (
                        <img src={data.avatar_url} alt={data.avatar_url}/>
                        ) : ""}
                    </div>
                </div>  
                <div>
                    <div>{data.name}</div>
                    <div>{data.location}</div>   
                </div>               
            </PersonalInfo>  
            <section>
                <div>{data.bio}</div>
            </section>                    
            <section>                
                <div>{repositories.map(repo => (
                    <div key={repo.name}>
                        <a href={repo.html_url} target="_blank">
                           ◽ {repo.name}
                        </a>                                
                    </div>
                ))}</div>
            </section>            
        </MainContainer>
    )
}

export default UserInfo;

