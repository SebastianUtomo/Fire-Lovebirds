import { useEffect, useRef } from "react";
import Hammer from "hammerjs";
import "./Profile.css";

export default function ProfileCard({ profile, onSkip, onLike }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const hammer = new Hammer(cardRef.current);

    hammer.on("swipeleft", onSkip);
    hammer.on("swiperight", onLike);

    return () => {
      hammer.destroy();
    };
  }, [onSkip, onLike]);

  return (
    <article ref={cardRef} className="profile-card">
      <img src={profile.img} alt={profile.name} />

      <div className="profile-card__content">
        <h2>
          {profile.name}, {profile.age}
        </h2>

        <p>{profile.description}</p>
        <p>{profile.pickup}</p>
      </div>
    </article>
  );
}