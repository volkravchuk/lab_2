function Education() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-4">Education</h2>
            <ul className="space-y-3">
                <li className="flex flex-col">
                    <strong className="text-slate-800 dark:text-white">Lviv Polytechnic National University</strong>
                    <span className="text-slate-600 dark:text-slate-300">Cyber Security and Information security</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">September 2023 - 2027</span>
                </li>
            </ul>
        </section>
    );
}

export default Education;