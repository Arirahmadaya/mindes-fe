import React, { useState } from "react";
import axios from "axios";

import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import {
  PaperAirplaneIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/20/solid";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

const FormAkuntansiTambah = () => {
  const [formData, setFormData] = useState({
    kode: "",
    uraian: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Data yang akan dikirim:", formData);
    try {
      await axios.post("http://localhost:3000/akun/create", formData);
      navigate("/admin/datamaster/akuntansi");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/datamaster">Realisasi</BreadcrumbItem>
          <BreadcrumbItem href="/admin/datamaster/akuntansi">
            Akuntansi
          </BreadcrumbItem>
          <BreadcrumbItem href="/admin/datamaster/akuntansi/tambah">
            Tambah Akuntansi
          </BreadcrumbItem>
        </Breadcrumbs>

        {/* Form start */}
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 my-5">
            <div className=" flex w-full bg-white rounded-lg">
              <div className="bg-white rounded-lg w-full h-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
                <div className="bg-blue-100/20 rounded-b-[20px] w-auto">
                  <div className="flex flex-col p-10 gap-5">
                    <div className="relative w-full mb-0">
                      <p className="text-caption-2 text-gray mt-1 mb-2">
                        Masukkan Kode Akun
                      </p>
                      <Input
                        type="text"
                        variant="bordered"
                        label="Kode Akun"
                        name="kode"
                        value={formData.kode}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="relative w-full mb-0">
                      <p className="text-caption-2 text-gray mt-1 mb-2">
                        Masukkan Uraian Akun
                      </p>
                      <Input
                        type="text"
                        variant="bordered"
                        label="Uraian"
                        name="uraian"
                        value={formData.uraian}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex justify-between w-full mt-4">
                      <Link
                        to="/admin/datamaster/akuntansi"
                        className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                      >
                        <ArrowUturnLeftIcon className="w-5 h-5" />
                        Batal
                      </Link>
                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                      >
                        <span>Simpan</span>
                        <PaperAirplaneIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAkuntansiTambah;