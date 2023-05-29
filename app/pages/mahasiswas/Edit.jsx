import React from 'react'
import { db } from '@/app/firebase'
import { Link } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const EditMahasiswa = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [nama, setNama] = React.useState("");
    const [kelas, setKelas] = React.useState("");
    const [jurusan, setJurusan] = React.useState("");
    const [prodi, setProdi] = React.useState("");

    React.useEffect(() => {
        const fetchItem = async () => {
            const docRef = doc(db, "mahasiswas", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setNama(docSnap.data().nama);
                setKelas(docSnap.data().kelas);
                setJurusan(docSnap.data().jurusan);
                setProdi(docSnap.data().prodi);
            } else {
                console.log("No such document!");
            }
        };
        if(id){
            fetchItem();
        }
        }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await updateDoc(doc(db, "mahasiswas", id), {
                nama,
                kelas,
                jurusan,
                prodi,
            });
            MySwal.fire({
                icon: 'success',
                title: 'Data submitted successfully',
                text: `Your data has been submitted successfully`,
            });
            navigate("/mahasiswas");
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        }
    };




  return (
    <div className="m-10">
        <div className="py-4">
        <Link to="/mahasiswas" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Kembali Ke Halaman Data Mahahasiswa 
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
                htmlFor="kelas"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Kelas
            </label>
            <input
                type="text"
                name="kelas"
                id="kelas"
                placeholder="kelas"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="jurusan"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Jurusan
                </label>
                <input
                    type="text"
                    name="jurusan"
                    id="jurusan"
                    placeholder="jurusan"
                    value={jurusan}
                    onChange={(e) => setJurusan(e.target.value)}
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="prodi"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Prodi
                    </label>
                    <input
                        type="text"
                        name="prodi"
                        id="prodi"
                        placeholder="prodi"
                        value={prodi}
                        onChange={(e) => setProdi(e.target.value)}
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
                        >
                            Edit
                        </button>
                        </div>
                        </form>


                </div>
  )
}

export default EditMahasiswa