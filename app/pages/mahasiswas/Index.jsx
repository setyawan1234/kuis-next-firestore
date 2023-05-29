import React from "react";
import { app, db } from "../../firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const IndexMahasiswa = () => {
  const [mahasiswas, setMahasiswas] = React.useState([]);

  React.useEffect(() => {
    const mhs = onSnapshot(collection(db, "mahasiswas"), (snapshot) => {
      setMahasiswas(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return mhs;
  }, []);

  console.log(mahasiswas);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'mahasiswas', id));
      MySwal.fire({
        icon: 'success',
        title: 'Data deleted successfully',
        text: `Your data has been deleted successfully`,
      });
    } catch (error) {
      console.log(error);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="relative overflow-x-auto p-1">
      <div className="p-4">

      <Link
        to="/mahasiswas/create"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-5"
      >
        Tambah Data Mahasiswa
      </Link>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-5">
              No
            </th>
            <th scope="col" className="px-16 py-3">
              Nama Mahasiswa
            </th>
            <th scope="col" className="px-16 py-3">
              Kelas
            </th>
            <th scope="col" className="px-16 py-3">
              Jurusan
            </th>
            <th scope="col" className="px-16 py-3">
              Prodi
            </th>
            <th scope="col" className="px-16 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {mahasiswas.map((mhs, index) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-16 py-4">{index + 1}</td>
              <th
                scope="row"
                className="px-16 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {mhs.nama}
              </th>
              <td className="px-16 py-4">{mhs.kelas}</td>
              <td className="px-16 py-4">{mhs.jurusan}</td>
              <td className="px-16 py-4">{mhs.prodi}</td>
              <td className="px-16 py-4">
                <Link
                  to={`/mahasiswas/edit/${mhs.id}`}
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Edit Data
                </Link>
                <button 
                onClick={() => handleDelete(mhs.id)}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndexMahasiswa;
