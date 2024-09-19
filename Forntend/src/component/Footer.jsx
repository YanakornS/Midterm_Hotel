import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-gray-200 p-10">
      <aside>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current text-white">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
        </svg>
        <p>
          Luxury Stay Hotel
          <br />
          Providing exceptional comfort since 2005
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-lg">Connect with Us</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M12 2.16c-6.95 0-12.64 5.7-12.64 12.64s5.7 12.64 12.64 12.64 12.64-5.7 12.64-12.64S18.95 2.16 12 2.16zm0 22.54c-5.49 0-9.9-4.41-9.9-9.9s4.41-9.9 9.9-9.9 9.9 4.41 9.9 9.9-4.41 9.9-9.9 9.9zm4.56-12.1h-2.67v5.75H12.4v-5.75H11v-2.3h1.4v-1.34c0-1.7.92-2.63 2.42-2.63h1.08v2.3h-1.19c-.59 0-.8.28-.8.75v1.28h1.99l-.25 2.3z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <div>
        <h6 className="footer-title text-lg">Contact Us</h6>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: contact@luxurystayhotel.com</p>
        <p>Address: 1234 Main St, Cityville, ST 12345</p>
      </div>
    </footer>
  )
}

export default Footer
