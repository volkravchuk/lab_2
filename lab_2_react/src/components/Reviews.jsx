import { useState, useEffect } from 'react';

function Reviews() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const variantId = 25; 

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${variantId}/comments`)
            .then(response => response.json())
            .then(data => {
                setComments(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-4">
                Employers Reviews
            </h2>
            
            {loading ? (
                <p className="text-slate-500">Loading reviews...</p>
            ) : (
                <div className="space-y-4">
                    {comments.map(comment => (
                        <div key={comment.id} className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600">
                            <h3 className="font-semibold text-slate-800 dark:text-slate-100">{comment.name}</h3>
                            <p className="text-sm text-blue-500 mb-2">{comment.email}</p>
                            <p className="text-slate-600 dark:text-slate-300 italic">"{comment.body}"</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Reviews;