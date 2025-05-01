import React from 'react'

// app/about/page.tsx
export default function AboutPage() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 ">
        <h1 className="text-4xl font-bold mb-4 text-white">About Linknker</h1>
        <p className="text-lg mb-6 text-gray-400">
          <strong>Linknker</strong> is a modern URL shortening service designed to make long and messy links simple, trackable, and easy to share.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-white">Why Linknker?</h2>
        <ul className="list-disc pl-5 text-gray-400 space-y-2">
          <li>Simplify long URLs with a single click</li>
          <li>Analytics to track clicks and user engagement (coming soon)</li>
          <li>Custom short URLs (coming soon)</li>
          <li>Fast, reliable, and privacy-friendly</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Our Mission</h2>
        <p className="text-gray-400">
          Linknker was created with the goal of providing a clean and efficient way to share links without clutter. Whether you're sharing on social media, email, or text, Linknker helps keep your links short and smart.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Built With</h2>
        <ul className="list-disc pl-5 text-gray-400 space-y-2">
          <li>Next.js (React Framework)</li>
          <li>Tailwind CSS</li>
          <li>Node.js & MongoDB (backend, optional)</li>
        </ul>
      </div>
    );
  }
  
