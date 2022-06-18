
import React from "react";
import styled from "./Footer.module.css";
import   "./Footer.module.css";
import {
  AiFillFacebook,
  // AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
// import { FaLinkedinIn } from "react-icons/fa";

function SocialMedia() {
  return (
   
      <>
           <a href=" https://www.instagram.com/bellavita.organic/"><AiFillInstagram className={styled.socialicon} /></a>
           <a href=" https://www.facebook.com/bellavitaorganic/"><AiFillFacebook className={styled.socialicon} /></a>
           <a href=" https://www.youtube.com/c/BellaVitaOrganicIndia"><AiFillYoutube className={styled.socialicon} />  </a>
           <a href=" https://twitter.com/bellavita_org?s=08"><AiFillTwitterCircle className={styled.socialicon} /></a>
           <a href=" shop@bellavitaorganic.com"><MdEmail className={styled.socialicon} /></a>
        
          </>
  );
}
export default SocialMedia;