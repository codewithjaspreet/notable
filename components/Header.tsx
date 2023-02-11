function Header(){

    return <header className="flex  justify-between  p-5  max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">

            <img className="w-44 object-contain" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAB7CAMAAAAlg26iAAAAY1BMVEXz9PQAAAD29/f////5+vrs7e2GhobY2dnv8PB+f3+wsbFmZ2cyMjLU1dUqKirn6OikpaWSk5PHyMjg4eGLjIwSEhIeHx+cnZ1aWlpDQ0O6u7txcnJeX19UVVXNzs5KSko4OTkzYb2RAAAFFklEQVR4nO2Yi47qOAyGE8e9UC5pGyi0ZVre/ynXdhouc0A60jLDSutPSDQhbf3HjuNgjKIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoyv8IgE9b8DM4B1mJDh86/xALBMJDt7QBzSvAYcbPl8/vA1jW67mfv1btnThwRXBRxaIF/LRlips2CNLTPvc4oAv13JCsY99Xr/X/GBhym9gNySc4baztC7YHQhn7yuHAgzb+pmTkjrl9Zjb4Yb+jX3PAgUc9HfSjuPZi78hLsRsKtspeArWyc7NEkzvKmKsDoGCth+FpsEEYRHgObsXf9W8vZhw6+8BatLnN0kIDre2SKyvpPC9eNG7Pze6FPwBxkVY/TMgvAdud/cborhqIAlxj7RTNwnqWkJzS6juM3Z20b24B46I0A+PBNqV5TbrznWnaXb4rs5biC8ebUHe+zjjWzZf4Mkagq07VIUkD57LSuWQbpVsPV2mGUpIMgmUEZRi3fCPl5wz4Z6Q87d6VSV31pzI7eyyuii+ZI+tzt0jLJ+mVRAKmH4YUkDitbX+x+yCTAKba2U2/jtIQsqLuakTj23w30WZRhuF0zqg/VH1uOI1tJsC2p4t9+SbPnZ5II7cN1+vdxFO/Sl5bGX69lbxCiU+mhqUhJZjB+DONR84g5OkxwBClVTnfVJXNSNG/2aKvOY7Xpt1zDORLhEzLS1dvEQbbzTNp+b0zK5Y2QpKGdXQsd4z7JI179w6woA0jkFd44wiYAjKI9yoQr5A0I49flz5moSFrOZXNo/cycPsOt+GzeCSrTHNrHA1LM1dpQdxGiw8KG5K0orMHtigjNzSIKxtjeJGGW/6ukRMSSaP0wrlrnaGJ+x44dtzBU6Auz36DtPqptK5c3UnzMsNJGojd9kT25WOcm67l/e7Lc7ogGzcoWZcX4CKNJiFKOyZpG5EGIm0Pcb/seA/lgc07Mgk8l2az8XYdpWU3aWKn3SIcBkzSeOn4sizlxlKeyoYmr/2VtMNbpf2V17JHrxknEbl2xxmS13hr3pxPkTnIxJQflnbLhPfM8HqtwXJTF061W6RNrH5V+oVy5gHwWWlQPNmxORG8zpCcK8T0/oAmSfMyJGKg3P0HvGbg/Exa69rr9fd9jV6Px2UCkrSWE1sfUs4uZUfxH5b2NCJPGRZ9avSSqfepGmFp8VTQ8bEtpREeOUT57phJHXCXIT8izbgn5QgXF9c8kju3vpodpRnZhuQqSRPnT1QeghvWIDvxyn1YGoQ/VhvvtXiNyAAcf9ODNN6CD6I2SZO12dUF1VC2jq3LrRp5kMZl2a9Ii6fpe8R4476WFlUdk+2W+mCRZtxsL/L+lPyzuGa7zc7OAb3kmZOHKkqLW3aFccJyOgHy0YgPhj8qzbjwda/siPHQ4S+LeZQWVnV8Gbj9WX6mJVpJV7RpcLi9Op+dklZwLhIweu1INaYs4c1m5OnsTSy0aPbi6Z0PDfw9uncUkQxmt437PF3/G+CadoyHl2zp8mTBirMHhD6T1zdyMt0dyfo4QbuWJS/l9YjR80FqSNukw9Js5Lbz1sR+Oe1SqRZAakg6Gb1LGx302/3p62tdh7v5Akefx1eUPsu8v+8JmRB4eDjmzYTLoiyrfVPQyZLxZfwOJRWZbb5vU7+HdHcpbZrCLF28DTrzMv9qsugAffuvD149DZ37wL92iqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoyu/xDxDURBJbqdxuAAAAAElFTkSuQmCC" alt="" />
            
            <div className=" hidden md:inline-flex space-x-5 items-center" >
                
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
            </div>

        </div>

        <div className="flex items-center space-x-5 text-green-600 ">
            <h3>Sign In</h3>
            <h3 className= "border-green-600 border px-4 py-1 rounded-full  ">Get Started</h3>
        </div>
        <div>

        </div>
    </header>
}

export default Header;