import { create } from 'ipfs-http-client';
import { NextPageWithLayout } from './_app';
import { AppLayout } from '@demo-carbon-credit/components';
/* import { FileUpload } from 'react-ipfs-uploader';
import { DropZoneElement } from '@demo-carbon-credit/components'; */
import React, { ReactElement, useState } from 'react'
import { uploadToipfs } from '@demo-carbon-credit/components';
import { toast } from 'react-hot-toast';
import classes from './settings.module.css';
//import { useUpdateSettingsMutation } from '@demo-carbon-credit/database';
// import { update_user_setting } from ;


const Page: NextPageWithLayout = () => {

  

  interface ISetting {
    logo: string;
  }
 

  const [cidHome, setCidHome] = useState(null)
  const [cidHeader, setCidHeader] = useState(null)
  /* const [file, setFile] = useState<File>('') */
  async function handleFileUpload(event, filename) {
   /*  if(file == undefined)
    toast.loading('Uploading...',{
      duration:500,
    })
    
    setFile(event.target.files[0])
    console.log(event.target.files[0])
    
    
    const cid = await uploadToipfs(event.target.files[0])
    console.log(cid)
    toast.success(`File uploaded to IPFS `,{
      duration:2000,
    }); */
  /*   if (filename === 'home') {
      setCidHome(cid)
    } else {
      setCidHeader(cid)
    } */
  }

  const [companyName,setCompanyName] = useState('');
  const handleNameChange = event =>{
    setCompanyName(event.target.value);
  }

  /* const [updateSettingsMutation, { data, loading, error }] = useUpdateSettingsMutation({
    
  }); */
 /*  const onSubmit = ()=>{
    console.log("cid home", cidHome)
    console.log("cid header", cidHeader)
    updateSettingsMutation({
      variables:{
        id: 1,
        cid: cidHome,
        companyName: companyName,
      }
    })

    updateSettingsMutation({
      variables:{
        id: 2,
        cid: cidHeader,
        companyName: companyName,
      }
    })
    .then(()=>{
      toast.success('File uploaded successfully')
      setCidHome("");
      setCidHeader("");
      setCompanyName('');
    })
  } */
  return (
    <>
      <div className="">
        <div className='header-area'>

          <h2>Settings</h2>
        </div>
        <div className='text-center'>
          <label htmlFor="company-name">Application Name</label><br></br>
          <input type="text" value={companyName} onChange={handleNameChange} name="companyName" style={{width:'30%'}}/><br></br>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="logo" className="mb-2">Header Logo</label><br />
            
                <input type="file" name="header-logo"  className={classes.file} onChange={e => handleFileUpload(e, 'header')} 

                />
            </div>
            <div className='col-md-6'>
              <label htmlFor="logo" className="mb-2">Homepage Logo</label><br></br>
            
                <input type="file" name="home-logo"  className={classes.file} onChange={e => handleFileUpload(e, 'home')} 

              />
            </div>
          </div>
         
          {cidHome && <p>File uploaded to IPFS with CID {cidHome}</p>}<br></br>
       {/*    <button name="upload" className="mt-2" onClick={onSubmit}>Upload</button> */}
        </div>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;