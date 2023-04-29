import { NextPage } from "next/types";
import React, { useState } from "react";
import { appDispatch, appSelector } from "@/store/hooks";
import { getUser } from "@/features/admin/user";

const Index: NextPage = () => {
  const dispatch = appDispatch();
  const { data } = appSelector((state) => state.user);
  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return <div>index</div>;
};

// export async function getServerSideProps(context: any) {
//   const urlAPI = process.env.NEXT_PUBLIC_BASE_URL_API;
//   let users = await fetch(`${urlAPI}/users`)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   if (!users) {
//     users = { data: [] };
//   }

//   return {
//     props: {
//       users: {
//         total: users.data.length,
//         data: users.data,
//       },
//     },
//   };
// }

export default Index;
