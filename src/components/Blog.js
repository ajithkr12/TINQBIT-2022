import React from 'react';
import './Blog.css';
import { BlogData } from './Data/BlogData';
import userimage from "../images/camera.jpg"
function Blog() {
  return (
    <div className="blog-section">
        <div class="container">
            {
                BlogData.map((blog)=>{

                    return(
                        <div class="card col-lg-4">
                            <div class="card__header">
                                <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
                            </div>
                            <div class="card__body">
                                <h4>{blog.title}</h4>
                                <p>{blog.des}</p>
                            </div>
                            <div class="card__footer">
                                <div class="user">
                                    <img src={userimage} alt="user__image" class="user__image"/>
                                    <div class="user__info">
                                        <h6>{blog.author}</h6>
                                        <small>{blog.date} | {blog.readtime} min read</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
  
  
        </div>
    </div>
  );
}

export default Blog;
