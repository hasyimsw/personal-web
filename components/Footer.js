export default function Footer() {
    return(
        <footer className="bg-secondary border-t border-slate-500">
            <div className="container mx-auto 2xl:px-20 xl:px-10 lg:px-10">
                <p className="text-white text-center mt-5">Design by Hasyim El-Marusy</p>
                <div className="mt-2 pb-6">
                    <ul className="flex justify-center space-x-3">
                        <li className="bg-transparent px-3 py-1 border-2 border-primary rounded-lg">
                            <a href="https://github.com/hasyimsw/" target="_blank"><img src="/aaa.png" width="20"></img></a>
                        </li>
                        <li className="bg-transparent px-3 py-1 border-2 border-primary rounded-lg">
                            <a href="https://twitter.com/syimsw_" target="_blank"><img src="/twitter.png" width="20"></img></a>
                        </li>
                        <li className="bg-transparent px-3 py-1 border-2 border-primary rounded-lg">
                            <a href="https://www.instagram.com/hasyimsw_/" target="_blank"><img src="/instagram.png" width="20"></img></a>
                        </li>
                        <li className="bg-transparent px-3 py-1 border-2 border-primary rounded-lg">
                            <a href="https://web.facebook.com/profile.php?id=100009320618737" target="_blank"><img src="/facebook.png" width="20"></img></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}