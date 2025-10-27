'use client'; 
import { useEffect } from 'react'; 
declare global { 

  interface Window { 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    htmx?: any; 

  } 

} 

 

export default function Home() { 

  useEffect(() => { 

    if (typeof window !== 'undefined' && window.htmx) { 

      window.htmx.process(document.querySelector('#htmx-container')); 

    } 

  }, []); 

  return ( 

    <div id="htmx-container" data-hx-preserve className="p-6 max-w-md mx-auto"> 

      <button 

        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" 

        hx-get="/api/message" 

        hx-target="#output" 

        hx-swap="innerHTML" 

      > 

        Load Content 

      </button> 

      <div id="output" className="mt-4 text-lg"></div> 

    </div> 

  ); 
}
