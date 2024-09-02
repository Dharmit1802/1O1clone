import React from 'react'
import LoginArtist from '../component/loginArtistdiv';
import ReceiveQuote from '../component/receivequote';
import ChooseUs from '../component/chooseus';
import Faq from '../component/FAQ';
import LoginFooter from '../component/loginfooter';
// import Navbar from '../component/navbar';

function Login() {
  const mobile = /^[0-9]*$/;
  return (
    <div className=" w-[100vw]">
      <div className='bg-slate-950 w-full h-[100vh] flex flex-row'>
        <div className='relative overflow-hidden w-[62%] main-banner items-start justify-between flex flex-col h-full pt-5 pl-10 pr-10 '>
          <div className='mt-40 ml-9'>
            <h1 className='text-7xl font-bold  w-[50%] text-white'>DOWNLOAD THE APP</h1>
          </div>
          <div className='bg-white ml-9 h-auto w-fit p-5 flex flex-col gap-y-5 rounded-t-2xl'>
          <a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.app.live101_app"><img alt="live101-playstore-icon" title="live101-playstore-icon" width="100%" height="auto" class="w-lg-auto" src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/landing_page/playstore-icon.png"/></a>
          <a rel="noopener noreferrer" href="https://apps.apple.com/in/app/live101/id1591303295"><img alt="live101-appstore-icon" title="live101-appstore-icon" width="100%" height="auto" class="w-lg-auto" src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/landing_page/appstore-icon.png"/></a>
          </div>
        </div>
        <div className='w-[38%] flex h-full text-white'>
          <div className="m-auto flex flex-col gap-5 h-fit w-[65%]">
            <div className='h-[40px]'></div>
            <h1 className='text-5xl font-bold text-white mb-5'>Get Started!</h1>
            <div>
              <form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label for='mobilenumber' className='text-2xl font-semibold'>Phone Number</label>
                  <input placeholder='Enter Your mobile Number...' className='bg-slate-800 px-6 py-4 border-none outline-none rounded-full placeholder:text-xl placeholder:text-slate-400 text-2xl flex justify-center' name='mobilenumber' minLength={10} maxLength={10} pattern='[0-9]{10}' onKeyDown={(e)=>{if(!mobile.test(e.key)&&e.key !== 'Backspace'){e.preventDefault();}}} type='tel'/>
                </div>
                <div className="block">
                  <input type="checkbox" id="T&C" class="opacity-0 absolute" required name="T&C"/>
                  <label for='T&C'  className='relative inline-flex items-center checkbox1 '>
                    <div className='conditions'>By Entering Your Number You Accept Our Terms & Conditions</div>
                  </label>
                </div>
                <button type='submit' className='w-full rounded-full bg-slate-800 text-white px-6 py-3 mt-5 text-lg'>Continue</button>
              </form>
              <div className='flex flex-col gap-5 mt-5'>
                <p className='Continue mx-auto relative'>
                  
                  or continue with
                  
                </p>
                <div className='flex flex-row mx-auto gap-4'>
                  <button><img alt="live101-facebook" title="live101-facebook" width="100%" height="auto" class="opacity_full"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAilBMVEUAAAAYePIYePEYePEXePEYd/IYd/EYePEXd/IYePEXd/IYd/EXd/EWd/IYePEYd/IXd/EXd/MWefIYd/IXePMYePIYePEXePIWePIVdfEWdvAZefcZd/EYePEYd/EYd/EYd/ITd/YZePH///+MvPhRmvTG3vyozPrj7/4ngPHw9v/U5v2axPlEkfN/xBGJAAAAInRSTlMA5/P40u/r9WL8mtyVZ+DXjWs1tlb3ylA5LyIe+c3Hup8rFUSWkwAAAZRJREFUSMel19mOgyAUgOEDKFL3sYtVux6qbWd5/9ebpjGaTkGB+e+/RFDIEZTVSXj0CGPEW4ZJDYZtY0LXOMQoibcG7COj+BbNPmbYigeobM1XoK9IA9QWRJX2KQlORhK1O1GciYYq5zGcjW0UDk1avMn9As3k/s/6GBoWhC/76aNxvhhdwdEiUg0wQqsi6FtRO0jLHnK0jPQ7E1ipcX8ytM57nlvfHvrFA+YLe7jIH5Cgrvv1U8oWVaUANdXCLyl1kDaQrHWufbCu+1FDASfUdZHyG3WFcJyCF9R11B7gtr1KeW3bu+5Ncg2Ufa3uq2MzENUx2KG6rrtJees6VLcD4rY5BDw36MHSDS4hdIMxJL4L5AJqJ+g3AKkLjBwPMsv/c3WA53hZgaC2jgp4RhwvZCgtV8lL6MusV9hXpTYuOsOQ4ObudVKKqamjMby0MR0eDm9jhxkc3NjGZEA6gKKQzjk/BGUJmXZcgKYqmhw7z5OD7lqzOlK6jNZBlsB8RZ4GbES7IM0LMKwR8bL/fYhFA6p+AfhROY4RCNDyAAAAAElFTkSuQmCC"/></button>
                  <button><img alt="live101-Gmail" title="live101-Gmail" width="100%" height="auto" class="opacity_full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAllBMVEUAAADPS0PPSkPPSkPPSkPPSkPPSkPPSkTPSkPQSUPPSkPPSkPPSkPPSUPSSkLQSkPPSkPQSkPPS0PPSkLPSkPQS0LQSULQRj3PSkPQSkPQS0PPSkPQSELPSkPQSUPOSkPPSkPRSULPS0T////npaLbeHP23tzhjor56ejSVk/z0tDwx8XtvLnkmpbVYVv89PTz0tHYbGfKVUHPAAAAInRSTlMA8/fp5tL49e9m/OzJYiDYt+HQm2tSOC3dl46UNJ9ZvYZNUuppwAAAAbZJREFUSMed1mlzgjAQgOENhCNQLvHCo8cG1LbWtv//zzXSWnXcYJJnRr69E8MCEyDloi4DPwz9oKxFDoamS85C/OcxvpwaZOOC4Q1WjGHYY+ohyfMnoLeqItSK5jPtv/RxkC/obs3wDlZT3cjDu7yH2y5AE8lNOUrQqVx7aCi62uc4RmOxuJhfihb4eZ5ztDI/dRNmF7LT0+ejJQ69cWQbxtl59HZGoExT+zCeqnCR2IfJQoUcHVQAOXMJWQ7CcwozWCOle5dys0W9Gp6QsJW9Th+W5BQ7+fmhrkMrBuTz9i5VdyJbKvQhxFtSqkt7hF0r36gy1IfyCLdf6kqF5Pw3v7flIHfav8phRN7U3Tfi66Zv2o5+zEsk7NUU39TvdWAcDVLandraXt/hEkSMpEOHA9IM8hgdxDlA5RLOHV9k79n107Fy/FgFcCSYw2vc444fZJhYTiR9gT+Fww57M6tZXh5bMouRpI9woWGmHVvClYcEXY8dZuG5O6/pdkBS6rv7jBsgiXuHwAw0ZsXQsbOYgd7ENzro0kfriFpNmBzmF1V0sW4YVYsVGMqzpgx4GPKgbLIcKD8hKTqHYmYcGwAAAABJRU5ErkJggg=="/></button>
                </div>
                <p class="conditions mx-auto">©2018 - 2024 All Rights Reserved Privacy and Terms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-slate-900'>
        <LoginArtist/>
      </div>
      <div className='relative overflow-hidden z-10 w-full bg-slate-800 quote'>
        <ReceiveQuote/>
      </div>
      <ChooseUs />
      <Faq/>
      <LoginFooter/>
    </div>
  )
}

export default Login;