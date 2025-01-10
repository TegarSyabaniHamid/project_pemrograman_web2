"use client"
import { faPencil, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getData, setUpdateStatus } from './models/mahasiswa';


//buat fungsi hapus data
function setDelete(npm : string, nama : string){
  //alert("Klik Hapus");
  if(confirm(`Data Mahasiswa : ${npm} - ${nama} ingin dihapus ?`) == true){
    setUpdateStatus(npm)
      alert(`Data Mahasiswa : ${npm} - ${nama} berhasil dihapus`);
      location.reload();
  }
 // else {
    //alert("Cancel");
  }


export default function MainPage() {
  //buat hooks(use state)
  const [getValue, setValue] = useState({})

  //buat fungsi fetch data

  async function fetchData()
  {
    setValue(await getData())
  }

//buat hooks (use effect)
useEffect(() => {
fetchData()
},  [])

 // setValue(getData())
  //getData()

  return (

    <>
    <title>View Data Mahasiswa</title>
    <nav className="text-center mb-5 flex justify-end">
    <Link href="/add" className="btn btn-outline btn-success">
    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      Tambah Data Mahasiswa 
    </Link>
    </nav>
      <table className="w-full">
        <thead>
          <tr className="bg-slate-300 h-12 border border-slate-700 p-5px text-center">
            <th className="w-10% border border-slate-700 p-5px text-center">Aksi</th>
            <th className="w-10% border border-slate-700 p-5px text-center">NPM</th>
            <th className="w-1/2 border border-slate-700 p-5px text-center">Nama</th>
            <th className="w-30% border border-slate-700 p-5px text-center">Jurusan</th>
          </tr>
        </thead>
        <tbody>

          {Object.values(getValue).map((data: any, index: number) => (
            <tr key={index} className="border border-slate-700 p-5px text-center">
              <td className="border border-slate-700 p-5px text-center">
                {/*icon edit*/}
                <Link href={`/edit/${btoa(data.npm)}`} className="bg-cyan-700 text-white py-5px px-10px rounded mr-5px text-xs">
                <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>

                {/*icon delete*/}
                <Link href={"/"} className="bg-rose-700 text-white py-5px px-10px rounded ml-5px text-xs " onClick={() => {setDelete(data.npm, data.nama)}}>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </Link>


              </td>
              <td className="border border-slate-700 p-5px text-center">{data.npm}</td>
              <td className="border border-slate-700 p-5px text-justify">{data.nama}</td>
              <td className="border border-slate-700 p-5px text-center">{data.jurusan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
