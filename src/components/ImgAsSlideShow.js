import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as constants from "../CONSTS";
//initial={false}

export const ImgAsSlideShow = ({ src, sizeKeeperSrc }) => (
  <>
    <img
      style={{ opacity: 0 }}
      src={constants.imgurl_personal + sizeKeeperSrc}
      className="img-fuild"
      alt=""
    />
    <AnimatePresence>
      <motion.img
        key={src} //.replaceAll("/", "_")
        src={constants.imgurl_personal + src}
        initial={{ x: 300, opacity: 1 }} //300
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 1 }} //-300
        //className={"img-fluid"}
        style={{ position: "absolute", width: "100%" }}
        transition={{
          x: { type: "spring", stiffness: 350, damping: 30 }, //300,30
          opacity: { duration: 0.2 }
        }}
      />
    </AnimatePresence>
  </>
);
