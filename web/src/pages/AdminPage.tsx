import { decode } from "jsonwebtoken";
import React from "react";
import { useSelector } from "react-redux";
import AdminMenu from "../components/admin/AdminMenu";
import { useGetUserQuery } from "../store/api";

const AdminPage = () => {
  //@ts-ignore
  const { jwt } = useSelector((state) => state.auth);
  //@ts-ignore
  const { data } = useGetUserQuery({ jwt: jwt, id: decode(jwt)?.id });
  console.log(data);
  if (data?.fields) {
    return <AdminMenu fields={data?.fields} />;
  } else {
    return <></>;
  }
};

export default AdminPage;
