"use client";

import React, { useState } from "react";

export default function AddPage() {
  // buat hoox (use state)
  // untuk setiap komponen isian data

  const [getNPM, setNPM] = useState("");
  const [getNama, setNama] = useState("");
  const [getJurusan, setJurusan] = useState("");

  // buat fungsi simpan data
  const saveData = () => {
    // 
    // buat kondisi ketika salah satu komponen tidak di isi atau di isi semua
    if(getNPM == "" || getNama == "" || getJurusan == ""){
      alert ("harap isi seluruh data terlebih dahulu")
    }else {
      alert ("oke")
    }
  };

  return (
    <>
      <title>Tambah Data Mahasiswa</title>
      <div className="flex justify-center mb-15px">
        <h1 className="text-lg font-bold">Tambah Mahasiswa</h1>
      </div>
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="">Npm</div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Masukan Npm"
            className="input w-full select-bordered"
            onChange={(e) => {
              setNPM(e.target.value);
            }}
          />
        </div>
        <div className="col-start-1">Nama</div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Masukan Nama"
            className="input w-full select-bordered"
            onChange={(e) => {setNama(e.target.value)}}
          />
        </div>
        <div className="col-start-1">Jurusan</div>
        <div className="col-span-2">
          <select defaultValue={""} className="select select-bordered w-full" onChange={(e) => {setJurusan(e.target.value)}}>
            <option value={""} disabled>
              Pilih Jurusan Anda
            </option>
            <option value={"IF"}>Informatika</option>
            <option value={"SI"}>Sistem Informasi</option>
            <option value={"TS"}>Teknik Sipil</option>
            <option value={"MNJ"}>Manajemen</option>
            <option value={"PBI"}>Pendidikan Bahasa Inggris</option>
          </select>
        </div>
        <div className="col-start-2 col-span-2">
          <button className="btn btn-error mr-5px w-28">Batal</button>
          <button className="btn btn-success ml-5px w-28" onClick={saveData}>
            Simpan
          </button>
        </div>
      </div>
    </>
  );
}