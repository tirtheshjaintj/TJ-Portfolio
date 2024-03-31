import React from 'react'

export default function Project(props) {
  return (
<>
<div className="col-md-4 ">
<div className="card project" >
<img src={props.img} className="card-img-top" loading="lazy" alt="..." />
<div className="card-body">
<h5 className="card-title">{props.title}</h5>
<h6 className="card-subtitle mb-2">Tech: {props.tech}</h6>
<p className="card-text">{props.description}</p>
<a href={props.live} className="btn mr-2" target="_blank"><i className="fa fa-link"></i> Visit Site</a>
<a href={props.code} className="btn " target="_blank"><i className="fa fa-github"></i> Github</a>
</div>
</div>
</div>
</>

    )
}
