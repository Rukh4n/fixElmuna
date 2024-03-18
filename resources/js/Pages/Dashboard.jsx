import { Head } from '@inertiajs/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Componens
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/footer';

// import Pages
import Home from './Home';
import Articles from './Articles';
import Products from './Products';

export default function Dashboard({ auth }) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Elmuna</h2>}
            >
                <Head
                    title="Elmuna Computindo"

                />

                {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div> */}

            </AuthenticatedLayout>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/articles' element={<Articles/>}></Route>
                    <Route path='/products' element={<Products/>}></Route>
                </Routes>
            </BrowserRouter>
            
            <Footer></Footer>
        </>
    );
}
