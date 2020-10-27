import React from "react";
import { withClothesConsumer } from "../context";
import Loading from "./Loading";
import ClothesFilter from "./ClothesFilter";
import ClothesList from "./ClothesList";

function ClothesContainer({ context }) {
  const { loading, sortedClothes, clothes } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ClothesFilter clothes={clothes} />
      <ClothesList clothes={sortedClothes} />
    </>
  );
}

export default withClothesConsumer(ClothesContainer);

