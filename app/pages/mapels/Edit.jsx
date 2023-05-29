import React from "react";
import { db } from "@/app/firebase";
import { Link } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const EditMapels = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nama, setNama] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");

  React.useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "mapels", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setNama(docSnap.data().nama);
        setDeskripsi(docSnap.data().deskripsi);
      } else {
        console.log("No such document!");
      }
    };
    if (id) {
      fetchItem();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await updateDoc(doc(db, "mapels", id), {
        nama,
        deskripsi,
        jurusan,
        prodi,
      });
      MySwal.fire({
        icon: "success",
        title: "Data submitted successfully",
        text: `Your data has been submitted successfully`,
      });
      navigate("/mapels");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {}
  };

  return (
    <div className="m-10">
      <div className="py-4">
        <Link
          to="/mapels"
          className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800"
        >
          Kembali Ke Halaman Mata Pelajaran
        </Link>
      </div>
      <form>
        <div className="mb-6">
          <label
            htmlFor="nama"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Mapel
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="deskripsi"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Deskripsi
          </label>
          <input
            type="text"
            name="deskripsi"
            id="deskripsi"
            placeholder="deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full px-3 py-4 text-white bg-yellow-500 rounded-md focus:bg-yellow-600 focus:outline-none"
          >
            Edit Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMapels;
