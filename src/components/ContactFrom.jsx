import {useState} from 'react'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';
const ContactFrom = () => {
    const [formData,setFromData]=useState({
        name:"",
        email:"",
        message:"",
    })
    const[errors,setErrors]=useState({});

    const[isSending,setIsSending]=useState(false);

    const handleChange = (e)=>{
        const{name,value}= e.target;
        setFromData({
            ...formData,
            [name]:value,
        })
    }
    const validate = ()=>{
        let errors = {};
        if(!formData.name)errors.name="Name is required";
        if(!formData.email){
            errors.email = "Email is required";
        }else if(!/\S+@\S+\.S+/.test(formData.email)){
            errors.email = "Email is invalid "
        }
        if(!formData.message)errors.message = "Message is required";
        return errors;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length>0){
            setErrors({});
            setIsSending(true);
            emailjs
            .send(
                "service_k2iggu7",
                "template_f0jjknz",
                formData,
                "SqKYyRZ_VZrLheFdn"
            )
            .then((response)=>{
                console.log("SUCCESS!",response.status,response.text);
                toast.success("Message sent successfully!");
                setFromData({name :"",email:"",message:""});
            })
            .catch((error)=>{
                console.log("FAILED...");
                toast.error("Failed to send message.Please try again later");
            })
          .finally(()=>{
            setIsSending(false);
          })
        }
    }
  return (
    <div className="mx-auto max-w-3xl p-4" id="contact">
      <Toaster/>
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">Let's Connect</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <input type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"/>
                {errors.name && (
                    <p className="text-sm text-pink-700">{errors.name}</p>
                )}
        </div>
        <div className="mb-4">
            <input type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="email"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"/>
                {errors.email && (
                    <p className="text-sm text-pink-700">{errors.email}</p>
                )}
        </div>
        <div className="mb-4">
            <textarea 
                id="message"
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none" rows="4"/>
                {errors.message && (
                    <p className="text-sm text-pink-700">{errors.message}</p>
                )}
        </div>
        <button type="submit" className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-state-950 hover:bg-yellow-500 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
        disabled={isSending}>
            {isSending ? "Sending...":"Send"}
        </button>
      </form>
    </div>
  )
}

export default ContactFrom
