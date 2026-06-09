function Languages() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-4">Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg border border-slate-100 dark:border-slate-600 text-center shadow-sm">
                    <span className="block font-bold text-slate-800 dark:text-white">English</span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">B2 Upper Int.</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg border border-slate-100 dark:border-slate-600 text-center shadow-sm">
                    <span className="block font-bold text-slate-800 dark:text-white">German</span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">B1 Intermediate</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg border border-slate-100 dark:border-slate-600 text-center shadow-sm">
                    <span className="block font-bold text-slate-800 dark:text-white">Ukrainian</span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">Native (C1)</span>
                </div>
            </div>
        </section>
    );
}

export default Languages;