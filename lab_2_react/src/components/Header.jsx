function Header() {
    return (
        <header className="bg-slate-800 text-white p-10 text-center flex flex-col items-center">
            <h1 className="text-4xl font-extrabold tracking-wide mb-2">Volodymyr Kravchuk</h1>
            <p className="text-xl text-blue-300 font-medium mb-6">DevOps Engineer</p>
            
            <address className="not-italic flex flex-wrap justify-center gap-4 text-sm text-slate-300">
                <span className="bg-slate-700 px-3 py-1 rounded-full shadow-sm">📍 קרית גת, יצית תשז 1</span>
                <a href="tel:0506498988" className="bg-slate-700 px-3 py-1 rounded-full shadow-sm hover:bg-blue-600 transition">📞 0506498988</a>
                <a href="mailto:volodymyr.kravchuk12342@gmail.com" className="bg-slate-700 px-3 py-1 rounded-full shadow-sm hover:bg-blue-600 transition">✉️ Email</a>
                <a href="https://github.com/volkravchuk" target="_blank" rel="noreferrer" className="bg-slate-700 px-3 py-1 rounded-full shadow-sm hover:bg-blue-600 transition">💻 GitHub</a>
                <span className="bg-slate-700 px-3 py-1 rounded-full shadow-sm">📱 TG: @kruosan06</span>
            </address>
        </header>
    );
}

export default Header;