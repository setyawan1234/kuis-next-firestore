import React from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const CreateGuru = () => {

  const navigate = useNavigate();

    const [nama, setNama] = React.useState("");
    const [alamat, setAlamat] = React.useState("");
    const [ttl, setTtl] = React.useState("");
    const [kontak, setKontak] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "gurus"), {
                nama,
                alamat,
                ttl,
                kontak,
            });
            navigate("/gurus");
            MySwal.fire({
              icon: 'success',
              title: 'Data submitted successfully',
              text: `Your data has been submitted successfully`,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
            MySwal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
        }
    };




  return (
    <div className="m-10">
        <div className="py-4">
        <Link to="/gurus" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Kembali Ke Halaman Data Guru
        </Link>
        </div>
      <form>
        <div className="mb-6">
          <label
            htmlFor="nama"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama
          </label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="alamat"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            alamat
          </label>
          <input
            type="text"
            id="alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="ttl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ttl
          </label>
          <input
            type="text"
            id="ttl"
            value={ttl}
            onChange={(e) => setTtl(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="kontak"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            kontak
          </label>
          <input
            type="text"
            id="kontak"
            value={kontak}
            onChange={(e) => setKontak(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tambah Data
        </button>
      </form>
    </div>
  );
};

export default CreateGuru;
