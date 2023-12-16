// import { useCreateUserMutation } from '@demo-carbon-credit/database';
// import { ChangeEvent, useState } from 'react';
// import toast from 'react-hot-toast';
// import { useRouter } from 'next/router';
// import { NextPageWithLayout } from './_app';
// import { uploadToipfs } from '@demo-carbon-credit/components';

// interface IUser {
//   role: string;
//   pvtKey: string;
//   document_cid: string;
//   address: string;
//   username: string;
//   segment: string;
//   password: string;
//   casa: string;
//   cif: string;
//   email: string;
// }

// const Page: NextPageWithLayout = () => {
//   const [createUserMutation] = useCreateUserMutation({});
//   const [userDetail, setuserDetail] = useState<IUser | undefined>(undefined);
//   const router = useRouter();
//   const handleChange = (name: keyof IUser, value: IUser[keyof IUser]) => {
//     setuserDetail({ ...userDetail, [name]: value });
//   };
//   const option = ['Investor', 'Trader'];
//   const Segment = ['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4'];

//   const [file, setFile] = useState(null);
//   const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
//     setFile(e.target.files[0]);
//   };
//   const handleSubmit = async () => {
//     event.preventDefault();
//     const response = await fetch('/api/createUser').then((response) =>
//       response.json()
//     );
//     // console.log(userDetail);

//     // Add a document for kyc proof
//     const cid = await uploadToipfs(file);

//     // console.log('cid', cid);

//     const createUser = await createUserMutation({
//       variables: {
//         ...userDetail,
//         address: await response.walletID,
//         pvtKey: await response.walletKey,
//         document_cid: cid,
//       },
//     });
//     router.push('/users');
//   };
//   return (
//     <div className="">
//       <div className="header-area">
//         <h2>Create User</h2>
//       </div>
//       <div className="user-info-table">
//         <form>
//           <div className="row">
//             <div className="col-md-6">
//               <label>Username:&nbsp;</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                   handleChange('username', (e.target.value).toLowerCase());
//                 }}
//               />
//             </div>
//             <div className="col-md-6">
//               <label>Password:&nbsp;</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                   handleChange('password', e.target.value);
//                 }}
//               />
//             </div>
//             <div className="col-md-6">
//               <label>CIF Number:&nbsp;</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                   handleChange('cif', e.target.value);
//                 }}
//               />
//             </div>
//             <div className="col-md-6">
//               <label>Customer Segment:&nbsp;</label>
//               <select
//                 className="form-control"
//                 onChange={(e) => {
//                   handleChange('segment', e.target.value);
//                 }}
//               >
//                 <option>Select</option>
//                 {Segment.map((v, i) => (
//                   <option key={i}>{v}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="col-md-6">
//               <label>Role:&nbsp;</label>

//               <select
//                 className="form-control"
//                 onChange={(e) => {
//                   handleChange('role', e.target.value);
//                 }}
//               >
//                 <option>Select</option>
//                 {option.map((v, i) => (
//                   <option key={i}>{v}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="col-md-6">
//               <label>Upload Document</label>
//               <div className="file-info">
//                 <input
//                   onChange={(e) => uploadImage(e)}
//                   accept="image/*,.pdf"
//                   type="file"
//                   className="form-control"
//                 />
//               </div>
//             </div>
//             <div className="col-md-12">
//               <button
//                 onClick={() => {
//                   toast.promise(handleSubmit(), {
//                     loading: 'Creating User...',
//                     success: (data) => {
//                       return 'User Created';
//                     },
//                     error: (err) =>
//                       `Cannot create user, please try again later.${err}`,
//                   });
//                 }}
//               >
//                 Create User
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Page;
