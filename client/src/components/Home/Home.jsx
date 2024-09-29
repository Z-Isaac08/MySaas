import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Home = () => {
    const onDrop = useCallback((acceptedFiles) => {
        // Gère les fichiers acceptés ici
        console.log('Fichiers acceptés:', acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'image/*': [],
            // Ajoute d'autres types de fichiers si nécessaire
        },
    });

    return (
        <div className="p-9">
            <h2 className="text-3xl font-bold mb-4 text-center text-[#0e3969]">Convertisseur de fichiers</h2>
            <span className="text-lg text-gray-600 mb-6 text-center block">
                La plateforme rapide et intuitive pour convertir tous vos fichiers en un clin d'œil.
            </span>
            <div className="flex flex-col items-center justify-center">
                <div
                    {...getRootProps()}
                    className={`w-3/4 h-64 flex flex-col items-center justify-center border-2 border-dashed ${isDragActive ? 'border-[#145692]' : 'border-gray-300'
                        } rounded-lg bg-gray-100`}
                >
                    <input {...getInputProps()} />
                    <p className="text-center text-gray-600">
                        {isDragActive ? 'Déposez les fichiers ici...' : 'Glissez-déposez les fichiers ici, ou cliquez pour sélectionner'}
                    </p>
                </div>
                <button
                    onClick={() => document.querySelector('input[type="file"]').click()}
                    className="w-80 p-4 border-none outline-none mt-4 bg-[#0e3969] text-white rounded hover:bg-[#145692] transition-colors duration-300"
                >
                    Sélectionner un fichier
                </button>
            </div>
        </div>
    );
};

export default Home;
