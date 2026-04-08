"use client";

import React, { useState, useRef } from 'react';

const CreatePostForm = () => {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const removeImage = () => {
        setImage(null);
        setPreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-50/50 p-4">
            <div className="w-full max-w-md bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                <div className="p-8">
                    <h2 className="text-2xl font-bold mb-8 text-center bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Create New Post
                    </h2>

                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        {/* Custom File Upload Area */}
                        <div className="relative">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                className="hidden"
                                accept="image/*"
                            />

                            {!preview ? (
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-full aspect-square flex flex-col items-center justify-center gap-4 border-2 border-dashed border-gray-200 rounded-[2.5rem] bg-gray-50/50 hover:bg-blue-50/30 hover:border-blue-400 transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-gray-700 font-semibold text-lg">Select Image</span>
                                        <span className="block text-sm text-gray-400 mt-1">PNG, JPG, or SVG</span>
                                    </div>
                                </button>
                            ) : (
                                <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-inner group">
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                        <button
                                            type="button"
                                            onClick={removeImage}
                                            className="bg-white/20 backdrop-blur-xl text-white p-4 rounded-2xl hover:bg-red-500/80 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <textarea
                                placeholder="Write a caption..."
                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400 focus:bg-white outline-none resize-none text-gray-700 transition-all placeholder:text-gray-400 leading-relaxed"
                                rows={4}
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-black cursor-pointer text-white rounded-2xl py-5 font-bold shadow-2xl shadow-gray-200 hover:bg-gray-800 hover:shadow-gray-200 transition-all duration-300 transform active:scale-[0.98]"
                        >
                            Share Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePostForm;
