import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OneBlog = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Replace 'userId' with the actual ID you want to fetch
                const userId = 5; // Example user ID
                const response = await axios.get(`http://localhost:3000/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <h1>User Details</h1>
                    <p>ID: {user.id}</p>
                    <p>Name: {user.email}</p>
                    {/* Add more details as needed */}
                </div>
            ) : (
                <p>Loading user...</p>
            )}
        </div>
    );
};

export default OneBlog;

/*

import React, { useState } from 'react';

const OneBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <main className="form-signin w-100 m-auto">
            <h1 className="h3 mb-3 fw-normal">One Blog Test</h1>

            <div className="form-floating">
                <label htmlFor="floatingInput">Title:</label>
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="form-floating">
                <label htmlFor="floatingContent">Content:</label>
                <textarea
                    className="form-control"
                    id="floatingContent"
                    placeholder="Input content"
                    style={{ height: "100%" }}
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            <p>Additional content of your OneBlog component...</p>
        </main>
    );
}

export default OneBlog;
*/