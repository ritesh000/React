import React from 'react';

const helllo = () => 
/*{
    // type 1
    return(
        <div>
        <h1>hello jsx component </h1>
        </div>
    );
}*/
// type 2
/*{
    return React.createElement('div',null,'ritesh use react element')
}*/
{
    return React.createElement('div',{id:'element id 1',class:'demo class'},React.createElement('h1',null,'hello ritesh malav'))
}
export default helllo