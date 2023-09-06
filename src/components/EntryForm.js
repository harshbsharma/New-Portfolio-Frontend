import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { toast } from "react-toastify";
const EntryForm = () => {

    const [formdata, setformdata] = useState({
        firstname:"",
        lastname:"",
        phonenumber:"",
        email:"",
        message:""
    });
    const changehandler=(event)=>
    {
        setformdata((prevData)=>
        (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    // const handleKeyPress = (e) => {
    //     const charCode = e.charCode;
    //     if (charCode < 48 || charCode > 57) {
    //       e.preventDefault(); // Prevent non-numeric input
    //     }
    //   };
    const handleKeyDown = (e) => {
        const isNumericKey = e.key >= '0' && e.key <= '9';
        const isControlKey = e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Home' || e.key === 'End'|| e.key==='Tab';

        if (!(isNumericKey || isControlKey)) {
        e.preventDefault(); // Prevent non-numeric input
        }

      };
      const postdata = async(data)=>
      {
 
        try{
            // const response = await axios.post(`${process.env.REACT_APP_BASE_URL}`, data);
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/create-entry`,
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({...data})
                }
            )
            return response;
        }
        catch(err)
        {
            console.log(`${err}-> Error in sending the POST request`);
        }
      }
      const handleSubmit = async(e)=>
      {
        e.preventDefault();
        toast.success("Entry Done");
        console.log(formdata);
        try{
            const response = await postdata(formdata);
            console.log('Response from server:', response);
        }
        catch(err)
        {
            console.log("Error in sending the data");
        }

      }

      const textareaStyle = {
        backgroundColor: "#FFDDBF",
        fontweight:'bold',
        borderRadius: '4px', // You can adjust the border radius as needed
        border: '2px solid black',
        padding: '8px',
        color: 'black', // Text color
        width: '100%',// You can adjust the height as needed
        outline: 'none', // Remove the default outline when focused
      };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col py-5 gap-10 w-full justify-center items-center">

            <div className="flex gap-10 px-5 w-full ">
            <input type='text' placeholder='First Name'
            className="pl-5 pr-5 w-full h-[50px] border-2 rounded-lg border-black bg-peachpuff-200
            placeholder-opacity-100 placeholder-gray-900 text-xl font-semibold"
            name="firstname"
            value={formdata.firstname}
            onChange={changehandler}
            />
            <input type='text' placeholder='Last Name' 
            className="pl-5 pr-5  w-full h-[50px] border-2 rounded-lg border-black bg-peachpuff-200
            placeholder-opacity-100 placeholder-gray-900 text-xl font-semibold"
            name="lastname"
            value={formdata.lastname}
            onChange={changehandler}/>
            {/* <Input size="large" placeholder="First Name" prefix={<UserOutlined />} />
            <Input size="large" placeholder="Last Name" prefix={<UserOutlined />} /> */}
            </div>

            <div className="flex gap-10 px-5 w-full">
                <input type="tel" placeholder='Phone Number' maxLength={10} onKeyDown={handleKeyDown}
                className="pl-5 pr-5 w-full h-[50px] border-2 rounded-lg border-black bg-peachpuff-200 
                placeholder-opacity-100 placeholder-gray-900 text-xl font-semibold"
                name="phonenumber"
                value={formdata.phonenumber}
                onChange={changehandler}/>
                <input type='email' placeholder='Email Address' 
                className="pl-5 pr-5 w-full h-[50px] border-2 rounded-lg border-black bg-peachpuff-200
                placeholder-opacity-100 placeholder-gray-900 text-xl font-semibold"
                name="email"
                value={formdata.email}
                onChange={changehandler}/>
                {/* <Input size="large" placeholder="First Name" prefix={<UserOutlined />} />
                <Input size="large" placeholder="Last Name" prefix={<UserOutlined />} /> */}
            </div>

            <div className='w-full px-5'>
                <textarea rows={4} style={textareaStyle} placeholder='Please leave your message here'
                className="font-bold text-xl "
                name="message"
                value={formdata.message}
                onChange={changehandler} />
            </div>
            
            <button className="flex cursor-pointer bg-transparent items-start justify-start text-left text-5xl
                       text-dimgray-100 font-work-sans">
      <div className="rounded-2xl box-border w-[269px] flex flex-col py-6 px-10 items-center 
                      justify-center border-[4px] border-solid border-dimgray-100 
                      hover:bg-dimgray-100 hover:border hover:rounded-lg
                       hover:text-white transition-colors delay-10">
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-semibold">
            Send
          </div> 
          
        </div>
      </div>
    </button>
            {/* <button>
                Contact
            </button> */}
    
        </form>
    );
}

export default EntryForm;