import React from "react";
import { ReactComponent as TwitterIcon } from "../../Assets/Twitter-logo.svg";
import { ReactComponent as InstagramIcon } from "../../Assets/Instagram-logo.svg";
import { ReactComponent as FacebookIcon } from "../../Assets/FacebookLogo.svg";
import { ReactComponent as ApproveIcon } from "../../Assets/approve.svg";
import { ReactComponent as CancelIcon } from "../../Assets/cancel.svg";
import { ReactComponent as OptionsIcon } from "../../Assets/options.svg";
import { ReactComponent as ViewsIcon } from "../../Assets/views.svg";
import { ReactComponent as SharesIcon } from "../../Assets/shares.svg";
import { ReactComponent as LikesIcon } from "../../Assets/likes.svg";
import { ReactComponent as CommentsIcon } from "../../Assets/comments.svg";
import { ReactComponent as DeleteIcon } from "../../Assets/delete.svg";
import noPostImage from "../../Assets/no-post-image.png";
function Card({ post }) {
  console.log(post);
  const arrangeSocialMediaIcons = (channel) => {
    switch (channel) {
      case "instagrambusiness":
        return <InstagramIcon />;
      case "twitter":
        return <TwitterIcon />;
      default:
        return <FacebookIcon />;
    }
  };
  const arrangeToolbarIcons = (status) => {
    switch (status) {
      case 1:
        return (
          <>
            <CancelIcon className="ml-3" />
            <DeleteIcon className="ml-3" />
            <OptionsIcon className="ml-3" />
          </>
        );
      case 0:
        return (
          <>
            <ApproveIcon className="ml-3" />
            <DeleteIcon className="ml-3" />
            <OptionsIcon className="ml-3" />
          </>
        );
      default:
        return (
          <div className="ml-6 flex">
            <DeleteIcon className="ml-4" />
            <OptionsIcon className="ml-4" />
          </div>
        );
    }
  };
  const handleError = () => {
    return 0;
  };
  return (
    <div className="h-446px w-369px flex bg-white mt-2 rounded ml-4">
      <div
        className={`left-0 rounded-l-lg flex items-center justify-center
      ${
        post.status === 0
          ? "bg-approval w-16"
          : post.status === 1
          ? "bg-scheduled w-16"
          : "bg-published w-24"
      }`}
      >
        {arrangeSocialMediaIcons(post.account.channel)}
      </div>
      <div className="flex-grow flex flex-col">
        <div className="card-top p-5 flex justify-between">
          <h2 className="card-text">{post.published_at}</h2>
          <div className="tool-bar flex flex-grow ml-10 mt-1 justify-evenly">
            {arrangeToolbarIcons(post.status)}
          </div>
        </div>
        <div className="card-main flex-grow mb-2">
          <div className="description ml-5">
            <p className="description-text">{post.entry.message}</p>
          </div>
          <div className="card-img-wrapper ml-5 mt-1">
            <img
              className="card-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = noPostImage;
              }}
              src={post.entry.image[0]}
              alt="post_image"
            />
          </div>
          <div className="card-actions flex justify-between ml-5 mt-4 items-start">
            <LikesIcon />
            <p className="actions-text">124</p>
            <CommentsIcon />
            <p className="actions-text">63</p>
            <SharesIcon />
            <p className="actions-text">4</p>
            <ViewsIcon />
            <p className="actions-text">1.426</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
