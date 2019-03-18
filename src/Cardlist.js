import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => { 
    const cardcomp = robots.map((users, i) =>{
        return ( <Card key={robots[i].email} id={robots[i].id} name={robots[i].name} email={robots[i].email} username={robots[i].username} />);
    });
return(
    <div className="bt b--washed-blue">
    {cardcomp}
    </div>
);
}
export default Cardlist;