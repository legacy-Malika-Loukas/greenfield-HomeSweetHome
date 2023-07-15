// import React, { useState } from 'react';
// import Modal from 'react-modal';

// const SignUpModal = ({ isOpen, closeModal }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
    
//     console.log('Signing up with email:', email, 'and password:', password);
//     closeModal();
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={closeModal}
//       contentLabel="Sign Up Modal"
//     >
//       <h2>Sign Up</h2>
//       <form>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="button" onClick={handleSignUp}>Sign Up</button>
//       </form>
//       <button onClick={closeModal}>Close</button>
//     </Modal>
//   );
// };

// export default SignUpModal;
