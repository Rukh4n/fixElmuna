import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="container row d-grid justify-content-center align-item-center">
            <div>
                <Link href="/">
                    <div className="d-grid justify-content-center align-item-center">
                        <img src='assets/logo/elmuna logo.png' className='m-3' width={100} />
                    </div>
                </Link>
            </div>

            <div className="">
                {children}
            </div>
        </div>
    );
}
