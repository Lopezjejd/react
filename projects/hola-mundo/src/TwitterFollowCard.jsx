import { useState } from "react";

export function TwitterFollowCard({
  formatUserName,
  userName = "unknow",
  name,
  initialIsFollowing = false,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  // Texto dinámico
  let text = isFollowing ? "Siguiendo" : "Seguir";
  if (isFollowing && isHovering) text = "Dejar de seguir";

  // Estilo dinámico
let buttonStyle = "x-card-aside-button";

if (isFollowing) {
  buttonStyle += isHovering
    ? " x-card-aside-button-unfollowing"
    : " x-card-aside-button-following";
}


  return (
    <article className="x-card">
      <header className="x-card-header">
        <img
          className="x-card-img"
          src="https://i.pinimg.com/736x/2f/af/a8/2fafa8d253d789a2a78444bd0b8da399.jpg"
          alt=""
        />
        <div className="x-card-info">
          <strong className="x-card-info-name">{name}</strong>
          <span className="x-card-info-user">{formatUserName(userName)}</span>
        </div>
        <aside className="x-card-aside">
          <button
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleClick}
            className={buttonStyle}
          >
            {text}
          </button>
        </aside>
      </header>
    </article>
  );
}
