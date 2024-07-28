import React, { useState } from 'react';
import files from "../assets/file.json"

export default function ScenePage() {
    const [selectedFile, setSelectedFile] = useState('Optics_Compound_Microscope');
    const getName = (file) => {
        const name = file.split('_');
        name.shift();
        return name.join(' ');
    };
    const OpenVisual = (A) => {
        return (
            `https://effectuall.github.io/Simulations/${A}.html`
        )
    }
    return (
        <>
          <div className="container mx-auto p-4">
      <iframe
        src={OpenVisual(selectedFile)}
        title="Webpage Viewer"
        className="w-full h-screen border-none"
        loading="lazy"
      />
    </div>
            {Object.keys(files).map((key) => (
                <div key={key} className="mb-8">
                    <a className="title block text-2xl font-bold mb-4">{key}</a>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4" >
                        {files[key].map((file) => (
                            <div key={file} id={file} className="column p-2 shadow-md">
                                <a onClick={()=>{setSelectedFile(file)}} className="cursor-pointer" >
                                    <img className="image w-full" src={`../assets/screenshots/${file}.jpg`} alt={getName(file)} loading="lazy" />
                                    <div className="middle">
                                        <div className="text">{getName(file)}</div>
                                    </div>
                                </a>

                            </div>
                        ))}
                    </div>
                </div>
            ))}
           
        </>
    );
}