import React from 'react';

export default function AddPage() {
  return (
    <>
      <title>Tambah Data Mahasiswa</title>
       <div className="grid grid-cols-6 gap-4 items-center">
        <div className="">Npm</div>
        <div className="col-span-4">
        <input
  type="text"
  placeholder="NPM Mahasiswa"
  className="input input-bordered input-success w-full" />
        </div>
        <div className="col-start-1">Nama</div>
        <div className="col-span-4">
        <input
  type="text"
  placeholder="Nama Mahasiswa"
  className="input input-bordered input-success w-full" />
        </div>
        <div className="col-start-1">Jurusan</div>
        <div className="col-span-4">
        <select defaultValue={""} className="select select-success w-full">
  <option value={""} disabled >
    Pilih Jurusan Mahasiswa</option>
  <option value={"Informatika"}>Informatika</option>
  <option value={"Sistem Informasi"}>Sistem Informasi</option>
  <option value={"Teknik Elektro"}>Teknik Elektro</option>
  <option value={"Teknik Sipil"}>Teknik Sipil</option>
  <option value={"Teknik Komputer"}>Teknik Komputer</option>
  <option value={"Teknik Mesin"}>Teknik Mesin</option>
</select>
        </div>
        <div className="col-start-2 col-span-2">
        <button className="btn btn-active btn-neutral mr-5px w-28">Simpan</button>
        <button className="btn btn-active ml-5px w-28">Batal</button>
        </div>
      </div>

    </>
  );
}
