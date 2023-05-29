'use client';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import IndexMahasiswa from './pages/mahasiswas/Index';
import CreateMahasiswa from './pages/mahasiswas/Create';
import EditMahasiswa from './pages/mahasiswas/Edit';
import IndexGuru from './pages/gurus/Index';
import CreateGuru from './pages/gurus/Create';
import EditGuru from './pages/gurus/Edit';
import IndexKelas from './pages/kelass/Index';
import CreateKelas from './pages/kelass/Create';
import EditKelas from './pages/kelass/Edit';
import IndexMapels from './pages/mapels/Index';
import CreateMapels from './pages/mapels/Create';
import EditMapels from './pages/mapels/Edit';

export default function Home() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/mahasiswas" element={<IndexMahasiswa/>} />
        <Route path="/mahasiswas/create" element={<CreateMahasiswa/>} />
        <Route path="/mahasiswas/edit/:id" element={<EditMahasiswa/>} />
        <Route path="/gurus" element={<IndexGuru/>} />
        <Route path="/gurus/create" element={<CreateGuru/>} />
        <Route path="/gurus/edit/:id" element={<EditGuru/>} />
        <Route path="/kelass" element={<IndexKelas/>} />
        <Route path="/kelass/create" element={<CreateKelas/>} />
        <Route path="/kelass/edit/:id" element={<EditKelas/>} />
        <Route path="/mapels" element={<IndexMapels/>} />
        <Route path="/mapels/create" element={<CreateMapels/>} />
        <Route path="/mapels/edit/:id" element={<EditMapels/>} />
      </Routes>
      </Sidebar>
      </BrowserRouter>
  )
}
