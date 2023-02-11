function Header(){

    return <header className="flex justify-between p-5">
        <div className="flex items-center space-x-5">
            <img className="w-40 md:w-48" src="/logo.png" alt="" />
            <div style={{
              width: '1px',
              height: '100%',
              backgroundColor: 'grey',
              margin: '0 10px',
            }} />
            <div className="hidden md:inline-flex space-x-5 items-center">
              <h3 className="text-blue-700 underline font-bold">Personal</h3>
              <h3 className="text-black-100 font-bold">Business</h3>
            </div>
        </div>
        <div className="flex md:flex-row items-center space-x-5 text-black font-normal">
            <h3 className="hidden md:inline-block">Ecosystem</h3>
            <h3 className="hidden md:inline-block">Token</h3>
            <h3 className="hidden md:inline-block">Get to know us</h3>
            <h3 className="hidden md:inline-block">Roadmap</h3>
            <h3 className="bg-blue-700 text-white px-6 py-2 rounded-lg md:inline-block">Get Started</h3>
        </div>
    </header>
}

export default Header;