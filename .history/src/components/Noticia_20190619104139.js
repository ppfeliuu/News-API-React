import React from 'react';

const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description, source} = noticia;


    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card.image">
                    <img src={urlToImage} alt={title} />
                </div>
            </div>
        </div>
     );
}
 
export default Noticia;