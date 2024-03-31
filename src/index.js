import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations()
    .then(function(registrations) {
       for(let registration of registrations) {
          registration.unregister();
       }
    });
 } 
// Clear cache (not recommended for security reasons)
caches.keys().then(function(cacheNames) {
    cacheNames.forEach(function(cacheName) {
        caches.delete(cacheName);
    });
});


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceWorker.js').then(function(registration) {
    // Registration was successful
    // console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
    // registration failed :(
    // console.log('ServiceWorker registration failed: ', err);
    });
    });
    }
reportWebVitals();
