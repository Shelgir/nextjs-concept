import React, { useState } from "react";
import headerStyles from "../styles/Header.module.css";
function Header() {
  const getArticleID = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
      const article = await res.json();
      setId(article.id);
    } catch (error) {
      console.log("Error please try again");
    }
  };

  const [id, setId] = useState(0);
  return (
    <div>
      <h1 className={headerStyles.title}>Header Comp</h1>
      <p className={headerStyles.description}>Keep up</p>
      <button onClick={getArticleID}>Press Me</button>
      {id ? <p>{id}</p> : <div>No ID</div>}
    </div>
  );
}

export default Header;
