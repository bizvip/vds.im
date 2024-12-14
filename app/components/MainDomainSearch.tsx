import React from 'react';

const MainDomainSearch = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // 处理搜索逻辑
    };

    return (
        <div className="w-full bg-[#4B96F3] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-black mb-2">
            New .COM domains $21.99*
    </h1>
    <p className="text-black mb-8">
        Reliable website hosting, email, and affordable domain prices.
    </p>

    <form onSubmit={handleSubmit} className="flex gap-2 max-w-2xl mx-auto">
    <input
        type="text"
    placeholder="Find your perfect domain name"
    className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
    <button
        type="submit"
    className="px-6 py-2 bg-[#4267B2] text-white rounded-md hover:bg-blue-700 transition-colors"
        >
        Search
        </button>
        </form>
        </div>
        </div>
);
};

export default MainDomainSearch;