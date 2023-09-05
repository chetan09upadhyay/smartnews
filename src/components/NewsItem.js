import React from 'react'

 const NewsItem  = (props) => {


   
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <div style={{display: "flex",justifyContent: "flex-end", position: "absolute", right: "0"}}>
                        <span className="  badge rounded-pill bg-danger"  >
                            {!(source) ? "Awsome" : (source)}
                        </span>
                    </div>
                    <img src={!imageUrl ? "https://img.medscape.com/thumbnail_library/dt_230825_van_gogh_stars_background_800x450.jpg" : imageUrl}
                        alt="" />
                    <div className="card-body">
                        <h5 className="card-title"> {title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text "><small className="text-danger">By {!author ? "Unknown" : author} on  {!(new Date(date).toGMTString()) ? "Today" : (new Date(date).toGMTString())}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
