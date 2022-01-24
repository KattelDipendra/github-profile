import React, { useState, useEffect } from 'react';
import { Form ,Card,Image,Icon } from 'semantic-ui-react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/${userInput}/repos')
      .then(res => res.json())
      .then(data => {
        setData(data)

      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    public_repos,
    avatar_url
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);

  };
  const handleSearch =(e)=> {
    setUserInput(e.target.value)
  }

  const handleSubmit =() => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      setData(data);
    })
  }


  return (
   <div> 
    <div>
      <div className='navbar'>Github Search</div>
      <div className='search'></div>
      <Form align="center" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input placeholder='github-usersname' name='name' onChange={handleSearch}/>
          <Form.Button content='search' />
        </Form.Group>
      </Form> 
    </div>
    <div className='card'/>
    <Card>
    <Image src={avatar} wrapped ui={false} />
    <Card.Content>
      {/* <Card.Header>{name}</Card.Header> */}
      <Card.Header>{userName}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {followers} followers
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {repos} Repositories
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {following} followings
      </a>
    </Card.Content>
  </Card>
</div>
  );
}

export default App;