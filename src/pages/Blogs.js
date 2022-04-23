import React from 'react';
import Blog from "../components/Blog";
import Footer from '../components/Footer';
import blogimage from '../images/keyboard.jpg';
function Blogs() {
  return (
<div>
<div className=" blog-header col-lg-12">
    <h1>A lot is happening, <br /> We are blogging about it.</h1>
</div>

<Blog/>
<Footer/>
</div>
  );
}

export default Blogs;