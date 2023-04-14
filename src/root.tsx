import { Outlet, ScrollRestoration } from "react-router-dom"

export const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}