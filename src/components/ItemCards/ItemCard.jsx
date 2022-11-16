import React from "react";
import { ItemCardSimple } from "./ItemCardSimple";
import { ItemCardRegular } from "./ItemCardRegular";
import { ItemCardMultishots } from "./ItemCardMultishots";
export const ItemCard = ({ item, type, dB, keyName, index }) => {
  const ItemCardView = React.useMemo(() => {
    if (dB[keyName].type === "also" || dB[keyName].type === "compact") {
      return (
        <ItemCardSimple
          item={item}
          type={dB[keyName].type}
          key={"itemcard" + index}
        />
      );
    } else if (dB[keyName].type === "desc" || dB[keyName].type === "mob") {
      return (
        <ItemCardRegular
          item={item}
          type={dB[keyName].type}
          key={"itemcard" + index}
        />
      );
    } else if (
      dB[keyName].type === "multi" ||
      dB[keyName].type === "multislider"
    ) {
      return (
        <ItemCardMultishots
          item={item}
          //type={dB[keyName].type}
          type={dB[keyName].type}
          key={"itemcard" + index}
        />
      );
    } else {
      return <>Item is not loaded</>;
    }
  }, [item, dB, keyName, index]); //type,

  return ItemCardView;
};