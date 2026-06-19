import React from 'react'
import { LiaAngleRightSolid } from "react-icons/lia";
import PathProduct from '../../components/main/PathProduct';

function DetailPage() {
    const path = ['Beranda', 'Toko', 'Electronics', 'Headphone Wireless Premium'];

  return (
    <div className="border flex flex-col w-full max-w-7xl ">
        <PathProduct paths={path}  />
    </div>
  )
}

export default DetailPage