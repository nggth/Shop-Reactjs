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

// import React from "react";
// import { ClothesConsumer } from "../context";
// import Loading from "./Loading";
// import ClothesFilter from "./ClothesFilter";
// import ClothesList from "./ClothesList";
// export default function ClothesContainer() {
//   return (
//     <ClothesConsumer>
//       {value => {
//         const { loading, setCloth, sortedClothes, clothes } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             <ClothesFilter clothes={clothes} />
//             <ClothesList clothes={sortedClothes} setCloth={setCloth} />
//           </>
//         );
//       }}
//     </ClothesConsumer>
//   );
// }
