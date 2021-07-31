import { useState, useEffect } from "react";

export function Cocktail ( props ) {
  const [ data, setData ] = useState()
 
  useEffect( () => {
    setData( props.data )
  }, [props.data] )
  

  if( !data ) {
    return(
      <div className="cocktails">
        <h2>Getting data ...</h2>
      </div>
    )
  }
  else {
    const Cocktails = data.map( (item, key) => {
      return(
        <div className="col-md-3 my-2" key={key}>
          <div className="card">
            <img 
            src={item.photo} 
            className="card-img-top border border-primary" 
            alt={item.name} 
            style={{width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center'}}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p style={{minHeight: '5ch'}}>{item.description}</p>
              <p>{item.steps}</p>
            </div>
          </div>
        </div>
      )
    })
    return(
      <div className="cocktails">
        <h2>Cocktails</h2>
        <div className="row">
        { Cocktails }
        </div>
      </div>
    )
  }
  
}