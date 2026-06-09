import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
// import Footer from './components/Footer';
// import Reviews from './components/Reviews';
// import ContactForm from './components/ContactForm';

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const now = new Date();
        const currentHour = now.getHours();

        const timer = setTimeout(() => {
            if (currentHour >= 7 && currentHour < 21) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 py-10 font-sans text-slate-800 transition-colors duration-300">
            
            {}
            <div className="max-w-4xl mx-auto flex justify-end mb-4 px-4">
                <button 
                    onClick={toggleTheme}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md font-semibold transition"
                >
                    {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
                </button>
            </div>

            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 shadow-2xl rounded-2xl overflow-hidden transition-colors duration-300">
                <Header />
                <main className="p-8 space-y-8">
                    <About />
                    <Experience />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Education />
                        <Skills />
                    </div>
                    <Languages />
                    {}
                    {/*<Reviews />*/}
                </main>
                {/*<Footer />*/}
            </div>

            {}
            {/*<ContactForm />*/}
        </div>
    );
}

export default App;